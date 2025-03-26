// pages/record/record.js'
import request from '../../utils/request.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList:[],
    showImg: false,
    detail: '',
    color: ['bg-blue','bg-yellow','bg-green','bg-purple','bg-red','bg-orange'],
    List:[
      // {
      //   bg:"bg-blue",
      //   time:"2020-4-20",
      //   daytime:"12:30",
      //   text:"宝宝出生了",
      //   img: '',
      // },
    ]
  },

  // 打开弹窗
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },

  // 隐藏弹窗
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },

  // 内容输入
  handleInput(e) { 
    this.setData({
      detail: e.detail.value
    })
  },

  // 添加时光轴记录的回调
  handleAdd() {
    const date = new Date()
    const color = this.data.color
    const openid = wx.getStorageSync('openid')
    let eObj = {
      id: this.data.List.length + 1,
      bg: color[Math.round(Math.random()*(color.length - 1))],
      time: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
      daytime: `${date.getHours()}:${date.getMinutes()}`,
      text: this.data.detail,
      img: this.data.imgList[0],
    }
    this.setData({
      List: [eObj, ...this.data.List],
      detail: '',
      imgList: [],
      modalName: null
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const openid = wx.getStorageSync('openid')
    console.log(openid);
    if(!openid) {
      wx.showToast({
        title: '登录可解锁完整功能',
        icon: 'none',
        success: () => { 
        }
      })
    }else {
      wx.cloud.database().collection('timelines')
      .where({
        _openid: openid
      })
      .get()
      .then(res => {
        console.log(res)
        this.setData({
          List: res.data[res.data.length - 1].timeline
        })
      })
    }
    /*
    wx.request({
      url: "https://121.41.225.12:8080/api/timeline/personal?openid=" + openid,
      data:{},
      method:"GET",
      success: (res) => {
        console.log(res);
        if(res.data.length == 0){
          wx.request({
            url: "https://121.41.225.12:8080/api/timeline",
            data:{
              "openid": openid,
              "timeline": this.data.List
            },
            method:"POST",
            success:(res)=>{
              console.log(res.data);
            }
          })
        }else {
          //更新数据
          this.setData({
            List: res.data[0].timeline
          })
        }
      },
      fail: (err) => {
        console.log("请求失败: ", err)
      }
    })
    */
  },
  
  // 展示对应的图片
  showImg(e) {
    let showImg = e.currentTarget.dataset.id
    if(showImg == this.data.showImg) {
      showImg = ''
    }
    console.log(e.currentTarget.dataset.id);
    this.setData({
      showImg
    })
  },

  // 添加图片的回调
  chooseImage() {
    wx.chooseImage({
      count: 1, //默认9
      sizeType: ['original'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },

  // 删除图片的回调
  delImg(e) {
    wx.showModal({
      title: '亲爱的用户',
      content: '确定要删除这段回忆吗？',
      cancelText: '点错了',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          const imgList = []
          this.setData({
            imgList
          })
        }
      }
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
    // 卸载后发送请求, 更新数据
    const openid = wx.getStorageSync('openid')
    if(openid) {
      const List = {
        // openid,
        timeline: this.data.List
      }
      console.log(List);
      // 发送数据
      // request('/api/timeline/' + openid, JSON.stringify(List), 'PUT')

      wx.cloud.database().collection('timelines')
        .where({
          _openid: openid
        })
        .get()
        .then(res => {
          console.log(res)
          if (res.data.length == 0) {
            // 云开发
            wx.cloud.database().collection('timelines')
              .add({
                data: {
                  timeline: this.data.List
                }
              })
              .then(res => {
                console.log(res);
              })
          } else {
            wx.cloud.database().collection('timelines')
              .where({
                _openid: openid
              })
              .update({
                data: {
                  timeline: this.data.List
                }
              })
              .then(res => {
                console.log(res);
              })
          }
        })
        .catch(err => {
          console.log('请求失败')
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