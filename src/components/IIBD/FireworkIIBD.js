import React from 'react'
import iibd from './assets/iiBD.png'
import styles from './FireworkIIBD.css'

class FireworkIIBD extends React.Component {
  constructor (props) {
    super(props)

    this.canvas = {}
    this.image = {}
    this.particles = []
    this.requestID = 0

    this.draw = this.draw.bind(this)
    this.go = this.go.bind(this)
  }
  componentDidMount () {
    const canvas = this.canvas
    const image = this.image
    const _this = this

    canvas.obj = this.refs.iibd

    if (canvas.obj.getContext) {
      canvas.ctx = canvas.obj.getContext('2d')

      canvas.w = canvas.obj.width = document.body.clientWidth
      canvas.h = canvas.obj.height = document.body.clientHeight

      let img = new Image()
      img.src = iibd
      // img.crossOrigin = ''
      img.onload = function () {
        image.obj = img
        image.w = img.width
        image.h = img.height
        image.x = parseInt(canvas.w / 2 - image.w / 2)
        image.y = 200
        console.log(image.w, image.h)

        canvas.ctx.drawImage(image.obj, image.x, image.y, image.w, image.h)
        image.imageData = canvas.ctx.getImageData(image.x, image.y, image.w, image.h)

        _this.calculate()
        // canvas.ctx.scale(0.3, 0.3)
        requestAnimationFrame(_this.go)
      }
    }
  }

  componentWillUnmount () {
    cancelAnimationFrame(this.requestID)
    console.log('cancel animation frame')
  }

  linear (t, b, c, d) {
    return c * t / d + b
  }

  easeInOutQuad (e, a, g, f) {
    e /= f / 2
    if (e < 1) {
      return g / 2 * e * e + a
    }
    e--
    return -g / 2 * (e * (e - 2) - 1) + a
  }

  easeOutElastic (g, e, k, j, f, i) {
    if (g == 0) {
      return e
    }
    if ((g /= j) == 1) {
      return e + k
    }
    if (!i) {
      i = j * 0.3
    }
    if (!f || f < Math.abs(k)) {
      f = k
      var h = i / 4
    } else {
      var h = i / (2 * Math.PI) * Math.asin(k / f)
    }
    return (f * Math.pow(2, -10 * g) * Math.sin((g * j - h) * (2 * Math.PI) / i) + k + e)
  }

  calculate () {
    const image = this.image
    const cols = 200
    const rows = 100
    const sWidth = parseInt(image.w / cols)
    const sHeight = parseInt(image.h / rows)
    let pos = 0
    var { data } = image.imageData
    const time = new Date().getTime()
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        pos = (j * sHeight * image.w + i * sWidth) * 4
        let particle = {
          x0: this.canvas.w / 2,  // start position
          y0: this.canvas.h - 200,
          x: image.x + i * sWidth + (Math.random() - 0.5) * 20,
          y: image.y + j * sHeight + (Math.random() - 0.5) * 20,
          delay: j / 20,
          currTime: 0,
          count: 0,
          duration: parseInt(1000 / 16.66) + 1,
          interval: parseInt(Math.random() * 10 * 0.5)
        }
        if (data[pos] < 200) {
          const r = data[pos]
          const g = data[pos + 1]
          const b = data[pos + 2]
          // const a = data[pos + 3] / 255
          const a = data[pos + 3] / 255  // more light
          particle.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
        }
        this.particles.push(particle)
      }
    }
  }

  draw () {
    const canvas = this.canvas
    const len = this.particles.length
    let currParticle
    for (let i = 0; i < len; i++) {
      currParticle = this.particles[i]
      canvas.ctx.fillStyle = currParticle.fillStyle
      canvas.ctx.fillRect(currParticle.x, currParticle.y, 2, 2)
    }
  }

  go () {
    const canvas = this.canvas
    canvas.ctx.clearRect(0, 0, canvas.w, canvas.h)
    const len = this.particles.length
    let currParticle
    let curX
    let curY
    let currTime = 0
    let duration = 0
    let currDelay = 0
    for (var i = 0; i < len; i++) {
      currParticle = this.particles[i]
      if (currParticle.count++ > currParticle.delay) {
        canvas.ctx.fillStyle = currParticle.fillStyle
        currTime = currParticle.currTime
        duration = currParticle.duration
        currDelay = currParticle.interval
        if (this.particles[len - 1].duration + this.particles[len - 1].interval < this.particles[len - 1].currTime / 2) {
          cancelAnimationFrame(this.requestID)
          this.draw()
          return
        } else {
          if (currTime < duration + currDelay) {
            if (currTime >= currDelay) {
              curX = this.easeOutElastic(currTime - currDelay, currParticle.x0, currParticle.x - currParticle.x0, duration)
              curY = this.easeOutElastic(currTime - currDelay, currParticle.y0, currParticle.y - currParticle.y0, duration)
              // console.log(curY)
              canvas.ctx.fillRect(curX, curY, 2, 2)
            }
          } else {
            canvas.ctx.fillRect(currParticle.x, currParticle.y, 2, 2)
          }
        }
        currParticle.currTime += Math.random() + 0.5
      }
    }
    this.requestID = requestAnimationFrame(this.go)
  }

  render () {
    return (
      <div className={styles['firework-iibd']}>
        <canvas ref='iibd' />
      </div>
    )
  }
}

export default FireworkIIBD
