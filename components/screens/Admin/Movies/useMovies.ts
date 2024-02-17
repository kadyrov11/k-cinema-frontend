import { useRouter } from 'next/navigation'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toast } from 'react-toastify'

import { ITableItem } from '@/ui/AdminPanel/AdminTable/admin-table.interface'

import { MovieService } from '@/services/movie.service'

import { useDebounce } from '@/hooks/useDebounce'

import { getGenresString } from '@/utils/strings/get-genre-list'
import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '@/configs/url.config'

export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const { push } = useRouter()

	const queryData = useQuery(
		['movies list', debouncedSearch],
		() => MovieService.getAll(debouncedSearch),
		{
			select: ({ data }) => {
				return data.map(
					(movie): ITableItem => ({
						_id: movie._id,
						editUrl: getAdminUrl(`edit/movie/${movie._id}`),
						items: [
							movie.title,
							getGenresString(movie.genres),
							String(movie.rating),
						],
					})
				)
			},
			onError: (error) => {
				toastError(error, 'Movies list')
			},
		}
	)

	const { mutateAsync: createAsync } = useMutation(
		'create movie',
		() => MovieService.create(),
		{
			onError: (error) => {
				toastError(error, 'Failed To create movie')
			},
			onSuccess: ({ data: _id }) => {
				toast.success('Movie has been created')
				push(getAdminUrl(`edit/movie/${_id}`))
			},
		}
	)
	const { mutateAsync: deleteAsync } = useMutation(
		'delete movie',
		(movieId: string) => MovieService.deleteMovie(movieId),
		{
			onError: (error) => {
				toastError(error, 'Failed To Delete User')
			},
			onSuccess: () => {
				toast.success('User has been deleted')
				queryData.refetch()
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
		setSearchTerm(e.target.value)
	}
	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
			createAsync,
		}),
		[handleSearch, queryData, searchTerm, deleteAsync, createAsync]
	)
}
