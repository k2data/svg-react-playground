// @flow
import React from 'react'
import { ps } from './utils'

function b (w: number, h: number) {
  const p1 = h / 32
  const p2 = h / 8 - 8
  const weight = h / 8
  const leftTopPoint = { x: p2, y: p1 }
  const rightBottomPoint = { x: p2, y: h - p1 }
  const middle = (h - 2 * p1) / 2
  const rxBig = 30
  const len = w - rxBig - p2
  const midTopPoint = { x: len, y: leftTopPoint.y }
  const ry = middle / 2
  const leftMidPoint = { x: len + Math.pow(3, 0.5) / 2 * weight, y: h / 2 }
  const midBottomPoint = { x: len, y: rightBottomPoint.y }

  const upLeftTopPoint = { x: leftTopPoint.x + weight, y: leftTopPoint.y + weight }
  const upRightTopPoint = { x: len, y: upLeftTopPoint.y }
  const upRightBottomPoint = { x: len, y: h / 2 - weight / 2 }
  const upLeftBottomPoint = { x: upLeftTopPoint.x, y: upRightBottomPoint.y }
  const downLeftTopPoint = { x: upLeftTopPoint.x, y: h / 2 + weight / 2 }
  const downRightTopPoint = { x: len, y: downLeftTopPoint.y }
  const downRightBottomPoint = { x: len, y: rightBottomPoint.y - weight }
  const downLeftBottomPoint = { x: upLeftTopPoint.x, y: downRightBottomPoint.y }

  return `M${ps(rightBottomPoint)} L${ps(leftTopPoint)} L${ps(midTopPoint)}
    A${rxBig - weight / 2} ${ry} -15 1 1 ${ps(leftMidPoint)}
    A${rxBig - weight / 2} ${ry} 15 1 1 ${ps(midBottomPoint)} Z
    M${ps(upLeftTopPoint)} L${ps(upRightTopPoint)}
    A${rxBig - weight} ${ry - weight} 0 1 1 ${ps(upRightBottomPoint)} L${ps(upLeftBottomPoint)} Z
    M${ps(downLeftTopPoint)} L${ps(downRightTopPoint)}
    A${rxBig - weight} ${ry - weight} 0 1 1 ${ps(downRightBottomPoint)} L${ps(downLeftBottomPoint)} Z
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
      svg.querySelector('path').setAttribute('d', b(112, 128))
    }}
  >
    <path id='B' d='' />
  </svg>
)
