"use client"
import { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import AdminPanel from '@/ui/AdminPanel'

import { useActors } from './useActors'

const Actors: FC = () => {
    const { handleSearch, createAsync, isLoading, data, searchTerm, deleteAsync } = useActors()

    return <Meta title='Actors'>
        <AdminPanel
            heading='Actors'
            isLoading={isLoading}
            searchTerm={searchTerm}
            tableItems={data || []}
            onClick={createAsync}
            handleSearch={handleSearch}
            removeHandler={deleteAsync}
            headerItems={['Name', 'Number of movies']}
        />
    </Meta>
}

export default Actors