import { ChangeEvent, FC } from 'react'
import { AxiosResponse } from 'axios'
import { UseMutateAsyncFunction } from 'react-query'

import AdminTable from './AdminTable'
import AdminHeader from './AdminHeader'
import Heading from '../Heading/Heading'
import AdminNavigation from './AdminNavigation'

interface IAdminPanel {
    tableItems: any[]
    heading: string
    isLoading: boolean
    searchTerm: string
    headerItems: string[]
    onClick: () => void
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
    removeHandler: (id: string) => void
}

const AdminPanel: FC<IAdminPanel> = ({
    heading,
    isLoading,
    tableItems,
    searchTerm,
    headerItems,
    onClick,
    handleSearch,
    removeHandler
}) => {
    return <>
        <AdminNavigation />
        <Heading title={heading} className='mb-6' />
        <AdminHeader searchTerm={searchTerm} handleSearch={handleSearch} onClick={onClick} />
        <AdminTable
            headerItems={headerItems}
            isLoading={isLoading}
            tableItems={tableItems}
            removeHandler={removeHandler}
        />
    </>
}

export default AdminPanel