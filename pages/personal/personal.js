import request from '../../utils/request.js'

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false, //是否登录
    userInfo: {},
    // userInfo: { //用户信息
    //   nickName: '',
    //   avatar: '',
    //   relation: '',
    //   detail: { //存储收藏,关注,粉丝等
    //     collect: 13,
    //     attention: 133,
    //     fans: 11,
    //   },
    //   // scheduleWeekList: [ // 本周日程表
    //   //   {
    //   //     day: 
    //   //   }
    //   //   {
    //   //     id: 0,
    //   //     time: {
    //   //       startT: '16.11',
    //   //       endT: '18.11',
    //   //     },
    //   //     msg: '哈哈哈哈哈',
    //   //   },
    //   //   {
    //   //     id: 1,
    //   //     time: "全天",
    //   //     msg: '啦啦啦啦啦啦啦啦',
    //   //   }
    //   // ]
    // },


    isTouch: false, //是否点击了
    ele: '',// 点击的元素
    date: {
    }, //当天事件,包含日期和日程数
    babyDate: '2021-5-1', //选择宝宝的出生日期
    dialogMsg: "", //记录日程的标题
    isAllDay: false, //是否选择了全天
    date: new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-' + new Date().getDate(), //选择的日期
    startTime: '00:00', //开始时间
    endTime: '00:00', //结束时间
    //抽屉效果的数据
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    TabCur: 1,
    scrollLeft: 0,
    // 当天日程表
    schedule: {
      day: new Date().getDate(),
      list: [
        // {
        //   id: 0,
        //   time: {
        //     startT: '16.11',
        //     endT: '18.11',
        //   },
        //   msg: '哈哈哈哈哈',
        // },
        // {
        //   id: 1,
        //   time: "全天",
        //   msg: '啦啦啦啦啦啦啦啦',
        // }
      ]
    },
    recent: [
      // {
      //   day: 5,
      //   list: [
      //     {
      //       id: 0,
      //       time: {
      //         startT: '16.11',
      //         endT: '18.11',
      //       },
      //       msg: 'dddd',
      //     },
      //     {
      //       id: 1,
      //       time: "全天",
      //       msg: 'qqqqq',
      //     }
      //   ]
      // },
      // {
      //   day: 6,
      //   list: [
      //     {
      //       id: 0,
      //       time: {
      //         startT: '16.11',
      //         endT: '18.11',
      //       },
      //       msg: 'dddd',
      //     },
      //     {
      //       id: 1,
      //       time: "全天",
      //       msg: 'qqqqq',
      //     }
      //   ]
      // },
      // {
      //   day: 7,
      //   list: [
      //     {
      //       id: 0,
      //       time: {
      //         startT: '16.11',
      //         endT: '18.11',
      //       },
      //       msg: 'dddd',
      //     },
      //     {
      //       id: 1,
      //       time: "全天",
      //       msg: 'qqqqq',
      //     }
      //   ]
      // },
      // {
      //   day: 4,
      //   list: [
      //     {
      //       id: 0,
      //       time: {
      //         startT: '16.11',
      //         endT: '18.11',
      //       },
      //       msg: '哈哈哈哈哈',
      //     },
      //     {
      //       id: 1,
      //       time: "全天",
      //       msg: '啦啦啦啦啦啦啦啦',
      //     }
      //   ]
      // }
    ],
    display: [], //展示的三天
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const recent = wx.getStorageSync('recent')
    if(recent) {
      let schedule = schedule = recent.find((item) => {
        console.log(item.day, new Date().getDate());
        if(item.day == new Date().getDate()) {
          return true
        }
      })
      if(!schedule) {
        schedule = {
          day: new Date().getDate(),
          list: []
        }
      }
      this.setData({
        recent,
        schedule
      })
    }
  },

  // 处理登录
  handleLogin() {
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => { //登录成功后
        console.log(res)
        wx.login({
          success: function (yes) {
            console.log(yes)
            //成功后发送请求获取openid
            // 通过云函数获取openid
            wx.cloud.callFunction({
              name: 'getOpenId'
            })
              .then(info => {
                console.log('获取成功', info.result.openid)
                // 将用户openid存入本地
                wx.setStorage({
                  key: 'openid',
                  data: info.result.openid
                })
              })
              .catch(err => {
                console.log('获取失败', err);
              })
            
          },
          fail(e) {
            console.log(e)
          }
        })
        this.setData({
          userInfo: {...res.userInfo, relation: '',detail: {collect: [], attention: [], fans: [], appreciate: []}},
          hasUserInfo: true,
          isLogin: true,
          modalName: 'selectAge'
        })
        wx.setStorageSync('userInfo', this.data.userInfo)
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },

  // 选择日期后点击确认后的回调
  selectBabyage() {
    wx.setStorageSync('babyDate', this.data.babyDate)
    this.hideModal()
  },

  changeInfo() {
    wx.navigateTo({
      url: '/pages/editInfo/editInfo?userInfo=' + this.data.userInfo,
    })
  },

  //触摸日程的回调
  touchStart(e) {
    this.setData({
      isTouch: true,
      ele: e.currentTarget.id
    })
  },

  // 手指离开的回调
  touchEnd() {
    this.setData({
      isTouch: false,
      ele: ''
    })
  },

  // 抽屉效果的js
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  // 显示弹窗
  showModal(e) {
    console.log(e.currentTarget.dataset.target);
    const {recent} = this.data
    const day = new Date().getDate()
    const pre = recent.find((item) => { 
      return item.day == day - 1
    })
    const today = recent.find((item) => { 
      return item.day == day
    })
    const next = recent.find((item) => { 
      return item.day == day + 1
    })
    const display = []
    if(pre) {
      display.push(pre)
    }
    if(today) {
      display.push(today)
    }
    if(next) {
      display.push(next)
    }
    
    this.setData({
      display,
      modalName: e.currentTarget.dataset.target
    })
  },

  // 关弹窗
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },

  // 弹出框的全天选项
  handleAllDay(e) {
    console.log(e.detail.value);
    this.setData({
      isAllDay: e.detail.value
    })
  },

  // 修改日期
  DateChange(e) {
    console.log(e.detail);
    if(e.currentTarget.id == 'babyDate') {
      this.setData({
        babyDate: e.detail.value
      })
    }else {
      this.setData({
        date: e.detail.value
      })
    }
    
  },

  // 修改时间
  TimeChange(e) {
    const id = e.currentTarget.id
    if(id === "endTime") {
      this.setData({
        endTime: e.detail.value
      })
    }else if(id === "startTime") {
      this.setData({
        startTime: e.detail.value
      })
    }    
  },

  // 记录日程内容的回调
  saveMsg(e) {
    this.setData({
      dialogMsg: e.detail.value
    })
  },

  // 添加日程的回调
  handleAdd(e) {
    console.log(this.data.date.split('-'))
    let sche = this.data.recent.find((item) => { 
      return item.day == +this.data.date.split('-')[2]
    })
    if(!sche) {
      sche = {
        day: +this.data.date.split('-')[2],
        hasRemind: false,
        list: []
      }
    }
    console.log(sche);
    //新添加的日程对象
    const nowDate = new Date()
    const dateStr = [nowDate.getFullYear(), nowDate.getMonth()+1, nowDate.getDate()].join('-')
    const sTime = this.data.isAllDay ? "全天" : this.data.startTime
    let scheduleObj = {
      id: this.data.schedule.list?.length || 1,
      accurateTime: dateStr + ' ' + sTime,
      time: this.data.isAllDay ? "全天" : {
        startT: this.data.startTime,
        endT: this.data.endTime,
      },
      msg: this.data.dialogMsg,
    }
    // let schedule = this.data.schedule
    // schedule.list = [scheduleObj, ...schedule.list]
    sche.list = [scheduleObj, ...sche.list]
    let recent = this.data.recent
    if(!recent.find(item => item.day == sche.day)) {
      recent = [...recent, sche]
    }else {
      recent = recent.map((item) => {
        if(item.day == sche.day) {
          item = sche
        }
        return item
      })
    }
    console.log('recent', recent)
    this.setData({
      schedule: recent.find((item) => { 
        return item.day == new Date().getDate()
      }),
      recent,
      modalName: null,
      // 重新初始化内容
      dialogMsg: "", //记录日程的标题
      isAllDay: false, //是否选择了全天
      // date: new Date().get, //选择的日期
      startTime: '00:00', //开始时间
      endTime: '00:00', //结束时间
    })
  },

  // 点击阴影区也隐藏的回调
  hanleWrapTap(e) {
    if(e.target.id === "dialog-wrap") {
      this.hideModal()
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //更新数据
    let isLogin = wx.getStorageSync('openid') ? true : false
    console.log(isLogin);
    this.setData({
      userInfo: wx.getStorageSync('userInfo'),
      isLogin
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    if(this.data.isLogin) {
      if(this.data.recent.length == 0) {
        recent = [this.data.schedule]
      }
      console.log(this.data.recent)
      //更新数据
      wx.setStorageSync('recent', this.data.recent)

      wx.cloud.database().collection('schedules')
        .where({
          _openid: wx.getStorageSync('openid')
        })
        .get()
        .then(res => {
          console.log(res, '获取成功');
          if(res.data.length == 0) { //首次上传
            wx.cloud.database().collection('schedules')
            .add({
              data:{
                schedules: this.data.recent
              }
            })
            .then(res => { 
              console.log(res,'添加成功');
            })
          }else { //更新
            wx.cloud.callFunction({
              name: 'updateSche',
              data: {
                openid: wx.getStorageSync('openid'),
                schedules: this.data.recent
              }
            })
            .then(res => {
              console.log('修改成功', res)
            })
            .catch(err => {
              console.log('修改失败', err)
            })
          }
        })
    }
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})