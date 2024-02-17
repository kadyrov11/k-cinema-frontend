import { getActorsUrl } from 'configs/api.config'

import { IActorEditInput } from '@/components/screens/Admin/Actor/actor-edit.interface'

import { IActor } from '../shared/types/movie.types'

import { axios } from '@/api/interceptors'
import axiosBearer from '@/api/interceptors'

export const ActorService = {
	async create() {
		return axiosBearer.post<string>(getActorsUrl(''))
	},
	async getAll(searchTerm?: string) {
		return axios.get<IActor[]>(getActorsUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async getById(_id: string) {
		return axiosBearer.get<IActorEditInput>(getActorsUrl(`/${_id}`))
	},
	async getBySlug(slug: string) {
		return axios.get<IActor>(getActorsUrl(`/slug/${slug}`))
	},
	async update(_id: string, data: IActorEditInput) {
		return axiosBearer.put(getActorsUrl(`/${_id}`), data)
	},
	async deleteActor(_id: string) {
		return axiosBearer.delete(getActorsUrl(`/${_id}`))
	},
}
