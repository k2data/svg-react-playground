// @flow
import React from 'react'
import { ps } from './utils'

function d (w: number, h: number) {
  const p1 = h / 32
  const p2 = h / 8 - 8
  const weight = h / 8
  const leftTopPoint = { x: p2, y: p1 }
  const leftBottomPoint = { x: p2, y: h - p1 }
  const middle = (h - 2 * p1) / 2
  const rxBig = 60
  const len = w - rxBig - p2
  const midTopPoint = { x: len, y: leftTopPoint.y }
  const ry = middle
  const upLeftTopPoint = { x: leftTopPoint.x + weight, y: leftTopPoint.y + weight }
  const upRightTopPoint = { x: len, y: upLeftTopPoint.y }
  const upRightBottomPoint = { x: len, y: leftBottomPoint.y - weight }
  const upLeftBottomPoint = { x: upLeftTopPoint.x, y: upRightBottomPoint.y }
  const rightBottomPoint = { x: midTopPoint.x, y: leftBottomPoint.y }

  return `M${ps(leftBottomPoint)} L${ps(leftTopPoint)} L${ps(midTopPoint)}
    A${rxBig} ${ry} 0 1 1 ${ps(rightBottomPoint)} Z
    M${ps(upLeftTopPoint)} L${ps(upRightTopPoint)}
    A${rxBig - weight} ${ry - weight} 0 1 1 ${ps(upRightBottomPoint)} L${ps(upLeftBottomPoint)} Z
  `
}

export default () => (
  <svg version='1.1'
    width='112' height='128'
    viewBox='0 0 112 128'
    xmlns='http://www.w3.org/2000/svg'
    stroke='black'
    fill='none'
    ref={(svg) => {
      svg.querySelector('path').setAttribute('d', d(112, 128))
    }}
  >
    <path id='D' d='' />
  </svg>
)
