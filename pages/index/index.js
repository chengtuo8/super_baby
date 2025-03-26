import request from '../../utils/request.js'

const APIKEY = "4920636a0605499daa638d9bc37d2127";// 填入你申请的KEY
Page({
  /**
   * 页面的初始数据
   */
  data: {
    daily: 1,
    week: 1,
    //宝宝的出生年月日
    year: 2021,
    month: 4,
    day: 20,
    cardCur: 0,
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

  //获取展示列表
  async getBabyList() {
    const babyList = await request('/api/babyInfo')
    this.setData({
      babyList
    })
  },

  // 计算周数和日期
  cntDay(year,month,day) {
    let myDate=new Date();
    let nowDate=new Date();
    let daily=0;
    let week;
    myDate.setFullYear(year,month-1,day);
    daily=(nowDate.getTime()-myDate.getTime())/((1000 * 60 * 60 * 24));
    console.log(daily);
    week=parseInt(Math.ceil(daily/7.0));
    console.log(week);
    this.setData({
      daily: daily,
      week:week
    })
  },

  getScan:function(){
    wx.scanCode({
      success (res) {
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 后端获取
    // this.getBabyList()
    
    // 云开发
    wx.cloud.database().collection('babyInfos')
    .get()
    .then(res => {
      console.log(res);
      this.setData({
        babyList: res.data[0].babyInfos
      })
    })
  },

  onShow: function () {
    let babyDate = wx.getStorageSync('babyDate')
    if(babyDate) {
      let date = babyDate.split('-')
      console.log(date);
      this.setData({
        year: parseInt(date[0]),
        month: parseInt(date[1]),
        day: parseInt(date[2])
      })
      this.cntDay(this.data.year, this.data.month, this.data.day);
    }
  }

})
