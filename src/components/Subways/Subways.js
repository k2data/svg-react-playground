// @flow
import React, { Component } from 'react'
import styles from './Subways.css'
import { select } from 'd3-selection'

const d3 = {
  select
}

type Props = {
}

export class Subways extends Component {
  props: Props
  draw: () => void
  handleClickOnCanvas: () => void

  constructor (props: Props) {
    super(props)
    this.draw = this.draw.bind(this)
    this.handleClickOnCanvas = this.handleClickOnCanvas.bind(this)
  }

  componentDidMount () {
    this.draw()
  }

  draw () {
    const svg = d3.select(this.refs.svg)
    // const width = +svg.attr('width')
    // const height = +svg.attr('height')

    svg.append('path')
      .attr('d', 'M3766 3698 L3766 3500')
      .attr('stroke', '#ede611')
      .attr('stroke-width', '10')
  }

  handleClickOnCanvas (e: MouseEvent) {
    const rect = this.refs.canvas.getBoundingClientRect()
    const coor = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
    console.log(coor)
  }

  render () {
    return (
      <div className={styles['canvas']} ref='canvas'
        onClick={this.handleClickOnCanvas}
      >
        <img src='/images/subway_map.jpg' className={styles['img-layer']} />
        <svg className={styles['svg-layer']}
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          width='6719'
          height='9448'
          viewBox='0 0 9448 6719'
          ref='svg'
        />
      </div>
    )
  }
}

export default Subways
