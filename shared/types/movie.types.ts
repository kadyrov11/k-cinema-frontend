import { TypeMaterialIconName } from './icon.types'

export interface IParameters {
	year: number
	duration: number
	country: string
}

export interface IActor {
	_id: string
	image: string
	name: string
	moviesCount: number
	slug: string
}

export interface IGenre {
	_id: string
	name: string
	slug: string
	description: string
	icon: TypeMaterialIconName
}

export interface IMovie {
	_id: string
	poster: string
	bigPoster: string
	title: string
	parameters: IParameters
	genres: IGenre[]
	actors: IActor[]
	views: number
	videoUrl: string
	rating: number
	slug: string
}
