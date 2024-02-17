import { IGalleryItem } from '@/ui/Gallery/gallery.interface'

import { MovieService } from '@/services/movie.service'

import { getGenresString } from '@/utils/strings/get-genre-list'

import { getMovieUrl } from '@/configs/url.config'

export const getMovieData = async (slug: string) => {
	const { data: movie } = await MovieService.getBySlug(slug)
	const { data: movies } = await MovieService.getByGenres(
		movie.genres.map((g) => g._id)
	)

	const similarMovies: IGalleryItem[] = movies
		.filter((m) => m._id !== movie._id)
		.map((m) => ({
			link: getMovieUrl(m.slug),
			name: m.title,
			posterPath: m.poster,
		}))

	return {
		movie,
		similarMovies,
	}
}
