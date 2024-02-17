import { GenreService } from '@/services/genre.service'
import { MovieService } from '@/services/movie.service'

export const getMoviesByGenre = async (slug: string) => {
	const { data: genre } = await GenreService.getBySlug(slug)

	const { data: movies } = await MovieService.getByGenres([genre._id])
	return { movies, genre }
}
