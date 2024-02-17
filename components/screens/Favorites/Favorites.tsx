"use client"
import { FC } from 'react'

import FavoriteItem from './FavoriteItem'
import Heading from '@/ui/Heading/Heading'
import SkeletonLoader from '@/ui/SkeletonLoader'

import { useFavorites } from './useFavorites'

import styles from './Favorites.module.scss'

const Favorites: FC = () => {
    const { favoritesMovies, isLoading } = useFavorites()

    return (
        <>
            <Heading title={'Favorites'} />
            <section className={styles.favorites}>
                {isLoading ? (
                    <SkeletonLoader
                        count={3}
                        className={styles.skeletonLoader}
                        containerClassName={styles.containerLoader}
                    />
                ) : (
                    favoritesMovies?.map((movie) => (
                        <FavoriteItem
                            key={movie._id}
                            movie={movie}
                        />
                    ))
                )}
            </section>
        </>
    )
}

export default Favorites