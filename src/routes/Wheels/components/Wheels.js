// @flow
import React from 'react'
import Route from 'react-router-dom/Route'
import { Wheel1 } from 'components/Wheels'
import styles from './Wheels.css'

type Props = {}

const Wheel = (props: Props) => (
  <div className={styles['wheels']}>
    <Route path='/wheels/1' component={Wheel1} exact />
  </div>
)

export default Wheel
