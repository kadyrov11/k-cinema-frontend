import { useRouter } from 'next/navigation'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toast } from 'react-toastify'

import { ITableItem } from '@/ui/AdminPanel/AdminTable/admin-table.interface'

import { GenreService } from '@/services/genre.service'

import { useDebounce } from '@/hooks/useDebounce'

import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '@/configs/url.config'

export const useGenres = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const { push } = useRouter()

	const queryData = useQuery(
		['genres list', debouncedSearch],
		() => GenreService.getAll(debouncedSearch),
		{
			select: ({ data }) => {
				return data.map(
					(genre): ITableItem => ({
						_id: genre._id,
						editUrl: getAdminUrl(`edit/genre/${genre._id}`),
						items: [genre.name, genre.slug],
					})
				)
			},
			onError: (error) => {
				toastError(error, 'Genres list')
			},
		}
	)
	const { mutateAsync: createAsync } = useMutation(
		'create genre',
		() => GenreService.create(),
		{
			onError: (error) => {
				toastError(error, 'Failed To create genre')
			},
			onSuccess: ({ data: _id }) => {
				toast.success('Genre has been created')
				push(getAdminUrl(`edit/genre/${_id}`))
			},
		}
	)
	const { mutateAsync: deleteAsync } = useMutation(
		'delete genre',
		(genreId: string) => GenreService.deleteGenre(genreId),
		{
			onError: (error) => {
				toastError(error, 'Failed To Delete Genre')
			},
			onSuccess: () => {
				toast.success('Genre has been deleted')
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
		[queryData, searchTerm, deleteAsync, createAsync]
	)
}
