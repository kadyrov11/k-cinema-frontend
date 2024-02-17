import { getAuthUrl } from 'configs/api.config'
import Cookies from 'js-cookie'

import { IAuthResponse } from '@/store/user/user.interface'

import { removeTokens, setLocalStorageItem } from './auth.helper'
import { getContentType } from '@/api/api.helpers'
import { axios } from '@/api/interceptors'

export const AuthService = {
	async register(email: string, password: string) {
		const response = await axios.post<IAuthResponse>(getAuthUrl('/register'), {
			email,
			password,
		})

		if (response.data.accessToken) setLocalStorageItem(response.data)

		return response
	},
	async login(email: string, password: string) {
		const response = await axios.post<IAuthResponse>(getAuthUrl('/login'), {
			email,
			password,
		})

		if (response.data.accessToken) setLocalStorageItem(response.data)

		return response
	},

	async logout() {
		removeTokens()
		localStorage.removeItem('user')
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await axios.post<IAuthResponse>(
			getAuthUrl('/login/access-token'),
			{ refreshToken },
			{ headers: getContentType() }
		)

		if (response.data.accessToken) setLocalStorageItem(response.data)

		return response
	},
}
