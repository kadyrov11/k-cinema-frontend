import req from 'axios'
import { API_SERVER_URL, API_URL } from 'configs/api.config'
import Cookies from 'js-cookie'

import { removeTokens } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

import { errorCatch, getContentType } from './api.helpers'

export const axios = req.create({
	baseURL: API_SERVER_URL,
	headers: getContentType(),
})

const instance = req.create({
	baseURL: API_URL,
	headers: getContentType(),
})

instance.interceptors.request.use((config) => {
	const accessToken = Cookies.get('accessToken')

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

instance.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config

		if (
			error.response.status === 401 ||
			errorCatch(error) === 'jwt expired' ||
			errorCatch(error) === 'jwt must be provided'
		) {
			if (error.config && !error.config._isRetry) {
				originalRequest._isRetry = true

				try {
					await AuthService.getNewTokens()
					return instance.request(originalRequest)
				} catch (error) {
					if (errorCatch(error) === 'jwt expired') removeTokens()
				}
			}
		}

		throw error
	}
)

export default instance
