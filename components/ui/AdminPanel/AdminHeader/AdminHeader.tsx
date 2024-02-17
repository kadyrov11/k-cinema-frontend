import { ChangeEvent, FC } from 'react'

import AdminCreateBtn from './AdminCreateBtn'
import SearchField from '../../SearchField/SearchField'

import styles from './AdminHeader.module.scss'

interface IAdminHeader {
    onClick?: () => void
    searchTerm: string
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void

}

const AdminHeader: FC<IAdminHeader> = ({ searchTerm, handleSearch, onClick }) => {
    return <div className={styles.header}>
        <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
        {onClick && <AdminCreateBtn onClick={onClick} />}
    </div>
}

export default AdminHeader