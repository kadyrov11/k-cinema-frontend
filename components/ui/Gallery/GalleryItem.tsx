import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IGalleryItemProps } from './gallery.interface'

import styles from './Gallery.module.scss'

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => {
    return (
        <Link
            className={`${styles.item} ${item.content ? styles.itemDesc : ''} ${variant === 'vertical' ? styles.vertical : styles.horizontal}`
            }
            href={item.link}
            passHref
        >
            <Image
                alt={item.name}
                src={item.posterPath}
                layout='fill'
                draggable={false}
                priority
            />
            {item.content && (
                <div className={styles.content}>
                    <p className={styles.title}>{item.content.title}</p>
                    {item.content.subtitle && <p className={styles.subtitle}>{item.content.subtitle}</p>}
                </div>
            )}
        </Link>
    )
}

export default GalleryItem