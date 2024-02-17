import { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { INavItem } from './admin-navigation.interface'

import styles from './AdminNavigation.module.scss'

const AdminNavItem: FC<{ item: INavItem }> = ({ item: { title, link } }) => {
    const pathname = usePathname()

    return <li>
        <Link href={link} className={pathname === link ? styles.active : ''}>
            {title}
        </Link>
    </li>
}

export default AdminNavItem
