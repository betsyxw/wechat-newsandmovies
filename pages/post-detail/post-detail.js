// pages/post-detail/post-detail.js


//新版
import {postList} from "../../data/data.js"
console.log(postList)
const app = getApp()


Page({

    /**
     * 页面的初始数据
     */
    data: {
        postData:{},
        _pid:null,
        collected: false,
        isPlaying: false,
        _postsCollected:{},
        _mgr: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        const postData = postList[options.pid]
        this.data._pid = options.pid
        const postsCollected = wx.getStorageSync('posts_collected')
        this.data._postsCollected = postsCollected
        console.log(postsCollected)
        let collected = postsCollected[this.data._pid]

        if(collected === undefined){
            collected = false
        }

        console.log(postData)
        console.log(collected)
        this.setData({
            postData,
            collected,
            isPlaying:this.currentMusicIsPlaying()
        })

        const mgr = wx.getBackgroundAudioManager()
        this.data._mgr = mgr
        mgr.onPlay(this.onMusicStart)
        //pause非stop
        mgr.onPause(this.onMusicStop)

    },

    //当前页面正在播放的音乐id
    currentMusicIsPlaying(){
        if(app.gIsPlayingMusic && app.gIsPlayingPostId=== this.data._pid){
            return true
        }
        return false

    },


    //文章分享
    async onShare(event){
        const result = await wx.showActionSheet({
          itemList: ['分享到微信','分享到朋友圈','分享到QQ'],
        })
        console.log(result)

    },

    //文章是否被收藏，tap
    async onCollect(event){
        const postsCollected = this.data._postsCollected
        wx.getStorageSync('key')
        postsCollected[this.data._pid]= !this.data.collected
        this.setData({
            collected: !this.data.collected
        })
        wx.setStorageSync('posts_collected',postsCollected)
        //小程序自带
        wx.showToast({
          title: this.data.collected?'收藏成功':'取消收藏',
        })


    },

    //点击播放音乐，tap
    onMusicStart(event){
        const mgr = this.data._mgr
        mgr.src = postList[this.data._pid].music.url
        mgr.title = postList[this.data._pid].music.title
        mgr.coverImgUrl = postList[this.data._pid].music.coverImg

        app.gIsPlayingMusic = true
        app.gIsPlayingPostId = this.data._pid

        this.setData({
            isPlaying: true
        })

    },
    //点击播放音乐，暂停
    onMusicStop(event){
        const mgr = this.data._mgr
        mgr.pause()
        app.gIsPlayingMusic = false
        app.gIsPlayingPostId = -1

        this.setData({
            isPlaying: false
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