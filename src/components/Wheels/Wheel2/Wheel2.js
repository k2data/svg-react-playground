// @flow
import React, { Component } from 'react'
import items, { circAttr } from './items'
import styles from './Wheel2.css'

const Snap = require(
  `imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`
)

type Props = {}
type Coordinate = {
  x: number,
  y: number
}

class Wheel2 extends Component {
  props: Props
  open: boolean
  center: Coordinate
  chart: any
  pie: any
  toggleMenu: () => void

  constructor (props: Props) {
    super(props)

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  componentDidMount () {
    this.drawWheel()
  }

  drawWheel () {
    const snap = Snap('#svg')
    const viewBox = snap.attr('viewBox') || { x: 0, y: 0, width: 200, height: 200 }
    this.center = {
      x: viewBox.width / 2,
      y: viewBox.height / 2
    }
    const outR = viewBox.width / 2 / 10 * 9
    const inR = viewBox.width / 5

    if (this.chart) this.chart.remove()

    this.pie = this.drawPie(snap, this.center, inR, outR, items)

    const circle = snap.circle(this.center.x, this.center.y, inR)

    circle.attr(circAttr)
    circle.addClass(styles['circle'])

    this.open = true
    circle.click(this.toggleMenu)

    this.defineSymbols(snap, items)

    this.chart = snap.group(this.pie, circle)
  }

  toggleMenu () {
    this.open = !this.open
    Array.prototype.forEach.call(this.pie.children(), (sector, index, arr) => {
      const delta = 359.99 / arr.length
      let startDeg = 270 - (delta * 2 - 90)
      let deg = startDeg - index * delta
      if (Math.round(deg) < 0) {
        deg = 360 + deg
      }

      if (!this.open) {
        Snap.animate(0, deg, (val) => {
          sector.attr({
            transform: `rotate(${val})`
          })
        }, 300)
        setTimeout(() => {
          Snap.animate(1, 0, (val) => {
            sector.attr({
              transform: `rotate(${deg}) scale(${val})`
            })
          }, 400, mina.backin)
        }, 300)
      } else {
        Snap.animate(0, 1, (val) => {
          sector.attr({
            transform: `rotate(${deg}) scale(${val})`
          })
        }, 300, mina.backout)
        setTimeout(() => {
          Snap.animate(deg, 0, (val) => {
            sector.attr({
              transform: `rotate(${val}) scale(${1})`
            })
          }, 800, mina.bounce)
        }, 400)
      }
    })
  }

  drawPie (snap, centre: Coordinate, rIn: number, rOut: number, data: any) {
    const size = Object.entries(data).length
    const delta = 359.99 / size
    let startDeg = -(delta * 2 - 90)

    const pie = snap.group()

    for (let key in data) {
      let sector = null
      Snap.animate(0, delta, ((start, end) => {
        if (sector) sector.remove()
        sector = this.drawPieSector(snap, centre, rIn, rOut,
          start, end, delta, data[key])

        pie.add(sector)
      }).bind(null, startDeg), 800, mina.easeinout)

      startDeg += delta
    }

    return pie
  }

  defineSymbols (snap, data: any) {
    const symbols = snap.group()
    for (let key in data) {
      const { symbol : attrs, image } = data[key]

      const s = snap.symbol(0, 0, attrs.w, attrs.h)
      s.attr({ id: key })

      s.image(image, 0, 0, attrs.w, attrs.w)
      const text = s.text(attrs.w / 2, attrs.w, key)
      text.attr(attrs.text)

      symbols.add(s)
    }

    return symbols
  }

  drawPieSector (snap, centre: Coordinate, rIn: number, rOut: number,
      startDeg: number, delta: number, finalDelta: number, item: any) {
    const startOut = {
      x: centre.x + rOut * Math.cos(Math.PI * (startDeg) / 180),
      y: centre.y + rOut * Math.sin(Math.PI * (startDeg) / 180)
    }

    const endOut = {
      x: centre.x + rOut * Math.cos(Math.PI * (startDeg + delta) / 180),
      y: centre.y + rOut * Math.sin(Math.PI * (startDeg + delta) / 180)
    }

    const startIn = {
      x: centre.x + (rIn - rOut / 5) * Math.cos(Math.PI * (startDeg + delta) / 180),
      y: centre.y + (rIn - rOut / 5) * Math.sin(Math.PI * (startDeg + delta) / 180)
    }

    const endIn = {
      x: centre.x + (rIn - rOut / 5) * Math.cos(Math.PI * (startDeg) / 180),
      y: centre.y + (rIn - rOut / 5) * Math.sin(Math.PI * (startDeg) / 180)
    }

    const largeArc = delta > 180 ? 1 : 0

    let path = 'M' + startOut.x + ',' + startOut.y +
        ' A' + rOut + ',' + rOut + ' 0 ' +
        largeArc + ',1 ' + endOut.x + ',' + endOut.y +
        ' L' + startIn.x + ',' + startIn.y +
        ' A' + rIn + ',' + rIn + ' 0 ' +
        largeArc + ',0 ' + endIn.x + ',' + endIn.y +
        ' L' + startOut.x + ',' + startOut.y + ' Z'

    path = snap.path(path)

    path.attr(item.attr)

    const sector = snap.group()
    sector.add(path)

    if (finalDelta === delta) {
      const sP = {
        x: ((rOut + rIn) / 2) * Math.cos(Math.PI * (delta + startDeg + startDeg) / 2 / 180),
        y: ((rOut + rIn) / 2) * Math.sin(Math.PI * (delta + startDeg + startDeg) / 2 / 180)
      }

      // use use
      const use = sector.use()
      use.attr({
        'xlink:href': '#' + item.name,
        width: item.symbol.w,
        height: item.symbol.h,
        x: Math.round(centre.x + sP.x - item.symbol.w / 2),
        y: Math.round(centre.y + sP.y - item.symbol.h / 2)
      })
      // use.transform(`transform(${Math.round(centre.x + sP.x - 15)}, ${Math.round(centre.y + sP.y - 15)})`)
      sector.add(use)
    }

    sector.attr({ 'transform-origin': `${150} ${150}` })
    return sector
  }

  render () {
    return (
      <div className={`${styles['container']}`}>
        <svg className={styles['svg']} id='svg' viewBox='0 0 300 300' />
      </div>
    )
  }
}

export default Wheel2
