import { FC } from 'react'
import Link from 'next/link'

import { getMovieUrl } from '@/configs/url.config'

import styles from './AuthPlaceholder.module.scss'

const AuthButton: FC<{ slug: string }> = ({ slug }) => {
    return (
        <Link href={`/auth?redirect=${getMovieUrl(slug)}`} className={styles.btn}>
            Sign In
        </Link>
    )
}

export default AuthButton