Page({
  data: {
    isPlay: false, //音乐是否播放
    TabCur: 0,//当前栏目 0表示叫早,1表示哄睡
    currentMusic: 0, //当前歌曲的下标
    radioList:[
      {
        id:"叫早",
        url:"http://139.155.249.105:7071/upload_4d7175b9a5dfcddc232ccad0322a7694_blue.png",
        musicList:[
          "http://music.163.com/song/media/outer/url?id=272336.mp3",
          "http://music.163.com/song/media/outer/url?id=3950957.mp3",
          "http://music.163.com/song/media/outer/url?id=507803887.mp3",
          "http://music.163.com/song/media/outer/url?id=21865897.mp3",
          "http://music.163.com/song/media/outer/url?id=4288014.mp3",
          "http://music.163.com/song/media/outer/url?id=566442181.mp3",
          "http://music.163.com/song/media/outer/url?id=305444.mp3",
        ]
      },
      {
        id:"哄睡",
        url:"http://139.155.249.105:7071/upload_f4ab2c7fb9f67a3379eecf9afd2e37e6_green.png",
        musicList:[
          "http://music.163.com/song/media/outer/url?id=524651794.mp3",
          "http://music.163.com/song/media/outer/url?id=5193837.mp3",
          "http://music.163.com/song/media/outer/url?id=28757255.mp3",
          "http://music.163.com/song/media/outer/url?id=1614402.mp3",
          "http://music.163.com/song/media/outer/url?id=1237111.mp3",
          "http://music.163.com/song/media/outer/url?id=503916.mp3",
          "http://music.163.com/song/media/outer/url?id=115098.mp3",
          "http://music.163.com/song/media/outer/url?id=29535887.mp3",
        ]
      }
    ]
  },
    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.backgroundAudioManager = wx.getBackgroundAudioManager()
    // 监听音乐播放/暂停
    this.backgroundAudioManager.onPlay(() => {
      this.setData({
        isPlay: true
      })
    })
    this.backgroundAudioManager.onPause(() => {
      this.setData({
        isPlay: false
      })
    })
    this.backgroundAudioManager.onEnded(() => {
      console.log(111);
    })
  },

  handlePlay() { //点击播放的回调
    console.log(11);
    let isPlay = !this.data.isPlay
    let item = this.data.TabCur
    this.setData({
      isPlay
    })
    if (isPlay) { //音乐播放
      // 创建控制音乐播放的实例
      let src = this.data.radioList[item].musicList[this.data.currentMusic]
      this.backgroundAudioManager.src = src
      this.backgroundAudioManager.title = '1'
    }else {
      this.backgroundAudioManager.pause()
    }
  },

  //点击上一首的回调
  handlePrevMusic() {
    console.log('上一首');
    let item = this.data.TabCur
    const len = this.data.radioList[0].musicList.length
    this.setData({
      currentMusic: (this.data.currentMusic + len - 1) % len
    })
    let src = this.data.radioList[item].musicList[this.data.currentMusic]
    console.log(src);
    this.backgroundAudioManager.src = src
    this.backgroundAudioManager.title = ' '
  },

  //点击下一首的回调
  handleNextMusic() { 
    console.log('下一首');
    let item = this.data.TabCur
    this.setData({
      currentMusic: (this.data.currentMusic + 1) % (this.data.radioList[0].musicList.length)
    })
    let src = this.data.radioList[item].musicList[this.data.currentMusic]
    console.log(src);
    this.backgroundAudioManager.src = src
    this.backgroundAudioManager.title = ' '
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60,
      isPlay: false
    })
    this.backgroundAudioManager.stop()
  },
  getScan(){
    wx.scanCode({
      success (res) {
        console.log(res)
      }
    })
  },
  tryMusic(){
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = '../../static/music/Della - 小春气息.mp3'
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    }) 
  }
})