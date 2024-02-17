import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toast } from 'react-toastify'

import { UserService } from '@/services/user.service'

import { toastError } from '@/utils/toast-error'

import { IProfileInput } from './profile.interface'

export const useProfile = (setValue: UseFormSetValue<IProfileInput>) => {
	const { isLoading } = useQuery(['profile'], () => UserService.getProfile(), {
		onSuccess: ({ data }) => {
			setValue('email', data.email)
		},
		onError: (error) => {
			toastError(error, 'Failed to get profile')
		},
	})

	const { mutateAsync: updateAsync } = useMutation(
		'update profile',
		(data: IProfileInput) => UserService.updateProfile(data),
		{
			onSuccess: () => {
				toast.success('Profile has been updated.')
			},
			onError: (error) => {
				toastError(error, 'Failed to update profile')
			},
		}
	)

	const onSubmit: SubmitHandler<IProfileInput> = async (data) => {
		await updateAsync(data)
	}

	return { isLoading, onSubmit }
}
