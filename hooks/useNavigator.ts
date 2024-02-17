import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useAuth } from './useAuth'

export const useNavigator = () => {
	const { user } = useAuth()
	const { push } = useRouter()
	const pathname = usePathname()
	const path = `/${pathname.split('/')[1]}`

	useEffect(() => {
		switch (path) {
			case '/':
				break
			case '/profile':
				if (!user) {
					push('/')
				}
				break
			case '/manage':
				if (!user?.isAdmin) {
					push('/not-found')
				}
				break
			case '/auth':
				break
			case '/movie':
				break
			case '/actor':
				break
			case '/fresh':
				break
			case '/genres':
				break
			case '/trending':
				break
			case '/favorites':
				if (!user) {
					push('/')
				}
				break
			default:
				if (path !== '/not-found') push('/not-found')
				break
		}
	}, [user, path, push])
}
