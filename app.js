// app.js
App({
  onLaunch() {
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
  globalData: {
    userInfo: null,
    answer_1:0,
    answer_2:0,
    answer_3:0,
    answer_4:0,
    answer_5:0,
    answer_6:0,
    answer_7:0,
    click:0
  }
})
