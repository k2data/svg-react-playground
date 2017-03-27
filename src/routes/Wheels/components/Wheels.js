// @flow
import React from 'react'
import Route from 'react-router-dom/Route'
import { Wheel1, Wheel2 } from 'components/Wheels'
import styles from './Wheels.css'

type Props = {}

const Wheel = (props: Props) => (
  <div className={styles['wheels']}>
    <Route path='/wheels/1' component={Wheel1} exact />
    <Route path='/wheels/2' component={Wheel2} exact />
  </div>
)

export default Wheel
