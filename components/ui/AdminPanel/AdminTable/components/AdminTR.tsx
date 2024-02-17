import { FC } from 'react'
import { IAdminTableItem } from '../admin-table.interface'

import styles from '../AdminTable.module.scss'
import AdminActions from './AdminActions'

const AdminTR: FC<IAdminTableItem> = ({ removeHandler, tableItem }) => {
    return <div className={styles.item}>
        {tableItem.items.map(value => <p key={value}>{value}</p>)}
        <AdminActions editUrl={tableItem.editUrl} removeHandler={removeHandler} />
    </div>
}

export default AdminTR