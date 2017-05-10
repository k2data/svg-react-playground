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

    // Line 13:
    const line13 = svg.append('g')
    line13.append('path')
      // x/y the same, x/y +- X (30 ~ 70)
      .attr('d', `M3767 3698 C3727 3698, 3654 3667, 3654 3627 V2580
        C3654 2517, 3722 2453, 3785 2453 H5318
        C5398 2453, 5452 2524, 5452 2604 V3620
        C5452 3670, 5411 3699, 5362 3699
        `)
      // .attr('stroke', '#ede611')
      .attr('stroke', 'rgba(50, 46, 226, .7)')
      .attr('fill', 'rgba(0, 0, 0, 0)')
      // .attr('transform', 'translate(0, 20)')
      .attr('stroke-width', '37')
    const dataOfLine13 = [
      { x: 3767, y: 3698, name: '西直门', isExchange: true, to: ['Line2', 'Line4'] },
      { x: 3654, y: 3440, name: '大钟寺' },
      { x: 3654, y: 3191, name: '知春路', isExchange: true, to: ['Line10'] },
      { x: 3654, y: 3002, name: '五道口' },
      { x: 3654, y: 2838, name: '上地' },
      { x: 3654, y: 2584, name: '西二旗', isExchange: true, to: ['LineCHANGPING'] },
      { x: 3851.5, y: 2453, name: '龙泽' },
      { x: 4074.5, y: 2453, name: '回龙观' },
      { x: 4388, y: 2453, name: '霍营', isExchange: true, to: ['Line8'] },
      { x: 5049, y: 2453, name: '立水桥', isExchange: true, to: ['Line5'] },
      { x: 5452, y: 2606, name: '北苑' },
      { x: 5452, y: 2910, name: '望京西', isExchange: true, to: ['Line15'] },
      { x: 5452, y: 3191, name: '芍药居', isExchange: true, to: ['Line10'] },
      { x: 5452, y: 3394, name: '光熙门' },
      { x: 5452, y: 3532, name: '柳芳' },
      { x: 5362, y: 3699, name: '东直门', isExchange: true, to: ['Line2', 'AirportExpress'] }
    ]
    const stations = line13.selectAll('circle')
      .data(dataOfLine13)
      .enter()
      .append('g')
      .attr('class', styles['station'])

    stations.append('circle')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', 22)
      .attr('class', styles['station--circle'])

    stations.append('text')
      .attr('x', (d) => d.x - 40)
      .attr('y', (d) => d.y)
      .attr('class', styles['station--text'])
      .text((d) => d.isExchange ? '' : d.name)
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
