// @flow
import React from 'react'
import { ps } from './utils'

function l (l: number) {
  const p1 = l / 32
  const p2 = l / 8 - 8
  const weight = l / 8
  const leftBottomPoint = { x: p2, y: l - p1 }
  const topLeftPoint = { x: p2, y: p1 }
  const topRightPoint = { x: p2 + weight, y: p1 }
  const centerLeftPoint = { x: p2 + weight, y: l - p1 - weight }
  const centerRightPoint = { x: l - p2 - 16, y: l - p1 - weight }
  const bottomRightPoint = { x: l - p2 - 16, y: l - p1 }

  return `M${ps(leftBottomPoint)} L${ps(topLeftPoint)} L${ps(topRightPoint)}
    L${ps(centerLeftPoint)} L${ps(centerRightPoint)} L${ps(bottomRightPoint)} Z`
}

export default () => (
  <svg version='1.1'
    width='112' height='128'
    viewBox='0 0 112 128'
    xmlns='http://www.w3.org/2000/svg'
    stroke='black'
    fill='none'
    ref={(svg) => {
      svg.querySelector('path').setAttribute('d', l(128))
    }}
  >
    <path id='L' d='' />
  </svg>
)
