import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

export const getActorData = async (slug: string) => {
		const { data: actor } = await ActorService.getBySlug(slug)
		const { data: movies } = await MovieService.getByActor(actor._id)
		return {
			movies,
			actor,
		}
}
