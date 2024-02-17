import { useParams, useRouter } from 'next/navigation'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toast } from 'react-toastify'

import { UserService } from '@/services/user.service'

import { toastError } from '@/utils/toast-error'

import { IUserEditInput } from './user-edit.interface'
import { getAdminUrl } from '@/configs/url.config'

export const useEditUser = (setValue: UseFormSetValue<IUserEditInput>) => {
	const { push } = useRouter()
	const { id } = useParams()

	const userId = String(id)

	const { isLoading } = useQuery(
		['user', userId],
		() => UserService.getById(userId),
		{
			onSuccess: ({ data }) => {
				setValue('email', data.email)
			},
			onError: (error) => {
				toastError(error, 'Failed to get user')
			},
			enabled: !!id,
		}
	)

	const { mutateAsync: updateAsync } = useMutation(
		'update user',
		(data: IUserEditInput) => UserService.update(userId, data),
		{
			onSuccess: () => {
				toast.success('User has been updated.')
				push(getAdminUrl('users'))
			},
			onError: (error) => {
				toastError(error, 'Failed to update user')
			},
		}
	)

	const onSubmit: SubmitHandler<IUserEditInput> = async (data) => {
		await updateAsync(data)
	}

	return { isLoading, onSubmit }
}
