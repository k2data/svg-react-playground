import React from 'react'
import iiBD from './assets/iiBD.png'
import styles from './IIBD.css'

class IIBD extends React.Component {
  componentDidMount () {
    let image = {}
    let particles = []
    const canvas = this.refs.iibd
    const ctx = canvas.getContext('2d')
    let img = new Image()
    img.src = iiBD
    img.crossOrigin = ''

    img.onload = function () {
      image.obj = img
      image.w = img.width
      image.h = img.height
      image.x = 0
      image.y = 0
      ctx.drawImage(img, 0, 0)
      image.imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      console.log(image.imageData)
      console.log(image)

      calculate()

      draw()
    }

    function calculate () {
      var cols = 100
      var rows = 120
      var sWidth = parseInt(image.w / cols)
      var sHeight = parseInt(image.h / rows)

      var pos = 0
      var data = image.imageData.data
      for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
          pos = (j * sHeight * image.w + i * sWidth) * 4
          // console.log(pos)
          if (data[pos] > 30) {
            var particle = {
              x: image.x + i * sWidth,
              y: image.y + j * sHeight
            }
            // if (data[pos + 1] < 175 && data[pos + 2] < 10) {
            //   // particle.fillStyle = rgba()
            // } else if (data[pos + 1] < 75 && data[pos + 1] > 50) {
            //   particle.fillStyle = '#ff4085'
            // } else if (data[pos + 1] < 220 && data[pos + 1] > 190) {
            //   particle.fillStyle = '#00cfff'
            // } else if (data[pos + 1] < 195 && data[pos + 1] > 175) {
            //   particle.fillStyle = '#9abc1c'
            // }
            var r = data[pos]
            var g = data[pos + 1]
            var b = data[pos + 2]
            var a = data[pos + 3] / 255
            particle.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
          // console.log(`rgba(${r}, ${g}, ${b}, ${a})`)
            particles.push(particle)
          }
        }
      }
    }

    function draw () {
      ctx.clearRect(0, 200, canvas.width, canvas.height)

      var len = particles.length
      var currParticle = null

      for (var i = 0; i < len; i++) {
        currParticle = particles[i]

        ctx.fillStyle = currParticle.fillStyle
        ctx.fillRect(currParticle.x, currParticle.y + 200, 1, 1)
      }
    }
  }
  render () {
    return (
      <div>
        <canvas ref='iibd' width='600' height='400' />
        <div className={styles['test']} />
      </div>
    )
  }
}

export default IIBD
