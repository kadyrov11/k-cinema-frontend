import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toast } from 'react-toastify'

import { RatingService } from '@/services/rating.service'

import { useAuth } from '@/hooks/useAuth'

import { toastError } from '@/utils/toast-error'

export const useRating = (movieId: string) => {
	const [rating, setRating] = useState(0)
	const [isRated, setIsRated] = useState(false)

	const { user } = useAuth()

	const { refetch } = useQuery(
		['your movie rating', movieId],
		() => RatingService.getUserRating(movieId),
		{
			onSuccess({ data }) {
				setRating(data)
			},
			enabled: !!movieId && !!user,
		}
	)

	const { mutateAsync: rateMovie } = useMutation(
		'set rating movie',
		({ value }: { value: number }) => RatingService.setRating(movieId, value),
		{
			onError(error) {
				toastError(error, 'Rate movie')
			},
			onSuccess() {
				toast.success('Movie rating. Success!')

				setIsRated(true)
				refetch()

				setTimeout(() => {
					setIsRated(false)
				}, 2400)
			},
		}
	)

	const handleClick = async (nextValue: number) => {
		setRating(nextValue)
		await rateMovie({ value: nextValue })
	}

	return {
		isRated,
		rating,
		handleClick,
	}
}
