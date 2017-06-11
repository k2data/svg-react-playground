// @flow
import React, { Component } from 'react'
import type { Location } from 'react-router'
import Empty404 from 'components/Empty404'
import Subways from 'components/Subways'
import Gearing from 'components/Gearing'
import Alphabet from 'components/Alphabet'

type Props = {
  location: Location
}

export class Pages extends Component {
  props: Props
  getComponent: () => string

  getComponent (): string {
    const { search } = this.props.location
    const name = search
      ? (new URLSearchParams(search.slice(1))).get('comp')
      : 'Empty404'

    switch (name) {
      case 'Subways':
        return Subways
      case 'Gearing':
        return Gearing
      case 'Alphabet':
        return Alphabet
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
