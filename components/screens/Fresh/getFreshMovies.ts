import { MovieService } from '@/services/movie.service'

import { errorCatch } from '@/api/api.helpers'

export const getFreshMovies = async () => {
	try {
		const { data: movies } = await MovieService.getAll()
		return movies
	} catch (error) {
		console.log(errorCatch(error))
		return []
	}
}
