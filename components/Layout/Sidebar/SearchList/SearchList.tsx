import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './SearchList.module.scss'
import { IMovie } from '@/shared//types/movie.types'
import { getMovieUrl } from 'configs/url.config'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
    return (
        <div className={styles.list}>
            {movies.length ? movies.map(movie => {
                return (
                    <Link href={getMovieUrl(movie.slug)} key={movie.slug}>
                        <Image
                            src={movie.poster}
                            width={50}
                            height={50}
                            alt={movie.title}
                            objectFit='cover'
                            objectPosition='top'
                            draggable={false}
                        />
                        <span>{movie.title}</span>
                    </Link>
                )
            }) : <h3 className='text-white text-center my-4 bg-transparent'>Movies are not found</h3>
            }

        </div>
    )
}

export default SearchList