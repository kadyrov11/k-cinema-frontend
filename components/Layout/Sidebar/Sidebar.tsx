import React from 'react'
import Search from './Search'

import styles from './Sidebar.module.scss'
import MoviesContainer from './MoviesContainer'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Search />
      <MoviesContainer />
    </div>
  )
}

export default Sidebar