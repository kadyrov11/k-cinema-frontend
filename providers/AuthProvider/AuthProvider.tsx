import { ReactNode, useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'

import Cookies from 'js-cookie'

import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'
import { useNavigator } from '@/hooks/useNavigator'

type Props = {
  children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  useNavigator()

  const { user } = useAuth()
  const { logout, checkAuth } = useActions()
  const [pathname, setPathname] = useState(usePathname())

  useEffect(() => {
    const accessToken = Cookies.get('accessToken')
    const refreshToken = Cookies.get('refreshToken')

    if (accessToken && refreshToken) checkAuth()

  }, [])
  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken')
    if (!refreshToken && user) logout()
    if (pathname !== '') {
      setPathname('')
    }
  }, [pathname])

  return <>{children}</>
}

export default AuthProvider