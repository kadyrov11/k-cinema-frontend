import { FC } from 'react'
import dynamic from 'next/dynamic'

import Menu from './Menu/Menu'

import { navMenu, userMenu } from './menu.data'

const DynamicGenreMenu = dynamic(() => import('./GenreMenu'), {
  ssr: false,
})

const MenuContainer: FC = () => {
  return (
    <div>
      <Menu menu={navMenu} />
      <DynamicGenreMenu />
      <Menu menu={userMenu} />
    </div>
  )
}

export default MenuContainer