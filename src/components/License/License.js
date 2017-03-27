// @flow
import React from 'react'
import styles from './License.css'

type Props = {
  children: Function
}

export default (props: Props) => (
  <div className={styles['license']}>
    { props.children }
  </div>
)
