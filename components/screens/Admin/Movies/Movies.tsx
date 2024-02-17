"use client"
import { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import AdminPanel from '@/ui/AdminPanel'

import { useMovies } from './useMovies'

const Movies: FC = () => {
    const { handleSearch, createAsync, isLoading, data, searchTerm, deleteAsync } = useMovies()

    return <Meta title='Movies'>
        <AdminPanel
            heading='Movies'
            isLoading={isLoading}
            searchTerm={searchTerm}
            tableItems={data || []}
            onClick={createAsync}
            handleSearch={handleSearch}
            removeHandler={deleteAsync}
            headerItems={['Title', 'Genres', 'Rating']}
        />
    </Meta>
}

export default Movies