import { useQuery } from 'react-query'

import { IOption } from '@/ui/Select/select-interface'

import { ActorService } from '@/services/actor.service'

import { toastError } from '@/utils/toast-error'

export const useActorsAdmin = () => {
	const queryData = useQuery('List of actors', () => ActorService.getAll(), {
		select: ({ data }) => {
			return data.map(
				(actor): IOption => ({
					label: actor.name,
					value: actor._id,
				})
			)
		},
		onError: (error) => {
			toastError(error, 'Actors list')
		},
	})

	return queryData
}
