"use client"
import { FC } from 'react'

import { useRating } from './useRating'
import { useAuth } from '@/hooks/useAuth'
import StarRating from 'react-star-rating-component'
import AuthButton from '@/ui/VideoPlayer/AuthPlaceholder/AuthButton'

import styles from './Rating.module.scss'

interface IRating {
    id: string
    slug: string
}

const Rating: FC<IRating> = ({ id, slug }) => {
    const { user } = useAuth()

    const { rating, isRated, handleClick } = useRating(id)

    return (
        <div className={styles.wrapper}>
            <h3>Rate movie</h3>
            <p>Ratings help to improve recommendations</p>
            {user ? <>
                {isRated ? <p className={styles.text}>Thanks for rating!</p> : <StarRating
                    name='star-rating'
                    value={rating}
                    onStarClick={handleClick}
                    emptyStarColor='#4f4f4f'
                />}
            </>
                : <AuthButton slug={slug} />}
        </div>
    )
}

export default Rating