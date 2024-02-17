import { FC } from 'react'

import Logo from './Logo'
import MenuContainer from './MenuContainer/MenuContainer'

import styles from './Navbar.module.scss'

const Navbar: FC = () => {
  return (
    <div className={styles.navigation}>
      <Logo/>
      <MenuContainer/>
    </div>
  )
}

export default Navbar