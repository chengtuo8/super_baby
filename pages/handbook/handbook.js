import request from '../../utils/request.js'
const app = getApp()
Page({
  data: {
    TabCur: 0,
    scrollLeft: 0,
    babyList: [],
    //#region 
    // babyList:[
    //   {
    //     id:1,
    //     url:'../../static/images/babypics/p1.jpeg',
    //     days:'1天-7天',
    //     weight:'2.26~4.65',
    //     tall:'44.7~55.0',
    //     text:'刚出生的宝宝，看起来不是很好看，皮肤红，小脸皱，小眼肿。宝宝大部分时间都在睡觉，总是紧紧地握住拳头。这周开始熟悉妈妈的味道，以及妈妈说话的声音'
    //   },
    //   {
    //     id:2,
    //     url:'../../static/images/babypics/p2.jpeg',
    //     days:'8天-14天',
    //     weight:'2.26~4.65',
    //     tall:'44.7~55.0',
    //     text:'宝宝这时的笑还是无意义的笑，随着视力的发育和眼部组织的成熟，对眼的宝宝会变得正常'
    //   },
    //   {
    //     id:3,
    //     url:'../../static/images/babypics/p3.jpeg',
    //     days:'15天-21天',
    //     weight:'2.26~4.65',
    //     tall:'44.7~55.0',
    //     text:'宝宝的身长和体重在快速增长，偶尔吃吃小手，蹬蹬小脚，已经认识妈妈的声音和连，会发出嗯啊的声音，急切需要妈妈的关注和爱抚'
    //   },
    //   {
    //     id:4,
    //     url:'../../static/images/babypics/p4.jpeg',
    //     days:'8天-14天',
    //     weight:'2.26~4.65',
    //     tall:'44.7~55.0',
    //     text:'刚出生的宝宝，看起来不是很好看，皮肤红，小脸皱，小眼肿。宝宝大部分时间都在睡觉，总是紧紧地握住拳头。这周开始熟悉妈妈的味道，以及妈妈说话的声音'
    //   },
    //   {
    //     id:5,
    //     url:'../../static/images/babypics/p5.jpeg',
    //     days:'1天-7天',
    //     weight:'2.26~4.65',
    //     tall:'44.7~55.0',
    //     text:'刚出生的宝宝，看起来不是很好看，皮肤红，小脸皱，小眼肿。宝宝大部分时间都在睡觉，总是紧紧地握住拳头。这周开始熟悉妈妈的味道，以及妈妈说话的声音'
    //   },
    //   {
    //     id:6,
    //     url:'../../static/images/babypics/p6.jpeg',
    //     days:'8天-14天',
    //     weight:'2.26~4.65',
    //     tall:'44.7~55.0',
    //     text:'刚出生的宝宝，看起来不是很好看，皮肤红，小脸皱，小眼肿。宝宝大部分时间都在睡觉，总是紧紧地握住拳头。这周开始熟悉妈妈的味道，以及妈妈说话的声音'
    //   },
    //   {
    //     id:7,
    //     url:'../../static/images/babypics/p7.jpeg',
    //     days:'1天-7天',
    //     weight:'2.26~4.65',
    //     tall:'44.7~55.0',
    //     text:'刚出生的宝宝，看起来不是很好看，皮肤红，小脸皱，小眼肿。宝宝大部分时间都在睡觉，总是紧紧地握住拳头。这周开始熟悉妈妈的味道，以及妈妈说话的声音'
    //   },
    //   {
    //     id:8,
    //     url:'../../static/images/babypics/p8.jpeg',
    //     days:'8天-14天',
    //     weight:'2.26~4.65',
    //     tall:'44.7~55.0',
    //     text:'刚出生的宝宝，看起来不是很好看，皮肤红，小脸皱，小眼肿。宝宝大部分时间都在睡觉，总是紧紧地握住拳头。这周开始熟悉妈妈的味道，以及妈妈说话的声音'
    //   },
    //   {
    //     id:9,
    //     url:'../../static/images/babypics/p1.jpeg',
    //     days:'1天-7天',
    //     weight:'2.26~4.65',
    //     tall:'44.7~55.0',
    //     text:'刚出生的宝宝，看起来不是很好看，皮肤红，小脸皱，小眼肿。宝宝大部分时间都在睡觉，总是紧紧地握住拳头。这周开始熟悉妈妈的味道，以及妈妈说话的声音'
    //   },
    //   {
    //     id:10,
    //     url:'../../static/images/babypics/p1.jpeg',
    //     days:'8天-14天',
    //     weight:'2.26~4.65',
    //     tall:'44.7~55.0',
    //     text:'刚出生的宝宝，看起来不是很好看，皮肤红，小脸皱，小眼肿。宝宝大部分时间都在睡觉，总是紧紧地握住拳头。这周开始熟悉妈妈的味道，以及妈妈说话的声音'
    //   },
    //   {
    //     id:11,
    //     url:'../../static/images/babypics/p1.jpeg',
    //     days:'1天-7天',
    //     weight:'2.26~4.65',
    //     tall:'44.7~55.0',
    //     text:'刚出生的宝宝，看起来不是很好看，皮肤红，小脸皱，小眼肿。宝宝大部分时间都在睡觉，总是紧紧地握住拳头。这周开始熟悉妈妈的味道，以及妈妈说话的声音'
    //   },
    //   {
    //     id:12,
    //     url:'../../static/images/babypics/p1.jpeg',
    //     days:'8天-14天',
    //     weight:'2.26~4.65',
    //     tall:'44.7~55.0',
    //     text:'刚出生的宝宝，看起来不是很好看，皮肤红，小脸皱，小眼肿。宝宝大部分时间都在睡觉，总是紧紧地握住拳头。这周开始熟悉妈妈的味道，以及妈妈说话的声音'
    //   },
    //   {
    //     id:13,
    //     url:'../../static/images/babypics/p1.jpeg',
    //     days:'1天-7天',
    //     weight:'2.26~4.65',
    //     tall:'44.7~55.0',
    //     text:'刚出生的宝宝，看起来不是很好看，皮肤红，小脸皱，小眼肿。宝宝大部分时间都在睡觉，总是紧紧地握住拳头。这周开始熟悉妈妈的味道，以及妈妈说话的声音'
    //   },
    //   {
    //     id:14,
    //     url:'../../static/images/babypics/p1.jpeg',
    //     days:'8天-14天',
    //     weight:'2.26~4.65',
    //     tall:'44.7~55.0',
    //     text:'刚出生的宝宝，看起来不是很好看，皮肤红，小脸皱，小眼肿。宝宝大部分时间都在睡觉，总是紧紧地握住拳头。这周开始熟悉妈妈的味道，以及妈妈说话的声音'
    //   },
    //   {
    //     id:15,
    //     url:'../../static/images/babypics/p1.jpeg',
    //     days:'1天-7天',
    //     weight:'2.26~4.65',
    //     tall:'44.7~55.0',
    //     text:'刚出生的宝宝，看起来不是很好看，皮肤红，小脸皱，小眼肿。宝宝大部分时间都在睡觉，总是紧紧地握住拳头。这周开始熟悉妈妈的味道，以及妈妈说话的声音'
    //   },
    //   {
    //     id:16,
    //     url:'../../static/images/babypics/p1.jpeg',
    //     days:'8天-14天',
    //     weight:'2.26~4.65',
    //     tall:'44.7~55.0',
    //     text:'刚出生的宝宝，看起来不是很好看，皮肤红，小脸皱，小眼肿。宝宝大部分时间都在睡觉，总是紧紧地握住拳头。这周开始熟悉妈妈的味道，以及妈妈说话的声音'
    //   },
    //   {
    //     id:17,
    //     url:'../../static/images/babypics/p1.jpeg',
    //     days:'1天-7天',
    //     weight:'2.26~4.65',
    //     tall:'44.7~55.0',
    //     text:'刚出生的宝宝，看起来不是很好看，皮肤红，小脸皱，小眼肿。宝宝大部分时间都在睡觉，总是紧紧地握住拳头。这周开始熟悉妈妈的味道，以及妈妈说话的声音'
    //   },
    //   {
    //     id:18,
    //     url:'../../static/images/babypics/p1.jpeg',
    //     days:'8天-14天',
    //     weight:'2.26~4.65',
    //     tall:'44.7~55.0',
    //     text:'刚出生的宝宝，看起来不是很好看，皮肤红，小脸皱，小眼肿。宝宝大部分时间都在睡觉，总是紧紧地握住拳头。这周开始熟悉妈妈的味道，以及妈妈说话的声音'
    //   },
    // ]
    //#endregion
    
  },
  //页面加载时获取数据
  onLoad: function ({week}) {
    console.log(app.globalData.babylist);
    wx.showLoading({
      title: '正在加载',
      mask: true
    })
    // 后端获取数据
    // this.getBabyList()
    
    // 云开发获取数据
    wx.cloud.database().collection('babyInfos')
    .get()
    .then(res => {
      console.log(res);
      this.setData({
        babyList: res.data[0].babyInfos
      })
      wx.hideLoading()
    })
    this.setData({
      TabCur: week - 1,
      scrollLeft: (week - 1 - 1) * 120,
    })
  },

  async getBabyList() {
    const babyList = await request('/api/babyInfo')
    this.setData({
      babyList
    })
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60,
    })
  },
  tabAdd(e) {
    this.setData({
      TabCur: this.data.TabCur + 1,
      scrollLeft: (this.data.TabCur)*60,
    })
  },
  tabSub(e) {
    this.setData({
      TabCur: this.data.TabCur - 1,
      scrollLeft: (this.data.TabCur-2)*60,
    })
  }
})