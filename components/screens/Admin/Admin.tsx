"use client"
import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import Statistics from './Statistics'
import Heading from '@/ui/Heading/Heading'
import AdminNavigation from '@/ui/AdminPanel/AdminNavigation'

import styles from './Admin.module.scss'

const Admin: FC = () => {
    return <Meta title='Admin panel'>
        <AdminNavigation />
        <Heading title='Statistics' />
        <Statistics />
    </Meta>
}

export default Admin