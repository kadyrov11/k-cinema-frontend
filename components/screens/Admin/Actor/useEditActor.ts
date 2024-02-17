import { useParams, useRouter } from 'next/navigation'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toast } from 'react-toastify'

import { ActorService } from '@/services/actor.service'

import { getKeys } from '@/utils/object/getKeys'
import { toastError } from '@/utils/toast-error'

import { IActorEditInput } from './actor-edit.interface'
import { getAdminUrl } from '@/configs/url.config'

export const useEditActor = (setValue: UseFormSetValue<IActorEditInput>) => {
	const { push } = useRouter()
	const { id } = useParams()

	const actorId = String(id)

	const { isLoading } = useQuery(
		['actor', actorId],
		() => ActorService.getById(actorId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError: (error) => {
				toastError(error, 'Failed to get actor')
			},
			enabled: !!id,
		}
	)

	const { mutateAsync: updateAsync } = useMutation(
		'update actor',
		(data: IActorEditInput) => ActorService.update(actorId, data),
		{
			onSuccess: () => {
				toast.success('Genre has been updated.')
				push(getAdminUrl('actors'))
			},
			onError: (error) => {
				toastError(error, 'Failed to update actor')
			},
		}
	)

	const onSubmit: SubmitHandler<IActorEditInput> = async (data) => {
		await updateAsync(data)
	}

	return { isLoading, onSubmit }
}
