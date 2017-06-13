// @flow
import React from 'react'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import routes from '../../routes'

// normalize with antd and add icons & animations
import 'antd/lib/style/css'
import '../../styles/core.css'
import styles from './CoreLayout.css'

export const CoreLayout = () => (
  <div className={styles['core-layout']}>
    <div className={styles['viewport']}>
      <Switch>
        <Route path='/' component={routes.home} exact />
        <Route path='/pages/:comp' component={routes.pages} exact />
        <Route path='/wheels' component={routes.wheels} />
        <Route path='/counter' component={routes.counter} exact />
      </Switch>
    </div>
  </div>
)

export default CoreLayout
