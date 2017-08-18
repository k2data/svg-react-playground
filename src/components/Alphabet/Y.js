// @flow
import React from 'react'
import { ps } from './utils'

function y (w: number, h: number) {
  const p1 = h / 32
  const p2 = h / 8 - 8
  const weight = h / 8
  const boldWeight = Math.pow(2, 0.5) * weight
  const leftBottomPoint = { x: w / 2 - 1 / 2 * weight, y: h - p1 }
  const leftMiddlePoint = { x: leftBottomPoint.x, y: 1 / 3 * h + boldWeight }
  const leftTopPoint = { x: p2, y: p1 }
  const leftQuarterMiddlePoint = { x: p2 + boldWeight, y: p1 }
  const centerPoint = { x: w / 2, y: leftMiddlePoint.y - boldWeight }
  const rightQuarterMiddlePoint = { x: w - p2 - boldWeight, y: p1 }
  const rightTopPoint = { x: w - p2, y: p1 }
  const rightMiddlePoint = { x: leftBottomPoint.x + weight, y: leftMiddlePoint.y }
  const rightBottomPoint = { x: rightMiddlePoint.x, y: h - p1 }

  return `M${ps(leftBottomPoint)} L${ps(leftMiddlePoint)} L${ps(leftTopPoint)}
    L${ps(leftQuarterMiddlePoint)} L${ps(centerPoint)} L${ps(rightQuarterMiddlePoint)}
    L${ps(rightTopPoint)} L${ps(rightMiddlePoint)} L${ps(rightBottomPoint)} Z`
}

export default () => (
  <svg version='1.1'
    width='112' height='128'
    viewBox='0 0 112 128'
    xmlns='http://www.w3.org/2000/svg'
    stroke='black'
    fill='none'
    ref={(svg) => {
      svg.querySelector('path').setAttribute('d', y(112, 128))
    }}
  >
    <path id='L' d='' />
  </svg>
)
