import { useRouter } from 'next/navigation'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toast } from 'react-toastify'

import { ITableItem } from '@/ui/AdminPanel/AdminTable/admin-table.interface'

import { UserService } from '@/services/user.service'

import { useDebounce } from '@/hooks/useDebounce'

import { convertMongoDate } from '@/utils/date/convertMongoDate'
import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '@/configs/url.config'

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const { push } = useRouter()

	const queryData = useQuery(
		['users list', debouncedSearch],
		() => UserService.getAll(debouncedSearch),
		{
			select: ({ data }) => {
				return data.map(
					(user): ITableItem => ({
						_id: user._id,
						editUrl: getAdminUrl(`edit/user/${user._id}`),
						items: [user.email, convertMongoDate(user.createdAt)],
					})
				)
			},
			onError: (error) => {
				toastError(error, 'Users list')
			},
		}
	)
	const { mutateAsync: createAsync } = useMutation(
		'create user',
		() => UserService.create(),
		{
			onError: (error) => {
				toastError(error, 'Failed To create user')
			},
			onSuccess: ({ data: _id }) => {
				toast.success('User has been created')
				push(getAdminUrl(`edit/user/${_id}`))
			},
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete user',
		(userId: string) => UserService.deleteUser(userId),
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
