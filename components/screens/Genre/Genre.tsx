"use client"
import { useEffect, useState } from "react"
import { getMoviesByGenre } from "./getMoviesByGenre"
import Catalog from "@/ui/catalog-movies/Catalog"
import { IGenre } from "@/shared/types/movie.types"

const Genre = ({ slug }: { slug: string }) => {
    const [movies, setMovies] = useState<any>([])
    const [genre, setGenre] = useState<IGenre>({
        _id: '',
        name: '',
        slug: '',
        description: '',
        icon: 'MdOutlineLeakRemove',
    })
    useEffect(() => {
        const getMovies = async () => {
            const { movies: newMovies, genre } = await getMoviesByGenre(slug)
            setMovies(newMovies)
            setGenre(genre)
        }

        getMovies()
    }, [slug])
    return (
        <Catalog
            movies={movies}
            title={`${genre.name} movies`}
            description={genre.description}
        />
    )
}

export default Genre