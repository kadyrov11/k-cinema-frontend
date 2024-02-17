import { FC } from 'react'

import styles from './AuthPlaceholder.module.scss'
import AuthButton from './AuthButton'

const AuthPlaceholder: FC<{ slug: string }> = ({ slug }) => {

    return (
        <div className={styles.placeholder}>
            <div>
                <p>Sign in to start watching</p>
                <AuthButton slug={slug} />
            </div>
        </div>
    )
}

export default AuthPlaceholder