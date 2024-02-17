import { useRouter } from 'next/navigation'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toast } from 'react-toastify'

import { ITableItem } from '@/ui/AdminPanel/AdminTable/admin-table.interface'

import { ActorService } from '@/services/actor.service'
import { UserService } from '@/services/user.service'

import { useDebounce } from '@/hooks/useDebounce'

import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '@/configs/url.config'

export const useActors = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const { push } = useRouter()
	const queryData = useQuery(
		['actors list', debouncedSearch],
		() => ActorService.getAll(debouncedSearch),
		{
			select: ({ data }) => {
				return data.map(
					(actor): ITableItem => ({
						_id: actor._id,
						editUrl: getAdminUrl(`edit/actor/${actor._id}`),
						items: [actor.name, String(actor.moviesCount)],
					})
				)
			},
			onError: (error) => {
				toastError(error, 'Actors list')
			},
		}
	)
	const { mutateAsync: createAsync } = useMutation(
		'create actor',
		() => ActorService.create(),
		{
			onError: (error) => {
				toastError(error, 'Failed To create actor')
			},
			onSuccess: ({ data: _id }) => {
				toast.success('Actor has been created. Fill actor info fields')
				push(getAdminUrl(`edit/actor/${_id}`))
			},
		}
	)
	const { mutateAsync: deleteAsync } = useMutation(
		'delete actor',
		(actorId: string) => ActorService.deleteActor(actorId),
		{
			onError: (error) => {
				toastError(error, 'Failed To Delete Actor')
			},
			onSuccess: () => {
				toast.success('Actor has been deleted')
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
