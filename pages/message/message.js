// pages/massage/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      scrollTop : 0,
      appreciate : false, //是否点赞
      collect : false, //当前是否收藏
      msg: {}, //文章对象
      star: null,//评价打分数
      starMsg: [{id: 1, title: '无帮助'}, {id: 2, title: '无太大帮助'}, {id: 3, title: '一般'}, {id: 4, title: '有帮助'}, {id: 5, title: '十分有帮助'}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function ({id}) {
    console.log(id)
    wx.cloud.database().collection('articles')
    .doc(id)
    .get()
    .then(res => {
      console.log("请求成功", res)
      this.setData({
        msg: {...res.data.messages, _id:id},
        //更新是否点赞和收藏
        appreciate: wx.getStorageSync('userInfo').detail.appreciate.find(item => item == res.data.messages.id),
        collect: wx.getStorageSync('userInfo').detail.collect.find(item => item == res.data.messages.id)
      })
    })
    .catch(err => {
      console.log("请求失败", err)
    })
  },

  //页面滚动执行方式
  onPageScroll(event){
    this.setData({
        scrollTop : event.scrollTop
    })
  },

  // 处理点赞和收藏的回调
  handleActive(e) {
    const id = e.currentTarget.id
    let userinfo = wx.getStorageSync('userInfo');
    if(id === 'appreciate') {
      let appreciate = this.data.msg.appreciate + +(this.data.appreciate ? '-1' : '1')
      this.setData({
          appreciate: !this.data.appreciate,
          msg: {...this.data.msg, appreciate}
      })
      if(this.data.appreciate == true) {
        userinfo.detail.appreciate.push(this.data.msg.id)
      }else {
        userinfo.detail.appreciate = userinfo.detail.appreciate.filter((item) => { 
          return item != this.data.msg.id
        })
      }
    }else {
      let collect = this.data.msg.collect + +(this.data.collect ? '-1' : '1')
      this.setData({
          collect: !this.data.collect,
          msg: {...this.data.msg, collect}
      })
      if(this.data.collect == true) {
        userinfo.detail.collect.push(this.data.msg.id)
      }else {
        userinfo.detail.collect = userinfo.detail.collect.filter((item) => { 
          return item != this.data.msg.id
        })
      }
    }
    wx.setStorageSync('userInfo', userinfo)
    console.log(userinfo);
  },

  // 打分
  handleComment(e){
    const index = e.currentTarget.id;
    this.setData({
      star: index,
    })
  },

  // 显示弹框
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },

  // 隐藏弹框
  hideModal(e) {
    this.setData({
      modalName: null
    })
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
    wx.cloud.callFunction({
      name:'updateMsg',
      data:{
        id: this.data.msg._id,
        messages: this.data.msg
      }
    })
    .then(res=>{
      console.log('修改成功',res)
    })
    .catch(err=>{
      console.log('修改失败',err)
    })

    // console.log(this.data.msg);
    // wx.cloud.database().collection('articles')
    // .doc({
    //   _id: this.data.msg._id
    // })
    // .update({
    //   data: {
    //     messages: this.data.msg
    //   }
    // })
    // .then(res => {
    //   console.log(res);
    // })
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
  onShareAppMessage: function ({from}) {
    console.log(from);
    if (from === 'button') {
      return {
        title: this.data.msg.title,
        path: '/pages/video/video'
      }
    } else {
      return {
        title: this.data.msg.title,
        path: '/pages/video/video'
      }
    }
  }
})