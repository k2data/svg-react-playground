// @flow
import React, { Component } from 'react'
import styles from './Subways.css'
import * as d3 from 'd3'
// import { select } from 'd3-selection'
// import { transition } from 'd3-transition'
// import * as eases from 'd3-ease'
import { lines, exchangeStations } from './lines'

// const d3 = Object.assign({}, require('d3-selection'), require('d3-transition'), require('d3-ease'))
// const d3 = {
//   select, transition, ...eases
// }

type Props = {
}

// type Point = {
//   x: number,
//   y: number
// }

const lineWidth = 37
const stationR = 22
const fontSize = 48

const centerOfChina = {
  x: 4551.657856,
  y: 4218.188032
}
const centerOfOrigin = {
  x: 971.334 - 944.45 / 2,
  y: 413.078 - 283.51 / 2
}

export class Subways extends Component {
  props: Props
  svg: Object
  draw: () => void
  animate: () => void
  scaleTranslate: (scale: number) => string
  showActivePoint: () => void
  drawLine: () => void
  textX: (position: string) => number
  textY: (position: string) => number
  textAnchor: (position: string) => string
  handleClickOnCanvas: () => void

  constructor (props: Props) {
    super(props)
    this.draw = this.draw.bind(this)
    this.animate = this.animate.bind(this)
    this.scaleTranslate = this.scaleTranslate.bind(this)
    this.showActivePoint = this.showActivePoint.bind(this)
    this.drawLine = this.drawLine.bind(this)
    this.textAnchor = this.textAnchor.bind(this)
    this.handleClickOnCanvas = this.handleClickOnCanvas.bind(this)
  }

  componentDidMount () {
    this.draw()
    this.animate()
    // this.showActivePoint()
  }

  showActivePoint () {
    const line = this.refs.svg.querySelector('g#LINE_CHANGPING > path')
    console.log(line.getTotalLength())
    const currentP = line.getPointAtLength(2326.8)
    console.log(currentP)
    this.svg.append('circle')
      .attr('cx', currentP.x)
      .attr('cy', currentP.y)
      .attr('r', stationR)
      .attr('class', styles['active--circle'])
  }

  animate () {
    const svg = d3.select(this.refs.svg)
    const tiananmen = svg.select('#tiananmen')
    const lines = svg.selectAll(`.${styles['line']}`)
    const stations = svg.selectAll(`.${styles['station']}`)

    // Init:
    stations
      .style('opacity', 0)
    lines.each(function () {
      const length = this.getTotalLength()
      const line = d3.select(this)
      line.style('stroke-dasharray', length)
      line.style('stroke-dashoffset', length)
    })
    tiananmen
      .attr('transform', this.scaleTranslate(4))

    // Begin animate
    const transOfTiananmen = d3.transition()
      .duration(1000)
      .ease(d3.easeLinear)
    tiananmen
      .transition(transOfTiananmen)
      .attrTween('transform', () => {
        return (t) => {
          // from 4 to 0.384
          const scale = 4 - (4 - 0.384) * t
          return this.scaleTranslate(scale)
        }
      })

    const transOfLines = d3.transition()
      .delay(1000)
      .duration(1600)
      .ease(d3.easeLinear)
    lines
      .transition(transOfLines)
      .styleTween('stroke-dashoffset', function () {
        const length = this.getTotalLength()
        return (t) => {
          // from length to 0
          return length - length * t
        }
      })

    stations
      .each(function () {
        const transOfStation = d3.transition()
          .delay(2600 + Math.random() * 1000)
          .duration(601)
          .ease(d3.easePoly)
        const station = d3.select(this)
        station
          .transition(transOfStation)
          .style('opacity', 1)
      })
  }

  scaleTranslate (scale: number): string {
    const t = {
      x: centerOfChina.x - centerOfOrigin.x + -centerOfOrigin.x * (scale - 1),
      y: centerOfChina.y - centerOfOrigin.y + -centerOfOrigin.y * (scale - 1)
    }

    return `translate(${t.x}, ${t.y}) scale(${scale})`
  }

  draw () {
    const svg = d3.select(this.refs.svg)

    svg.append('path')
      .attr('id', 'tiananmen')
      .attr('d', `M971.334,413.078l-33.667-113.405H795.911v28.35H666.558v-28.35
        H514.169v26.58h-30.122v-26.58H331.658v28.35H202.305v-28.35
        H60.548L26.881,413.078h256.934v-28.353h23.036v28.353h70.878v-40.756
        h26.579v42.528h72.65v-62.02h44.299v62.02h72.65v-42.528h26.578v40.756
        h70.88v-28.353H714.4v28.353H971.334z M264.324,297.9h37.21
        v-12.403h182.513v-40.75h30.122v40.75h182.512V297.9h37.211v-42.521
        H758.7v-28.351h-28.353v-19.492h10.633V184.5H714.4
        l-31.896-40.754v-12.404h-24.808v10.632h-317.18v-10.632H315.71v12.404
        L283.815,184.5h-26.58v23.036h10.632v19.492h-28.352v28.351
        h24.808V297.9z M671.875,242.975h12.402v28.353h-12.402V242.975z
        M627.575,242.975h12.402v28.353h-12.402V242.975z
        M583.274,242.975h19.492v28.353h-19.492V242.975z
        M540.749,242.975h19.492v28.353h-19.492V242.975z
        M487.591,200.448h24.805
        v28.352h-24.805V200.448z
        M437.976,242.975h19.492v28.353h-19.492V242.975z
        M395.448,242.975h19.492v28.353h-19.492V242.975z
        M358.237,242.975h12.404v28.353h-12.404V242.975z
        M313.938,242.975h12.404v28.353h-12.404V242.975z`)
      .attr('fill-rule', 'evenodd')
      .attr('clip-rule', 'evenodd')
      .attr('fill', '#BC1515')
      .attr('transform', this.scaleTranslate(0.384))
    this.svg = svg
    // const width = +svg.attr('width')
    // const height = +svg.attr('height')
    const drawLine = this.drawLine.bind(null, svg)
    lines.map((line) => drawLine(line))

    const stationsData = Object.entries(exchangeStations)
    const stations = svg.append('g')
      .attr('id', 'exchangeStations')
      .selectAll('use')
      .data(stationsData)
      .enter()
      .append('g')
      .attr('class', styles['station'])
    stations
      .append('circle')
      .attr('cx', (d) => d[1][0].x)
      .attr('cy', (d) => d[1][0].y)
      .attr('r', stationR * 3 / 2)
      .attr('class', styles['station--circle'])
    stations
      .append('use')
      .attr('xlink:href', '#exchange')
      .attr('x', (d) => d[1][0].x - stationR / 2 * 3 / 2)
      .attr('y', (d) => d[1][0].y - stationR / 2 * 3 / 2)
      .attr('width', stationR / 2 * 3)
      .attr('height', stationR / 2 * 3)
      .attr('class', styles['exchange-station'])

    stations.append('text')
      .attr('x', (d) => d[1][0].x + this.textX(d[1][0].text))
      .attr('y', (d) => d[1][0].y + this.textY(d[1][0].text))
      .attr('dy', fontSize / 2 - fontSize / 12)
      .attr('font-size', fontSize)
      .attr('class', styles['station--text'])
      .attr('text-anchor', (d) => this.textAnchor(d[1][0].text))
      .text((d) => d[1][0].name)

    svg.append('g')
      .attr('id', 'authors')
      .selectAll('text')
      .data([
        {
          name: 'K2Data前端组', x: 6860, y: 5900
        },
        {
          name: '金风前端（袁振，彭小华）', x: 6860, y: 6200
        },
        {
          name: 'K2Data UI（贾健）', x: 6860, y: 6500
        }
      ])
      .enter()
      .append('text')
      .attr('x', (d) => d.x)
      .attr('y', (d) => d.y)
      .text((d) => d.name)
    svg.append('g')
      .attr('id', 'authors')
      .selectAll('text')
      .data([
        {
          name: 'K2Data前端组', x: 6860, y: 5900
        },
        {
          name: '金风前端（袁振，彭小华）', x: 6860, y: 6200
        },
        {
          name: 'K2Data UI（贾健）', x: 6860, y: 6500
        }
      ])
      .enter()
      .append('text')
      .attr('x', (d) => d.x)
      .attr('y', (d) => d.y)
      .text((d) => d.name)
    svg.append('g')
      .attr('id', 'loves')
      .selectAll('use')
      .data([
        {
          x: 7000, y: 5960
        },
        {
          x: 7000, y: 6260
        }
      ])
      .enter()
      .append('use')
      .attr('xlink:href', '#love')
      .attr('width', 100)
      .attr('height', 100)
      .attr('x', (d) => d.x)
      .attr('y', (d) => d.y)
  }

  drawLine (svg: Object, options: Object) {
    const { name, d, color, stationsData = [] } = options
    const line = svg.append('g')
      .attr('id', name)
    line.append('path')
      // x/y the same, x/y +- X (30 ~ 70)
      .attr('d', d)
      .attr('stroke', color || 'black')
      .attr('fill', 'none')
      .attr('class', styles['line'])
      .attr('stroke-width', lineWidth)

    const stations = line.selectAll('g')
      .data(stationsData)
      .enter()
      .append('g')
      .attr('class', styles['station'])

    stations.append('circle')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', stationR)
      .attr('class', `${styles['station--circle']}`)

    stations.append('text')
      .attr('x', (d) => d.x + this.textX(d.text))
      .attr('y', (d) => d.y + this.textY(d.text))
      .attr('dy', fontSize / 2 - fontSize / 12)
      .attr('font-size', fontSize)
      .attr('class', styles['station--text'])
      .attr('text-anchor', (d) => this.textAnchor(d.text))
      .text((d) => d.isExchange ? '' : d.name)
  }

  textX (position: string): number {
    switch (position) {
      case 'left': case 'bottom-left': case 'top-left':
        return -40
      case 'top': case 'bottom':
        return 0
      case 'right': case 'bottom-right': case 'top-right':
        return 40
      case 'bottom-right-lean': case 'top-right-lean':
        return 20
      case 'bottom-left-lean': case 'top-left-lean':
        return -20
      default:
        return 0
    }
  }

  textY (position: string): number {
    switch (position) {
      case 'left': case 'right':
        return 0
      case 'top':
      case 'top-right':
      case 'top-left':
        return -70
      case 'top-right-lean':
      case 'top-left-lean':
        return -60
      case 'bottom':
      case 'bottom-right':
      case 'bottom-left':
        return 70
      case 'bottom-right-lean':
      case 'bottom-left-lean':
        return 60
      default:
        return 0
    }
  }

  textAnchor (position: string): string {
    switch (position) {
      case 'left':
      case 'top-left':
      case 'top-left-lean':
      case 'bottom-left':
      case 'bottom-left-lean':
        return 'end'
      case 'top': case 'bottom':
        return 'middle'
      case 'right':
      case 'top-right':
      case 'top-right-lean':
      case 'bottom-right':
      case 'bottom-right-lean':
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
        <img src='/images/subway_map.jpg' className={styles['img-layer']} id='test' />
        <svg className={styles['svg-layer']}
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 0 9448 6719'
          ref='svg'
        >
          <symbol id='exchange' viewBox='0 0 1024 1024'>
            <path d={`M112.228037 296.934806c0 0 80.84119-125.866662
              208.754464-193.404871s285.502429-48.095391
              388.856355 17.396205 138.146337 120.750131
              138.146337 120.750131l89.027639-51.16531
              c0 0 18.419512-9.209756 18.419512 12.279674
              s0 321.318146 0 321.318146 0 28.652574-21.48943 18.419512
              c-18.078751-8.609075-213.596749-120.784924-275.207969
              -156.176992-33.830503-15.226796-4.107551-27.595498-4.107551-27.595498l85.910649-49.541323
              c0 0-49.004087-61.923328-120.724549-94.717222-76.773548-40.359196-148.645458
              -45.144176-236.690724-11.608386-57.407478 21.86703-124.999922 77.853136-173.680645 160.560836
              C112.228037 296.934806 112.228037 296.934806 112.228037 296.934806zM910.406872 721.592552
              c0 0-80.84119 125.866662-208.754464 193.404871s-285.502429 48.095391
              -388.856355-17.396205-138.146337-120.750131-138.146337-120.750131l-89.027639 51.16531
              c0 0-18.419512 9.209756-18.419512-12.279674s0-321.318146 0-321.318146 0-28.652574 21.48943-18.419512
              c18.078751 8.609075 213.596749 120.784924 275.207969 156.176992 33.830503 15.226796
              4.107551 27.595498 4.107551 27.595498l-85.910649 49.541323
              c0 0 49.004087 61.923328 120.724549 94.717222 76.773548 40.359196 148.645458 45.144176
              236.690724 11.608386 57.407478-21.86703 124.999922-77.853136 173.680645-160.560836
              C910.406872 721.592552 910.406872 721.592552 910.406872 721.592552z`}
             />
          </symbol>
          <symbol id='love' viewBox='0 0 1024 1024'>
            <path d={`M746.057245 86.961584
              c197.262736-2.990101 294.124807 173.73488 237.950414
              377.404536-51.087539 185.235818-176.210257 301.091476-314.992067
              398.860197-25.550932 17.999956-115.617228 81.21879-158.957315
              73.139787-74.03825-13.800307-126.778428-64.404846-177.487344
              -103.372346-44.193525-33.95944-83.817987-72.111364-122.875538-111.173009
              C127.826805 639.944997 53.954331 556.273343 27.330974 418.532235
              c-4.383844-22.681582-3.999081-57.647955 0-79.966263C47.993572
              223.251643 85.797573 158.695349 175.561993 113.292276c33.497928-16.942881
              86.034469-34.256198 136.52849-21.454638 99.112322 25.12626 148.276045
              89.668229 212.594933 148.231019 9.101285-10.726296
              18.204617-21.455661 27.305903-32.180933 22.473851-27.89635
              54.370305-54.323233 83.868129-75.091232 23.11444-16.275685
              50.242288-30.966269 79.967286-39.983643C725.90323 90.863451 735.981772
              88.912006 746.057245 86.961584z`}
              fill='#d81e06'
            />
          </symbol>
        </svg>
      </div>
    )
  }
}

export default Subways
