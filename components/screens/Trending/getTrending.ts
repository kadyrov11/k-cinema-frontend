import { MovieService } from '@/services/movie.service'

export const getFreshMovies = async () => {
	try {
		const movies = await MovieService.getPopularMovies()
		return movies
	} catch (error) {
		return []
	}
}
