// app.js
App({
  onLaunch() {
    // 初始化云开发
    wx.cloud.init({
      env:'cloud1-7gulucpfc6c6588b'
    })

    
    // 获取babylist
    // const babylist = []
    // wx.cloud.database().collection('babyInfos')
    // .get()
    // .then(res => {
    //   console.log(res);
    //   // this.setData({
    //   //   babyList: res.data[0].babyInfos
    //   // })
    //   const app = getApp();
    //   app.globalData.babylist = res
    //   babylist = res.data[0].babyInfos
    // })
    

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  getList() {
    // 获取babylist
    const babylist = []
    wx.cloud.database().collection('babyInfos')
    .get()
    .then(res => {
      console.log(res);
      // this.setData({
      //   babyList: res.data[0].babyInfos
      // })
      babylist = res.data[0].babyInfos
    })
    const app = getApp();
    app.globalData.babylist = babylist
  },
  globalData: {
    babylist: null
  }
})
