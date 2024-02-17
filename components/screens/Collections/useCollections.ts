import { GenreService } from '@/services/genre.service'

export const useCollections = async () => {
	const { data: collections } = await GenreService.getCollections()

	return { collections }
}
