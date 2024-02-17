"use client"

import { FC } from 'react'

import Menu from '../Menu/Menu'

import { useGenres } from './useGenres'
import SkeletonLoader from '@/ui/SkeletonLoader'

const GenreMenu: FC = () => {
  const { data, isLoading } = useGenres()

  return isLoading ? <SkeletonLoader count={5} className='h-5 max-w-40 ml-4 mb-6' /> :
    <Menu menu={{ title: 'Popular genres', items: data || [] }} />
}

export default GenreMenu