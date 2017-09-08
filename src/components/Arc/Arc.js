
import React from 'react'
import * as d3 from 'd3'
import { Col, Row } from 'antd'
import styles from './Arc.css'

class Arc extends React.Component {
  constructor (props) {
    super(props)

    this.rainbow = this.rainbow.bind(this)
  }
  componentDidMount () {
    this.rainbow()
    this.ColorClock()
  }

  rainbow () {
    const width = 400
    const height = 400

    const pi = Math.PI
    const a = pi * 2
    const n = 500

    const outerRadius = height / 2 - 20
    const innerRadius = outerRadius - 20

    const path =
    d3.select(this.refs.rainbow)
    .append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`)
    .selectAll('path')
    .data(d3.range(0, a, a / n))
    .enter()

    path
    .append('path')
    .attr('d', d3.arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius)
      .startAngle(d => d)
      .endAngle((d) => d + a / n))
    .style('fill', (d) => d3.hsl(d * 360 / a, 1, 0.6))
  }

  ColorClock () {
    const svg = d3.select(this.refs.clock)
    const width = svg.attr('width')
    const height = svg.attr('height')
    const radius = Math.min(width, height) / 1.8
    console.log(radius)
    const bodyRadius = radius / 23
    const dotRadius = bodyRadius - 3
    const pi = Math.PI

    const fields = [
      { radius: 0.2 * radius, format: d3.timeFormat('%B'), interval: d3.timeYear },
      { radius: 0.3 * radius, format: this.formatDate, interval: d3.timeMonth },
      { radius: 0.4 * radius, format: d3.timeFormat('%A'), interval: d3.timeWeek },
      { radius: 0.6 * radius, format: d3.timeFormat('%-H hours'), interval: d3.timeDay },
      { radius: 0.7 * radius, format: d3.timeFormat('%-M minutes'), interval: d3.timeHour },
      { radius: 0.8 * radius, format: d3.timeFormat('%-S seconds'), interval: d3.timeMinute }
    ]

    // const color = d3.scaleSequential(function (t) {
    //   return d3.hsl(t * 360, 1, 0.5) + ''
    // })

    // same as below
    const color = d3.scaleSequential(d3.interpolateRainbow)

    const arcBody = d3.arc()
      .startAngle((d) => {
        console.log(bodyRadius / d.radius)
        return (
          bodyRadius / d.radius
        )
      })
      .endAngle((d) => -pi - bodyRadius / d.radius)
      .innerRadius((d) => d.radius - bodyRadius)
      .outerRadius((d) => d.radius + bodyRadius)
      .cornerRadius(bodyRadius)

    const arcTextPath = d3.arc()
      .startAngle((d) => -bodyRadius / d.radius)
      .endAngle(-pi)
      .innerRadius((d) => d.radius)
      .outerRadius((d) => d.radius)

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`)

    g.append('g')
      .attr('class', styles['tracks'])
      .selectAll('circle')
      .data(fields)
      .enter()
      .append('circle')
      .attr('r', (d) => d.radius)

    const body = g.append('g')
    .attr('class', styles['bodies'])
    .selectAll('g')
    .data(fields)
    .enter()
    .append('g')

    body.append('path')
    .attr('d', (d) => (
        `${arcBody(d)}M0,${dotRadius - d.radius}a${dotRadius},${dotRadius},0 0,1 0,${-dotRadius * 2}
        a${dotRadius},${dotRadius},0 0,1 0,${dotRadius * 2}`))

    body.append('path')
    .attr('class', styles['text-path'])
    .attr('id', (d, i) => 'body-text-path' + i)
    .attr('d', arcTextPath)

    const bodyText = body.append('text')
    .attr('dy', '.35em')
    .append('textPath')
    .attr('xlink:href', (d, i) => '#body-text-path' + i)

    tick()

    d3.timer(tick)

    function tick () {
      var now = Date.now()

      fields.forEach(function (d) {
        const start = d.interval(now)
        const end = d.interval.offset(start, 1)
        d.angle = Math.round((now - start) / (end - start) * 360 * 100) / 100
      })

      body
      .style('fill', function (d) { return color(d.angle / 360) })
      .attr('transform', function (d) { return 'rotate(' + d.angle + ')' })

      bodyText
      .attr('startOffset', function (d, i) { return d.angle <= 90 || d.angle > 270 ? '100%' : '0%' })
      .attr('text-anchor', function (d, i) { return d.angle <= 90 || d.angle > 270 ? 'end' : 'start' })
      .text(function (d) { return d.format(now) })
    }
  }

  formatDate (d) {
    d = new Date(d).getDate()
    switch (d >= 10 && d <= 19 ? 10 : d % 10) {
      case 1: d += 'st'; break
      case 2: d += 'nd'; break
      case 3: d += 'rd'; break
      default: d += 'th'; break
    }
    return d
  }

  render () {
    return (
      <div className={styles['arc']}>
        <Row gutter={16}>
          <Col span={8}>
            <div className={styles['arc-box']} ref='aaa'>
              <svg ref='rainbow' width='400' height='400' />
            </div>
          </Col>
          <Col span={8}>
            <div className={styles['arc-box']}>
              <svg ref='clock' width='400' height='400' />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Arc
