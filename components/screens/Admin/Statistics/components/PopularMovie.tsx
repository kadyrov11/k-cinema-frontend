import { FC } from 'react'
import { useQuery } from 'react-query'

import Image from 'next/image'
import Link from 'next/link'

import SkeletonLoader from '@/ui/SkeletonLoader'
import SubHeading from '@/ui/Heading/SubHeading'

import { getMovieUrl } from '@/configs/url.config'
import { IMovie } from '@/shared/types/movie.types'
import { MovieService } from '@/services/movie.service'

import styles from '../../Admin.module.scss'

const PopularMovie: FC = () => {
    const { isLoading, data: movie } = useQuery(
        'Most popular movie in admin',
        () => MovieService.getPopularMovies(),
        {
            select: (data): IMovie => data[0]
        }
    )

    return (
        <div className={`${styles.block} ${styles.popular}`} >
            <SubHeading title='The most popular movie' />
            {isLoading ?
                <SkeletonLoader className='h-48' /> : movie &&
                <>
                    <h3 >
                        Views {movie.views}
                    </h3>
                    <Link href={getMovieUrl(movie.slug)} title={movie.title}>
                        <Image
                            src={movie.bigPoster}
                            alt={movie.title}
                            width={285}
                            height={100}
                            className={styles.image}
                        />
                    </Link>
                </>
            }
        </div>
    )
}

export default PopularMovie