// @flow
import React from 'react'
import SideMenu from 'components/SideMenu'
import styles from './Sidebar.css'

export const Sidebar = () => (
  <div className={styles['bar']}>
    <SideMenu />
  </div>
)

export default Sidebar
