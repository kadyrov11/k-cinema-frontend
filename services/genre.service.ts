import { getGenresUrl } from 'configs/api.config'

import { IGenreEditInput } from '@/components/screens/Admin/Genre/genre-edit.interface'
import { ICollection } from '@/components/screens/Collections/collections.types'

import { IGenre } from '@/shared/types/movie.types'

import { axios } from '@/api/interceptors'
import axiosBearer from '@/api/interceptors'

export const GenreService = {
	async create() {
		return axiosBearer.post<string>(getGenresUrl(''))
	},
	async getAll(searchTerm?: string) {
		return axios.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async getBySlug(slug: string) {
		return axios.get<IGenre>(getGenresUrl(`/by-slug/${slug}`))
	},
	async getCollections() {
		return axios.get<ICollection[]>(getGenresUrl(`/collections`))
	},
	async getById(_id: string) {
		return axiosBearer.get<IGenreEditInput>(getGenresUrl(`/${_id}`))
	},
	async update(_id: string, data: IGenreEditInput) {
		return axiosBearer.put(getGenresUrl(`/${_id}`), data)
	},
	async deleteGenre(_id: string) {
		return axiosBearer.delete(getGenresUrl(`/${_id}`))
	},
}
