import { IGalleryItem } from '@/ui/Gallery/gallery.interface'
import { ISlide } from '@/ui/Slider/slider.interface'

export interface IHomeData {
	slides: ISlide[] | []
	actors: IGalleryItem[] | []
	trendingMovies: IGalleryItem[] | []
}
