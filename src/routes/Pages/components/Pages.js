// @flow
import React, { Component } from 'react'
import type { Match } from 'react-router'
import Empty404 from 'components/Empty404'
import Subways from 'components/Subways'
import Gearing from 'components/Gearing'
import Alphabet from 'components/Alphabet'
import IIBD from 'components/IIBD'
import Zdx from 'components/SVGLineAnimation'

type Props = {
  match: Match
}

export class Pages extends Component {
  props: Props
  getComponent: () => string

  getComponent (): string {
    console.log(this.props)
    const { params: { comp } } = this.props.match
    const name = comp || 'Empty404'

    switch (name) {
      case 'subways':
        return Subways
      case 'gearing':
        return Gearing
      case 'alphabet':
        return Alphabet
      case 'iibd':
        return IIBD
      case 'zdx':
        return Zdx
      default:
        return Empty404
    }
  }

  render () {
    const Comp = this.getComponent()
    return (
      <div style={{ position: 'absolute', top: '0', right: '0', bottom: '0', left: '0' }}>
        <Comp />
      </div>
    )
  }
}

export default Pages
