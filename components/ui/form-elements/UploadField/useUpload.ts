import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useMutation } from 'react-query'

import { FileService } from '@/services/file.service'

import { toastError } from '@/utils/toast-error'

type TypeUpload = (
	onChange: (...event: any[]) => void,
	folder?: string | undefined
) => {
	isLoading: boolean
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
}
export const useUpload: TypeUpload = (onChange, folder) => {
	const [isLoading, setIsLoading] = useState(false)

	const { mutateAsync } = useMutation(
		'upload file',
		(data: FormData) => FileService.upload(data, folder),
		{
			onSuccess: ({ data }) => {
				onChange(data[0].url)
			},
			onError: (error) => {
				toastError(error, 'Failed to upload image')
			},
		}
	)

	const uploadFile = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			setIsLoading(true)
			const files = e.target.files

			if (!files?.length) return

			const formData = new FormData()

			formData.append('file', files[0])

			await mutateAsync(formData)

			setTimeout(() => setIsLoading(false), 600)
		},
		[mutateAsync]
	)

	return useMemo(
		() => ({
			isLoading,
			uploadFile,
		}),
		[uploadFile, isLoading]
	)
}
