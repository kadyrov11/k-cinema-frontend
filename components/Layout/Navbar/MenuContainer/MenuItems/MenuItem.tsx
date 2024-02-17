"use client"
import { FC } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { IMenuItem } from '../menu.interface'

import styles from './MenuItem.module.scss'
import MaterialIcon from '@/ui/MaterialIcon'

const MenuItem: FC<{item: IMenuItem}> = ({item}) => {
  const path = usePathname()
  const isActive = item.link === path

  return (
    <li className={`${isActive ? styles.active : ''}`}>
      <Link href={item.link}>
        <MaterialIcon name={item.icon}  />
        <span className='ml-3'>{item.title}</span>
      </Link>
    </li>
  )
}

export default MenuItem