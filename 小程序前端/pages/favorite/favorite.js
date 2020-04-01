// pages/favorite/favorite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalNum:0,
    goodsList:[
      {id:1,imgPath:"../img/banner.png",hot:10,goodName:"盛夏海鲜家宴",goodsPrice:100},
      {id:2,imgPath:"../img/banner2.png",hot:20,goodName:"龙虾套餐",goodsPrice:200},
      {id:3,imgPath:"../img/banner.png",hot:30,goodName:"营养快线",goodsPrice:300}
    ]

  },
  del:function(){
      var that = this;
      that.setData({
        goodsList:[],
        totalNum:0
      })
  },
  cancel:function(e){
    var that = this;
    var attrid = e.currentTarget.dataset.id;
    // console.log(attrid)
    var goodsList1 = that.data.goodsList;
    var totalNum1 = that.data.totalNum - 1;
    for(var i=0; i<goodsList1.length; i++){
      var id = goodsList1[i].id;
      if(attrid == id){
        goodsList1.splice(i,1);
        that.setData({
          goodsList:goodsList1,
          totalNum:totalNum1
          })
        break;
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that =  this;
      that.setData({
        totalNum:that.data.goodsList.length
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
    var that = this;
    // that.cancel();
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