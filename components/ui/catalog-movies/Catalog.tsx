"use client"
import { FC } from 'react'
import { ICatalog } from './catalog.interface'

import Meta from '@/utils/meta/Meta'
import Heading from '../Heading/Heading'
import Description from '../Heading/Description'

import styles from './Catalog.module.scss'
import GalleryItem from '../Gallery/GalleryItem'
import { getMovieUrl } from '@/configs/url.config'

const Catalog: FC<ICatalog> = ({ title, description, movies }) => {
    return (
        <Meta title={title} description={description}>
            {movies.length > 0 && <Heading title={title} className={styles.heading} />}
            {description && <Description text={description} className={styles.description} />}

            <section >
                <div className={styles.movies}>
                    {movies.map(movie => {
                        const galleryItem = {
                            name: movie.title,
                            link: getMovieUrl(movie.slug),
                            posterPath: movie.bigPoster,
                            content: {
                                title: movie.title
                            }
                        }

                        return <GalleryItem key={movie._id} item={galleryItem} variant='horizontal' />
                    })}
                </div>
            </section>
        </Meta>
    )
}

export default Catalog