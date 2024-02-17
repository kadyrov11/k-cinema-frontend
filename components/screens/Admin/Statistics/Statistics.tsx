import { FC } from 'react'

import UsersCount from './components/UsersCount'
import PopularMovie from './components/PopularMovie'

import styles from '../Admin.module.scss'

const Statistics: FC = () => {
    return <div className={styles.statistics}>
        <UsersCount />
        <PopularMovie />
    </div>
}

export default Statistics