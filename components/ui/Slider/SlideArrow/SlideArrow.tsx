import { FC } from 'react'

import styles from './SlideArrow.module.scss'
import MaterialIcon from '@/ui/MaterialIcon'

interface ISlideArrow {
    variant: 'right' | 'left'
    clickHandler: () => void
}

const SlideArrow: FC<ISlideArrow> = ({ clickHandler, variant }) => {
    const isRight = variant === 'right'

    return (
        <button
            onClick={clickHandler}
            className={`${styles.arrow} ${isRight ? styles.right : styles.left}`}
            aria-label={isRight ? 'Next slide' : 'Previous slide'}
        >
            <MaterialIcon name={isRight ? 'MdChevronRight' : 'MdChevronLeft'} />
        </button>
    )
}

export default SlideArrow