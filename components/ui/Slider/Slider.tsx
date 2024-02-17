"use client"
import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'

import { useSlider } from './useSlider'
import { ISlide } from './slider.interface'

import styles from './Slider.module.scss'
import SlideArrow from './SlideArrow'
import SlideItem from './SlideItem'

interface ISlider {
    slides: ISlide[]
    buttonTitle?: string
}

const Slider: FC<ISlider> = ({ slides, buttonTitle }) => {
    const { slideIn, index, isNext, isPrev, handleClick } = useSlider(slides.length)


    return (
        <div className={styles.slider}>
            <CSSTransition
                in={slideIn}
                timeout={300}
                unmountOnExit
                classNames='slide-animation'
            >
                <SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
            </CSSTransition>
            {isPrev && <SlideArrow
                variant='left'
                clickHandler={() => handleClick('prev')}
            />}
            {isNext && <SlideArrow
                variant='right'
                clickHandler={() => handleClick('next')}
            />}
        </div>
    )
}

export default Slider