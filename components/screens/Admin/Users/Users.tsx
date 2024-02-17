"use client"
import { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import AdminPanel from '@/ui/AdminPanel'

import { useUsers } from './useUsers'

const Users: FC = () => {
    const { handleSearch, isLoading, data, searchTerm, deleteAsync } = useUsers()

    return <Meta title='Users'>
        <AdminPanel
            heading='Users'
            isLoading={isLoading}
            searchTerm={searchTerm}
            tableItems={data || []}
            handleSearch={handleSearch}
            removeHandler={deleteAsync}
            headerItems={['Email', 'Registered']}
            onClick={() => null}
        />
    </Meta>
}

export default Users