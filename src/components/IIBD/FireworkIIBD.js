import React from 'react'
import iibd from './assets/iiBD.png'
import k2data from './assets/k2data.png'
import styles from './FireworkIIBD.css'
import { Button } from 'antd'
import * as Easings from './utils'

class FireworkIIBD extends React.Component {
  constructor (props) {
    super(props)

    this.canvas = {}
    this.image = {}
    this.particles = []
    this.requestID = 0

    this.state = {
      type: 'linear',
      complete: false
    }

    this.draw = this.draw.bind(this)
    this.go = this.go.bind(this)
    this.reload = this.reload.bind(this)
    this.onClick = this.onClick.bind(this)
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
      img.src = k2data
      img.crossOrigin = 'anonymous'
      img.onload = function () {
        image.obj = img
        image.w = img.width
        image.h = img.height
        image.x = parseInt(canvas.w / 2 - image.w / 2)
        image.y = 200

        canvas.ctx.drawImage(image.obj, image.x, image.y, image.w, image.h)
        image.imageData = canvas.ctx.getImageData(image.x, image.y, image.w, image.h)

        _this.calculate()
        // canvas.ctx.scale(0.3, 0.3)
        requestAnimationFrame(_this.go)
      }
    }
  }

  componentDidUpdate () {
    if (!this.state.complete) {
      this.calculate()
      requestAnimationFrame(this.go)
    }
  }

  componentWillUnmount () {
    cancelAnimationFrame(this.requestID)
    console.log('cancel animation frame')
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
          x: image.x + i * sWidth + (Math.random() - 0.5) * 10,
          y: image.y + j * sHeight + (Math.random() - 0.5) * 10,
          delay: j * 3,
          currTime: 0,
          count: 0,
          duration: parseInt(1000 / 16.66),
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
    // this.setState({ complete: false })
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
          this.setState({ complete: true })
          return
        } else {
          if (currTime < duration + currDelay) {
            if (currTime >= currDelay) {
              curX = Easings[this.state.type](currTime - currDelay, currParticle.x0, currParticle.x - currParticle.x0, duration)
              curY = Easings[this.state.type](currTime - currDelay, currParticle.y0, currParticle.y - currParticle.y0, duration)
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

  reload () {
    this.particles = []
    this.setState({ complete: false })
  }

  onClick (e) {
    let type
    if (e.target.nodeName === 'SPAN') {
      type = e.target.innerHTML
    } else if (e.target.nodeName === 'BUTTON') {
      type = e.target.firstChild.innerHTML
    }
    this.particles = []
    this.setState({ type, complete: false })
  }

  render () {
    const display = this.state.complete ? 'none' : 'block'
    const opacity = this.state.complete ? '1' : '0.4'
    return (
      <div className={styles['firework-iibd']}>
        <canvas ref='iibd' />
        <aside style={{ opacity }}>
          <div className={styles['modal']} style={{ display }} />
          <Button ghost type='primary' icon='reload' onClick={this.reload} />
          <Button ghost type={this.state.type === 'linear' ? '' : 'primary'} onClick={this.onClick}>
            linear
          </Button>
          <Button ghost type={this.state.type === 'easeInOutQuad' ? '' : 'primary'} onClick={this.onClick}>
            easeInOutQuad
          </Button>
          <Button ghost type={this.state.type === 'easeOutElastic' ? '' : 'primary'} onClick={this.onClick}>
            easeOutElastic
          </Button>
          <Button ghost type={this.state.type === 'easeOutBack' ? '' : 'primary'} onClick={this.onClick}>
            easeOutBack
          </Button>
        </aside>
      </div>
    )
  }
}

export default FireworkIIBD
