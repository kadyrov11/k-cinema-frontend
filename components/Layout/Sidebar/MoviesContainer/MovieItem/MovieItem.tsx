import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { IMovie } from '@/shared//types/movie.types'
import { getGenreUrl, getMovieUrl } from 'configs/url.config'
import { getGenreList } from '@/utils/strings/get-genre-list'

import MaterialIcon from '@/ui/MaterialIcon'

import styles from './MovieItem.module.scss'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
    return (
        <div className={styles.item}>
            <Link href={getMovieUrl(movie.slug)}>
                <Image
                    src={movie.poster}
                    alt={movie.title}
                    priority
                    width={65}
                    height={97}
                    draggable={false}
                />
            </Link>
            <div className={styles.info}>
                <h3 className={styles.title} >{movie.title}</h3>
                <p className={styles.genres}>
                    {movie.genres.map((genre, idx) => <Link
                        href={getGenreUrl(genre.slug)}
                        key={genre._id} >
                        {getGenreList(idx, movie.genres.length, genre.name)}
                    </Link>)}
                </p>
                <div className={styles.rating}>
                    <MaterialIcon name='MdStarRate' />
                    <span>{movie.rating.toFixed(1)}</span>
                </div>
            </div>
        </div>
    )
}

export default MovieItem