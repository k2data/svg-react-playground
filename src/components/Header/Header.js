// @flow
import React from 'react'
import Logo from 'components/Logo'
import UserMenu from 'components/UserMenu'
import styles from './Header.css'

const Header = () => (
  <header className={styles['header']}>
    <Logo title='svg react playground' />
    <UserMenu />
  </header>
)

export default Header
