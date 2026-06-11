// ==========================================
// 万泓科技网站数据 — 后台可编辑
// 通过 admin.html 后台管理界面修改
// ==========================================

const SITE_DATA = {
  company: {
    name: '惠州市万泓科技有限公司',
    nameEn: 'Huizhou Wanhong Technology Co., Ltd.',
    slogan: '专业锂电池解决方案提供商',
    sloganEn: 'Advanced Lithium Battery Technology & Solutions',
    about: '惠州市万泓科技有限公司坐落于惠州电子产业带核心区域，是一家专注于电子烟圆柱型电池、CBD方形电池及各类定制电池的研发制造企业。依托成熟的产业链配套与区位优势，我们为客户提供品质稳定、安全可靠、快速交付、按需定制的电芯解决方案。',
    stats: [
      { num: '10+', label: '年行业经验' },
      { num: '500万+', label: '月产能' },
      { num: '50+', label: '服务客户' },
      { num: '100%', label: '全检出货' }
    ]
  },
  contact: {
    address: '惠州市惠阳区镇隆镇井龙村尚佰意实业有限公司厂房D栋9楼',
    contactPerson: '廖万欣',
    phone1: '13682629862',
    phone2: '14758533587',
    phone2Label: '彭先生',
    email: '1393083938@qq.com',
    wechat: '14758533587'
  },
  products: [
    {
      id: 1,
      name: '18250 圆柱电芯',
      category: 'cylindrical',
      model: '18250',
      capacity: '520mAh',
      voltage: '3.7V',
      size: '18×25mm',
      usage: 'waka / 妈宝 / 冰爆 / 小黑条 / 雾专用',
      type: '猛系A品纯钴',
      stock: true,
      image: 'images/product_01.png'
    },
    {
      id: 2,
      name: '17350 圆柱电芯',
      category: 'cylindrical',
      model: '17350',
      capacity: '750mAh',
      voltage: '3.7V',
      size: '17×35mm',
      usage: '调冰专用',
      type: '猛系A品纯钴',
      stock: true,
      image: 'images/product_02.png'
    },
    {
      id: 3,
      name: '173040 大容量电芯',
      category: 'cylindrical',
      model: '173040',
      capacity: '2600mAh',
      voltage: '3.7V',
      size: '17×30×40mm',
      usage: '阿里 / 大烟专用',
      type: '猛系A品纯钴',
      stock: true,
      image: 'images/product_03.png'
    },
    {
      id: 4,
      name: '16250 圆柱电芯',
      category: 'cylindrical',
      model: '16250',
      capacity: '380mAh',
      voltage: '3.7V',
      size: '16×25mm',
      usage: '鸭嘴兽专用',
      type: '猛系A品纯钴',
      stock: true,
      image: 'images/product_04.png'
    },
    {
      id: 5,
      name: '861633 通用电芯',
      category: 'cylindrical',
      model: '861633',
      capacity: '380mAh',
      voltage: '3.7V',
      size: '8.6×16×33mm',
      usage: '五代/六代通用 / 爱米乐',
      type: '猛系A品纯钴',
      stock: true,
      image: 'images/product_05.png'
    },
    {
      id: 6,
      name: '21400 大功率电芯',
      category: 'cylindrical',
      model: '21400',
      capacity: '1200mAh',
      voltage: '3.7V',
      size: '21×40mm',
      usage: '水烟大炮筒',
      type: '猛系A品纯钴',
      stock: true,
      image: 'images/product_06.png'
    },
    {
      id: 7,
      name: '13450 圆柱电芯',
      category: 'cylindrical',
      model: '13450',
      capacity: '450mAh',
      voltage: '3.7V',
      size: '13×45mm',
      usage: '火箭款',
      type: '猛系A品纯钴',
      stock: true,
      image: 'images/product_07.png'
    },
    {
      id: 8,
      name: '13500 圆柱电芯',
      category: 'cylindrical',
      model: '13500',
      capacity: '500mAh',
      voltage: '3.7V',
      size: '13×50mm',
      usage: '火箭款 / 通用款',
      type: '猛系A品纯钴',
      stock: true,
      image: 'images/product_08.png'
    },
    {
      id: 9,
      name: '801437 CBD方形电池',
      category: 'cbd',
      model: '801437',
      capacity: '350mAh',
      voltage: '3.7V',
      size: '8.0×14×37mm',
      usage: 'CBD雾化器',
      type: '软包锂电',
      stock: true,
      image: 'images/product_09.png'
    },
    {
      id: 10,
      name: '501447 CBD方形电池',
      category: 'cbd',
      model: '501447',
      capacity: '280mAh',
      voltage: '3.7V',
      size: '5.0×14×47mm',
      usage: 'CBD笔式设备',
      type: '软包锂电',
      stock: true,
      image: 'images/product_10.png'
    },
    {
      id: 11,
      name: '602030 CBD方形电池',
      category: 'cbd',
      model: '602030',
      capacity: '290mAh',
      voltage: '3.7V',
      size: '6.0×20×30mm',
      usage: 'CBD袖珍设备',
      type: '软包锂电',
      stock: true,
      image: 'images/product_11.png'
    },
    {
      id: 12,
      name: '102428 CBD大容量电池',
      category: 'cbd',
      model: '102428',
      capacity: '550mAh',
      voltage: '3.7V',
      size: '10×24×28mm',
      usage: '大容量CBD设备',
      type: '软包锂电',
      stock: true,
      image: 'images/product_12.png'
    },
    {
      id: 13,
      name: '定制圆柱电芯',
      category: 'custom',
      model: '定制',
      capacity: '按需定制',
      voltage: '3.7V / 3.8V',
      size: '按需定制',
      usage: '各类型电子烟设备',
      type: '纯钴/混钴/高压',
      stock: true,
      image: 'images/product_13.png'
    }
  ]
};
