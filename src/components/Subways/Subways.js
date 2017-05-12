// @flow
import React, { Component } from 'react'
import styles from './Subways.css'
import { select } from 'd3-selection'
import { lines } from './lines'

const d3 = {
  select
}

const lineWidth = 37
const stationR = 22

type Props = {
}

export class Subways extends Component {
  props: Props
  draw: () => void
  drawLine: () => void
  textX: (position: string) => number
  textY: (position: string) => number
  textAnchor: (position: string) => string
  handleClickOnCanvas: () => void

  constructor (props: Props) {
    super(props)
    this.draw = this.draw.bind(this)
    this.drawLine = this.drawLine.bind(this)
    this.textAnchor = this.textAnchor.bind(this)
    this.handleClickOnCanvas = this.handleClickOnCanvas.bind(this)
  }

  componentDidMount () {
    this.draw()
  }

  draw () {
    const svg = d3.select(this.refs.svg)
    // const width = +svg.attr('width')
    // const height = +svg.attr('height')
    const drawLine = this.drawLine.bind(null, svg)
    lines.map((line) => drawLine(line))
  }

  drawLine (svg: Object, options: Object) {
    const { d, color, stationsData = [] } = options
    const line = svg.append('g')
    line.append('path')
      // x/y the same, x/y +- X (30 ~ 70)
      .attr('d', d)
      .attr('stroke', color || 'black')
      .attr('fill', 'none')
      .attr('stroke-width', lineWidth)

    const stations = line.selectAll('g')
      .data(stationsData)
      .enter()
      .append('g')
      // .attr('class', styles['station'])

    stations.append('circle')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', stationR)
      .attr('class', styles['station--circle'])

    stations.append('text')
      .attr('x', (d) => d.x + this.textX(d.text))
      .attr('y', (d) => d.y + this.textY(d.text))
      .attr('class', styles['station--text'])
      .attr('text-anchor', (d) => this.textAnchor(d.text))
      .text((d) => d.isExchange ? '' : d.name)
  }

  textX (position: string): number {
    switch (position) {
      case 'left':
        return -40
      case 'top': case 'bottom':
        return 0
      case 'right':
        return 40
      default:
        return 40
    }
  }

  textY (position: string): number {
    switch (position) {
      case 'left': case 'right':
        return 0
      case 'top':
        return -40
      case 'bottom':
        return 60
      default:
        return 40
    }
  }

  textAnchor (position: string): string {
    switch (position) {
      case 'left':
        return 'end'
      case 'top': case 'bottom':
        return 'middle'
      case 'right':
        return 'start'
      default:
        return 'start'
    }
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
        <img src='/images/subway_map.jpg' className={styles['img-layer']} style={{ opacity: 0.2 }} />
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
