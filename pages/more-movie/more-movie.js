// pages/more-movie/more-movie.js
//获取全局app
const app = getApp()
console.log("打印gBaseUrl=>"+app.gBaseUrl)


Page({

    /**
     * 页面的初始数据
     */
    data: {
        movies:[]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const type = options.type

        wx.request({
            url: app.gBaseUrl + type,
            method:"GET",
            data:{
                start:0,
                count:12
            },
            success:(res)=>{
                //回调函数里面，this都是了，改成箭头函数解决
                console.log(res)
                console.log(this)
                this.setData({
                    movies: res.data.subjects
                })
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