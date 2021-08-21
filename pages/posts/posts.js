
//新版
import {postList} from "../../data/data.js"
console.log(postList)

Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        
    console.log("onload")
    wx.setStorageSync('flag', true)

    this.setData({
        postList
    })
    },
    //函数跳转
    onGoToDetail(event){
        console.log(event)
        console.log(event.currentTarget.dataset.postId)
        const pid = event.currentTarget.dataset.postId
        wx.navigateTo({
          url: '/pages/post-detail/post-detail?pid='+pid,
        })

    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

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