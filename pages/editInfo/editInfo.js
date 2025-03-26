// pages/editInfo/editInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: '', //头像
    nickName: '', //用户名
    babyDate: '',//宝宝出生日期
    relation: '',
    index: '',//关系索引
    picker: ['daddy', 'mommy'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const userInfo = wx.getStorageSync('userInfo')
    const babyDate = wx.getStorageSync('babyDate')
    this.setData({
      avatar: userInfo.avatarUrl,
      nickName: userInfo.nickName,
      babyDate,
      index: userInfo.relation == 'daddy' ? 0 : 1,
      relation: userInfo.relation
    })
  },

  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value,
      relation: this.data.picker[e.detail.value]
    })
  },

  changeAvatar() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        this.setData({
          avatar: res.tempFilePaths[0]
        })
      }
    });
  },

  handleInput(e) {
    this.setData({
      nickName: e.detail.value
    })
  },

  //修改宝宝年龄的回调
  DateChange(e) {
    this.setData({
      babyDate: e.detail.value
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
    let userInfo = wx.getStorageSync('userInfo')
    userInfo.relation = this.data.relation
    wx.setStorageSync('babyDate', this.data.babyDate)
    wx.setStorageSync('userInfo', userInfo)

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