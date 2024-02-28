import Cookies from 'js-cookie'

import { IAuthResponse, ITokens } from '@/store/user/user.interface'

export const saveTokens = (data: ITokens) => {
	console.log(data)
	Cookies.set('accessToken', data.accessToken)
	Cookies.set('refreshToken', data.refreshToken)
}

export const removeTokens = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
}

export const setLocalStorageItem = (data: IAuthResponse) => {
	saveTokens(data)

	localStorage.setItem('user', JSON.stringify(data.user))
}
