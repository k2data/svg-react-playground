import React, { Component } from 'react'
import * as d3 from 'd3'
import gears from './gears'
import styles from './Gearing.css'

export class Gearing extends Component {
  componentDidMount () {
    const width = document.body.clientWidth || 1400
    const height = document.body.clientHeight || 700
    const radius = 6
    const scale = width > 1400 ? 1 : width / 1400
    // const x = Math.sin(2 * Math.PI / 3)
    // const y = Math.cos(2 * Math.PI / 3)

    let offset = 0
    let speed = 2
    const start = Date.now()

    const svg = d3.select(this.refs.panel)
      .append('svg')
        .attr('width', width)
        .attr('height', height)
      .append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')scale(' + scale + ')')
      .append('g')

    const frame = svg.append('g')
        .datum({ radius: Infinity })

    // Hide annulus
    // frame.append('g')
    //     .attr('class', styles['annulus'])
    //     .datum({ teeth: 80, radius: -radius * 5, annulus: true })
    //   .append('path')
    //     .attr('d', gear)

    const gs = frame.selectAll('g')
      .data(gears)
      .enter()
      .append('g')
      .attr('class', styles['planet'])
      .attr('transform', (d) => d.transform)

    gs.append('path')
      .attr('d', gear)
      .attr('class', styles['gearing'])

    gs.append('path')
      .attr('class', styles['logo'])
      .attr('d', (d) => d.logo && d.logo.d)
      .attr('transform', (d) => d.logo ? d.logo.transform : '')
      .attr('stroke-width', (d) => d.logo && d.logo.stroke)

    gs.append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('text-anchor', (d) => d.dx ? 'inherit' : 'middle')
      // .attr('font-size', (d) => d.teeth * 3 / 2)
      // .attr('dy', (d) => d.teeth * 3 / 2 / 2 - 4)
      .attr('font-size', (d) => d.size)
      .attr('dy', (d) => d.dy)
      .attr('dx', (d) => d.dx ? d.dx : 0)
      .text((d) => d.name)

    d3.selectAll('input[name=reference]')
      .data([radius * 5, Infinity, -radius])
        .on('change', function (radius1) {
          const radius0 = frame.datum().radius
          const angle = (Date.now() - start) * speed
          frame.datum({ radius: radius1 })
          svg.attr('transform', 'rotate(' + (offset += angle / radius0 - angle / radius1) + ')')
        })

    // Change speed
    // d3.selectAll('input[name=speed]')
    //     .on('change', function () { speed = +this.value })

    function gear (d) {
      const n = d.teeth
      const r2 = Math.abs(d.radius)
      let r0 = r2 - 8
      let r1 = r2 + 8
      let r3 = null
      if (d.annulus) {
        r3 = r0
        r0 = r1
        r1 = r3
        r3 = r2 + 20
      } else {
        if (r2 === radius * 18) {
          r3 = r2 * 5 / 7
        } else if (r2 === radius * 15) {
          r3 = r2 * 2 / 3
        } else if (r2 === radius * 13 || r2 === radius * 12 || r2 === radius * 11) {
          r3 = r2 * 0.64
        } else {
          r3 = 30
        }
      }
      const da = Math.PI / n
      let a0 = -Math.PI / 2 + (d.annulus ? Math.PI / n : 0)
      let i = -1
      const path = ['M', r0 * Math.cos(a0), ',', r0 * Math.sin(a0)]
      while (++i < n) {
        path.push(
          'A', r0, ',', r0, ' 0 0,1 ', r0 * Math.cos(a0 += da), ',', r0 * Math.sin(a0),
          'L', r2 * Math.cos(a0), ',', r2 * Math.sin(a0),
          'L', r1 * Math.cos(a0 += da / 3), ',', r1 * Math.sin(a0),
          'A', r1, ',', r1, ' 0 0,1 ', r1 * Math.cos(a0 += da / 3), ',', r1 * Math.sin(a0),
          'L', r2 * Math.cos(a0 += da / 3), ',', r2 * Math.sin(a0),
          'L', r0 * Math.cos(a0), ',', r0 * Math.sin(a0)
        )
      }
      path.push('M0,', -r3, 'A', r3, ',', r3, ' 0 0,0 0,', r3, 'A', r3, ',', r3, ' 0 0,0 0,', -r3, 'Z')
      return path.join('')
    }

    setTimeout(function () {
      d3.selectAll('path')
        .attr('style', 'stroke-dashoffset:0;')
      d3.selectAll(`.${styles['logo']}`)
        .attr('style', 'fill:#504d4a;')
      d3.selectAll('text')
        .attr('style', 'stroke-dashoffset:0;stroke:#333;stroke-width:1')
      d3.timer(function () {
        const angle = (Date.now() - start) * speed
        const transform = function (d) { return 'rotate(' + angle / d.radius + ')' }
        frame.selectAll(`.${styles['gearing']}`).attr('transform', transform)
        frame.attr('transform', transform) // frame of reference
      })
    }, 3200)
  }
  render () {
    return (
      <div ref='panel' className={styles['panel']}>
        {
          // <form>
          //   <input type='radio' name='reference' id='ref-annulus' />
          //   <label htmlFor='ref-annulus'>Annulus</label><br />
          //   <input type='radio' name='reference' id='ref-planet' checked />
          //   <label htmlFor='ref-planet'>Planets</label><br />
          //   <input type='radio' name='reference' id='ref-sun' />
          //   <label htmlFor='ref-sun'>Sun</label>
          // </form>
        }
      </div>
    )
  }
}

export default Gearing
