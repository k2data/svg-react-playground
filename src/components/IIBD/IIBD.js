import React from 'react'
import styles from './IIBD.css'
import StaticIIBD from './StaticIIBD'
import FloatIIBD from './FloatIIBD'
import FireworkIIBD from './FireworkIIBD'
import 'antd/lib/button/style/css'
import { Button } from 'antd'

const stage = [StaticIIBD, FloatIIBD, FireworkIIBD]

class IIBD extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      id: 2
    }
  }

  render () {
    const Children = stage[this.state.id]
    return (
      <div className={styles['iibd']}>
        <Children />
        <aside>
          <Button ghost type='primary' onClick={() => { this.setState({ id: 0 }) }}>Static</Button>
          <Button ghost type='primary' onClick={() => { this.setState({ id: 1 }) }}>Float</Button>
          <Button ghost type='primary' onClick={() => { this.setState({ id: 2 }) }}>Firework</Button>
        </aside>
      </div>
    )
  }
}

export default IIBD
