import { IProfileInput } from '@/components/screens/Profile/profile.interface'

import { IMovie } from '@/shared/types/movie.types'
import { IUser } from '@/shared/types/user.types'

import axiosBearer from '@/api/interceptors'
import { getUsersUrl } from '@/configs/api.config'

export const UserService = {
	async create() {
		return axiosBearer.post<string>(getUsersUrl(''))
	},
	async getAll(searchTerm?: string) {
		return axiosBearer.get<IUser[]>(getUsersUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async getFavorites() {
		return axiosBearer.get<IMovie[]>(getUsersUrl('/profile/favorites'))
	},
	async getById(_id: string) {
		return axiosBearer.get<IUser>(getUsersUrl(`/${_id}`))
	},
	async update(_id: string, data: IProfileInput) {
		return axiosBearer.put<string>(getUsersUrl(`/${_id}`), data)
	},
	async getProfile() {
		return axiosBearer.get<IUser>(getUsersUrl('/profile'))
	},
	async toggleFavorite(movieId: string) {
		return axiosBearer.patch<string>(
			getUsersUrl(`/profile/favorites/${movieId}`)
		)
	},
	async updateProfile(data: IProfileInput) {
		return axiosBearer.put<string>(getUsersUrl('/profile'), data)
	},
	async deleteUser(_id: string) {
		return axiosBearer.delete(getUsersUrl(`/${_id}`))
	},
}
