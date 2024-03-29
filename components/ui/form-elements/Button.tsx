import { FC } from 'react'

import { IButton } from './form.interfaces'

import styles from './form.module.scss'

const Button: FC<IButton> = ({ children, className, ...rest }) => {
    return <button className={`${styles.button} ${className}`} {...rest}>{children}</button>
}

export default Button