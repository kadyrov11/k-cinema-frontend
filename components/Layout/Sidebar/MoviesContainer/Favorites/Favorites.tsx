"use client"
import { FC } from 'react'
import { useFavorites } from '@/components/screens/Favorites/useFavorites'
import { useAuth } from '@/hooks/useAuth';
import NotAuth from './NotAuth';
import SkeletonLoader from '@/ui/SkeletonLoader';
import MovieList from '../MovieList';

const Favorites: FC = () => {
    const { favoritesMovies, isLoading } = useFavorites();

    const { user } = useAuth()

    if (!user) return <NotAuth />

    return (
        favoritesMovies ?
            isLoading ?
                <div className='mt-11'>
                    <SkeletonLoader count={3} className='h-28 mb-4' />
                </div> :
                <MovieList
                    link='/favorites'
                    movies={favoritesMovies?.slice(0, 3) || []}
                    title="Favorites"
                /> : <></>
    )
}

export default Favorites