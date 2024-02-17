import axiosBearer from '@/api/interceptors'
import { getUsersUrl } from '@/configs/api.config'

export const AdminService = {
	async getUsersCount() {
		return axiosBearer.get<{ usersCount: number }>(getUsersUrl('/count'))
	},
}
