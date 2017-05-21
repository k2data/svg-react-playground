import React, { Component } from 'react'
import * as d3 from 'd3'
import styles from './Gearing.css'

export class Gearing extends Component {
  componentDidMount () {
    const width = 960
    const height = 500
    const radius = 6
    // const x = Math.sin(2 * Math.PI / 3)
    // const y = Math.cos(2 * Math.PI / 3)

    let offset = 0
    let speed = 4
    const start = Date.now()

    const svg = d3.select(this.refs.panel)
      .append('svg')
        .attr('width', width)
        .attr('height', height)
      .append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')scale(.55)')
      .append('g')

    const frame = svg.append('g')
        .datum({ radius: Infinity })

    // Hide annulus
    // frame.append('g')
    //     .attr('class', styles['annulus'])
    //     .datum({ teeth: 80, radius: -radius * 5, annulus: true })
    //   .append('path')
    //     .attr('d', gear)

    // 清华大学 8x18
    let g = frame.append('g')
      .attr('class', styles['sun'])
      .attr('transform', `translate(${-radius * 18}, 0)`)
      .datum({ teeth: 18, radius: radius * 18, name: '清华大学' })
    g.append('path')
      .attr('d', gear)
    g.append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .attr('font-size', (d) => d.teeth * 3 / 2)
      .attr('dy', (d) => d.teeth * 3 / 2 / 2 - 4)
      .text((d) => d.name)

    // 金风：GOLDWIND 8x18
    g = frame.append('g')
      .attr('class', styles['planet'])
      .attr('transform', `translate(${-radius * 78 - 3}, ${-148})`)
      .datum({ teeth: 18, radius: radius * 18, name: '金风科技' })
    g.append('path')
      .attr('d', gear)
    g.append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .attr('font-size', (d) => d.teeth * 3 / 2)
      .attr('dy', (d) => d.teeth * 3 / 2 / 2 - 4)
      .text((d) => d.name)

    // K2DATA 8x18
    g = frame.append('g')
      .attr('class', styles['planet'])
      .attr('transform', `translate(${radius * 44}, ${0})`)
      .datum({ teeth: 18, radius: radius * 18, name: 'K2DATA' })
    g.append('path')
      .attr('d', gear)
    g.append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .attr('font-size', (d) => d.teeth * 3 / 2)
      .attr('dy', (d) => d.teeth * 3 / 2 / 2 - 4)
      .text((d) => d.name)

    // 中国石油 8x18
    g = frame.append('g')
      .attr('class', styles['planet'])
      .attr('transform', `translate(${radius * 91}, ${-33})`)
      .datum({ teeth: 18, radius: radius * 18, name: '中国石油' })
    g.append('path')
      .attr('d', gear)
    g.append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .attr('font-size', (d) => d.teeth * 3 / 2)
      .attr('dy', (d) => d.teeth * 3 / 2 / 2 - 4)
      .text((d) => d.name)

    // 台达 8x15
    g = frame.append('g')
      .attr('class', styles['planet'])
      .attr('transform', `translate(${-radius * 51}, ${-30})`)
      .datum({ teeth: 15, radius: -radius * 15, name: '台达' })
    g.append('path')
      .attr('d', gear)
    g.append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .attr('font-size', (d) => d.teeth * 3 / 2)
      .attr('dy', (d) => d.teeth * 3 / 2 / 2 - 4)
      .text((d) => d.name)

    // 陕鼓：ShaanGu 8x13
    g = frame.append('g')
      .attr('class', styles['planet'])
      .attr('transform', `translate(${radius * 13}, ${28})`)
      .datum({ teeth: 13, radius: -radius * 13, name: '陕鼓' })
    g.append('path')
      .attr('d', gear)
    g.append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .attr('font-size', (d) => d.teeth * 3 / 2)
      .attr('dy', (d) => d.teeth * 3 / 2 / 2 - 4)
      .text((d) => d.name)

    // 三一：SANY 8x12
    g = frame.append('g')
      .attr('class', styles['planet'])
      .attr('transform', `translate(${-radius * 96 - 2}, ${0})`)
      .datum({ teeth: 12, radius: -radius * 12, name: '三一' })
    g.append('path')
      .attr('d', gear)
    g.append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .attr('font-size', (d) => d.teeth * 3 / 2)
      .attr('dy', (d) => d.teeth * 3 / 2 / 2 - 4)
      .text((d) => d.name)

    // 自动化院 8x12
    g = frame.append('g')
      .attr('class', styles['planet'])
      .attr('transform', `translate(${-radius * 39}, ${-178})`)
      .datum({ teeth: 12, radius: radius * 12, name: '自动化' })
    g.append('path')
      .attr('d', gear)
    g.append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .attr('font-size', (d) => d.teeth * 3 / 2)
      .attr('dy', (d) => d.teeth * 3 / 2 / 2 - 4)
      .text((d) => d.name)

    // 山东临工 8x12
    g = frame.append('g')
      .attr('class', styles['planet'])
      .attr('transform', `translate(${-radius * 6}, ${-166})`)
      .datum({ teeth: 12, radius: -radius * 12, name: '山东临工' })
    g.append('path')
      .attr('d', gear)
    g.append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .attr('font-size', (d) => d.teeth * 3 / 2)
      .attr('dy', (d) => d.teeth * 3 / 2 / 2 - 4)
      .text((d) => d.name)

    // CAM 8x12
    g = frame.append('g')
      .attr('class', styles['planet'])
      .attr('transform', `translate(${radius * 44}, ${-182})`)
      .datum({ teeth: 12, radius: -radius * 12, name: 'CAM' })
    g.append('path')
      .attr('d', gear)
    g.append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .attr('font-size', (d) => d.teeth * 3 / 2)
      .attr('dy', (d) => d.teeth * 3 / 2 / 2 - 4)
      .text((d) => d.name)

    // 北京大学 8x12
    g = frame.append('g')
      .attr('class', styles['planet'])
      .attr('transform', `translate(${radius * 72 + 5}, ${116})`)
      .datum({ teeth: 12, radius: -radius * 12, name: '北京大学' })
    g.append('path')
      .attr('d', gear)
    g.append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .attr('font-size', (d) => d.teeth * 3 / 2)
      .attr('dy', (d) => d.teeth * 3 / 2 / 2 - 4)
      .text((d) => d.name)

    // LOVOL 8x11
    g = frame.append('g')
      .attr('class', styles['planet'])
      .attr('transform', `translate(${-radius * 47 - 4}, ${130})`)
      .datum({ teeth: 11, radius: radius * 11, name: 'LOVOL' })
    g.append('path')
      .attr('d', gear)
    g.append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .attr('font-size', (d) => d.teeth * 3 / 2)
      .attr('dy', (d) => d.teeth * 3 / 2 / 2 - 4)
      .text((d) => d.name)

    // TREE 8x8
    g = frame.append('g')
      .attr('class', styles['planet'])
      .attr('transform', `translate(${-radius * 82 + 2}, ${122})`)
      .datum({ teeth: 8, radius: -radius * 8, name: '不认识' })
    g.append('path')
      .attr('d', gear)
    g.append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .attr('font-size', (d) => d.teeth * 3 / 2)
      .attr('dy', (d) => d.teeth * 3 / 2 / 2 - 4)
      .text((d) => d.name)

    // CSTC 8x8
    g = frame.append('g')
      .attr('class', styles['planet'])
      .attr('transform', `translate(${-radius * 70}, ${52})`)
      .datum({ teeth: 8, radius: radius * 8, name: 'CSTC' })
    g.append('path')
      .attr('d', gear)
    g.append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .attr('font-size', (d) => d.teeth * 3 / 2)
      .attr('dy', (d) => d.teeth * 3 / 2 / 2 - 4)
      .text((d) => d.name)

    // 人民大学 8x8
    g = frame.append('g')
      .attr('class', styles['planet'])
      .attr('transform', `translate(${-radius * 11 - 4}, ${154})`)
      .datum({ teeth: 8, radius: -radius * 8, name: '人民大学' })
    g.append('path')
      .attr('d', gear)
    g.append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .attr('font-size', (d) => d.teeth * 3 / 2)
      .attr('dy', (d) => d.teeth * 3 / 2 / 2 - 4)
      .text((d) => d.name)

    // 复旦大学 8x8
    g = frame.append('g')
      .attr('class', styles['planet'])
      .attr('transform', `translate(${radius * 19 + 1}, ${-96})`)
      .datum({ teeth: 8, radius: radius * 8, name: '复旦大学' })
    g.append('path')
      .attr('d', gear)
    g.append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .attr('font-size', (d) => d.teeth * 3 / 2)
      .attr('dy', (d) => d.teeth * 3 / 2 / 2 - 4)
      .text((d) => d.name)

    // 诚益通 8x8
    g = frame.append('g')
      .attr('class', styles['planet'])
      .attr('transform', `translate(${radius * 22 + 2}, ${145})`)
      .datum({ teeth: 8, radius: radius * 8, name: '诚益通' })
    g.append('path')
      .attr('d', gear)
    g.append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .attr('font-size', (d) => d.teeth * 3 / 2)
      .attr('dy', (d) => d.teeth * 3 / 2 / 2 - 4)
      .text((d) => d.name)

    // 北京航空航天大学 8x8
    g = frame.append('g')
      .attr('class', styles['planet'])
      .attr('transform', `translate(${radius * 66}, ${-91})`)
      .datum({ teeth: 8, radius: -radius * 8, name: '北京航空航天大学' })
    g.append('path')
      .attr('d', gear)
    g.append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .attr('font-size', (d) => d.teeth * 3 / 2)
      .attr('dy', (d) => d.teeth * 3 / 2 / 2 - 4)
      .text((d) => d.name)

    // unkonw 8x8
    g = frame.append('g')
      .attr('class', styles['planet'])
      .attr('transform', `translate(${radius * 84 + 3}, ${-188})`)
      .datum({ teeth: 8, radius: -radius * 8, name: '不认识' })
    g.append('path')
      .attr('d', gear)
    g.append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .attr('font-size', (d) => d.teeth * 3 / 2)
      .attr('dy', (d) => d.teeth * 3 / 2 / 2 - 4)
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
          r3 = r2 * 3 / 5
        } else {
          r3 = 20
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

    d3.timer(function () {
      const angle = (Date.now() - start) * speed
      const transform = function (d) { return 'rotate(' + angle / d.radius + ')' }
      frame.selectAll('path').attr('transform', transform)
      frame.attr('transform', transform) // frame of reference
    })
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
