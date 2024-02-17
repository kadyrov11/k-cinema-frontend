import { useParams, useRouter } from 'next/navigation'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toast } from 'react-toastify'

import { GenreService } from '@/services/genre.service'
import { MovieService } from '@/services/movie.service'

import { getKeys } from '@/utils/object/getKeys'
import { toastError } from '@/utils/toast-error'

import { IMovieEditInput } from './movie-edit.interface'
import { getAdminUrl } from '@/configs/url.config'

export const useEditMovie = (setValue: UseFormSetValue<IMovieEditInput>) => {
	const { push } = useRouter()
	const { id } = useParams()

	const movieId = String(id)

	const { isLoading } = useQuery(
		['movie', movieId],
		() => MovieService.getById(movieId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError: (error) => {
				toastError(error, 'Failed to get movie')
			},
			enabled: !!id,
		}
	)

	const { mutateAsync: updateAsync } = useMutation(
		'update movie',
		(data: IMovieEditInput) => MovieService.update(movieId, data),
		{
			onSuccess: () => {
				toast.success('Movie has been updated.')
				push(getAdminUrl('movies'))
			},
			onError: (error) => {
				toastError(error, 'Failed to update movie')
			},
		}
	)

	const onSubmit: SubmitHandler<IMovieEditInput> = async (data) => {
		await updateAsync(data)
	}

	return { isLoading, onSubmit }
}
