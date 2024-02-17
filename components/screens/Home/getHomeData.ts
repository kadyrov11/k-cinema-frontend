import { IGalleryItem } from '@/ui/Gallery/gallery.interface'
import { ISlide } from '@/ui/Slider/slider.interface'

import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

import { getGenresString } from '@/utils/strings/get-genre-list'

import { getActorUrl, getMovieUrl } from '@/configs/url.config'

export const getHomeData = async () => {
	try {
		const { data: movies } = await MovieService.getAll()
		const { data: dataActors } = await ActorService.getAll()
		const dataTrendingMovies = await MovieService.getPopularMovies()

		const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
			_id: m._id,
			link: getMovieUrl(m.slug),
			subtitle: getGenresString(m.genres),
			title: m.title,
			bigPoster: m.bigPoster,
		}))

		const actors: IGalleryItem[] = dataActors.slice(0, 7).map((a) => {
			return {
				name: a.name,
				posterPath: a.image,
				link: getActorUrl(a.slug),
				content: {
					title: a.name,
					subtitle: `+${a.moviesCount} movies`,
				},
			}
		})
		const trendingMovies: IGalleryItem[] = dataTrendingMovies
			.slice(0, 7)
			.map((m) => ({
				name: m.title,
				posterPath: m.poster,
				link: getMovieUrl(m.slug),
			}))

		return {
			slides,
			actors,
			trendingMovies,
		}
	} catch (error) {
		return {
			actors: [],
			slides: [],
			trendingMovies: [],
		}
	}
}
