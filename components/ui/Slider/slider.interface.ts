import { IMovie } from '@/shared/types/movie.types'

export interface ISlide
	extends Pick<IMovie, '_id' | 'bigPoster' | 'title' /*|{'genres'}*/> {
	subtitle: string
	link: string
}
