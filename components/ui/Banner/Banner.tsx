import { FC } from 'react'

interface IBanner {
    image: string;
    Content?: FC | null;
}

import styles from './Banner.module.scss'
import Image from 'next/image';

const Banner: FC<IBanner> = ({ image, Content }) => {
    return (
        <div className={styles.banner}>
            <Image
                src={image}
                draggable={false}
                layout='fill'
                className='image-like-bg object-top'
                unoptimized
                priority
                alt='Banner image'
            />
            {Content && <Content />}
        </div>
    )
}

export default Banner