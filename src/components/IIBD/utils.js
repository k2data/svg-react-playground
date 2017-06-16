export const linear = (t, b, c, d) => {
  return c * t / d + b
}

export const easeInOutQuad = (e, a, g, f) => {
  e /= f / 2
  if (e < 1) {
    return g / 2 * e * e + a
  }
  e--
  return -g / 2 * (e * (e - 2) - 1) + a
}

export const easeOutElastic = (g, e, k, j, f, i) => {
  let h
  if (g === 0) {
    return e
  }
  if ((g /= j) === 1) {
    return e + k
  }
  if (!i) {
    i = j * 0.3
  }
  if (!f || f < Math.abs(k)) {
    f = k
    h = i / 4
  } else {
    h = i / (2 * Math.PI) * Math.asin(k / f)
  }
  return (f * Math.pow(2, -10 * g) * Math.sin((g * j - h) * (2 * Math.PI) / i) + k + e)
}

export const easeOutBack = (e, a, h, g, f) => {
  if (f === undefined) {
    f = 1.70158
  }
  return h * ((e = e / g - 1) * e * ((f + 1) * e + f) + 1) + a
}
