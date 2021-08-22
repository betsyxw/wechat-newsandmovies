// pages/movies/movies.
//获取全局app
const app = getApp()
console.log("打印gBaseUrl=>"+app.gBaseUrl)

Page({

    /**
     * 页面的初始数据
     */
    data: {
        inTheaters:[],
        commingSoon:[],
        top250:[],
        searchResult:false,
        searchData: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    //这里不支持async await
    onLoad: function (options) {
        const that = this
        wx.request({
          url: app.gBaseUrl+'in_theaters',
          method:"GET",
          data:{
              start:0,
              count:3
          },
          success:(res)=>{
              //回调函数里面，this都是了，改成箭头函数解决
              console.log(res)
              console.log(this)
              this.setData({
                  inTheaters: res.data.subjects
              })
          }
        })
        //
        wx.request({
            url: app.gBaseUrl+'coming_soon?start=0&count=3',
            success:(res)=>{
                //回调函数里面，this都是了，改成箭头函数解决
                console.log(res)
                console.log(this)
                this.setData({
                    comingSoon: res.data.subjects
                })
            }
          })
          //
          wx.request({
            url: app.gBaseUrl+'top250?start=0&count=3',
            success:(res)=>{
                //回调函数里面，this都是了，改成箭头函数解决
                console.log(res)
                console.log(this)
                this.setData({
                    top250: res.data.subjects
                })
            }
          })


    },

    //页面跳转，带上type=类似id
    onGoToMore(event){
        console.log(event)
        const type = event.currentTarget.dataset.type
        wx.navigateTo({
          url: '/pages/more-movie/more-movie?type='+ type,
        })
    },

    //用户输入
    onConfirm(event){
        this.setData({
            searchResult:true
        })
        console.log(event)
        console.log(event.detail.value)
        wx.request({
          url: app.gBaseUrl+'search',
          data:{
              q:event.detail.value
          },
          success:(res)=>{
            console.log(res)
            this.setData({
                searchData: res.data.subjects
            })
          }
        })
    },

    //监听取消函数
    onSearchCancel(event){
        this.setData({
            searchResult: false
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