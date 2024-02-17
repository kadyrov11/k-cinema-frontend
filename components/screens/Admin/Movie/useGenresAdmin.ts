import { useQuery } from 'react-query'

import { IOption } from '@/ui/Select/select-interface'

import { GenreService } from '@/services/genre.service'

import { toastError } from '@/utils/toast-error'

export const useGenresAdmin = () => {
	const queryData = useQuery('List of genres', () => GenreService.getAll(), {
		select: ({ data }) => {
			return data.map(
				(genre): IOption => ({
					label: genre.name,
					value: genre._id,
				})
			)
		},
		onError: (error) => {
			toastError(error, 'Genres list')
		},
	})

	return queryData
}
