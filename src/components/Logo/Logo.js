// @flow
import React from 'react'
import styles from './Logo.css'

type Props = {
  title: string,
  img: string
}

const Logo = ({ title = 'starter-kit', img }: Props) => (
  <div className={styles['logo']}>
    { img && <img src={img} /> }
    {title}
  </div>
)

export default Logo
