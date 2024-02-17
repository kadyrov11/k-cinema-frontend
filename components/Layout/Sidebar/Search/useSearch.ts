import { ChangeEvent, useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { MovieService } from '@/services/movie.service'

import { useDebounce } from '@/hooks/useDebounce'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	useEffect(() => {
		refetch()
	}, [debouncedSearch])

	const { isLoading, isSuccess, data, refetch } = useQuery(
		'search movie list',
		() => MovieService.getAll(searchTerm),
		{
			select: ({ data }) => data,
			enabled: !!debouncedSearch,
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return { isLoading, isSuccess, handleSearch, data, searchTerm }
}
