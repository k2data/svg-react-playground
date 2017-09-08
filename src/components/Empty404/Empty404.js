import React from 'react'
import * as d3 from 'd3'
import cellData from './data'
import styles from './Empty404.css'

console.log(cellData)

class Empty404 extends React.Component {
  constructor (props) {
    super(props)

    this.calculate = this.calculate.bind(this)
  }
  componentDidMount () {
    this.calculate()
    // window.onresize = () => {
    //   this.calculate()
    // }
  }

  calculate () {
    // const tableLen = this.refs.container.offsetWidth * 0.8
    const tableLen = document.body.clientWidth / 2 * 0.5
    console.log(tableLen)
    const cellLen = (tableLen - 4 * 10) / 8
    const ltContainer = d3.select(this.refs.container)

    ltContainer
    .selectAll('div')
    .remove()

    ltContainer
    .append('div')
    .style('width', `${tableLen}px`)
    .style('height', `${tableLen}px`)
    .attr('class', styles['table'])
    .selectAll('div') // ?
    .data(cellData)
    .enter()
    .append('div')
    .attr('class', styles['cell'])
    .style('width', `${cellLen}px`)
    .style('height', `${cellLen}px`)
    .style('left', (d) => `${(d.index % 8) * (cellLen + 10)}px`)
    .style('top', (d) => `${Math.floor(d.index / 8) * (cellLen + 10)}px`)
    .style('font-size', `${cellLen / 3}px`)
    .style('line-height', `${cellLen}px`)
    .style('background', (d) => d.flag ? '#54ab90' : '#31404C')
    .style('z-index', (d) => d.flag && '999')
    .style('font-weight', (d) => d.flag && 'bold')
    .text((d) => d.text)

    setTimeout(function () {
      d3.selectAll(`.${styles['cell']}`)
      .style('transform', (d) => {
        console.log((Math.random() - 0.5) * cellLen * 10)
        if (d.flag) {
          return (
            `rotateY(${30 + (Math.random() - 0.5) * 15}deg)
            translate3d(${100 + (Math.random() * 10)}px,
            ${(Math.random() * 10)}px,
            ${300 + (Math.random() * 20)}px)
            scale(${1.1 + Math.round(Math.random() * 0.4)})`
          )
        } else {
          return (
            `rotateY(${30 + (Math.random() - 0.5) * 15}deg)
            translate3d(${(Math.random() - 0.2) * cellLen * 20}px,
            ${(Math.random() - 0.5) * cellLen * 10}px,
            ${(Math.random() - 0.5) * cellLen * 10}px)
            scale(${0.8 + Math.round(Math.random() * 0.8)})`
          )
        }
      })
      .style('box-shadow', '-1px 1px 4px #fff')

      // setTimeout(function () {
      //   d3.selectAll(`.${styles['cell']}`)
      //   .style('transform', 'none')
      // }, 3000)
    }, 1000)
  }

  render () {
    return (
      <div className={styles['empty']}>
        <div className={styles['empty-container']} ref='container' />
        <div className={styles['empty-container']} />
      </div>
    )
  }
}

export default Empty404
