// @flow

type Point = {
  x: number,
  y: number
}

export function ps (p: Point) {
  return `${p.x} ${p.y}`
}
