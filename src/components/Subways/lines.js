export const LINE_1 = 'LINE_1'
export const LINE_2 = 'LINE_2'
export const LINE_4 = 'LINE_4'
export const LINE_5 = 'LINE_5'
export const LINE_6 = 'LINE_6'
export const LINE_7 = 'LINE_7'
export const LINE_8 = 'LINE_8'
export const LINE_9 = 'LINE_9'
export const LINE_10 = 'LINE_10'
export const LINE_13 = 'LINE_13'
export const LINE_14 = 'LINE_14'
export const LINE_15 = 'LINE_15'
export const LINE_16 = 'LINE_16'
export const LINE_CHANGPING = 'LINE_CHANGPING'
export const AIRPORT_EXPRESS = 'AIRPORT_EXPRESS'
export const LINE_YIZHUANG = 'LINE_YIZHUANG'
export const LINE_FANGSHAN = 'LINE_FANGSHAN'

const line1 = {
  name: LINE_1,
  d: `M1453,4136 1620,4305 6587,4305 M6415,4351 7564,4351
    C7564,4351, 7639,4338, 7677,4404 M7670,4397 8110,4839`,
  color: '#A63D3A',
  stationsData: [
    { x: 1453, y: 4136, name: '苹果园', text: 'top' },
    { x: 1620, y: 4305, name: '古城', text: 'bottom' },
    { x: 1861, y: 4305, name: '八角游乐园', text: 'top' },
    { x: 2061, y: 4305, name: '八宝山', text: 'bottom' },
    { x: 2247, y: 4305, name: '玉泉路', text: 'top' },
    { x: 2427, y: 4305, name: '五棵松', text: 'bottom' },
    { x: 2632, y: 4305, name: '万寿路', text: 'top' },
    { x: 2838, y: 4305, name: '公主坟', text: 'bottom', isExchange: true, to: [LINE_10] },
    { x: 3077, y: 4305, name: '军事博物馆', text: 'top', isExchange: true, to: [LINE_9] },
    { x: 3407, y: 4305, name: '木樨地', text: 'bottom' },
    { x: 3590, y: 4305, name: '南礼士路', text: 'top' },
    { x: 3767, y: 4305, name: '复兴门', text: 'bottom', isExchange: true, to: [LINE_2] },
    { x: 4129, y: 4305, name: '西单', text: 'top', isExchange: true, to: [LINE_4] },
    { x: 4390, y: 4305, name: '天安门西', text: 'bottom' },
    { x: 4713, y: 4305, name: '天安门东', text: 'bottom' },
    { x: 4840, y: 4305, name: '王府井', text: 'top' },
    { x: 5049, y: 4305, name: '东单', text: 'bottom-right', isExchange: true, to: [LINE_5] },
    { x: 5363, y: 4305, name: '建国门', text: 'bottom-right', isExchange: true, to: [LINE_2] },
    { x: 5589, y: 4305, name: '永安里', text: 'top' },
    { x: 5818, y: 4305, name: '国贸', text: 'bottom-right', isExchange: true, to: [LINE_10] },
    { x: 6100, y: 4305, name: '大望路', text: 'bottom-right', isExchange: true, to: [LINE_14] },
    { x: 6415, y: 4329, name: '四惠', text: 'bottom' },
    { x: 6587, y: 4329, name: '四惠东', text: 'top' },
    { x: 6771, y: 4351, name: '高碑店', text: 'bottom' },
    { x: 6951, y: 4351, name: '传媒大学', text: 'top' },
    { x: 7147, y: 4351, name: '双桥', text: 'bottom' },
    { x: 7344, y: 4351, name: '管庄', text: 'top' },
    { x: 7564, y: 4351, name: '八里桥', text: 'bottom' },
    { x: 7677, y: 4404, name: '通州北苑', text: 'top-right-lean' },
    { x: 7762, y: 4491, name: '果园', text: 'bottom-left-lean' },
    { x: 7839, y: 4568, name: '九棵树', text: 'bottom-left-lean' },
    { x: 7923, y: 4654, name: '梨园', text: 'top-right-lean' },
    { x: 8014, y: 4746, name: '临河里', text: 'bottom-left-lean' },
    { x: 8110, y: 4839, name: '土桥', text: 'bottom' }
  ]
}

const line2 = {
  name: LINE_2,
  d: `M3767 3698 C3767 3610, 3817 3589.5 , 3844 3589.5 H5290
    C5312 3589.5, 5363 3616, 5363 3681 V4453
    C5362 4494, 5330 4538, 5283 4538 H3848
    C3794 4538, 3767 4483, 3767 4449 V3698`,
  color: 'rgb(37,85,133)',
  stationsData: [
    { x: 3767, y: 3698, name: '西直门', text: 'bottom-left', isExchange: true, to: [LINE_2, LINE_4] },
    { x: 4076, y: 3589, name: '积水潭', text: 'top' },
    { x: 4554.5, y: 3589, name: '鼓楼大街', text: 'top-left', isExchange: true, to: [LINE_8] },
    { x: 4788, y: 3589, name: '安定门', text: 'top' },
    { x: 5049, y: 3589, name: '雍和宫', text: 'bottom-left', isExchange: true, to: [LINE_5] },
    { x: 5362, y: 3699, name: '东直门', text: 'left', isExchange: true, to: [LINE_13, AIRPORT_EXPRESS] },
    { x: 5363, y: 3891, name: '东四十条', text: 'right' },
    { x: 5363, y: 4071, name: '朝阳门', text: 'top-right', isExchange: true, to: [LINE_6] },
    { x: 5363, y: 4305, name: '建国门', text: 'bottom-right', isExchange: true, to: [LINE_1] },
    { x: 5331.5, y: 4520, name: '北京站', text: 'right' },
    { x: 5049, y: 4540, name: '崇文门', text: 'top-left', isExchange: true, to: [LINE_5] },
    { x: 4543.5, y: 4538, name: '前门', text: 'bottom' },
    { x: 4319, y: 4538, name: '和平门', text: 'top' },
    { x: 4129, y: 4538, name: '宣武门', text: 'top-left', isExchange: true, to: [LINE_4] },
    { x: 3781, y: 4495.5, name: '长椿街', text: 'left' },
    { x: 3767, y: 4306, name: '复兴门', text: 'bottom-right', isExchange: true, to: [LINE_1] },
    { x: 3767, y: 4127, name: '阜成门', text: 'left' },
    { x: 3767, y: 3953.5, name: '车公庄', text: 'top-right', isExchange: true, to: [LINE_6] }
  ]
}

const line4 = {
  name: LINE_4,
  d: `M2415,2559 2884,2559 C3040,2559 3070,2559 3070,2640
    M3070,2640 3070,3698 3070,3698 4031,3698
    C4050,3698 4129,3698 4129,3796
    M4129,3796 4129,5578 4129,5578 3877,5704 3873,6643`,
  color: '#007D86',
  stationsData: [
    { x: 2415, y: 2559, name: '安河桥北', text: 'top' },
    { x: 2650, y: 2559, name: '北宫门', text: 'bottom' },
    { x: 2884, y: 2559, name: '西苑', text: 'top-right', isExchange: true, to: [LINE_16] },
    { x: 3070, y: 2713, name: '圆明园', text: 'right' },
    { x: 3070, y: 2862, name: '北京大学东门', text: 'left' },
    { x: 3070, y: 3001, name: '中关村', text: 'right' },
    { x: 3070, y: 3190, name: '海淀黄庄', text: 'top-right', isExchange: true, to: [LINE_10] },
    { x: 3070, y: 3393, name: '人民大学', text: 'right' },
    { x: 3070, y: 3564, name: '魏公村', text: 'left' },
    { x: 3076, y: 3698, name: '国家图书馆', text: 'bottom-left', isExchange: true, to: [LINE_9] },
    { x: 3435, y: 3698, name: '动物园', text: 'top' },
    { x: 3767, y: 3698, name: '西直门', text: 'bottom-left', isExchange: true, to: [LINE_2, LINE_4] },
    { x: 4031, y: 3698, name: '新街口', text: 'bottom' },
    { x: 4129, y: 3953.5, name: '平安里', text: 'bottom-left', isExchange: true, to: [LINE_6] },
    { x: 4129, y: 4076, name: '西四', text: 'right' },
    { x: 4129, y: 4173, name: '灵境胡同', text: 'left' },
    { x: 4129, y: 4305, name: '西单', text: 'top-right', isExchange: true, to: [LINE_1] },
    { x: 4129, y: 4538, name: '宣武门', text: 'top-left', isExchange: true, to: [LINE_2] },
    { x: 4129, y: 4680, name: '菜市口', text: 'bottom-left', isExchange: true, to: [LINE_7] },
    { x: 4129, y: 4852, name: '陶然亭', text: 'right' },
    { x: 4129, y: 4995, name: '北京南站', text: 'left', isExchange: true, to: [LINE_14] },
    { x: 4129, y: 5170, name: '马家堡', text: 'left' },
    { x: 4129, y: 5348, name: '角门西', text: 'top-left', isExchange: true, to: [LINE_10] },
    { x: 4129, y: 5469, name: '公益西桥', text: 'left' },
    { x: 4129, y: 5578, name: '新宫', text: 'bottom-right-lean' },
    { x: 3877, y: 5704, name: '西红门', text: 'left' },
    { x: 3873, y: 5809, name: '高米店北', text: 'right' },
    { x: 3873, y: 5913, name: '高米店南', text: 'left' },
    { x: 3873, y: 6018, name: '枣园', text: 'right' },
    { x: 3873, y: 6122, name: '清源路', text: 'left' },
    { x: 3873, y: 6226, name: '黄村西大街', text: 'right' },
    { x: 3873, y: 6330, name: '黄村火车站', text: 'left' },
    { x: 3873, y: 6434, name: '义和庄', text: 'right' },
    { x: 3873, y: 6538, name: '生物医药基地', text: 'left' },
    { x: 3873, y: 6643, name: '天宫院', text: 'right' }
  ]
}

const line5 = {
  name: LINE_5,
  d: 'M5049 1978 V5347',
  color: 'rgb(147,45,118)',
  stationsData: [
    { x: 5049, y: 1978, name: '天通苑北', text: 'right' },
    { x: 5049, y: 2130, name: '天通苑', text: 'right' },
    { x: 5049, y: 2300, name: '天通苑南', text: 'right' },
    { x: 5049, y: 2453, name: '立水桥', text: 'left', isExchange: true, to: [LINE_13] },
    { x: 5048, y: 2591, name: '立水桥南', text: 'right' },
    { x: 5049, y: 2729, name: '北苑路北', text: 'right' },
    { x: 5049, y: 2908.5, name: '大屯路东', text: 'top-right', isExchange: true, to: [LINE_15] },
    { x: 5049, y: 3060, name: '惠新西街北口', text: 'right' },
    { x: 5049, y: 3192, name: '惠新西街南口', text: 'bottom-right', isExchange: true, to: [LINE_10] },
    { x: 5049, y: 3361, name: '和平西桥', text: 'right' },
    { x: 5049, y: 3477, name: '和平里北街', text: 'right' },
    { x: 5049, y: 3590, name: '雍和宫', text: 'bottom-left', isExchange: true, to: [LINE_2] },
    { x: 5049, y: 3774.5, name: '北新桥', text: 'right' },
    { x: 5049, y: 3901.5, name: '张自忠路', text: 'right' },
    { x: 5049, y: 4071, name: '东四', text: 'top-right', isExchange: true, to: [LINE_6] },
    { x: 5049, y: 4185.5, name: '灯市口', text: 'right' },
    { x: 5049, y: 4305, name: '东单', text: 'bottom-right', isExchange: true, to: [LINE_1] },
    { x: 5049, y: 4540, name: '崇文门', text: 'top-left', isExchange: true, to: [LINE_2] },
    { x: 5049, y: 4680, name: '磁器口', text: 'bottom-left', isExchange: true, to: [LINE_7] },
    { x: 5049, y: 4839, name: '天坛东门', text: 'right' },
    { x: 5049, y: 4995, name: '蒲黄榆', text: 'bottom-right', isExchange: true, to: [LINE_14] },
    { x: 5049, y: 5168, name: '刘家窑', text: 'left' },
    { x: 5049, y: 5348, name: '宋家庄', text: 'bottom-right', isExchange: true, to: [LINE_10] }
  ]
}

const line6 = {
  name: LINE_6,
  d: `M2423 3953.5 H4645
    C4672 3953.5, 4688 4071, 4786 4071 H7823
    C7836 4071, 7865.07018 4082, 7875 4095
    L8158 4380
    C8167 4390, 8202 4396.5, 8212 4396.5 H8765`,
  color: '#ba8525',
  stationsData: [
    { x: 2423, y: 3953.5, name: '海淀五路居', text: 'top' },
    { x: 2632, y: 3953.5, name: '慈寿寺', text: 'bottom-left', isExchange: true, to: [LINE_10] },
    { x: 2846, y: 3953.5, name: '花园桥', text: 'top' },
    { x: 3076, y: 3953.5, name: '白石桥南', text: 'top-right', isExchange: true, to: [LINE_9] },
    { x: 3411, y: 3953.5, name: '车公庄西', text: 'bottom' },
    { x: 3767, y: 3953.5, name: '车公庄', text: 'top-right', isExchange: true, to: [LINE_2] },
    { x: 4129, y: 3953.5, name: '平安里', text: 'bottom-left', isExchange: true, to: [LINE_4] },
    { x: 4369, y: 3953.5, name: '北海北', text: 'top' },
    { x: 4645, y: 3953.5, name: '南锣鼓巷', text: 'bottom-left-lean', isExchange: true, to: [LINE_8] },
    { x: 5049, y: 4071, name: '东四', text: 'top-right', isExchange: true, to: [LINE_5] },
    { x: 5363, y: 4071, name: '朝阳门', text: 'top-right', isExchange: true, to: [LINE_2] },
    { x: 5575, y: 4071, name: '东大桥', text: 'bottom' },
    { x: 5818, y: 4071, name: '呼家楼', text: 'top-right', isExchange: true, to: [LINE_10] },
    { x: 6100, y: 4071, name: '金台路', text: 'top-right', isExchange: true, to: [LINE_14] },
    { x: 6350, y: 4071, name: '十里堡', text: 'bottom' },
    { x: 6560, y: 4071, name: '青年路', text: 'top' },
    { x: 6837, y: 4071, name: '褡裢坡', text: 'bottom' },
    { x: 7029, y: 4071, name: '黄渠', text: 'top' },
    { x: 7221, y: 4071, name: '常营', text: 'bottom' },
    { x: 7413, y: 4071, name: '草房', text: 'top' },
    { x: 7654, y: 4071, name: '物资学院路', text: 'bottom' },
    { x: 7918.7548828125, y: 4139.064453125, name: '通州北关', text: 'top-right-lean' },
    { x: 8030.083984375, y: 4251.1796875, name: '通运门', text: 'top-right-lean' },
    { x: 8169.82763671875, y: 4387.2158203125, name: '北运河西', text: 'bottom' },
    { x: 8309, y: 4396.5, name: '北运河东', text: 'top' },
    { x: 8451, y: 4396.5, name: '郝家府', text: 'bottom' },
    { x: 8613, y: 4396.5, name: '东夏园', text: 'top' },
    { x: 8765, y: 4396.5, name: '潞城', text: 'bottom' }
  ]
}

const line7 = {
  name: LINE_7,
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
    { x: 3076, y: 4480, name: '北京西站', text: 'top-right', isExchange: true, to: [LINE_9] },
    { x: 3280, y: 4680, name: '湾子', text: 'bottom' },
    { x: 3540, y: 4680, name: '达官营', text: 'bottom' },
    { x: 3820, y: 4680, name: '广安门内', text: 'top' },
    { x: 4129, y: 4680, name: '菜市口', text: 'bottom-left', isExchange: true, to: [LINE_4] },
    { x: 4348, y: 4680, name: '虎坊桥', text: 'bottom' },
    { x: 4555, y: 4680, name: '珠市口', text: 'bottom' },
    { x: 4805, y: 4680, name: '桥湾', text: 'top' },
    { x: 5049, y: 4680, name: '磁器口', text: 'bottom-left', isExchange: true, to: [LINE_5] },
    { x: 5268, y: 4680, name: '广渠门内', text: 'top' },
    { x: 5472, y: 4680, name: '广渠门外', text: 'bottom' },
    { x: 5818, y: 4680, name: '双井', text: 'top-left', isExchange: true, to: [LINE_10] },
    { x: 6100, y: 4680, name: '九龙山', text: 'top-left', isExchange: true, to: [LINE_14] },
    { x: 6300, y: 4680, name: '大郊亭', text: 'bottom' },
    { x: 6456, y: 4680, name: '百子湾', text: 'top' },
    { x: 6500, y: 4776, name: '化工', text: 'right' },
    { x: 6500, y: 4884, name: '南楼梓庄', text: 'right' },
    { x: 6500, y: 4976, name: '欢乐谷景区', text: 'left' },
    { x: 6564, y: 5040, name: '垡头', text: 'bottom', notOpened: true },
    { x: 6688, y: 5040, name: '双合', text: 'bottom' },
    { x: 6860, y: 5040, name: '焦化厂', text: 'top' }
  ]
}

const line8 = {
  name: LINE_8,
  d: `M3826 2191.5 H4326
    C4365 2191.5, 4389 2220, 4389 2259 V2725
    L4554.5 2821 V3847
    C4554.5 3915, 4605 3953.5, 4645 3953.5`,
  color: '#009369',
  stationsData: [
    { x: 3826, y: 2191.5, name: '朱辛庄', text: 'left', isExchange: true, to: [LINE_CHANGPING] },
    { x: 4023, y: 2191.5, name: '育知路', text: 'top' },
    { x: 4266.5, y: 2191.5, name: '平西府', text: 'top' },
    { x: 4389, y: 2285, name: '回龙观东大街', text: 'right' },
    { x: 4389, y: 2453, name: '霍营', text: 'top-right', isExchange: true, to: [LINE_13] },
    { x: 4389, y: 2549, name: '育新', text: 'right' },
    { x: 4389, y: 2635, name: '西小口', text: 'left' },
    { x: 4389, y: 2722.62158203125, name: '永泰庄', text: 'left' },
    { x: 4476.47119140625, y: 2775.738525390625, name: '林萃桥', text: 'top-right-lean' },
    { x: 4554.5, y: 2827.5, name: '森林公园南门', text: 'right' },
    { x: 4554.5, y: 2908.5, name: '奥林匹克公园', text: 'bottom-left', isExchange: true, to: [LINE_15] },
    { x: 4554.5, y: 3054, name: '奥体中心', text: 'right' },
    { x: 4554.5, y: 3190, name: '北土城', text: 'top-left', isExchange: true, to: [LINE_10] },
    { x: 4554.5, y: 3337, name: '安华桥', text: 'left' },
    { x: 4554.5, y: 3434, name: '安德里北街', text: 'right' },
    { x: 4554.5, y: 3589, name: '鼓楼大街', text: 'top-left', isExchange: true, to: [LINE_2] },
    { x: 4554.5, y: 3771, name: '什刹海', text: 'left' },
    { x: 4645, y: 3953.5, name: '南锣鼓巷', text: 'bottom-left-lean', isExchange: true, to: [LINE_6] }
  ]
}

const line9 = {
  name: LINE_9,
  d: `M3076 3698
      V4480
      L2732 4708
      Q2688 4732,2700 4760
      V5632
    `,
  color: '#66b82f',
  stationsData: [
    { x: 3076, y: 3698, name: '国家图书馆', text: 'bottom-left', isExchange: true, to: [LINE_4] },
    { x: 3076, y: 3952, name: '白石桥南', text: 'top-right', isExchange: true, to: [LINE_6] },
    { x: 3076, y: 4132, name: '白堆子', text: 'right' },
    { x: 3076, y: 4300, name: '军事博物馆', text: 'top-right', isExchange: true, to: [LINE_1] },
    { x: 3076, y: 4480, name: '北京西站', text: 'top-right', isExchange: true, to: [LINE_7] },
    { x: 2940, y: 4572, name: '六里桥东', text: 'bottom-right-lean' },
    { x: 2838, y: 4640, name: '六里桥', text: 'top-left', isExchange: true, to: [LINE_10] },
    { x: 2700, y: 4936, name: '七里庄', text: 'top-left', isExchange: true, to: [LINE_14] },
    { x: 2700, y: 5113, name: '丰台东大街', text: 'left' },
    { x: 2700, y: 5235, name: '丰台南路', text: 'left' },
    { x: 2700, y: 5353, name: '科怡路', text: 'left' },
    { x: 2700, y: 5485, name: '丰台科技园', text: 'left' },
    { x: 2700, y: 5632, name: '郭公庄', text: 'right', isExchange: true, to: [LINE_FANGSHAN] }
  ]
}

const line10 = {
  name: LINE_10,
  d: `M5049 5348 H5500 C5755 5345, 5818 5240, 5818 5141 V3312
      C5818 3226, 5740 3190, 5660 3190 H2766
      C2673 3190, 2632 3239, 2632 3318 V4000
      C2632 4166, 2838 4076, 2838 4238 V5219
      C2838 5339, 2872 5348, 2938 5348 H5050
      `,
  color: '#018cac',
  stationsData: [
    { x: 5049, y: 5348, name: '宋家庄', text: 'bottom-right', isExchange: true, to: [LINE_5, LINE_YIZHUANG] },
    { x: 5484, y: 5348, name: '成寿寺', text: 'top' },
    { x: 5762, y: 5276, name: '分钟寺', text: 'right' },
    { x: 5818, y: 4995, name: '十里河', text: 'bottom-left', isExchange: true, to: [LINE_14] },
    { x: 5818, y: 4874, name: '潘家园', text: 'left' },
    { x: 5818, y: 4774, name: '劲松', text: 'left' },
    { x: 5818, y: 4680, name: '双井', text: 'top-left', isExchange: true, to: [LINE_7] },
    { x: 5818, y: 4305, name: '国贸', text: 'bottom-right', isExchange: true, to: [LINE_1] },
    { x: 5818, y: 4178, name: '金台夕照', text: 'right' },
    { x: 5818, y: 4071, name: '呼家楼', text: 'top-right', isExchange: true, to: [LINE_6] },
    { x: 5818, y: 3862, name: '团结湖', text: 'right' },
    { x: 5818, y: 3718, name: '农业展览馆', text: 'left' },
    { x: 5818, y: 3573, name: '亮马桥', text: 'right' },
    { x: 5818, y: 3391.5, name: '三元桥', text: 'bottom-right', isExchange: true, to: [AIRPORT_EXPRESS] },
    { x: 5772, y: 3220, name: '太阳宫', text: 'bottom-left-lean' },
    { x: 5451, y: 3190, name: '芍药居', text: 'top-right', isExchange: true, to: [LINE_13] },
    { x: 5048, y: 3190, name: '惠新西街南口', text: 'bottom-right', isExchange: true, to: [LINE_5] },
    { x: 4788, y: 3190, name: '安贞门', text: 'bottom' },
    { x: 4554.5, y: 3190, name: '北土城', text: 'top-left', isExchange: true, to: [LINE_8] },
    { x: 4305, y: 3190, name: '健德门', text: 'bottom' },
    { x: 4101, y: 3190, name: '牡丹园', text: 'top' },
    { x: 3886, y: 3190, name: '西土城', text: 'bottom' },
    { x: 3653, y: 3190, name: '知春路', text: 'bottom-left', isExchange: true, to: [LINE_13] },
    { x: 3257, y: 3190, name: '知春里', text: 'bottom' },
    { x: 3069, y: 3190, name: '海淀黄庄', text: 'top-left', isExchange: true, to: [LINE_4] },
    { x: 2802, y: 3190, name: '苏州街', text: 'top' },
    { x: 2660, y: 3229, name: '巴沟', text: 'left' },
    { x: 2632, y: 3376, name: '火器营', text: 'right' },
    { x: 2632, y: 3561, name: '长春桥', text: 'left' },
    { x: 2632, y: 3750, name: '车道沟', text: 'left' },
    { x: 2632, y: 3953.5, name: '慈寿寺', text: 'bottom-left', isExchange: true, to: [LINE_6] },
    { x: 2743, y: 4121, name: '西钓鱼台', text: 'top-right-lean' },
    { x: 2838, y: 4305, name: '公主坟', text: 'bottom-left', isExchange: true, to: [LINE_1] },
    { x: 2838, y: 4480, name: '莲花桥', text: 'left' },
    { x: 2838, y: 4640, name: '六里桥', text: 'top-left', isExchange: true, to: [LINE_9] },
    { x: 2838, y: 4937, name: '西局', text: 'right', isExchange: true, to: [LINE_14] },
    { x: 2838, y: 5150, name: '泥洼', text: 'right' },
    { x: 3035, y: 5348, name: '丰台站', text: 'bottom' },
    { x: 3256, y: 5348, name: '首经贸', text: 'top' },
    { x: 3526, y: 5348, name: '纪家庙', text: 'bottom' },
    { x: 3769, y: 5348, name: '草桥', text: 'top' },
    { x: 4130, y: 5348, name: '角门西', text: 'top-left', isExchange: true, to: [LINE_4] },
    { x: 4369, y: 5348, name: '角门东', text: 'bottom' },
    { x: 4557, y: 5348, name: '大红门', text: 'top' },
    { x: 4826, y: 5348, name: '石榴庄', text: 'bottom' }
  ]
}

const line13 = {
  name: LINE_13,
  d: `M3767 3698 C3727 3698, 3654 3667, 3654 3627 V2580
    C3654 2517, 3722 2453, 3785 2453 H5318
    C5398 2453, 5452 2524, 5452 2604 V3620
    C5452 3670, 5411 3699, 5362 3699
    `,
  color: '#ede611',
  stationsData: [
    { x: 3767, y: 3698, name: '西直门', text: 'bottom-left', isExchange: true, to: [LINE_2, LINE_4] },
    { x: 3654, y: 3440, name: '大钟寺', text: 'left' },
    { x: 3654, y: 3191, name: '知春路', text: 'bottom-left', isExchange: true, to: [LINE_10] },
    { x: 3654, y: 3002, name: '五道口', text: 'right' },
    { x: 3654, y: 2838, name: '上地', text: 'left' },
    { x: 3654, y: 2584, name: '西二旗', text: 'left', isExchange: true, to: [LINE_CHANGPING] },
    { x: 3851.5, y: 2453, name: '龙泽', text: 'bottom' },
    { x: 4074.5, y: 2453, name: '回龙观', text: 'top' },
    { x: 4389, y: 2453, name: '霍营', text: 'top-right', isExchange: true, to: [LINE_8] },
    { x: 5049, y: 2453, name: '立水桥', text: 'top-left', isExchange: true, to: [LINE_5] },
    { x: 5452, y: 2606, name: '北苑', text: 'right' },
    { x: 5452, y: 2908.5, name: '望京西', text: 'top-right', isExchange: true, to: [LINE_15] },
    { x: 5452, y: 3191, name: '芍药居', text: 'top-right', isExchange: true, to: [LINE_10] },
    { x: 5452, y: 3394, name: '光熙门', text: 'right' },
    { x: 5452, y: 3532, name: '柳芳', text: 'right' },
    { x: 5362, y: 3699, name: '东直门', text: 'left', isExchange: true, to: [LINE_2, AIRPORT_EXPRESS] }
  ]
}

const line14 = {
  name: LINE_14,
  d: `M1709 4937 H2838
    M4129 4995 H6016 C6069 4995, 6100 4942, 6100 4900 V3292
    C6095 3264, 6094 3241, 6063 3210 L5924 3058
    C5882 3021, 5872 2977, 5872 2909 V2575`,
  color: 'rgb(187,145,147)',
  stationsData: [
    { x: 1709, y: 4937, name: '张郭庄', text: 'top' },
    { x: 1875, y: 4937, name: '园博园', text: 'bottom' },
    { x: 2060, y: 4937, name: '大瓦窑', text: 'top' },
    { x: 2233.5, y: 4937, name: '郭庄子', text: 'bottom' },
    { x: 2477, y: 4937, name: '大井', text: 'bottom' },
    { x: 2700, y: 4937, name: '七里庄', text: 'top-left', isExchange: true, to: [LINE_9] },
    { x: 2838, y: 4937, name: '西局', text: 'right', isExchange: true, to: [LINE_10] },
    { x: 4129, y: 4995, name: '北京南站', text: 'left', isExchange: true, to: [LINE_4] },
    { x: 4338, y: 4995, name: '陶然桥', text: 'bottom', notOpened: true },
    { x: 4577.5, y: 4995, name: '永定门外', text: 'top' },
    { x: 4796, y: 4995, name: '景泰', text: 'bottom' },
    { x: 5049, y: 4995, name: '蒲黄榆', text: 'bottom-right', isExchange: true, to: [LINE_5] },
    { x: 5449, y: 4995, name: '方庄', text: 'bottom' },
    { x: 5818, y: 4995, name: '十里河', text: 'bottom-left', isExchange: true, to: [LINE_10] },
    { x: 5984, y: 4995, name: '北工大西门', text: 'bottom' },
    { x: 6100, y: 4832, name: '平乐园', text: 'left', notOpened: true },
    { x: 6100, y: 4680, name: '九龙山', text: 'top-left', isExchange: true, to: [LINE_7] },
    { x: 6100, y: 4305, name: '大望路', text: 'bottom-right', isExchange: true, to: [LINE_1] },
    { x: 6100, y: 4071, name: '金台路', text: 'top-right', isExchange: true, to: [LINE_6] },
    { x: 6100, y: 3887, name: '朝阳公园', text: 'right' },
    { x: 6100, y: 3758.5, name: '枣营', text: 'right' },
    { x: 6100, y: 3628, name: '东风北桥', text: 'right' },
    { x: 6100, y: 3514.5, name: '将台', text: 'right' },
    { x: 6100, y: 3384.5, name: '高家园', text: 'right', notOpened: true },
    { x: 6031, y: 3175.5, name: '望京南', text: 'top-right-lean' },
    { x: 5923, y: 3057, name: '阜通', text: 'top-right-lean' },
    { x: 5872, y: 2908.5, name: '望京', text: 'bottom-left', isExchange: true, to: [LINE_15] },
    { x: 5872, y: 2818, name: '东湖渠', text: 'right' },
    { x: 5872, y: 2704, name: '来广营', text: 'right' },
    { x: 5872, y: 2575, name: '善各庄', text: 'right' }
  ]
}

const line15 = {
  name: LINE_15,
  d: `M3795 2908.5 H6455.5
    C6465.5 2908.5, 6485 2892.5, 6485 2882.5 V1985.5
    C6485 1968.5, 6495.5 1952.5, 6512.5 1952.5 H7895.5
    `,
  color: '#603471',
  stationsData: [
    { x: 3795, y: 2908.5, name: '清华东路西口', text: 'top' },
    { x: 4038, y: 2908.5, name: '六道口', text: 'bottom' },
    { x: 4260, y: 2908.5, name: '北沙滩', text: 'top' },
    { x: 4554.5, y: 2908.5, name: '奥林匹克公园', text: 'bottom-left', isExchange: true, to: [LINE_8] },
    { x: 4795, y: 2908.5, name: '安立路', text: 'bottom' },
    { x: 5049, y: 2908.5, name: '大屯路东', text: 'top-right', isExchange: true, to: [LINE_5] },
    { x: 5245, y: 2908.5, name: '关庄', text: 'bottom' },
    { x: 5452, y: 2908.5, name: '望京西', text: 'top-right', isExchange: true, to: [LINE_13] },
    { x: 5869.5, y: 2908.5, name: '望京', text: 'bottom-left', isExchange: true, to: [LINE_14] },
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
}

const line16 = {
  name: LINE_16,
  d: `M1850 1868 H2658
  C2923 1905, 2884 2010 2884 2556`,
  color: '#5f9537',
  stationsData: [
    { x: 1850, y: 1868, name: '北安河', text: 'bottom' },
    { x: 2052, y: 1868, name: '温阳路', text: 'top' },
    { x: 2256, y: 1868, name: '稻香湖路', text: 'bottom' },
    { x: 2458, y: 1868, name: '屯佃', text: 'top' },
    { x: 2658, y: 1868, name: '永丰', text: 'top' },
    { x: 2824, y: 1934, name: '永丰南', text: 'top-right-lean' },
    { x: 2884, y: 2086, name: '西北旺', text: 'right' },
    { x: 2884, y: 2242, name: '马连洼', text: 'right' },
    { x: 2884, y: 2369, name: '农大南路', text: 'right' },
    { x: 2884, y: 2559, name: '西苑', text: 'top-right', isExchange: true, to: [LINE_4] }
  ]
}

const lineChangPing = {
  name: LINE_CHANGPING,
  d: `M2425 1335.5 H2615
  C2665 1335.5, 2670 1358, 2693 1375 L2806 1492
  C2860 1548, 2888 1537.5, 2920 1537.5 H3778
  C3813 1537.5, 3826 1556, 3826 1591 V2191.5
  C3770 2266, 3654 2270, 3654 2338, V2584`,
  color: '#d274a6',
  stationsData: [
    { x: 2425, y: 1335.5, name: '昌平西山口', text: 'bottom' },
    { x: 2693, y: 1375, name: '十三陵景区', text: 'top-right-lean' },
    { x: 2990, y: 1537.5, name: '昌平', text: 'top' },
    { x: 3341, y: 1537.5, name: '昌平东关', text: 'top' },
    { x: 3716, y: 1537.5, name: '北邵洼', text: 'top' },
    { x: 3826, y: 1698, name: '南邵', text: 'right' },
    { x: 3826, y: 1806, name: '沙河高教园', text: 'right' },
    { x: 3826, y: 1926, name: '沙河', text: 'left' },
    { x: 3826, y: 2047, name: '巩华城', text: 'left' },
    { x: 3826, y: 2191.5, name: '朱辛庄', text: 'left', isExchange: true, to: [LINE_8] },
    { x: 3657.9248046875, y: 2317.827880859375, name: '生命科学园', text: 'left' },
    { x: 3654, y: 2584, name: '西二旗', text: 'left' }
  ]
}

const airportExpress = {
  name: AIRPORT_EXPRESS,
  d: `M5362 3698
  C5530 3721, 5600 3647 5680 3543
  C5809 3364, 5734 3373 6826 3138
  C7100 3050, 7336 3050 7335 2554
  M7235 2946
  C6981 3027, 6960 2974 6971 2554
  M6971 2554
  C6957 3040, 6932 3067 6819 3139`,
  color: '#8882a3',
  stationsData: [
    { x: 5362, y: 3698, name: '东直门', text: 'left', isExchange: true, to: [LINE_13] },
    { x: 5818, y: 3391.5, name: '三元桥', text: 'left', isExchange: true, to: [LINE_10] },
    { x: 7335, y: 2554, name: '3号航天楼', text: 'right' },
    { x: 6971, y: 2554, name: '2号航天楼', text: 'right' }
  ]
}

const lineYiZhuang = {
  name: LINE_YIZHUANG,
  d:`M5049 5345.5 ,V5536.5
    L5608.5 6076.5
    C5643 6111.5,5680 6113.5,5723.5 6115.5
    H6485
    `,
  color: '#DC1773',
  stationsData: [
     { x: 5049, y: 5348, name: '宋家庄', text: 'bottom-right', isExchange: true, to: [LINE_8, LINE_10] },
     { x: 5049, y: 5536.5, name: '肖村', text: 'left' },
     { x: 5125, y: 5614.5, name: '小红门', text: 'top-right-lean' },
     { x: 5202, y: 5689.5, name: '旧宫', text: 'bottom-left-lean' },
     { x: 5289, y: 5768.5, name: '亦庄桥', text: 'top-right-lean' },
     { x: 5359.5, y: 5840.5, name: '亦庄文化园', text: 'bottom-left-lean' },
     { x: 5438.5, y: 5914.5, name: '万源街', text: 'top-right-lean' },
     { x: 5527.5, y: 6001.5, name: '荣京东街', text: 'bottom-left-lean' },
     { x: 5608.5, y: 6076.5, name: '荣昌东街', text: 'top-right-lean' },
     { x: 5723.5, y: 6115.5, name: '同济南路', text: 'bottom' },
     { x: 5919, y: 6115.5, name: '经海路', text: 'bottom' },
     { x: 6112, y: 6115.5, name: '次渠南', text: 'top' },
     { x: 6303, y: 6115.5, name: '次渠', text: 'bottom' },
     { x: 6485, y: 6115.5, name: '亦庄火车站', text: 'top', notOpened: true }
  ]
}

const lineFangShan = {
  name: LINE_FANGSHAN,
  d: `M2700 5632 V5636
       L1989 6356
       L1230 6356
     `,
  color: '#D85F34',
  stationsData: [
     { x: 2700, y: 5632, name: '郭公庄', text: 'right', isExchange: true, to: [LINE_9] },
     { x: 2592.4951171875, y: 5744.86572265625, name: '大葆台', text: 'top-left-lean' },
     { x: 2487.098388671875, y: 5851.5966796875, name: '稻田', text: 'bottom-right-lean' },
     { x: 2390.484619140625, y: 5949.43310546875, name: '长阳', text: 'top-left-lean' },
     { x: 2287.7578125, y: 6053.46044921875, name: '篱笆房', text: 'bottom-right-lean' },
     { x: 2201.82421875, y: 6140.48193359375, name: '广阳城', text: 'top-left-lean' },
     { x: 2106.0537109375, y: 6237.46484375, name: '良乡大学城北', text: 'bottom-right-lean' },
     { x: 1986.5, y: 6356, name: '良乡大学城', text: 'bottom-right-lean' },
     { x: 1782, y: 6356, name: '良乡大学城西', text: 'bottom' },
     { x: 1539, y: 6356, name: '良乡南关', text: 'top' },
     { x: 1236, y: 6356, name: '苏庄', text: 'bottom' }
  ]
}

export const lines = [
  line1, line2, line4, line5, line6, line7, line8, line9, line10, line13, line14, line15,
  line16, lineChangPing, airportExpress, lineYiZhuang, lineFangShan
]
