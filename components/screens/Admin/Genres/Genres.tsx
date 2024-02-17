"use client"
import { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import AdminPanel from '@/ui/AdminPanel'

import { useGenres } from './useGenres'

const Movies: FC = () => {
    const { handleSearch, isLoading, data, searchTerm, deleteAsync, createAsync } = useGenres()

    return <Meta title='Genres'>
        <AdminPanel
            heading='Genres'
            isLoading={isLoading}
            searchTerm={searchTerm}
            tableItems={data || []}
            onClick={createAsync}
            handleSearch={handleSearch}
            removeHandler={deleteAsync}
            headerItems={['Name', 'Slug ']}
        />
    </Meta>
}

export default Movies