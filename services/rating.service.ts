import { IProfileInput } from '@/components/screens/Profile/profile.interface'

import { IUser } from '@/shared/types/user.types'

import axiosBearer from '@/api/interceptors'
import { getRatingsUrl } from '@/configs/api.config'

export const RatingService = {
	async setRating(movieId: string, value: number) {
		return axiosBearer.put<string>(getRatingsUrl(movieId), { value })
	},

	async getUserRating(movieId: string) {
		return axiosBearer.get<number>(getRatingsUrl(`${movieId}`))
	},
}
