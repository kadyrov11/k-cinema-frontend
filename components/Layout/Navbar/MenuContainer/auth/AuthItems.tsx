"use client"
import { FC } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { LogoutButton } from './LogoutButton'
import MenuItem from '../MenuItems/MenuItem'
import { getAdminHomeUrl } from 'configs/url.config'

export const AuthItems: FC = () => {
  const { user } = useAuth()

  return (
    <>
      {user ?
        <>
          <MenuItem item={{
            icon: 'MdSettings',
            title: "Profile",
            link: '/profile'
          }} />
          <LogoutButton />
        </> :
        <>
          <MenuItem item={{
            icon: 'MdLogin',
            title: "Login",
            link: '/auth'
          }} />
        </>
      }

      {
        user?.isAdmin &&
        <>
          <MenuItem item={{
            icon: 'MdOutlineLock',
            title: "Admin panel",
            link: getAdminHomeUrl()
          }} />
        </>
      }
    </>
  )
}