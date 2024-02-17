import { FC } from 'react'
import dynamic from 'next/dynamic'


const DynamicPopular = dynamic(() => import('./PopularMovies'), {
    ssr: false,
})
const DynamicFavorites = dynamic(() => import('./Favorites'), {
    ssr: false,
})

const MoviesContainer: FC = () => {
    return (
        <div>
            <DynamicPopular />
            <DynamicFavorites />
        </div>
    )
}

export default MoviesContainer