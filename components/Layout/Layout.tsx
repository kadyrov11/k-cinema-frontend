import { ReactElement } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import styles from './Layout.module.scss';

type Props = {
  children: ReactElement
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.center}>{children}</div>
      <Sidebar />
    </div>
  )
}

export default Layout