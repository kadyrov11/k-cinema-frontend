import { getMoviesUrl } from 'configs/api.config'

import { IMovieEditInput } from '@/components/screens/Admin/Movie/movie-edit.interface'

import { IMovie } from '../shared/types/movie.types'

import { axios } from '@/api/interceptors'
import axiosBearer from '@/api/interceptors'

export const MovieService = {
	async create() {
		return axiosBearer.post<string>(getMoviesUrl(''))
	},
	async getAll(searchTerm?: string) {
		return axios.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm ? { searchTerm } : {},
			headers: {
				'Cache-Control': 'max-age=20',
			},
		})
	},
	async getByGenres(genreIds: string[]) {
		return axiosBearer.post<IMovie[]>(getMoviesUrl(`/by-genres`), { genreIds })
	},
	async getByActor(actorId: string) {
		return axiosBearer.get<IMovie[]>(getMoviesUrl(`/actor/${actorId}`))
	},
	async getPopularMovies() {
		const { data: movies } = await axios.get<IMovie[]>(
			getMoviesUrl('/most-popular'),
			{
				headers: {
					'Cache-Control': 'max-age=20',
				},
			}
		)
		return movies
	},
	async getById(_id: string) {
		return axiosBearer.get<IMovieEditInput>(getMoviesUrl(`/${_id}`))
	},
	async getBySlug(slug: string) {
		return axios.get<IMovie>(getMoviesUrl(`/slug/${slug}`))
	},
	async update(_id: string, data: IMovieEditInput) {
		return axiosBearer.put(getMoviesUrl(`/${_id}`), data)
	},
	async setViews(slug: string) {
		return axios.put(getMoviesUrl(`/set-views/${slug}`))
	},
	async deleteMovie(_id: string) {
		return axiosBearer.delete(getMoviesUrl(`/${_id}`))
	},
}
