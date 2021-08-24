// pages/more-movie/more-movie.js
//获取全局app
const app = getApp()
console.log("打印gBaseUrl=>"+app.gBaseUrl)


Page({

    /**
     * 页面的初始数据
     */
    data: {
        movies:[],
        _type:''

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const type = options.type
        this.data._type = type

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
        let title = ""
        switch(this.data._type){
            case 'in_theaters': 
                title='正在热映'
                break
            case 'comming_soon':
                title='即将上映'
                break
            case 'top250':
                title='豆瓣Top250'
                break

        }
        wx.setNavigationBarTitle({
          title: title,
        })
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
        wx.request({
          url: app.gBaseUrl + this.data._type,
          data:{
              start: 0,
              count: 12,
          },
          success:(res)=>{
              this.setData({
                  //数据覆盖
                  movies: res.data.subjects
              })
              wx.stopPullDownRefresh()
          }
        })
       

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        console.log(123+"reachbottom")
        wx.showNavigationBarLoading()
        //触底，追加加载数据
        wx.request({
            url: app.gBaseUrl + this.data._type,
            method:"GET",
            data:{
                start:this.data.movies.length,
                count:12
            },
            success:(res)=>{
                //回调函数里面，this都是了，改成箭头函数解决
                console.log(res)
                console.log(this)
                this.setData({
                    //旧数据concat新数据,数组追加
                    movies: this.data.movies.concat(res.data.subjects)
                })
                wx.hideNavigationBarLoading()
            }
          })

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})