"use client"

import React, { useEffect } from 'react'

import { useSearch } from './useSearch'

import styles from './Search.module.scss'
import SearchList from '../SearchList'
import SearchField from '@/ui/SearchField/SearchField'

const Search = () => {
    const { isSuccess, data, handleSearch, searchTerm } = useSearch()

    return (
        <div className={styles.wrapper}>
            <SearchField searchTerm={searchTerm} handleSearch={
                handleSearch} />
            {isSuccess && searchTerm && <SearchList movies={data || []} />}
        </div>
    )
}

export default Search