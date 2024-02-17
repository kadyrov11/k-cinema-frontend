import axiosBearer from '@/api/interceptors'

export const FileService = {
	async upload(file: FormData, folder?: string) {
		return axiosBearer.post<{ url: string; name: string }[]>('files', file, {
			params: { folder },
			headers: { 'Content-Type': 'multipart/form-data' },
		})
	},
}
