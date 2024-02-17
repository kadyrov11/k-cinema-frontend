import { FC } from 'react'

import { IMenu } from '../menu.interface'

import styles from './Menu.module.scss'
import MenuItem from '../MenuItems/MenuItem'
import { AuthItems } from '../auth'

const Menu: FC<{ menu: IMenu }> = ({ menu: { title, items } }) => {
  return (
    <div className={styles.menu}>
      <h2 className={styles.heading}>{title}</h2>
      <ul className={styles.list}>
        {items.map(item => <MenuItem item={item} key={item.link} />)}
        {title === 'General' ? <AuthItems /> : null}
      </ul>
    </div>
  )
}

export default Menu