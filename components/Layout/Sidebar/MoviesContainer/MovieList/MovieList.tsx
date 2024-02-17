import { FC } from 'react'
import Link from 'next/link'

import { IMovieList } from './movie-list.interface'

import MovieItem from '../MovieItem'

import styles from './MovieList.module.scss'

const MovieList: FC<IMovieList> = ({ movies, title, link }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>
                {title}
            </h2>
            {
                movies.map(movie => <MovieItem key={movie._id} movie={movie} />)
            }
            <Link href={link} className={styles.btn}>
                See More
            </Link>
        </div>
    )
}

export default MovieList