// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  return cloud.database().collection('schedules')
  .where({
    _openid: event.openid
  })
  .update({
    data:{
      schedules: event.schedules
    }
  })
}