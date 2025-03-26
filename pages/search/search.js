// pages/search/search.js
import tool from '../../utils/tool'
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgs: null,
    display: false,
    msgList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 云开发获取文章信息
    wx.cloud.database().collection('articles')
      .get()
      .then(res => {
        console.log(res);
        this.setData({
          msgList: res.data.map((item) => {
            return item.messages
          })
        })
    })
  },

  // 搜索的回调  结合节流函数
  handleSearch: tool.throttle(function(e) {
    console.log(e);
    let title = e.detail.value
    if(!title) {
      this.setData({
        display: false
      })
      return
    }
    let msgs = this.data.msgList.filter(item => {
      return item.title.includes(title)
    })
    console.log(msgs)
    this.setData({
      msgs,
      display: true
    })
  },500),

  async getMsgs(title) {
    const msgs = await request(`/api/article/search?title=${title}`)
    console.log(msgs);
    this.setData({
      msgs,
      display: true
    })
  },

  // 跳转至文章
  handleToMsg(e) {
    let index = e.currentTarget.id
    let msg = this.data.msgs.find(item => item.id == index)
    console.log('msg',msg)
    msg = encodeURIComponent(JSON.stringify(msg)) //进行编码
    wx.navigateTo({
      url: '/pages/message/message?msg=' + msg
    })
  }, 

  // 显示搜索结果
  show() {
    this.setData({
      display: true
    })
  },

  // 隐藏结果
  hideWrap(e) {
    console.log(e.currentTarget);
    this.setData({
      display: false
    })
  },

  handleBack() { //处理页面返回
    console.log(111);
    wx.navigateBack()
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