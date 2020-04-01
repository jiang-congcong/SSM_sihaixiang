// pages/goodslist/goodslist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    minValue:0,
    maxValue:0,
    isShow:false,
    goodsArr:[
      {id:1,imgPath:"../img/25.png",hot:10,name:"美味坝坝宴",info:"八菜一汤,特色甜点",price:"4999",feature:["精品","优选","热销"]},
      {id:2,imgPath:"../img/banner.png",hot:20,name:"美味坝坝宴",info:"八菜一汤,特色甜点",price:"3999",feature:["精品","优选"]},
      {id:3,imgPath:"../img/banner2.png",hot:30,name:"美味坝坝宴",info:"八菜一汤,特色甜点",price:"2999",feature:["精品"]},
      {id:4,imgPath:"../img/25.png",hot:40,name:"美味坝坝宴",info:"八菜一汤,特色甜点",price:"1999",feature:["精品","优选","热销"]}
    ]
    
  },
  minPrice:function(e){
    // console.log(e.detail.value)
    var that = this;
    that.setData({
      minValue: e.detail.value
    })
  },
  maxPrice:function(e){
    var that = this;
    that.setData({
      maxValue:e.detail.value
    })
    console.log(e.detail.value)
  },
  showsearch:function(){
    var isShow = this.data.isShow;
    this.setData({
      isShow:!isShow
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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