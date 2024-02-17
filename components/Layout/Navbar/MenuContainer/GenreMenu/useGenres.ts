import { getGenreUrl } from 'configs/url.config'
import { useQuery } from 'react-query'

import { GenreService } from '@/services/genre.service'

import { IMenuItem } from '../menu.interface'

export const useGenres = () => {
	const queryData = useQuery(
		'popular genres menu',
		() => GenreService.getAll(),
		{
			select: ({ data }) => {
				return data
					.filter((genre) => genre.icon)
					.map(
						(genre): IMenuItem => ({
							icon: genre.icon,
							link: getGenreUrl(genre.slug),
							title: genre.name,
						})
					)
					.splice(0, 4)
			},
		}
	)

	return queryData
}
