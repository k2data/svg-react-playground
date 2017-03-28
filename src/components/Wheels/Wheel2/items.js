export const style = {
  stroke: '#bbb',
  fill: 'rgb(255, 255, 255)',
  fillOpacity: 0.5,
  strokeWidth: 1
}

export const symbol = {
  w: 40,
  h: 60,
  text: {
    fill: '#666',
    dy: '1em',
    textAnchor: 'middle',
    fontSize: '12px'
  }
}

export default {
  s1: {
    name: 's1',
    symbol,
    attr: style,
    image: require('../assets/svg/001-maps-and-flags.svg')
  },
  s2: {
    name: 's2',
    symbol,
    attr: style,
    image: require('../assets/svg/002-pallet.svg')
  },
  s3: {
    name: 's3',
    symbol,
    attr: style,
    image: require('../assets/svg/003-freight.svg')
  },
  s4: {
    name: 's4',
    symbol,
    attr: style,
    image: require('../assets/svg/004-import.svg')
  },
  s5: {
    name: 's5',
    symbol,
    attr: style,
    image: require('../assets/svg/005-transportation.svg')
  },
  s6: {
    name: 's6',
    symbol,
    attr: style,
    image: require('../assets/svg/006-chronometers.svg')
  },
  s7: {
    name: 's7',
    symbol,
    attr: style,
    image: require('../assets/svg/007-factories.svg')
  }
}
