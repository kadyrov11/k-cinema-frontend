import Catalog from '@/ui/catalog-movies/Catalog'
import { getFreshMovies } from './getTrending'
import { IMovie } from '@/shared/types/movie.types'

const Fresh = async () => {
    const movies: IMovie[] = await getFreshMovies()

    return (
        <Catalog
            movies={movies}
            title="Trending"
            description="Most popular movies"
        />
    )
}

export default Fresh