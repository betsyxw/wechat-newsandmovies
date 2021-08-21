// components/post/index.js
//新版
import {postList} from "../../data/data.js"
console.log(postList)


Component({
    /**
     * 组件的属性列表
     */
    properties: {
        res:Object

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    onLoad(options) {
        
        console.log("onload")
        wx.setStorageSync('flag', true)
    
        this.setData({
            postList
        })
        },
        //函数跳转


    /**
     * 组件的方法列表
     */
    methods: {
        onGoToDetail(event){
            console.log(event)
            console.log(event.currentTarget.dataset.postId)
            const pid = event.currentTarget.dataset.postId
            wx.navigateTo({
              url: '/pages/post-detail/post-detail?pid='+pid,
            })
    
        },

    }
})
