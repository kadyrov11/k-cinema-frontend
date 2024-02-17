import { FC } from 'react'

import styles from '../AdminTable.module.scss'

const AdminTH: FC<{ headerItems: string[] }> = ({ headerItems }) => {
    return <div className={`${styles.item} ${styles.itemHeader}`}>
        {headerItems.map(value => <p key={value}>{value}</p>)}
        <p>Actions</p>
    </div>
}

export default AdminTH