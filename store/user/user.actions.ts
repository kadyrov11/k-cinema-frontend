import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { AuthService } from '@/services/auth/auth.service'

import { toastError } from '@/utils/toast-error'

import { IAuthResponse, IEmailPassword } from './user.interface'
import { errorCatch } from '@/api/api.helpers'

// REGISTER
export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password)
			toast.success('You have been registered!')

			return response.data
		} catch (error) {
			toastError(error, 'Failed to log in. ')
			return thunkApi.rejectWithValue(error)
		}
	}
)
// LOGIN
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password)
			toast.success('Logged In')

			return response.data
		} catch (error) {
			toastError(error, 'Failed to log in.')
			return thunkApi.rejectWithValue(error)
		}
	}
)
// LOGOUT
export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout()
	toast.success('Logged out')
})
// CHECK AUTH
export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error === 'jwt expired')) {
				toast.error('Logged out. Please sign in again.')

				thunkApi.dispatch(logout())
			}
			return thunkApi.rejectWithValue(error)
		}
	}
)
