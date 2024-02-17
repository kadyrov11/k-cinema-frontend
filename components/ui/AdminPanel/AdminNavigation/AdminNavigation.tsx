import { FC } from 'react'

import styles from './AdminNavigation.module.scss'
import { navItems } from './admin-navigation.data'
import AdminNavItem from './AdminNavItem'

const AdminNavigation: FC = () => {
    const navElems = navItems.map(item => <AdminNavItem item={item} key={item.link} />)

    return <nav className={styles.nav}>
        <ul>
            {...navElems}
        </ul>
    </nav>
}


export default AdminNavigation
