// @flow
import React, { Component } from 'react'
import { TweenLite, TweenMax } from 'gsap'
import classNames from 'classnames/bind'
// import anime from 'animejs'
import License from 'components/License'
import items from './items'
import images from './images'
import styles from './Wheel1.css'

const cx = classNames.bind(styles)

type Props = {}
type State = {
  currentIndex: number
}

class Wheel1 extends Component {
  props: Props
  state: State

  constructor (props: Props) {
    super(props)

    this.state = {
      currentIndex: 0
    }

    this.handleClick = this.handleClick.bind(this)
    this.getItemClasses = this.getItemClasses.bind(this)
  }

  componentDidMount () {
    this.items = this.refs.svg.querySelectorAll(`.${styles['item']}`)
    TweenLite.set(this.items, {
      scale: 1
    })

    TweenMax.to(this.refs['item-' + this.state.currentIndex], 1, {
      scale: 1.10
    })
  }

  handleClick (index) {
    return (event) => {
      event.preventDefault()

      if (this.state.currentIndex === index) return false

      TweenMax.to(this.items, 0.5, {
        scale: 1
      })

      TweenMax.to(this.refs['item-' + index], 1, {
        scale: 1.10
      })

      this.setState({
        currentIndex: index
      })
    }
  }

  getItemClasses (index) {
    return cx({
      item: true,
      active: this.state.currentIndex === index
    })
  }

  render () {
    return (
      <div className={styles['container']}>
        <License>
          <a href='http://www.flaticon.com/packs/sharing-out-3' target='_blank'>
            icons designed by Freepik from Flaticon
          </a>
        </License>
        <div className={styles['infographic-content']}>
          <div className={styles['firm-number']}>77</div>
          <div className={styles['firm-title']}>Offices</div>
          <div className={styles['firm-tag']} />
        </div>
        <div className={styles['infographic']}>
          <svg className={styles['menu']}
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='-25 -25 554 554'
            ref='svg'
          >
            <filter id='dropShadow'>
              <feGaussianBlur in='SourceAlpha' stdDeviation='2' />
              <feOffset dx='0' dy='0' />
              <feMerge>
                <feMergeNode />
                <feMergeNode in='SourceGraphic' />
              </feMerge>
            </filter>

            {images.map((image, index) => (
              <defs key={index}>
                <pattern id={`imgItem-${index}`} x='0' y='0' width='1' height='1'>
                  <image transform={image.transform} width='264' height='183'
                    {...image}
                    xmlnsXlink='http://www.w3.org/1999/xlink' />
                </pattern>
              </defs>
            ))}

            <g id='itemsContainer'>
              {items.map((item, index) => (
                <a className={this.getItemClasses(index)} data-svg-origin='250 250'
                  ref={'item-' + index} key={index}
                  transform={item.transform}
                  xlinkHref=' ' tabIndex='0' role='link'
                  onClick={this.handleClick(index)}
                >
                  <path className={styles['img']} stroke='#111'
                    d={item.d} fill={`url(#imgItem-${index})`} />
                  <path className={styles['sector']} stroke='#111'
                    d={item.d} fill='none' />
                </a>
              ))}
            </g>

            <g id='circleContent'>
              <circle transform='matrix(1,0,0,1,190,190)'
                data-svg-origin='250 250' cx='60' cy='60' r='110' fill='#fff' filter='url(#dropShadow)' />
            </g>
          </svg>

        </div>
      </div>
    )
  }
}

export default Wheel1
