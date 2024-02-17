import { FC } from 'react'
import Image from 'next/image'

import Heading from '../Heading/Heading'

import styles from './ItemCard.module.scss'

interface ICard {
    title: string
    imgSrc: string
}

const ItemCard: FC<ICard> = ({ title, imgSrc }) => {
    return (
        <div className='mr-16'>
            <Heading className='mb-4 xl w-fit' title={title} />
            <span className={styles.item}>

                <Image
                    alt={title}
                    src={imgSrc}
                    layout='fill'
                    draggable={false}
                    priority
                />
            </span>
        </div>
    )
}

export default ItemCard