// @flow
import React from 'react'
import styles from './WallStorey.css'

type Props = {
  title: string,
  children: Element
}

export default (props: Props) => (
  <div>
    <h3 className={styles['title']}>{props.title}</h3>
    {props.children}
  </div>
)
