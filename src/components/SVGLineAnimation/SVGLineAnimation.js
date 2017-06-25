// @flow
import React from 'react'
import styles from './SVGLineAnimation.css'

export default () => (
  <div className={styles['main']}>
    <svg className={styles['demo']}>
      <symbol id='text' className={styles['text']}>
        <text x='20%' y='70%'>K2DATA</text>
      </symbol>
      <g>
        <use xlinkHref='#text' className={styles['use-text']} />
        <use xlinkHref='#text' className={styles['use-text']} />
        <use xlinkHref='#text' className={styles['use-text']} />
        <use xlinkHref='#text' className={styles['use-text']} />
        <use xlinkHref='#text' className={styles['use-text']} />
      </g>
    </svg>
    <svg className={styles['demo']}>
      <symbol id='text2' className={styles['text']}>
        <text x='20%' y='50%'>K2Sigma</text>
      </symbol>
      <g>
        <use xlinkHref='#text2' className={styles['use-text']} />
        <use xlinkHref='#text2' className={styles['use-text']} />
        <use xlinkHref='#text2' className={styles['use-text']} />
        <use xlinkHref='#text2' className={styles['use-text']} />
        <use xlinkHref='#text2' className={styles['use-text']} />
      </g>
    </svg>
  </div>
)
