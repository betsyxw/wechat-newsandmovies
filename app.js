// app.js
App(
  {
  onLaunch() {
    console.log("小程序启动！")


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
  gIsPlayingMusic:false,
  gIsPlayingPostId: -1,
  gBaseUrl:"http://t.talelin.com/v2/movie/",
  globalData: {
    userInfo: null
  }
}
)
