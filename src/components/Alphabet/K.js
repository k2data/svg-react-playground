import React from 'react'
import { ps } from './utils'

function k (l: number) {
  const p1 = l / 32
  const p2 = l / 16
  const weight = l / 8
  const leftBottomPoint = { x: p2, y: l - p1 }
  const topLeftPoint = { x: p2, y: p1 }
  const topSubLeftPoint = { x: p2 + weight, y: p1 }
  const leftMiddlePoint = { x: p2 + weight, y: l / 2 }
  const r = l - p2 - 16
  const blodWeight = Math.pow(2, 0.5) * weight
  const topSubRightPoint = { x: r - blodWeight, y: p1 }
  const topRightPoint = { x: r, y: p1 }
  const rightMiddlePoint = { x: p2 + weight + blodWeight, y:l / 2 }
  const rightBottomPoint = { x: topRightPoint.x, y: l - p1 }
  const rightSubBottomPoint = { x: topSubRightPoint.x, y: l - p1 }
  const bottomMiddlePoint = { x: p2 + weight + blodWeight / 2, y: l / 2 + blodWeight / 2 }
  const bottomLeftTopPoint = { x: p2 + weight, y: l / 2 + blodWeight }
  const bottomLeftPoint = { x: p2 + weight, y: l - p1 }

  return `M${ps(leftBottomPoint)} L${ps(topLeftPoint)} L${ps(topSubLeftPoint)}
  L${ps(leftMiddlePoint)} L${ps(topSubRightPoint)} L${ps(topRightPoint)}
  L${ps(rightMiddlePoint)} L${ps(rightBottomPoint)} L${ps(rightSubBottomPoint)}
  L${ps(bottomMiddlePoint)} L${ps(bottomLeftTopPoint)} L${ps(bottomLeftPoint)} Z`
}

export default () => (
  <svg version='1.1'
    width='128' height='128'
    viewBox='0 0 128 128'
    xmlns='http://www.w3.org/2000/svg'
    stroke='black'
    fill='none'
    ref={(svg) => {
      svg.querySelector('path').setAttribute('d', k(128))
    }}
  >
    <path id='K' d='' />
  </svg>
)
