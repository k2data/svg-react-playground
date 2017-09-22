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
    { x: 1453, y: 4136, name: '矩阵运算', text: 'top' },
    { x: 1620, y: 4305, name: '线性代数', text: 'bottom' },
    { x: 1861, y: 4305, name: '数据结构', text: 'top' },
    { x: 2061, y: 4305, name: '关系代数', text: 'bottom' },
    { x: 2247, y: 4305, name: '数据库原理', text: 'top' },
    { x: 2427, y: 4305, name: '表连接', text: 'bottom' },
    { x: 2632, y: 4305, name: '表格数据', text: 'top' },
    { x: 2838, y: 4305, name: '', text: 'bottom-left', isExchange: true, to: [LINE_10] },
    { x: 3077, y: 4305, name: '数据框', text: 'top', isExchange: true, to: [LINE_9] },
    { x: 3407, y: 4305, name: '时间序列', text: 'bottom' },
    { x: 3590, y: 4305, name: '数据分片', text: 'top' },
    { x: 3767, y: 4305, name: '多维数据', text: 'bottom-right', isExchange: true, to: [LINE_2] },
    { x: 4129, y: 4305, name: '', text: 'top-right', isExchange: true, to: [LINE_4] },
    { x: 4390, y: 4305, name: 'ETL', text: 'bottom' },
    { x: 4713, y: 4305, name: '报表', text: 'bottom' },
    { x: 4840, y: 4305, name: 'BI', text: 'top' },
    { x: 5049, y: 4305, name: 'JSON', text: 'bottom-right', isExchange: true, to: [LINE_5] },
    { x: 5363, y: 4305, name: 'XML', text: 'bottom-right', isExchange: true, to: [LINE_2] },
    { x: 5589, y: 4305, name: 'NoSQL', text: 'top' },
    { x: 5818, y: 4305, name: '正则表达式', text: 'bottom-right', isExchange: true, to: [LINE_10] },
    { x: 6100, y: 4305, name: '主流厂商', text: 'bottom-right', isExchange: true, to: [LINE_14] },
    { x: 6415, y: 4329, name: '', text: 'bottom' },
    { x: 6587, y: 4329, name: '环境设置', text: 'top' },
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
    { x: 3767, y: 3698, name: '累积分布函数', text: 'bottom-left', isExchange: true, to: [LINE_2, LINE_4] },
    { x: 4076, y: 3589, name: '随机变量', text: 'top' },
    { x: 4554.5, y: 3589, name: '贝叶斯理论', text: 'top-left', isExchange: true, to: [LINE_8] },
    { x: 4788, y: 3589, name: '概率论', text: 'top' },
    { x: 5049, y: 3589, name: '异常值', text: 'bottom-left', isExchange: true, to: [LINE_5] },
    { x: 5362, y: 3699, name: '分位数', text: 'left', isExchange: true, to: [LINE_13, AIRPORT_EXPRESS] },
    { x: 5363, y: 3891, name: '直方图', text: 'right' },
    { x: 5363, y: 4071, name: 'R基础', text: 'top-right', isExchange: true, to: [LINE_6] },
    { x: 5363, y: 4305, name: 'XML', text: 'bottom-right', isExchange: true, to: [LINE_1] },
    { x: 5331.5, y: 4520, name: '描述统计', text: 'right' },
    { x: 5049, y: 4540, name: '数据集', text: 'top-left', isExchange: true, to: [LINE_5] },
    { x: 4543.5, y: 4538, name: '蒙特卡洛', text: 'bottom' },
    { x: 4319, y: 4538, name: '中心极限定理', text: 'top' },
    { x: 4129, y: 4538, name: '概率密度函数', text: 'top-left', isExchange: true, to: [LINE_4] },
    { x: 3781, y: 4495.5, name: 'ANOVA', text: 'left' },
    { x: 3767, y: 4306, name: '多维数据', text: 'bottom-right', isExchange: true, to: [LINE_1] },
    { x: 3767, y: 4127, name: '峰度偏度', text: 'left' },
    { x: 3767, y: 3953.5, name: '回归', text: 'top-right', isExchange: true, to: [LINE_6] }
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
    { x: 2415, y: 2559, name: 'ML基础', text: 'top' },
    { x: 2650, y: 2559, name: '数值变量', text: 'bottom' },
    { x: 2884, y: 2559, name: '字符变量', text: 'top-right', isExchange: true, to: [LINE_16] },
    { x: 3070, y: 2713, name: '有监督学习', text: 'right' },
    { x: 3070, y: 2862, name: '无监督学习', text: 'left' },
    { x: 3070, y: 3001, name: '变量角色', text: 'right' },
    { x: 3070, y: 3190, name: '训练验证测试集', text: 'top-right', isExchange: true, to: [LINE_10] },
    { x: 3070, y: 3393, name: '分类算法', text: 'right' },
    { x: 3070, y: 3564, name: '预测算法', text: 'left' },
    { x: 3076, y: 3698, name: '', text: 'bottom-left', isExchange: true, to: [LINE_9] },
    { x: 3435, y: 3698, name: 'LIFT', text: 'top' },
    { x: 3767, y: 3698, name: '累积分布函数', text: 'bottom-left', isExchange: true, to: [LINE_2, LINE_4] },
    { x: 4031, y: 3698, name: '过拟合', text: 'bottom' },
    { x: 4129, y: 3953.5, name: '偏差', text: 'bottom-left', isExchange: true, to: [LINE_6] },
    { x: 4129, y: 4076, name: '', text: 'right' },
    { x: 4129, y: 4173, name: '决策树', text: 'left' },
    { x: 4129, y: 4305, name: '多维数据', text: 'top-right', isExchange: true, to: [LINE_1] },
    { x: 4129, y: 4538, name: '概率密度函数', text: 'top-left', isExchange: true, to: [LINE_2] },
    { x: 4129, y: 4680, name: 'Boosting', text: 'bottom-left', isExchange: true, to: [LINE_7] },
    { x: 4129, y: 4852, name: '朴素贝叶斯', text: 'right' },
    { x: 4129, y: 4995, name: 'K近邻', text: 'left', isExchange: true, to: [LINE_14] },
    { x: 4129, y: 5170, name: 'K均值聚类', text: 'left' },
    { x: 4129, y: 5348, name: '神经网络', text: 'top-left', isExchange: true, to: [LINE_10] },
    { x: 4129, y: 5469, name: '协同过滤', text: 'left' },
    { x: 4129, y: 5578, name: '情感分析', text: 'bottom-right-lean' },
    { x: 3877, y: 5704, name: '层次聚类', text: 'left' },
    { x: 3873, y: 5809, name: '支持向量机', text: 'right' },
    { x: 3873, y: 5913, name: '自组织映射', text: 'left' },
    { x: 3873, y: 6018, name: 'K折交叉验证', text: 'right' },
    { x: 3873, y: 6122, name: '关联规则', text: 'left' },
    { x: 3873, y: 6226, name: '序列分析', text: 'right' },
    { x: 3873, y: 6330, name: '两阶段建模', text: 'left' },
    { x: 3873, y: 6434, name: '生存分析', text: 'right' },
    { x: 3873, y: 6538, name: '随机森林', text: 'left' },
    { x: 3873, y: 6643, name: '变量规约', text: 'right' }
  ]
}

const line5 = {
  name: LINE_5,
  d: 'M5049 1978 V5347',
  color: 'rgb(147,45,118)',
  stationsData: [
    { x: 5049, y: 1978, name: '', text: 'right' },
    { x: 5049, y: 2130, name: '', text: 'right' },
    { x: 5049, y: 2300, name: '', text: 'right' },
    { x: 5049, y: 2453, name: '', text: 'top-left', isExchange: true, to: [LINE_13] },
    { x: 5048, y: 2591, name: '', text: 'right' },
    { x: 5049, y: 2729, name: '', text: 'right' },
    { x: 5049, y: 2908.5, name: '', text: 'top-right', isExchange: true, to: [LINE_15] },
    { x: 5049, y: 3060, name: '', text: 'right' },
    { x: 5049, y: 3192, name: '', text: 'bottom-right', isExchange: true, to: [LINE_10] },
    { x: 5049, y: 3361, name: '', text: 'right' },
    { x: 5049, y: 3477, name: '', text: 'right' },
    { x: 5049, y: 3590, name: '', text: 'bottom-left', isExchange: true, to: [LINE_2] },
    { x: 5049, y: 3774.5, name: '', text: 'right' },
    { x: 5049, y: 3901.5, name: '', text: 'right' },
    { x: 5049, y: 4071, name: '', text: 'top-right', isExchange: true, to: [LINE_6] },
    { x: 5049, y: 4185.5, name: '', text: 'right' },
    { x: 5049, y: 4305, name: '', text: 'bottom-right', isExchange: true, to: [LINE_1] },
    { x: 5049, y: 4540, name: '', text: 'top-left', isExchange: true, to: [LINE_2] },
    { x: 5049, y: 4680, name: '', text: 'bottom-left', isExchange: true, to: [LINE_7] },
    { x: 5049, y: 4839, name: '', text: 'right' },
    { x: 5049, y: 4995, name: '', text: 'bottom-right', isExchange: true, to: [LINE_14] },
    { x: 5049, y: 5168, name: '', text: 'left' },
    { x: 5049, y: 5348, name: '', text: 'bottom-right', isExchange: true, to: [LINE_10] }
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
    { x: 2423, y: 3953.5, name: 'P值', text: 'top' },
    { x: 2632, y: 3953.5, name: '卡方检验', text: 'bottom-left', isExchange: true, to: [LINE_10] },
    { x: 2846, y: 3953.5, name: '估计', text: 'top' },
    { x: 3076, y: 3953.5, name: '置信区间', text: 'top-right', isExchange: true, to: [LINE_9] },
    { x: 3411, y: 3953.5, name: 'MLE', text: 'bottom' },
    { x: 3767, y: 3953.5, name: '回归', text: 'top-right', isExchange: true, to: [LINE_2] },
    { x: 4129, y: 3953.5, name: '偏差', text: 'bottom-left', isExchange: true, to: [LINE_4] },
    { x: 4369, y: 3953.5, name: '相关系数', text: 'top' },
    { x: 4645, y: 3953.5, name: '欧氏距离', text: 'bottom-left-lean', isExchange: true, to: [LINE_8] },
    { x: 5049, y: 4071, name: 'Python基础', text: 'top-right', isExchange: true, to: [LINE_5] },
    { x: 5363, y: 4071, name: 'R基础', text: 'top-right', isExchange: true, to: [LINE_2] },
    { x: 5575, y: 4071, name: 'SAS', text: 'bottom' },
    { x: 5818, y: 4071, name: '向量矩阵', text: 'top-right', isExchange: true, to: [LINE_10] },
    { x: 6100, y: 4071, name: '读取数据', text: 'top-right', isExchange: true, to: [LINE_14] },
    { x: 6350, y: 4071, name: '', text: 'bottom' },
    { x: 6560, y: 4071, name: '抽取子集', text: 'top' },
    { x: 6837, y: 4071, name: '数据框处理', text: 'bottom' },
    { x: 7029, y: 4071, name: '函数', text: 'top' },
    { x: 7221, y: 4071, name: '安装软件包', text: 'bottom' },
    { x: 7413, y: 4071, name: '数据步', text: 'top' },
    { x: 7654, y: 4071, name: '过程步', text: 'bottom' },
    { x: 7918.7548828125, y: 4139.064453125, name: 'Web Service', text: 'top-right-lean' },
    { x: 8030.083984375, y: 4251.1796875, name: '存储过程', text: 'top-right-lean' },
    { x: 8169.82763671875, y: 4387.2158203125, name: '宏', text: 'bottom' },
    { x: 8309, y: 4396.5, name: '参数传递', text: 'top' },
    { x: 8451, y: 4396.5, name: 'SQL', text: 'bottom' },
    { x: 8613, y: 4396.5, name: '绘图', text: 'top' },
    { x: 8765, y: 4396.5, name: '网页爬取', text: 'bottom' }
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
    { x: 3076, y: 4480, name: '', text: 'top-right', isExchange: true, to: [LINE_9] },
    { x: 3280, y: 4680, name: '中文分词', text: 'bottom' },
    { x: 3540, y: 4680, name: '文本分类', text: 'bottom' },
    { x: 3820, y: 4680, name: '文本聚类', text: 'top' },
    { x: 4129, y: 4680, name: 'Boosting', text: 'bottom-left', isExchange: true, to: [LINE_4] },
    { x: 4348, y: 4680, name: '实体解析', text: 'bottom' },
    { x: 4555, y: 4680, name: '特征抽取', text: 'bottom' },
    { x: 4805, y: 4680, name: '概念链接', text: 'top' },
    { x: 5049, y: 4680, name: '', text: 'bottom-left', isExchange: true, to: [LINE_5] },
    { x: 5268, y: 4680, name: '词频权重', text: 'top' },
    { x: 5472, y: 4680, name: 'TFIDF', text: 'bottom' },
    { x: 5818, y: 4680, name: 'Spark', text: 'top-left', isExchange: true, to: [LINE_10] },
    { x: 6100, y: 4680, name: '语料库', text: 'top-left', isExchange: true, to: [LINE_14] },
    { x: 6300, y: 4680, name: '多语言', text: 'bottom' },
    { x: 6456, y: 4680, name: '副本识别', text: 'top' },
    { x: 6500, y: 4776, name: '本体管理', text: 'right' },
    { x: 6500, y: 4884, name: '信息检索', text: 'right' },
    { x: 6500, y: 4976, name: '短语识别', text: 'left' },
    { x: 6564, y: 5040, name: '情感识别', text: 'bottom', notOpened: true },
    { x: 6688, y: 5040, name: '拼写检查', text: 'bottom' },
    { x: 6860, y: 5040, name: '语境分析', text: 'top' }
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
    { x: 3826, y: 2191.5, name: '', text: 'left', isExchange: true, to: [LINE_CHANGPING] },
    { x: 4023, y: 2191.5, name: '', text: 'top' },
    { x: 4266.5, y: 2191.5, name: '', text: 'top' },
    { x: 4389, y: 2285, name: '', text: 'right' },
    { x: 4389, y: 2453, name: '', text: 'top-right', isExchange: true, to: [LINE_13] },
    { x: 4389, y: 2549, name: '', text: 'right' },
    { x: 4389, y: 2635, name: '', text: 'left' },
    { x: 4389, y: 2722.62158203125, name: '', text: 'left' },
    { x: 4476.47119140625, y: 2775.738525390625, name: '', text: 'top-right-lean' },
    { x: 4554.5, y: 2827.5, name: '', text: 'right' },
    { x: 4554.5, y: 2908.5, name: '', text: 'bottom-left', isExchange: true, to: [LINE_15] },
    { x: 4554.5, y: 3054, name: '', text: 'right' },
    { x: 4554.5, y: 3190, name: '', text: 'top-left', isExchange: true, to: [LINE_10] },
    { x: 4554.5, y: 3337, name: '', text: 'left' },
    { x: 4554.5, y: 3434, name: '', text: 'right' },
    { x: 4554.5, y: 3589, name: '', text: 'top-left', isExchange: true, to: [LINE_2] },
    { x: 4554.5, y: 3771, name: '', text: 'left' },
    { x: 4645, y: 3953.5, name: '', text: 'bottom-left-lean', isExchange: true, to: [LINE_6] }
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
    { x: 3076, y: 3698, name: '', text: 'bottom-left', isExchange: true, to: [LINE_4] },
    { x: 3076, y: 3952, name: '', text: 'top-right', isExchange: true, to: [LINE_6] },
    { x: 3076, y: 4132, name: '', text: 'right' },
    { x: 3076, y: 4300, name: '', text: 'top-right', isExchange: true, to: [LINE_1] },
    { x: 3076, y: 4480, name: '', text: 'top-right', isExchange: true, to: [LINE_7] },
    { x: 2940, y: 4572, name: '', text: 'bottom-right-lean' },
    { x: 2838, y: 4640, name: '', text: 'top-left', isExchange: true, to: [LINE_10] },
    { x: 2700, y: 4936, name: '', text: 'top-left', isExchange: true, to: [LINE_14] },
    { x: 2700, y: 5113, name: '', text: 'left' },
    { x: 2700, y: 5235, name: '', text: 'left' },
    { x: 2700, y: 5353, name: '', text: 'left' },
    { x: 2700, y: 5485, name: '', text: 'left' },
    { x: 2700, y: 5632, name: '', text: 'right', isExchange: true, to: [LINE_FANGSHAN] }
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
    { x: 5049, y: 5348, name: '', text: 'bottom-right', isExchange: true, to: [LINE_5, LINE_YIZHUANG] },
    { x: 5484, y: 5348, name: 'HBase', text: 'top' },
    { x: 5762, y: 5276, name: '高性能分析', text: 'right' },
    { x: 5818, y: 4995, name: 'ESP', text: 'bottom-left', isExchange: true, to: [LINE_14] },
    { x: 5818, y: 4874, name: '内存分析引擎', text: 'left' },
    { x: 5818, y: 4774, name: '', text: 'left' },
    { x: 5818, y: 4680, name: 'Spark', text: 'top-left', isExchange: true, to: [LINE_7] },
    { x: 5818, y: 4305, name: '正则表达式', text: 'bottom-right', isExchange: true, to: [LINE_1] },
    { x: 5818, y: 4178, name: '', text: 'right' },
    { x: 5818, y: 4071, name: '向量矩阵', text: 'top-right', isExchange: true, to: [LINE_6] },
    { x: 5818, y: 3862, name: 'Hive', text: 'right' },
    { x: 5818, y: 3718, name: 'M/R编程', text: 'left' },
    { x: 5818, y: 3573, name: '任务管理', text: 'right' },
    { x: 5818, y: 3391.5, name: '', text: 'bottom-right', isExchange: true, to: [AIRPORT_EXPRESS] },
    { x: 5772, y: 3220, name: '数据节点', text: 'bottom-left-lean' },
    { x: 5451, y: 3190, name: 'Mashup', text: 'top-right', isExchange: true, to: [LINE_13] },
    { x: 5048, y: 3190, name: '主节点', text: 'bottom-right', isExchange: true, to: [LINE_5] },
    { x: 4788, y: 3190, name: '平台搭建', text: 'bottom' },
    { x: 4554.5, y: 3190, name: '数据复制', text: 'top-left', isExchange: true, to: [LINE_8] },
    { x: 4305, y: 3190, name: 'HDFS', text: 'bottom' },
    { x: 4101, y: 3190, name: 'MapReduce', text: 'top' },
    { x: 3886, y: 3190, name: 'Hadoop', text: 'bottom' },
    { x: 3653, y: 3190, name: '移动可视化', text: 'bottom-left', isExchange: true, to: [LINE_13] },
    { x: 3257, y: 3190, name: '', text: 'bottom' },
    { x: 3069, y: 3190, name: '训练验证测试集', text: 'top-left', isExchange: true, to: [LINE_4] },
    { x: 2802, y: 3190, name: '精准营销', text: 'top' },
    { x: 2660, y: 3229, name: '客户DNA', text: 'left' },
    { x: 2632, y: 3376, name: '工业4.0', text: 'right' },
    { x: 2632, y: 3561, name: '人才罗盘', text: 'left' },
    { x: 2632, y: 3750, name: '设备预维护', text: 'left' },
    { x: 2632, y: 3953.5, name: '卡方检验', text: 'bottom-left', isExchange: true, to: [LINE_6] },
    { x: 2743, y: 4121, name: 'CAP理论', text: 'top-right-lean' },
    { x: 2838, y: 4305, name: '', text: 'bottom-left', isExchange: true, to: [LINE_1] },
    { x: 2838, y: 4480, name: '车联网', text: 'left' },
    { x: 2838, y: 4640, name: '传感器', text: 'top-left', isExchange: true, to: [LINE_9] },
    { x: 2838, y: 4937, name: '舆情监控', text: 'right', isExchange: true, to: [LINE_14] },
    { x: 2838, y: 5150, name: '', text: 'right' },
    { x: 3035, y: 5348, name: '物联网', text: 'bottom' },
    { x: 3256, y: 5348, name: '移动互联网', text: 'top' },
    { x: 3526, y: 5348, name: '互联网征信', text: 'bottom' },
    { x: 3769, y: 5348, name: '社交媒体分析', text: 'top' },
    { x: 4130, y: 5348, name: '神经网络', text: 'top-left', isExchange: true, to: [LINE_4] },
    { x: 4369, y: 5348, name: 'SNA', text: 'bottom' },
    { x: 4557, y: 5348, name: 'LBS', text: 'top' },
    { x: 4826, y: 5348, name: '网络计算', text: 'bottom' }
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
    { x: 3767, y: 3698, name: '累积分布函数', text: 'bottom-left', isExchange: true, to: [LINE_2, LINE_4] },
    { x: 3654, y: 3440, name: '可视化探索', text: 'left' },
    { x: 3654, y: 3191, name: '移动可视化', text: 'bottom-left', isExchange: true, to: [LINE_10] },
    { x: 3654, y: 3002, name: '仪表盘', text: 'right' },
    { x: 3654, y: 2838, name: '条图饼图线图', text: 'left' },
    { x: 3654, y: 2584, name: '散点图面积图', text: 'left', isExchange: true, to: [LINE_CHANGPING] },
    { x: 3851.5, y: 2453, name: '气泡图', text: 'bottom' },
    { x: 4074.5, y: 2453, name: '地图', text: 'top' },
    { x: 4389, y: 2453, name: '动态交互图形', text: 'top-right', isExchange: true, to: [LINE_8] },
    { x: 5049, y: 2453, name: '热力图瓦片图', text: 'top-left', isExchange: true, to: [LINE_5] },
    { x: 5452, y: 2606, name: '词云', text: 'right' },
    { x: 5452, y: 2908.5, name: '网络图桑基图', text: 'top-right', isExchange: true, to: [LINE_15] },
    { x: 5452, y: 3191, name: 'Mashup', text: 'top-right', isExchange: true, to: [LINE_10] },
    { x: 5452, y: 3394, name: '时序动画', text: 'right' },
    { x: 5452, y: 3532, name: 'What-if分析', text: 'right' },
    { x: 5362, y: 3699, name: '分位数', text: 'left', isExchange: true, to: [LINE_2, AIRPORT_EXPRESS] }
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
    { x: 1709, y: 4937, name: '', text: 'top' },
    { x: 1875, y: 4937, name: '', text: 'bottom' },
    { x: 2060, y: 4937, name: '', text: 'top' },
    { x: 2233.5, y: 4937, name: '', text: 'bottom' },
    { x: 2477, y: 4937, name: '', text: 'bottom' },
    { x: 2700, y: 4937, name: '', text: 'top-left', isExchange: true, to: [LINE_9] },
    { x: 2838, y: 4937, name: '', text: 'right', isExchange: true, to: [LINE_10] },
    { x: 4129, y: 4995, name: '', text: 'left', isExchange: true, to: [LINE_4] },
    { x: 4338, y: 4995, name: '', text: 'bottom', notOpened: true },
    { x: 4577.5, y: 4995, name: '', text: 'top' },
    { x: 4796, y: 4995, name: '', text: 'bottom' },
    { x: 5049, y: 4995, name: '', text: 'bottom-right', isExchange: true, to: [LINE_5] },
    { x: 5449, y: 4995, name: '', text: 'bottom' },
    { x: 5818, y: 4995, name: '', text: 'bottom-left', isExchange: true, to: [LINE_10] },
    { x: 5984, y: 4995, name: '', text: 'bottom' },
    { x: 6100, y: 4832, name: '', text: 'left', notOpened: true },
    { x: 6100, y: 4680, name: '', text: 'top-left', isExchange: true, to: [LINE_7] },
    { x: 6100, y: 4305, name: '', text: 'bottom-right', isExchange: true, to: [LINE_1] },
    { x: 6100, y: 4071, name: '', text: 'top-right', isExchange: true, to: [LINE_6] },
    { x: 6100, y: 3887, name: '', text: 'right' },
    { x: 6100, y: 3758.5, name: '', text: 'right' },
    { x: 6100, y: 3628, name: '', text: 'right' },
    { x: 6100, y: 3514.5, name: '', text: 'right' },
    { x: 6100, y: 3384.5, name: '', text: 'right', notOpened: true },
    { x: 6031, y: 3175.5, name: '', text: 'top-right-lean' },
    { x: 5923, y: 3057, name: '', text: 'top-right-lean' },
    { x: 5872, y: 2908.5, name: '', text: 'bottom-left', isExchange: true, to: [LINE_15] },
    { x: 5872, y: 2818, name: '', text: 'right' },
    { x: 5872, y: 2704, name: '', text: 'right' },
    { x: 5872, y: 2575, name: '', text: 'right' }
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
    { x: 3795, y: 2908.5, name: '数据接口规范', text: 'top' },
    { x: 4038, y: 2908.5, name: '数据映射', text: 'bottom' },
    { x: 4260, y: 2908.5, name: '数据质量', text: 'top' },
    { x: 4554.5, y: 2908.5, name: '', text: 'bottom-left', isExchange: true, to: [LINE_8] },
    { x: 4795, y: 2908.5, name: '数据变换', text: 'bottom' },
    { x: 5049, y: 2908.5, name: '数据整合', text: 'top-right', isExchange: true, to: [LINE_5] },
    { x: 5245, y: 2908.5, name: 'ABT', text: 'bottom' },
    { x: 5452, y: 2908.5, name: '网络图桑基图', text: 'top-right', isExchange: true, to: [LINE_13] },
    { x: 5869.5, y: 2908.5, name: '', text: 'bottom-left', isExchange: true, to: [LINE_14] },
    { x: 6241.5, y: 2908.5, name: 'SQL', text: 'top' },
    { x: 6485, y: 2767.5, name: '抽样', text: 'right' },
    { x: 6485, y: 2620.5, name: '数据分区', text: 'right' },
    { x: 6485, y: 2467.5, name: '变量选择', text: 'right' },
    { x: 6485, y: 2321.5, name: '标准化', text: 'left' },
    { x: 6485, y: 2173.5, name: '数据模型', text: 'left' },
    { x: 6485, y: 2017.5, name: '3NF', text: 'left' },
    { x: 6775, y: 1952.5, name: '数据冗余', text: 'bottom' },
    { x: 7143, y: 1952.5, name: '逆规范化', text: 'top' },
    { x: 7493.5, y: 1952.5, name: '数据压缩', text: 'bottom' },
    { x: 7895.5, y: 1952.5, name: '数据安全', text: 'top' }
  ]
}

const line16 = {
  name: LINE_16,
  d: `M1850 1868 H2658
  C2923 1905, 2884 2010 2884 2556`,
  color: '#5f9537',
  stationsData: [
    { x: 1850, y: 1868, name: '', text: 'bottom' },
    { x: 2052, y: 1868, name: '', text: 'top' },
    { x: 2256, y: 1868, name: '', text: 'bottom' },
    { x: 2458, y: 1868, name: '', text: 'top' },
    { x: 2658, y: 1868, name: '', text: 'top' },
    { x: 2824, y: 1934, name: '', text: 'top-right-lean' },
    { x: 2884, y: 2086, name: '', text: 'right' },
    { x: 2884, y: 2242, name: '', text: 'right' },
    { x: 2884, y: 2369, name: '', text: 'right' },
    { x: 2884, y: 2559, name: '', text: 'top-right', isExchange: true, to: [LINE_4] }
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
    { x: 2425, y: 1335.5, name: '', text: 'bottom' },
    { x: 2693, y: 1375, name: '', text: 'top-right-lean' },
    { x: 2990, y: 1537.5, name: '', text: 'top' },
    { x: 3341, y: 1537.5, name: '', text: 'top' },
    { x: 3716, y: 1537.5, name: '', text: 'top' },
    { x: 3826, y: 1698, name: '', text: 'right' },
    { x: 3826, y: 1806, name: '', text: 'right' },
    { x: 3826, y: 1926, name: '', text: 'left' },
    { x: 3826, y: 2047, name: '', text: 'left' },
    { x: 3826, y: 2191.5, name: '', text: 'left', isExchange: true, to: [LINE_8] },
    { x: 3657.9248046875, y: 2317.827880859375, name: '', text: 'left' },
    { x: 3654, y: 2584, name: '', text: 'left' }
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
    { x: 5362, y: 3698, name: '分位数', text: 'left', isExchange: true, to: [LINE_13] },
    { x: 5818, y: 3391.5, name: '', text: 'left', isExchange: true, to: [LINE_10] },
    { x: 7335, y: 2554, name: '', text: 'right' },
    { x: 6971, y: 2554, name: '', text: 'right' }
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
     { x: 5049, y: 5348, name: '', text: 'bottom-right', isExchange: true, to: [LINE_8, LINE_10] },
     { x: 5049, y: 5536.5, name: '', text: 'left' },
     { x: 5125, y: 5614.5, name: '', text: 'top-right-lean' },
     { x: 5202, y: 5689.5, name: '', text: 'bottom-left-lean' },
     { x: 5289, y: 5768.5, name: '', text: 'top-right-lean' },
     { x: 5359.5, y: 5840.5, name: '', text: 'bottom-left-lean' },
     { x: 5438.5, y: 5914.5, name: '', text: 'top-right-lean' },
     { x: 5527.5, y: 6001.5, name: '', text: 'bottom-left-lean' },
     { x: 5608.5, y: 6076.5, name: '', text: 'top-right-lean' },
     { x: 5723.5, y: 6115.5, name: '', text: 'bottom' },
     { x: 5919, y: 6115.5, name: '', text: 'bottom' },
     { x: 6112, y: 6115.5, name: '', text: 'top' },
     { x: 6303, y: 6115.5, name: '', text: 'bottom' },
     { x: 6485, y: 6115.5, name: '', text: 'top', notOpened: true }
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
     { x: 2700, y: 5632, name: '', text: 'right', isExchange: true, to: [LINE_9] },
     { x: 2592.4951171875, y: 5744.86572265625, name: '', text: 'top-left-lean' },
     { x: 2487.098388671875, y: 5851.5966796875, name: '', text: 'bottom-right-lean' },
     { x: 2390.484619140625, y: 5949.43310546875, name: '', text: 'top-left-lean' },
     { x: 2287.7578125, y: 6053.46044921875, name: '', text: 'bottom-right-lean' },
     { x: 2201.82421875, y: 6140.48193359375, name: '', text: 'top-left-lean' },
     { x: 2106.0537109375, y: 6237.46484375, name: '', text: 'bottom-right-lean' },
     { x: 1986.5, y: 6356, name: '', text: 'bottom-right-lean' },
     { x: 1782, y: 6356, name: '', text: 'bottom' },
     { x: 1539, y: 6356, name: '', text: 'top' },
     { x: 1236, y: 6356, name: '', text: 'bottom' }
  ]
}

export const lines = [
  line1, line2, line4, line5, line6, line7, line8, line9, line10, line13, line14, line15,
  line16, lineChangPing, airportExpress, lineYiZhuang, lineFangShan
]

export const exchangeStations = lines
  .reduce((result, line) => {
    return result.concat(line.stationsData.filter((station) => station.isExchange))
  }, [])
  .reduce((result, line) => {
    if (result[line.name]) {
      result[line.name].push(line)
    } else {
      result[line.name] = [line]
    }
    return result
  }, {})
