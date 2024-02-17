import { FC } from 'react'

import AdminTH from './components/AdminTH'
import AdminTR from './components/AdminTR'

import SkeletonLoader from '@/ui/SkeletonLoader'
import { ITableItem } from './admin-table.interface'

import styles from './AdminTable.module.scss'

interface IAdminTable {
    tableItems: ITableItem[]
    isLoading: boolean
    headerItems: string[]
    removeHandler: (id: string) => void
}

const AdminTable: FC<IAdminTable> = ({ headerItems, isLoading, tableItems, removeHandler }) => {
    return <div>
        <AdminTH headerItems={headerItems} />
        {isLoading ?
            <SkeletonLoader count={1} height={48} className='mt-4' /> :
            tableItems.length ?
                tableItems.map(tableItem => <AdminTR key={tableItem._id} tableItem={tableItem} removeHandler={() => removeHandler(tableItem._id)} />) :
                <div className={styles.notFound}>Not Found ... </div>
        }

    </div>
}

export default AdminTable