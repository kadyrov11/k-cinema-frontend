"use client"
import Catalog from '@/ui/catalog-movies/Catalog'
import { getFreshMovies } from './getFreshMovies'
import { IMovie } from '@/shared/types/movie.types'

const Fresh = async () => {
    const movies: IMovie[] = await getFreshMovies()
    return (
        <Catalog
            movies={movies}
            title="Fresh movies"
            description="Fresh movies in excellent quality without ads"
        />
    )
}

export default Fresh