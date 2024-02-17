import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import FavoriteBtn from '../Movie/FavoriteBtn'
import { IMovie } from '@/shared/types/movie.types'

import styles from './Favorites.module.scss'
import { getMovieUrl } from '@/configs/url.config'

const FavoriteItem: FC<{ movie: IMovie }> = ({ movie }) => {
    return (
        <div className={styles.itemWrapper}>
            <FavoriteBtn movieId={movie._id} />

            <Link href={getMovieUrl(movie.slug)} className={styles.item}>
                <Image
                    alt={movie.title}
                    src={movie.bigPoster}
                    layout='fill'
                    fill={true}
                    draggable={false}
                    priority
                />
            </Link>
        </div>
    )
}

export default FavoriteItem