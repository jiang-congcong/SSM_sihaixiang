// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname:"xx",
    headimg:"../img/24.png",
    navArr :[
      {id:1,imgPath:"../img/32.png",name:"烹饪历史"},
      {id:2,imgPath:"../img/33.png",name:"支付记录"},
      {id:3,imgPath:"../img/34.png",name:"举报投述"}
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取缓存信息
    wx.getStorage({
      key: 'userInfo',
      success(res) {
        // console.log(res.data)
        console.log(res.data.nickName);
        console.log(res.data.avatarUrl);
        // var nickname = res.data.nickName;
        // var headimg = res.data.avatarUrl;
        that.setData({
          nickname: res.data.nickName,
          headimg: res.data.avatarUrl
        })
        console.log(that.data.nickname);
        console.log(that.data.headimg);
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