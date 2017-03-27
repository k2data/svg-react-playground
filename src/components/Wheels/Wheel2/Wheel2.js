// @flow
import React, { Component } from 'react'
import items, { style as attrs } from './items'
import styles from './Wheel2.css'

const Snap = require(
  `imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`
)

class Wheel2 extends Component {
  componentDidMount () {
    this.drawWheel()
  }

  drawPie (snap, centre, rIn, rOut, data) {
    const size = Object.entries(data).length
    const delta = 359.99 / size
    let startDeg = -(delta * 2 - 90)

    const pie = snap.group()

    for (let key in data) {
      let sector = null
      Snap.animate(0, delta, ((start, end) => {
        if (sector) sector.remove()
        sector = this.drawPieSector(snap, centre,
                                   rIn, rOut, start, end, data[key].attr)

        pie.add(sector)
      }).bind(null, startDeg), 800, mina.easeinout)

      startDeg += delta
    }

    return pie
  }

  drawWheel () {
    let chart = null
    const snap = Snap('#svg')

    if (chart) chart.remove()

    const pie = this.drawPie(snap,
                      { x:100, y:100 },
                      40, 95, items)

    const circle = snap.circle(100, 100, 40)

    circle.attr(attrs)

    chart = snap.group(pie, circle)
  }

  drawPieSector (snap, centre,
      rIn, rOut, startDeg, delta, attr) {
    const startOut = {
      x: centre.x + rOut * Math.cos(Math.PI * (startDeg) / 180),
      y: centre.y + rOut * Math.sin(Math.PI * (startDeg) / 180)
    }

    const endOut = {
      x: centre.x + rOut * Math.cos(Math.PI * (startDeg + delta) / 180),
      y: centre.y + rOut * Math.sin(Math.PI * (startDeg + delta) / 180)
    }

    const startIn = {
      x: centre.x + rIn * Math.cos(Math.PI * (startDeg + delta) / 180),
      y: centre.y + rIn * Math.sin(Math.PI * (startDeg + delta) / 180)
    }

    const endIn = {
      x: centre.x + rIn * Math.cos(Math.PI * (startDeg) / 180),
      y: centre.y + rIn * Math.sin(Math.PI * (startDeg) / 180)
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

    path.attr(attr)

    return path
  }

  render () {
    return (
      <div className={`${styles['container']}`}>
        <svg className={styles['svg']} id='svg' />
      </div>
    )
  }
}

export default Wheel2
