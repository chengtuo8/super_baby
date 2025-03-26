// pages/vaccine/vaccine.js
import request from '../../utils/request.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: false,
    vaccineList:[
      {
        num: 0,
        time: '出生当天',
        day: 0,
        vas:[
          {
            item: 0,
            hasDone: false,
            must:true,
            name:'卡介苗（免费）',
            turn:'接种一次',
            text:'预防结核病'
          },
          {
            item: 1,
            hasDone: false,
            must:true,
            name:'乙肝疫苗（免费）',
            turn:'第一次',
            text:'预防乙型肺炎'
          }
        ]
      },
      {
        num: 1,
        time:'1月龄',
        day: 30,
        vas:[
          {
            item: 0,
            hasDone: false,
            must:true,
            name:'乙肝疫苗（免费）',
            turn:'第二次',
            text:'预防乙型肺炎'
          }
        ]
      },
      {
        num: 2,
        time:'1.5月龄',
        day: 45,
        vas:[
          {
            item: 0,
            hasDone: false,
            must:false,
            name:'轮状病毒疫苗（约148元/针）',
            turn:'第一次',
            text:'预防轮状病毒腹泻'
          },
          {
            item: 1,
            hasDone: false,
            must:false,
            name:'13价肺炎球菌多糖结合疫苗（约800元/针）',
            turn:'第一次',
            text:'预防肺炎球菌性疾病'
          }
        ]
      },
      {
        num: 3,
        time:'2月龄',
        day: 60,
        vas:[
          {
            item: 0,
            hasDone: false,
            must:true,
            name:'脊髓灰质炎疫苗（免费）',
            turn:'第一次',
            text:'预防小儿麻痹症'
          },
          {
            item: 1,
            hasDone: false,
            must:false,
            name:'b型流感嗜血杆菌疫苗（约70-148元/针）',
            turn:'第一次',
            text:'预防肺炎、脑膜炎等'
          },
          {
            item: 2,
            hasDone: false,
            must:false,
            name:'五联疫苗（约624元/针）',
            turn:'第一次',
            text:'可替代脊灰疫苗、百白破疫苗'
          }
        ]
      },
      {
        num: 4,
        time:'3月龄',
        day: 90,
        vas:[
          {
            item: 0,
            hasDone: false,
            must:true,
            name:'脊髓灰质炎疫苗（免费）',
            turn:'第二次',
            text:'预防脑炎、脑膜炎等'
          },
          {
            item: 1,
            hasDone: false,
            must:true,
            name:'无细胞百白破疫苗（免费）',
            turn:'第一次',
            text:'预防百日咳、白喉、破伤风'
          },
          {
            item: 2,
            hasDone: false,
            must:false,
            name:'五联疫苗（约624元/针）',
            turn:'第二次',
            text:'可替代脊灰疫苗、百白破疫苗'
          }
        ]
      },
      {
        num: 5,
        time:'4月龄',
        day: 120,
        vas:[
          {
            item: 0,
            hasDone: false,
            must:true,
            name:'脊髓灰质炎疫苗（免费）',
            turn:'第三次',
            text:'预防小儿麻痹症'
          },
          {
            item: 1,
            hasDone: false,
            must:true,
            name:'无细胞百白破疫苗（免费）',
            turn:'第二次',
            text:'预防百日咳、白喉、破伤风'
          },
          {
            item: 2,
            hasDone: false,
            must:false,
            name:'b型流感嗜血杆菌疫苗（约70-148元/针）',
            turn:'第二次',
            text:'预防肺炎、脑膜炎等'
          },
          {
            item: 3,
            hasDone: false,
            must:false,
            name:'轮状病毒疫苗（约148元/针）',
            turn:'第二次',
            text:'预防轮状病毒腹泻'
          },
          {
            item: 4,
            hasDone: false,
            must:false,
            name:'13价肺炎球菌多糖结合疫苗（约800元/针）',
            turn:'第二次',
            text:'预防肺炎球菌性疾病'
          },
          {
            item: 5,
            hasDone: false,
            must:false,
            name:'五联疫苗（约624元/针）',
            turn:'第三次',
            text:'可替代脊灰疫苗、百白破疫苗'
          }
        ]
      },
      {
        num: 6,
        time:'5月龄',
        day: 150,
        vas:[
          {
            item: 0,
            hasDone: false,
            must:true,
            name:'无细胞百白破疫苗（免费）',
            turn:'第三次',
            text:'预防百日咳、白喉、破伤风'
          }
        ]
      },
      {
        num: 7,
        time:'6月龄',
        day: 180,
        vas:[
          {
            item: 0,
            hasDone: false,
            must:true,
            name:'乙肝疫苗（免费）',
            turn:'第三次',
            text:'预防乙型肺炎'
          },
          {
            item: 1,
            hasDone: false,
            must:true,
            name:'流脑疫苗（免费）',
            turn:'第一次',
            text:'预防流行性脑脊髓膜炎'
          },
          {
            item: 2,
            hasDone: false,
            must:false,
            name:'b型流感嗜血杆菌疫苗（约70-148元/针）',
            turn:'第三次',
            text:'预防肺炎、脑膜炎等'
          },
          {
            item: 3,
            hasDone: false,
            must:false,
            name:'13价肺炎球菌多糖结合疫苗（约800元/针）',
            turn:'第三次',
            text:'预防肺炎球菌性疾病'
          },
        ]
      },
      {
        num: 8,
        time:'8月龄',
        day: 240,
        vas:[
          {
            item: 0,
            hasDone: false,
            must:true,
            name:'麻风疫苗（免费）',
            turn:'接种一次',
            text:'预防麻疹、风疹'
          },
          {
            item: 1,
            hasDone: false,
            must:true,
            name:'乙脑减毒活疫苗（免费）',
            turn:'第一次',
            text:'预防乙型脑炎'
          }
        ]
      },
      {
        num: 9,
        time:'9月龄',
        day: 270,
        vas:[
          {
            item: 0,
            hasDone: false,
            must:true,
            name:'流脑疫苗（免费）',
            turn:'第二次',
            text:'预防流行性脑脊髓膜炎'
          }
        ]
      },
      {
        num: 10,
        time:'1岁',
        day: 365,
        vas:[
          {
            item: 0,
            hasDone: false,
            must:false,
            name:'13价肺炎球菌多糖结合疫苗（约800元/针）',
            turn:'第四次',
            text:'预防肺炎球菌性疾病'
          },
          {
            item: 1,
            hasDone: false,
            must:false,
            name:'水痘疫苗（约150针）',
            turn:'第一次',
            text:'预防水痘'
          }
        ]
      },
      {
        num: 11,
        time:'1.5岁',
        day: 547,
        vas:[
          {
            item: 0,
            hasDone: false,
            must:true,
            name:'甲肝减毒活疫苗（约200-300元/针）',
            turn:'接种一次',
            text:'预防甲型肝炎'
          },
          {
            item: 1,
            hasDone: false,
            must:true,
            name:'麻腮风疫苗（免费）',
            turn:'接种一次',
            text:'预防麻疹、风疹、流行性腮腺炎'
          },
          {
            item: 2,
            hasDone: false,
            must:true,
            name:'无细胞百白破疫苗（免费）',
            turn:'第四次',
            text:'预防百日咳、白喉、破伤风'
          },
          {
            item: 3,
            hasDone: false,
            must:false,
            name:'b型流感嗜血杆菌疫苗（约70-148元/针）',
            turn:'第四次',
            text:'预防肺炎、脑膜炎等'
          },
          {
            item: 4,
            hasDone: false,
            must:false,
            name:'五联疫苗（约624元/针）',
            turn:'第四次',
            text:'可替代脊灰疫苗、百白破疫苗'
          }
        ]
      },
      {
        num: 12,
        time:'2岁',
        day: 730,
        vas:[
          {
            item: 0,
            hasDone: false,
            must:true,
            name:'乙脑减毒活疫苗（免费）',
            turn:'第二次',
            text:'预防乙型脑炎'          
          }
        ]
      },
      {
        num: 13,
        time:'3岁',
        day: 1095,
        vas:[
          {
            item: 0,
            hasDone: false,
            must:true,
            name:'流脑疫苗（免费）',
            turn:'第三次',
            text:'预防流行性脑脊髓膜炎'
          },
          {
            item: 1,
            hasDone: false,
            must:false,
            name:'流感疫苗（约45-145元/针）',
            turn:'接种一次',
            text:'预防流行性感冒'          
        }
        ]
      },
      {
        num: 14,
        time:'4岁',
        day: 1460,
        vas:[
          {
            item: 0,
            hasDone: false,
            must:true,
            name:'脊髓灰质炎疫苗（免费）',
            turn:'第四次',
            text:'预防小儿麻痹症'
          },
          {
            item: 1,
            hasDone:false,
            must:false,
            name:'水痘疫苗（约150元/针）',
            turn:'第二次',
            text:'预防水痘'
          }
        ]
      },
      {
        num: 15,
        time:'6岁',
        day: 2190,
        vas:[
          {
            item: 0,
            hasDone: false,
            must:true,
            name:'流脑疫苗（免费）',
            turn:'第四次',
            text:'预防流行性脑脊髓膜炎'
          },
          {
            item: 1,
            hasDone: false,
            must:true,
            name:'无细胞百白破疫苗（免费）',
            turn:'第五次',
            text:'预防百日咳、白喉、破伤风'
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    let userInfo = wx.getStorageSync('userInfo')
    if(!userInfo){
      wx.showToast({
        title: '登录可解锁完整功能',
        icon: 'none',
        success: () => { 
        }
      })
    }else {
    // 请求数据代码   云开发
      const openid = wx.getStorageSync('openid')
      wx.showLoading({
        title: '正在加载',
      })
      wx.cloud.database().collection('vaccines')
        .where({
          _openid: openid
        })
        .get()
        .then(res => {
          console.log(res)
          if (res.data.length == 0) {
            wx.cloud.database().collection('vaccines')
              .add({
                data: {
                  vaccineList: this.data.vaccineList
                }
              })
              .then(res => {
                wx.hideLoading()
                // console.log('请求成功');
              })
              .catch(err => {
                console.log('请求失败');
              })
          }else {
            console.log(res.data[0].vaccineList);
            this.setData({
              vaccineList: res.data[0].vaccineList
            })
            this.vaccinetime();
            wx.hideLoading()
          }
        })
        .catch(err => {
          console.log('请求失败')
        })

      // 原生发请求
      //#region 
      // wx.request({
      //   url: "https://121.41.225.12:8080/api/vaccine/personal?openid=" + openid,
      //   data: {},
      //   method: "GET",
      //   success: (res) => {
      //     console.log(res);
      //     if (res.data.length == 0) {
      //       wx.request({
      //         url: "https://121.41.225.12:8080/api/vaccine",
      //         data: {
      //           "openid": openid,
      //           "vaccine": this.data.vaccineList
      //         },
      //         method: "POST",
      //         success: (res) => {
      //           wx.hideLoading()
      //           console.log(res.data);
      //         }
      //       })
      //     } else {
      //       console.log(res.data[0].vaccine);
      //       this.setData({
      //         vaccineList: res.data[0].vaccine
      //       })
      //       this.vaccinetime();
      //       wx.hideLoading()
      //     }
      //   },
      //   fail: (err) => {
      //     console.log("请求失败: ", err)
      //   }
      // })
      //#endregion
    }
  },

  // 处理选中的回调
  handleCheck(e) {
    const {num, item} = e.currentTarget.dataset
    const newList = [...this.data.vaccineList]
    console.log(newList);
    console.log(newList == this.data.vaccineList);
    newList[num].vas[item].hasDone = !newList[num].vas[item].hasDone
    this.setData({
      vaccineList: newList
    })
  },


  // 计算是否已经超过时间和是否近期需要接种
  vaccinetime() {
    const babyDate = wx.getStorageSync('babyDate').split('-')
    console.log(babyDate);
    let myDate = new Date();
    let nowDate = new Date();
    let daily = 0;
    myDate.setFullYear(babyDate[0], babyDate[1]-1, babyDate[2]);
    daily=(nowDate.getTime()-myDate.getTime())/((1000 * 60 * 60 * 24));
    let newList = this.data.vaccineList.map((item) => { 
      item.overtime = (daily > item.day)
      console.log(item.day - daily);
      item.nowadays = false
      if(item.day - daily <= 7 && item.day - daily >= 0) {
        item.nowadays = true
        console.log(111);
      }
      return item
    })
    console.log(newList);
    this.setData({
      vaccineList: newList
    })
    console.log(this.data.vaccineList);
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
    const openid = wx.getStorageSync('openid')
    if(openid) {
      wx.cloud.database().collection('vaccines')
        .where({
          _openid: openid
        })
        .update({
          data: {
            vaccineList: this.data.vaccineList
          }
        })
        .then(res => {
          console.log('修改成功')
        })
    }
    


    // 卸载后发送请求, 更新数据
    // console.log(111);
    // if(openid) {
    //   const List = {
    //     openid,
    //     vaccine: [...this.data.vaccineList]
    //   }
    //   console.log(List);
    //   request('/api/vaccine/' + openid, JSON.stringify(List), 'PUT')
    // }
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