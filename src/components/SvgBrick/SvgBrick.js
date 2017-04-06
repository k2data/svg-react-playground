import React from 'react'
import styles from './SvgBrick.css'

type Props = {
  children: Element
}

export default (props: Props) => (
  <div className={styles['brick']}>
    <div className={styles['content']}>
      {props.children}
    </div>
  </div>
)
