// @flow
import React, { Component } from 'react'
import items from './items'
import styles from './Wheel2.css'

const Snap = require(
  `imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`
)

class Wheel2 extends Component {
  componentDidMount () {
    /// ////////////////////////////////////////////////////////////////
    // Draws the percent counter
    //
    /// ////////////////////////////////////////////////////////////////
    const run = (percent) => {
      const snap = Snap('#svg1')
      let sector = null

      const attr = {
        stroke: '#3da08d',
        fill: '#3da08d',
        fillOpacity: 0.5,
        strokeWidth: 1
      }

      Snap.animate(0, percent * 359.99, (deg) => {
        if (sector) sector.remove()

        sector = this.drawPieSector(snap,
                               { x:100, y:100 },
                               50, 95,
                               0, deg,
                               attr)
      }, 1000, mina.easeinout)
    }

    /// ////////////////////////////////////////////////////////////////
    // Draws the color chart
    //
    /// ////////////////////////////////////////////////////////////////
    function drawColorChart () {
      let chart = null
      const snap = Snap('#svg2')

      if (chart) chart.remove()

      const pie = drawPie(snap,
                        { x:100, y:100 },
                        40, 95, items)

      const circle = snap.circle(100, 100, 40)

      circle.attr({
        stroke: '#999',
        fill: 'rgb(255, 255, 255)',
        fillOpacity: 1,
        strokeWidth: 1
      })

      chart = snap.group(pie, circle)
    }

    /// ////////////////////////////////////////////////////////////////
    // Draws a pie chart
    //
    /// ////////////////////////////////////////////////////////////////
    const drawPie = (snap, centre, rIn, rOut, data) => {
      let startDeg = 0

      const pie = snap.group()

      for (let key in data) {
        const delta = 359.99 / Object.entries(data).length

        const sector = this.drawPieSector(snap, centre,
                                   rIn, rOut, startDeg, delta, data[key].attr)

        pie.add(sector)

        startDeg += delta
      }

      return pie
    }

    run(1 / 7)
    drawColorChart()
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
        <svg className={styles['svg']} id='svg1' />
        <svg className={styles['svg']} id='svg2' />
      </div>
    )
  }
}

export default Wheel2
