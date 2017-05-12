// @flow
import React, { Component } from 'react'
import styles from './Subways.css'
import { select } from 'd3-selection'
import Line1 from './Line1'
import Line4 from './Line4'

const d3 = {
  select
}

const lineWidth = 37
const stationR = 22

type Props = {
}

export class Subways extends Component {
  props: Props
  draw: () => void
  drawLine: () => void
  textX: (position: string) => number
  textY: (position: string) => number
  textAnchor: (position: string) => string
  handleClickOnCanvas: () => void

  constructor (props: Props) {
    super(props)
    this.draw = this.draw.bind(this)
    this.drawLine = this.drawLine.bind(this)
    this.textAnchor = this.textAnchor.bind(this)
    this.handleClickOnCanvas = this.handleClickOnCanvas.bind(this)
  }

  componentDidMount () {
    this.draw()
  }

  draw () {
    const svg = d3.select(this.refs.svg)
    // const width = +svg.attr('width')
    // const height = +svg.attr('height')

    // Line 7:
    this.drawLine(svg, {
      d: `M3076 4480
          L3216 4652
          Q3240 4676,3280 4680
          H6456
          Q6505 4714,6500 4776
          V4976
          Q6522 5018,6564 5040
          H6860
        `,
      color: '#f3b26e',
      stationsData: [
        { x: 3076, y: 4480, name: '北京西站', text: 'top-right', isExchange: true, to: ['Line9'] },
        { x: 3280, y: 4680, name: '湾子', text: 'bottom' },
        { x: 3540, y: 4680, name: '达官营', text: 'bottom' },
        { x: 3820, y: 4680, name: '广安门内', text: 'top' },
        { x: 4124, y: 4680, name: '菜市口', text: 'bottom-left', isExchange: true, to: ['Line4'] },
        { x: 4348, y: 4680, name: '虎坊桥', text: 'bottom' },
        { x: 4555, y: 4680, name: '珠市口', text: 'bottom' },
        { x: 4805, y: 4680, name: '桥湾', text: 'top' },
        { x: 5052, y: 4680, name: '磁器口', text: 'bottom-left', isExchange: true, to: ['Line5'] },
        { x: 5268, y: 4680, name: '广渠门内', text: 'top' },
        { x: 5472, y: 4680, name: '广渠门外', text: 'bottom' },
        { x: 5816, y: 4680, name: '双井', text: 'top-left', isExchange: true, to: ['Line10'] },
        { x: 6092, y: 4680, name: '九龙山', text: 'top-left', isExchange: true, to: ['Line14'] },
        { x: 6300, y: 4680, name: '大郊亭', text: 'bottom' },
        { x: 6456, y: 4680, name: '百子湾', text: 'top' },
        { x: 6500, y: 4776, name: '化工', text: 'right' },
        { x: 6500, y: 4884, name: '南楼梓庄', text: 'right' },
        { x: 6500, y: 4976, name: '欢乐谷景区', text: 'left' },
        { x: 6564, y: 5040, name: '垡头', text: 'bottom', notOpened: true },
        { x: 6688, y: 5040, name: '双合', text: 'bottom' },
        { x: 6860, y: 5040, name: '焦化厂', text: 'top' }
      ]
    })

    // Line 9:
    this.drawLine(svg, {
      d: `M3076 3700
          V4480
          L2732 4708
          Q2688 4732,2700 4760
          V5632
        `,
      color: '#66b82f',
      stationsData: [
        { x: 3076, y: 3700, name: '国家图书馆', text: 'bottom-left', isExchange: true, to: ['Line4'] },
        { x: 3076, y: 3952, name: '白石桥南', text: 'top-right', isExchange: true, to: ['Line6'] },
        { x: 3076, y: 4132, name: '白堆子', text: 'right' },
        { x: 3076, y: 4300, name: '军事博物馆', text: 'top-right', isExchange: true, to: ['Line1'] },
        { x: 3076, y: 4480, name: '北京西站', text: 'top-right', isExchange: true, to: ['Line7'] },
        { x: 2940, y: 4572, name: '六里桥东', text: 'bottom-right' },
        { x: 2832, y: 4640, name: '六里桥', text: 'top-left', isExchange: true, to: ['Line10'] },
        { x: 2700, y: 4936, name: '七里庄', text: 'top-left', isExchange: true, to: ['Line14'] },
        { x: 2700, y: 5112, name: '丰台东大街', text: 'left' },
        { x: 2700, y: 5236, name: '丰台南路', text: 'left' },
        { x: 2700, y: 5348, name: '科怡路', text: 'left' },
        { x: 2700, y: 5488, name: '丰台科技园', text: 'left' },
        { x: 2700, y: 5632, name: '郭公庄', text: 'right', isExchange: true, to: ['LineFANGSHAN'] }
      ]
    })

    // Line2
    this.drawLine(svg, {
      d: `M3767 3698 C3767 3610, 3817 3589.5 , 3844 3589.5 H5290
        C5312 3589.5, 5363 3616, 5363 3681 V4453
        C5362 4494, 5330 4538, 5283 4538 H3848
        C3794 4538, 3767 4483, 3767 4449 V3698`,
      color: 'rgb(37,85,133)',
      stationsData: [
        { x: 3767, y: 3698, name: '西直门', text: 'left', isExchange: true, to: ['Line2', 'Line4'] },
        { x: 4076, y: 3589, name: '积水潭', text: 'top' },
        { x: 4554, y: 3589, name: '鼓楼大街', text: 'top', isExchange: true, to: ['Line8'] },
        { x: 4788, y: 3589, name: '安定门', text: 'top' },
        { x: 5049, y: 3589, name: '雍和宫', text: 'top', isExchange: true, to: ['Line5'] },
        { x: 5362, y: 3699, name: '东直门', text: 'top', isExchange: true, to: ['Line13', 'AirportExpress'] },
        { x: 5363, y: 3891, name: '东四十条', text: 'right' },
        { x: 5363, y: 4071, name: '朝阳门', text: 'right', isExchange: true, to: ['Line6'] },
        { x: 5363, y: 4308, name: '建国门', text: 'right', isExchange: true, to: ['Line1'] },
        { x: 5331.5, y: 4520, name: '北京站', text: 'right' },
        { x: 5049, y: 4540, name: '崇文门', text: 'top', isExchange: true, to: ['Line5'] },
        { x: 4543.5, y: 4538, name: '前门', text: 'bottom' },
        { x: 4319, y: 4538, name: '和平门', text: 'top' },
        { x: 4130, y: 4538, name: '宣武门', text: 'top', isExchange: true, to: ['Line4'] },
        { x: 3781, y: 4495.5, name: '长椿街', text: 'left' },
        { x: 3767, y: 4306, name: '复兴门', text: 'right', isExchange: true, to: ['Line1'] },
        { x: 3767, y: 4127, name: '阜成门', text: 'left' },
        { x: 3767, y: 3952, name: '车公庄', text: 'top', isExchange: true, to: ['Line6'] }
      ]
    })

    // Line 5:
    this.drawLine(svg, {
      d: 'M5049 1978 V5347',
      color: 'rgb(147,45,118)',
      stationsData: [
        { x: 5049, y: 1978, name: '天通苑北', text: 'right' },
        { x: 5049, y: 2130, name: '天通苑', text: 'right' },
        { x: 5049, y: 2300, name: '天通苑南', text: 'right' },
        { x: 5049, y: 2453, name: '立水桥', text: 'left', isExchange: true, to: ['Line13'] },
        { x: 5048, y: 2591, name: '立水桥南', text: 'right' },
        { x: 5049, y: 2729, name: '北苑路北', text: 'right' },
        { x: 5049, y: 2908.5, name: '大屯路东', text: 'right', isExchange: true, to: ['Line15'] },
        { x: 5049, y: 3060, name: '惠新西街北口', text: 'right' },
        { x: 5049, y: 3192, name: '惠新西街南口', text: 'right', isExchange: true, to: ['Line10'] },
        { x: 5049, y: 3361, name: '和平西桥', text: 'right' },
        { x: 5049, y: 3477, name: '和平里北街', text: 'right' },
        { x: 5049, y: 3590, name: '雍和宫', text: 'left', isExchange: true, to: ['Line2'] },
        { x: 5049, y: 3774.5, name: '北新桥', text: 'right' },
        { x: 5049, y: 3901.5, name: '张自忠路', text: 'right' },
        { x: 5049, y: 4071, name: '东四', text: 'right', isExchange: true, to: ['Line6'] },
        { x: 5049, y: 4185.5, name: '灯市口', text: 'right' },
        { x: 5049, y: 4307, name: '东单', text: 'right', isExchange: true, to: ['Line1'] },
        { x: 5049, y: 4540, name: '崇文门', text: 'top', isExchange: true, to: ['Line2'] },
        { x: 5049, y: 4684, name: '磁器口', text: 'left', isExchange: true, to: ['Line7'] },
        { x: 5049, y: 4839, name: '天坛东门', text: 'right' },
        { x: 5049, y: 4995, name: '蒲黄榆', text: 'bottom', isExchange: true, to: ['Line14'] },
        { x: 5049, y: 5168, name: '刘家窑', text: 'left' },
        { x: 5049, y: 5347, name: '宋家庄', text: 'right', isExchange: true, to: ['Line10'] }
      ]
    })

    // Line 13:
    this.drawLine(svg, {
      d: `M3767 3698 C3727 3698, 3654 3667, 3654 3627 V2580
        C3654 2517, 3722 2453, 3785 2453 H5318
        C5398 2453, 5452 2524, 5452 2604 V3620
        C5452 3670, 5411 3699, 5362 3699
        `,
      color: '#ede611',
      stationsData: [
        { x: 3767, y: 3698, name: '西直门', text: 'left', isExchange: true, to: ['Line2', 'Line4'] },
        { x: 3654, y: 3440, name: '大钟寺', text: 'left' },
        { x: 3654, y: 3191, name: '知春路', text: 'left', isExchange: true, to: ['Line10'] },
        { x: 3654, y: 3002, name: '五道口', text: 'left' },
        { x: 3654, y: 2838, name: '上地', text: 'left' },
        { x: 3654, y: 2584, name: '西二旗', text: 'left', isExchange: true, to: ['LineCHANGPING'] },
        { x: 3851.5, y: 2453, name: '龙泽', text: 'top' },
        { x: 4074.5, y: 2453, name: '回龙观', text: 'top' },
        { x: 4388, y: 2453, name: '霍营', text: 'top', isExchange: true, to: ['Line8'] },
        { x: 5049, y: 2453, name: '立水桥', text: 'top', isExchange: true, to: ['Line5'] },
        { x: 5452, y: 2606, name: '北苑', text: 'right' },
        { x: 5452, y: 2908.5, name: '望京西', text: 'right', isExchange: true, to: ['Line15'] },
        { x: 5452, y: 3191, name: '芍药居', text: 'right', isExchange: true, to: ['Line10'] },
        { x: 5452, y: 3394, name: '光熙门', text: 'right' },
        { x: 5452, y: 3532, name: '柳芳', text: 'right' },
        { x: 5362, y: 3699, name: '东直门', text: 'left', isExchange: true, to: ['Line2', 'AirportExpress'] }
      ]
    })

    // Line 14:
    this.drawLine(svg, {
      d: `M1709 4937 H2834 Z
        M4127 4995 H6016 C6069 4995, 6100 4942, 6100 4900 V3292
        C6095 3264, 6094 3241, 6063 3210 L5924 3058
        C5882 3021, 5872 2977, 5872 2909 V2575`,
      color: 'rgb(187,145,147)',
      stationsData: [
        { x: 1709, y: 4937, name: '张郭庄', text: 'top' },
        { x: 1875, y: 4937, name: '园博园', text: 'bottom' },
        { x: 2060, y: 4937, name: '大瓦窑', text: 'top' },
        { x: 2233.5, y: 4937, name: '郭庄子', text: 'bottom' },
        { x: 2477, y: 4937, name: '大井', text: 'bottom' },
        { x: 2700, y: 4937, name: '七里庄', text: 'bottom', isExchange: true, to: ['Line9'] },
        { x: 2834, y: 4937, name: '西局', text: 'right', isExchange: true, to: ['Line10'] },
        { x: 4127, y: 4995, name: '北京南站', text: 'left' },
        { x: 4577.5, y: 4995, name: '永定门外', text: 'bottom' },
        { x: 4796, y: 4995, name: '景泰', text: 'top' },
        { x: 5049, y: 4995, name: '蒲黄榆', text: 'bottom', isExchange: true, to: ['Line5'] },
        { x: 5449, y: 4995, name: '方庄', text: 'bottom' },
        { x: 5817, y: 4995, name: '十里河', text: 'bottom', isExchange: true, to: ['Line10'] },
        { x: 5984, y: 4995, name: '北工大西门', text: 'top' },
        { x: 6100, y: 4682, name: '九龙山', text: 'bottom', isExchange: true, to: ['Line7'] },
        { x: 6100, y: 4307, name: '大望路', text: 'bottom', isExchange: true, to: ['Line1'] },
        { x: 6100, y: 4071, name: '金台路', text: 'bottom', isExchange: true, to: ['Line6'] },
        { x: 6100, y: 3887, name: '朝阳公园', text: 'top' },
        { x: 6100, y: 3758.5, name: '枣营', text: 'bottom' },
        { x: 6100, y: 3628, name: '东风北桥', text: 'bottom' },
        { x: 6100, y: 3514.5, name: '将台', text: 'bottom' },
        { x: 6031, y: 3175.5, name: '望京南', text: 'top' },
        { x: 5923, y: 3057, name: '阜通', text: 'bottom' },
        { x: 5872, y: 2908.5, name: '望京', text: 'bottom', isExchange: true, to: ['Line15'] },
        { x: 5872, y: 2818, name: '东湖渠', text: 'top' },
        { x: 5872, y: 2704, name: '来广营', text: 'bottom' },
        { x: 5872, y: 2575, name: '善各庄', text: 'bottom' }
      ]
    })
    // Line 15:
    this.drawLine(svg, {
      d: `M3795 2908.5 H6455.5
        C6465.5 2908.5, 6485 2892.5, 6485 2882.5 V1985.5
        C6485 1968.5, 6495.5 1952.5, 6512.5 1952.5 H7895.5
        `,
      color: '#603471',
      stationsData: [
        { x: 3795, y: 2908.5, name: '清华东路西口', text: 'top' },
        { x: 4038, y: 2908.5, name: '六道口', text: 'top' },
        { x: 4260, y: 2908.5, name: '北沙滩', text: 'top' },
        { x: 4554, y: 2908.5, name: '奥林匹克公园', text: 'bottom-left', isExchange: true, to: ['Line8'] },
        { x: 4795, y: 2908.5, name: '安立路', text: 'top' },
        { x: 5049, y: 2908.5, name: '大屯路东', text: 'top-right', isExchange: true, to: ['Line5'] },
        { x: 5245, y: 2908.5, name: '关庄', text: 'bottom' },
        { x: 5452, y: 2908.5, name: '望京西', text: 'top-right', isExchange: true, to: ['Line13'] },
        { x: 5869.5, y: 2908.5, name: '望京', text: 'bottom-left', isExchange: true, to: ['Line14'] },
        { x: 6241.5, y: 2908.5, name: '望京东', text: 'top' },
        { x: 6485, y: 2767.5, name: '崔各庄', text: 'right' },
        { x: 6485, y: 2620.5, name: '马泉营', text: 'right' },
        { x: 6485, y: 2467.5, name: '孙河', text: 'right' },
        { x: 6485, y: 2321.5, name: '国展', text: 'left' },
        { x: 6485, y: 2173.5, name: '花梨坎', text: 'left' },
        { x: 6485, y: 2017.5, name: '后沙峪', text: 'left' },
        { x: 6775, y: 1952.5, name: '南法信', text: 'bottom' },
        { x: 7143, y: 1952.5, name: '石门', text: 'top' },
        { x: 7493.5, y: 1952.5, name: '顺义', text: 'bottom' },
        { x: 7895.5, y: 1952.5, name: '俸伯', text: 'top' }
      ]
    })

    // YIZHUANG Line:
    this.drawLine(svg, {
      d:`M5048.5 5345.5 ,V5536.5
        L5608.5 6076.5
        C5643 6111.5,5680 6113.5,5723.5 6115.5
        H6485
        `,
      color: '#DC1773',
      stationsData: [
         { x: 5048.5, y: 5345.5, name: '宋家庄', text: 'bottom-right', isExchange: true, to: ['Line8', 'Line10'] },
         { x: 5048.5, y: 5536.5, name: '肖村', text: 'left' },
         { x: 5125, y: 5614.5, name: '小红门', text: 'right' },
         { x: 5202, y: 5689.5, name: '旧宫', text: 'left' },
         { x: 5289, y: 5768.5, name: '亦庄桥', text: 'right' },
         { x: 5359.5, y: 5840.5, name: '亦庄文化园', text: 'left' },
         { x: 5438.5, y: 5914.5, name: '万源街', text: 'right' },
         { x: 5527.5, y: 6001.5, name: '荣京东街', text: 'left' },
         { x: 5608.5, y: 6076.5, name: '荣昌东街', text: 'right' },
         { x: 5723.5, y: 6115.5, name: '同济南路', text: 'bottom' },
         { x: 5919, y: 6115.5, name: '经海路', text: 'bottom' },
         { x: 6112, y: 6115.5, name: '次渠南', text: 'top' },
         { x: 6303, y: 6115.5, name: '次渠', text: 'bottom' },
         { x: 6485, y: 6115.5, name: '亦庄火车站', text: 'top', notOpened: true }
      ]
    })

     // FANGSHAN Line:
    this.drawLine(svg, {
      d: `M2694 5634
           L1983 6360
           L1230 6360
         `,
      color: '#D85F34',
      stationsData: [
         { x: 2694, y: 5634, name: '郭公庄', text: 'right', isExchange: true, to: ['Line9'] },
         { x: 2586, y: 5745, name: '大葆台', text: 'left' },
         { x: 2481, y: 5853, name: '稻田', text: 'right' },
         { x: 2385, y: 5949, name: '长阳', text: 'left' },
         { x: 2283, y: 6051, name: '篱笆房', text: 'right' },
         { x: 2196, y: 6141, name: '广阳城', text: 'left' },
         { x: 2097, y: 6237, name: '良乡大学城北', text: 'right' },
         { x: 1983, y: 6360, name: '良乡大学城', text: 'right' },
         { x: 1779, y: 6360, name: '良乡大学城西', text: 'bottom' },
         { x: 1536, y: 6360, name: '良乡南关', text: 'top' },
         { x: 1230, y: 6360, name: '苏庄', text: 'bottom' }
      ]
    })

    this.drawLine(svg, Line1)
    this.drawLine(svg, Line4)
  }

  drawLine (svg: Object, options: Object) {
    const { d, color, stationsData = [] } = options
    const line = svg.append('g')
    line.append('path')
      // x/y the same, x/y +- X (30 ~ 70)
      .attr('d', d)
      .attr('stroke', color || 'black')
      .attr('fill', 'none')
      .attr('stroke-width', lineWidth)

    const stations = line.selectAll('g')
      .data(stationsData)
      .enter()
      .append('g')
      // .attr('class', styles['station'])

    stations.append('circle')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', stationR)
      .attr('class', styles['station--circle'])

    stations.append('text')
      .attr('x', (d) => d.x + this.textX(d.text))
      .attr('y', (d) => d.y + this.textY(d.text))
      .attr('class', styles['station--text'])
      .attr('text-anchor', (d) => this.textAnchor(d.text))
      .text((d) => d.isExchange ? '' : d.name)
  }

  textX (position: string): number {
    switch (position) {
      case 'left':
        return -40
      case 'top': case 'bottom':
        return 0
      case 'right':
        return 40
      default:
        return 40
    }
  }

  textY (position: string): number {
    switch (position) {
      case 'left': case 'right':
        return 0
      case 'top':
        return -40
      case 'bottom':
        return 60
      default:
        return 40
    }
  }

  textAnchor (position: string): string {
    switch (position) {
      case 'left':
        return 'end'
      case 'top': case 'bottom':
        return 'middle'
      case 'right':
        return 'start'
      default:
        return 'start'
    }
  }

  handleClickOnCanvas (e: MouseEvent) {
    const rect = this.refs.canvas.getBoundingClientRect()
    const coor = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
    console.log(coor)
  }

  render () {
    return (
      <div className={styles['canvas']} ref='canvas'
        onClick={this.handleClickOnCanvas}
      >
        <img src='/images/subway_map.jpg' className={styles['img-layer']} />
        <svg className={styles['svg-layer']}
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          width='6719'
          height='9448'
          viewBox='0 0 9448 6719'
          ref='svg'
        />
      </div>
    )
  }
}

export default Subways
