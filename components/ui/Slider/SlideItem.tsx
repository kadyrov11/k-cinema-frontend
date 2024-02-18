import { FC } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { ISlide } from './slider.interface'

import styles from './Slider.module.scss'

interface ISlideItem {
    slide: ISlide
    buttonTitle?: string
}

const SlideItem: FC<ISlideItem> = ({ slide, buttonTitle = 'Watch' }) => {
    const { push } = useRouter()

    return (
        <div className={styles.slide}>
            {slide.bigPoster && (
                <Image
                    layout='fill'
                    alt={slide.title}
                    src={slide.bigPoster}
                    className={styles.image}
                    priority
                    draggable={false}
                />)}
            <div className={styles.content}>
                <h2 className={styles.heading}>{slide.title}</h2>
                <p className={styles.subtitle}>{slide.subtitle}</p>
                <button className={styles.button} onClick={() => push(slide.link)} >
                    {buttonTitle}
                </button>
            </div>
        </div>
    )
}

export default SlideItem