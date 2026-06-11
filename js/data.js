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
      image: 'images/0e872ae3023ca051a21c7d8b337dc86c.jpg'
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
      image: 'images/2b293882f6eea069abc4992628fcfd46.jpg'
    },
    {
      id: 3,
      name: '173040 方形电芯',
      category: 'cbd',
      model: '173040',
      capacity: '2600mAh',
      voltage: '3.7V',
      size: '17×30×40mm',
      usage: '阿里 / 大烟专用',
      type: '猛系A品纯钴',
      stock: true,
      image: 'images/3bc0f7dab78f577a67fd7e030138f02c.jpg'
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
      image: 'images/45b369f670dd0a336106b36967bb3226.jpg'
    },
    {
      id: 5,
      name: '861633 方形电芯',
      category: 'cbd',
      model: '861633',
      capacity: '380mAh',
      voltage: '3.7V',
      size: '8.6×16×33mm',
      usage: '五代/六代通用 / 爱米乐',
      type: '猛系A品纯钴',
      stock: true,
      image: 'images/48eb664a9528a01bee5f5caa968678d9.jpg'
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
      image: 'images/48eb664a9528a01bee5f5caa968678d9.jpg'
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
      image: 'images/7190baa9a3dfea17b3544c5556cd01f5.jpg'
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
      image: 'images/4c31b43f278903e603ed3388c45c9b52.jpg'
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
      image: 'images/5046fc9f5b6521364de7c50a123d3407.jpg'
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
      image: 'images/781f956cc1a540c21bb3ebd26562e30d.jpg'
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
      image: 'images/8bc704b94f59a11e2f94d7292c316bde.jpg'
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
      image: 'images/d47da12866daaf9869f8d27dafd9bc74.jpg'
    },
    {
      id: 13,
      name: '定制电芯',
      category: 'custom',
      model: '定制',
      capacity: '按需定制',
      voltage: '3.7V / 3.8V',
      size: '按需定制',
      usage: '各类型电子烟设备',
      type: '纯钴/混钴/高压',
      stock: true,
      image: 'images/图片1.png'
    }
  ]
};
