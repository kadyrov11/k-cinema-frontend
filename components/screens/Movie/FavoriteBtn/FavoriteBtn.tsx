"use client"
import { FC, useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { useAuth } from '@/hooks/useAuth'

import { toastError } from '@/utils/toast-error'
import { UserService } from '@/services/user.service'
import { useFavorites } from '../../Favorites/useFavorites'

import styles from './FavoriteBtn.module.scss'

const FavoriteBtn: FC<{ movieId: string }> = ({ movieId }) => {
    const { user } = useAuth()


    const [isFavorite, setIsFavorite] = useState(false)

    const { favoritesMovies, refetch } = useFavorites()

    useEffect(() => {
        if (!favoritesMovies || !user) return

        const isMovieExists = favoritesMovies.some(f => f._id === movieId)

        if (isFavorite !== isMovieExists) setIsFavorite(isMovieExists)
    }, [isFavorite, favoritesMovies, movieId])

    const { mutateAsync } = useMutation(
        'update favorites',
        () => UserService.toggleFavorite(movieId),
        {
            onError(error) {
                toastError(error, 'Update favorite list')
            },
            onSuccess() {
                setIsFavorite(!isFavorite)
                refetch()
            },
        }
    )
    if (!user) return <></>
    return (
        <button
            onClick={() => mutateAsync()}
            className={`${styles.button} ${isFavorite ? styles.animate : ''}`}
            style={{ backgroundImage: `url(/heart-animation.png)` }}
        />
    )
}

export default FavoriteBtn