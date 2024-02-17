import { useParams, useRouter } from 'next/navigation'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toast } from 'react-toastify'

import { GenreService } from '@/services/genre.service'

import { getKeys } from '@/utils/object/getKeys'
import { toastError } from '@/utils/toast-error'

import { IGenreEditInput } from './genre-edit.interface'
import { getAdminUrl } from '@/configs/url.config'

export const useEditGenre = (setValue: UseFormSetValue<IGenreEditInput>) => {
	const { push } = useRouter()
	const { id } = useParams()

	const genreId = String(id)

	const { isLoading } = useQuery(
		['genre', genreId],
		() => GenreService.getById(genreId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError: (error) => {
				toastError(error, 'Failed to get genre')
			},
			enabled: !!id,
		}
	)

	const { mutateAsync: updateAsync } = useMutation(
		'update genre',
		(data: IGenreEditInput) => GenreService.update(genreId, data),
		{
			onSuccess: () => {
				toast.success('Genre has been updated.')
				push(getAdminUrl('genres'))
			},
			onError: (error) => {
				toastError(error, 'Failed to update genre')
			},
		}
	)

	const onSubmit: SubmitHandler<IGenreEditInput> = async (data) => {
		await updateAsync(data)
	}

	return { isLoading, onSubmit }
}
