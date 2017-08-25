import * as logos from './logos'

const radius = 6

export default [
  { teeth: 18,
    radius: radius * 18,
    name: '', // 清华大学
    transform: `translate(${-radius * 18}, 0)`,
    logo: {
      d: logos.qinghua, transform: `translate(${-radius * 11 - 2}, -${radius * 11 - 2}) scale(0.34)`, stroke:`${2 / 0.34}`
    } },
  { teeth: 18,
    radius: radius * 18,
    name: '金风科技',
    size: '18px',
    dy: '50',
    transform: `translate(${-radius * 78 - 3}, ${-148})`,
    logo: {
      d: logos.gw, transform: `translate(${-radius * 11}, -${radius * 9}) scale(1.1)`, stroke:`${2 / 1.1}`
    } },
  { teeth: 18,
    radius: radius * 18,
    name: '', // K2DATA
    transform: `translate(${radius * 44}, ${0})`,
    logo: {
      d: logos.k2data, transform: `translate(${-radius * 10}, -${radius * 5}) scale(0.3)`, stroke:`${2 / 0.3}`
    } },
  { teeth: 18,
    radius: radius * 18,
    name: '中国石油',
    size: '18px',
    dy: '50',
    transform: `translate(${radius * 91}, ${-33})`,
    logo: {
      d: logos.shiyou, transform: `translate(${-radius * 8}, -${radius * 10}) scale(0.24)`, stroke:`${2 / 0.24}`
    } },
  { teeth: 15,
    radius: -radius * 15,
    name: '台达',
    transform: `translate(${-radius * 51 - 2}, ${-32})`,
    size: '14px',
    dx: '14',
    logo: {
      d: logos.taida, transform: `translate(${-radius * 7 - 4}, -${radius * 2}) scale(0.24)`, stroke:`${2 / 0.24}`
    } },
  { teeth: 13,
    radius: -radius * 13,
    name: '', // 陕鼓
    transform: `translate(${radius * 13}, ${28})`,
    logo: {
      d: logos.shaangu, transform: `translate(${-radius * 7 - 4}, -${radius * 2}) scale(0.24)`, stroke:`${2 / 0.24}`
    } },
  { teeth: 12,
    radius: -radius * 12,
    name: 'sany',
    size: '14px',
    dy: '36',
    transform: `translate(${-radius * 96 - 2}, ${0})`,
    logo: {
      d: logos.sany, transform: `translate(${-radius * 5}, -${radius * 6}) scale(0.14)`, stroke: `${2 / 0.14}`
    } },
  { teeth: 12,
    radius: radius * 12,
    name: '自动化院',
    size: '11px',
    dy: '24',
    transform: `translate(${-radius * 39}, ${-178})`,
    logo: {
      d: logos.csr, transform: `translate(${-radius * 5}, -${radius * 6}) scale(0.16)`, stroke: `${2 / 0.16}`
    } },
  { teeth: 12,
    radius: -radius * 12,
    name: '', // 山东临工
    transform: `translate(${-radius * 6}, ${-166})`,
    logo: {
      d: logos.lingong, transform: `translate(${-radius * 6}, -${radius * 6}) scale(0.18)`, stroke: `${2 / 0.18}`
    } },
  { teeth: 12,
    radius: -radius * 12,
    name: '', // CAM
    transform: `translate(${radius * 44}, ${-182})`,
    logo: {
      d: logos.cam, transform: `translate(${-radius * 7}, -${radius * 6}) scale(0.2)`, stroke: `${2 / 0.2}`
    } },
  { teeth: 12,
    radius: -radius * 12,
    name: '', // 北京大学
    transform: `translate(${radius * 72 + 5}, ${116})`,
    logo: {
      d: logos.beida, transform: `translate(${-radius * 6 - 3}, -${radius * 7 - 3}) scale(0.2)`, stroke: `${2 / 0.2}`
    } },
  { teeth: 11,
    radius: radius * 11,
    name: '', // LOVOL
    transform: `translate(${-radius * 47 - 4}, ${130})`,
    logo: {
      d: logos.lovol, transform: `translate(${-radius * 6}, -${radius}) scale(0.18)`, stroke: `${2 / 0.18}`
    } },
  { teeth: 8,
    radius: -radius * 8,
    name: '',
    transform: `translate(${-radius * 82 + 1}, ${118})`,
    logo: {
      d: logos.beili, transform: `translate(${-radius * 4}, -${radius * 4 - 1}) scale(0.12)`, stroke: `${2 / 0.12}`
    } },
  { teeth: 8,
    radius: radius * 8,
    name: '',
    transform: `translate(${-radius * 70 - 2}, ${49})`,
    logo: {
      d: logos.cstc, transform: `translate(${-radius * 4 - 3}, -${radius * 2}) scale(0.14)`, stroke: `${2 / 0.14}`
    } },
  { teeth: 8,
    radius: -radius * 8,
    name: '', // 人民大学
    transform: `translate(${-radius * 11 - 4}, ${152})`,
    logo: {
      d: logos.renda, transform: `translate(${-radius * 4 - 3}, -${radius * 4 + 3}) scale(0.14)`, stroke: `${2 / 0.14}`
    } },
  { teeth: 8,
    radius: radius * 8,
    name: '', // 复旦大学
    transform: `translate(${radius * 19 + 1}, ${-96})`,
    logo: {
      d: logos.fudan, transform: `translate(${-radius * 4}, -${radius * 4}) scale(0.12)`, stroke: `${2 / 0.12}`
    } },
  { teeth: 8,
    radius: radius * 8,
    name: '', // 诚益通
    transform: `translate(${radius * 22 + 2}, ${145})`,
    logo: {
      d: logos.tong, transform: `translate(${-radius * 4}, ${-radius * 2 + 3}) scale(0.12)`, stroke: `${2 / 0.12}`
    } },
  { teeth: 8,
    radius: -radius * 8,
    name: '', // 北京航空航天大学
    transform: `translate(${radius * 66}, ${-91})`,
    logo: {
      d: logos.beihang, transform: `translate(${-radius * 4}, ${-radius * 4}) scale(0.12)`, stroke: `${2 / 0.12}`
    } },
  { teeth: 8,
    radius: -radius * 8,
    name: '', // 北京邮电大学
    transform: `translate(${radius * 84 + 3}, ${-188})`,
    logo: {
      d: logos.beiyou, transform: `translate(${-radius * 4}, ${-radius * 4}) scale(0.12)`, stroke: `${2 / 0.12}`
    } }
]
