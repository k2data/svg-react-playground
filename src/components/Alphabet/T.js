// @flow
import React from 'react'
import { ps } from './utils'

function t (w: number, h: number) {
  const p1 = h / 32
  const p2 = h / 8 - 8
  const weight = h / 8
  const leftTopPoint = { x: p2, y: p1 }
  const rightTopPoint = { x: w - p2, y: p1 }
  const rightMiddlePoint = { x: rightTopPoint.x, y: p1 + weight }
  const r = (w - 2 * p2 - weight) / 2
  const rightQuarterMiddlePoint = { x: rightTopPoint.x - r, y: rightMiddlePoint.y }
  const rightBottomPoint = { x: rightQuarterMiddlePoint.x, y: h - p1 }
  const leftBottomPoint = { x: p2 + r, y: rightBottomPoint.y }
  const leftQuarterMiddlePoint = { x: leftBottomPoint.x, y: rightMiddlePoint.y }
  const leftMiddlePoint = { x: p2, y: rightMiddlePoint.y }

  return `M${ps(leftTopPoint)} L${ps(rightTopPoint)} L${ps(rightMiddlePoint)}
    L${ps(rightQuarterMiddlePoint)} L${ps(rightBottomPoint)} L${ps(leftBottomPoint)}
    L${ps(leftQuarterMiddlePoint)} L${ps(leftMiddlePoint)} Z`
}

export default () => (
  <svg version='1.1'
    width='112' height='128'
    viewBox='0 0 112 128'
    xmlns='http://www.w3.org/2000/svg'
    stroke='black'
    fill='none'
    ref={(svg) => {
      svg.querySelector('path').setAttribute('d', t(112, 128))
    }}
  >
    <path id='T' d='' />
  </svg>
)
