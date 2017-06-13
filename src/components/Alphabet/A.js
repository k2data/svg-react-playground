import React from 'react'
import { ps } from './utils'

function a (l: number) {
  const p1 = l / 32
  const p2 = l / 16
  const leftPoint = { x: p2, y: l - p1 }
  const topPoint = { x: l / 2, y: p1 }
  const rightPoint = { x: l - p2, y: l - p1 }
  const footerWidth = l / 8
  const bottomBottomRight = { x: rightPoint.x - footerWidth, y: rightPoint.y }
  const footL = l - p2 * 2
  const height = l - p1 * 2
  const bottomRate = 0.25
  const d1 = { x: footL / 2 / height * height * bottomRate, y: height * bottomRate }
  const bottomTopRight = { x: bottomBottomRight.x - d1.x, y: bottomBottomRight.y - d1.y }
  const bottomTopLeft = { x: topPoint.x * 2 - bottomTopRight.x, y: bottomTopRight.y }
  const bottomBottomLeft = { x: topPoint.x * 2 - bottomBottomRight.x, y: bottomBottomRight.y }
  const d2 = {}
  d2.y = Math.sqrt(Math.pow(footerWidth, 2) / (1 + Math.pow(footL / 2 / height, 2)), 2)
  d2.x = (footL / 2) / height * d2.y
  const middleBottomRight = {
    x: bottomTopRight.x - d2.x,
    y: bottomTopRight.y - d2.y
  }
  const middleTop = { x: topPoint.x, y: height / (footL / 2) * 16 + 4 }
  const middleBottomLeft = { x: 2 * topPoint.x - middleBottomRight.x, y: middleBottomRight.y }

  return `M${ps(leftPoint)} L${ps(topPoint)} L${ps(rightPoint)}
    L${ps(bottomBottomRight)} L${ps(bottomTopRight)} L${ps(bottomTopLeft)}
    L${ps(bottomBottomLeft)} Z
    M${ps(middleBottomRight)} L${ps(middleTop)} L${ps(middleBottomLeft)} Z`
}

export default () => (
  <svg version='1.1'
    width='128' height='128'
    viewBox='0 0 128 128'
    xmlns='http://www.w3.org/2000/svg'
    stroke='black'
    fill='none'
    ref={(svg) => {
      svg.querySelector('path').setAttribute('d', a(128))
    }}
  >
    <path id='A' d='' />
  </svg>
)
