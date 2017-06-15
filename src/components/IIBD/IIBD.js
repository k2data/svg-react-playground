import React from 'react'
import iibd from './assets/iiBD.png'
import styles from './IIBD.css'

class IIBD extends React.Component {
  constructor (props) {
    super(props)

    this.canvas = {}
    this.image = {}
    this.particles = []

    this.draw = this.draw.bind(this)
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
      img.crossOrigin = ''
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
        requestAnimationFrame(_this.draw)
      }
    }
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
          x: image.x + i * sWidth + (Math.random() - 0.5) * 20,
          y: image.y + j * sHeight + (Math.random() - 0.5) * 20
        }
        if (data[pos] < 200) {
          const r = data[pos]
          const g = data[pos + 1]
          const b = data[pos + 2]
          // const a = data[pos + 3] / 255
          const a = data[pos + 3] / 255  // more light
          particle.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
        }
        if (i % 3 === 0 && j % 5 === 3) {
          particle.flotage = true
          particle.startX = particle.x
          particle.startY = particle.y
          particle.startTime = time + parseInt(Math.random() * 20 * 1000)
          particle.killTime = time + parseInt(Math.random() * 35 * 1000)
          particle.speedX = (Math.random() - 0.5) * 2
          particle.speedY = (Math.random() - 0.5) * 0.9
        }
        this.particles.push(particle)
      }
    }
  }

  draw () {
    const canvas = this.canvas
    canvas.ctx.clearRect(0, 0, canvas.w, canvas.h)
    const len = this.particles.length
    let currParticle
    const time = new Date().getTime()
    for (var i = 0; i < len; i++) {
      currParticle = this.particles[i]
      if (currParticle.flotage && currParticle.startTime < time) {
        currParticle.x += currParticle.speedX
        currParticle.y += currParticle.speedY
      }
      if (currParticle.killTime < time) {
        currParticle.x = currParticle.startX
        currParticle.y = currParticle.startY
        currParticle.startTime = time + parseInt(Math.random() * 20 * 1000)
        currParticle.killTime = time + parseInt(Math.random() * 35 * 1000)
      }
      canvas.ctx.fillStyle = currParticle.fillStyle
      canvas.ctx.fillRect(currParticle.x, currParticle.y, 2, 2)
    }
    requestAnimationFrame(this.draw)
  }

  render () {
    return (
      <div className={styles['wrap']}>
        <canvas ref='iibd' />
      </div>
    )
  }
}

export default IIBD
