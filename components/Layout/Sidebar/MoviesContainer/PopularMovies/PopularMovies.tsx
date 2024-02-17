"use client"
import { FC } from 'react'
import { useQuery } from 'react-query'

import { MovieService } from '@/services/movie.service'

import SkeletonLoader from '@/ui/SkeletonLoader'
import MovieList from '../MovieList'

const PopularMovies: FC = () => {
    const { isLoading, data } = useQuery('popular movies in sidebar', () =>
        MovieService.getPopularMovies(),
        {
            select: (data => data.slice(0, 3))
        }
    )

    return (
        <div>
            {isLoading ?
                <div className='mt-11'>
                    <SkeletonLoader count={3} className='h-28 mb-4' />
                </div> :
                <MovieList link='/trending' movies={data || []} title='Popular Movies' />
            }
        </div>
    )
}

export default PopularMovies