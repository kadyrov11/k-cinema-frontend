import Cookies from 'js-cookie'

import { IAuthResponse, ITokens } from '@/store/user/user.interface'

export const saveTokens = (data: ITokens) => {
	Cookies.set('accessToken', data.accessToken)
	Cookies.set('refreshToken', data.refreshToken)
}

export const removeTokens = () => {
	Cookies.remove('refreshToken')
	Cookies.remove('refreshToken')
}

export const setLocalStorageItem = (data: IAuthResponse) => {
	saveTokens(data)

	localStorage.setItem('user', JSON.stringify(data.user))
}
