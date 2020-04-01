// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ismore:false,
    ismore2:false

  },
  call:function(){
    wx.showModal({
      title: '四海香客服',
      content: '158xxxxxxxx',
      success: function (res) {
        　　　　　　if (res.cancel) {
          　　　　　　　　//点击取消,默认隐藏弹框
                    console.log("no")
        　　　　　　} else {
          　　　　　　　　//点击确定
                    // console.log("yes")
                        wx.makePhoneCall({
                          phoneNumber: '158xxxxxxxx',
                          })
          　　　　　　　　
        　　　　　　　}
    }
    })
  },
  more1:function(){
    var ismore = this.data.ismore;
    this.setData({
      ismore:!ismore
    })
    console.log(ismore)
  },
  more2:function(){
    var ismore2 = this.data.ismore2;
    this.setData({
      ismore2:!ismore2
    })
    console.log(ismore2)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
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