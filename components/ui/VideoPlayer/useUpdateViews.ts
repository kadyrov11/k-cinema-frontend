import { useEffect } from 'react'
import { useMutation } from 'react-query'

import { MovieService } from '@/services/movie.service'

export const useUpdateViews = (slug: string) => {
	const { mutateAsync } = useMutation('set views', () =>
		MovieService.setViews(slug)
	)

	useEffect(() => {
		mutateAsync()
	}, [])
}
