// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.login({
      success(res) {
        //用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 auth.code2Session，使用 code 换取 openid 和 session_key 等信
        console.log(res.code);
        var APPID = "wx81af8a0fa31ce7ca";
        var secret ="91aa85e1269ecaeb5f0773cdf388ea44";
        var JSCODE = res.code;
        var authorization_code = "authorization_code";
        if (res.code) {
          //发起网络请求
          wx.request({
            // url: 'https://test.com/onLogin',
            // url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
            // url: 'https://api.weixin.qq.com/sns/jscode2session',
            url: 'http://localhost/javascript/qinggong/01test/01data.php',
            data: {
              // code: res.code,
              // appid: APPID,
              // secret: secret,
              // js_code:res.code,
              // grant_type: authorization_code
            },
            success:function(res){
              //用于评论表，登录时候自已的定单
                // console.log(res.data.openid)
                console.log(res.data)
                for(var item in res.data){
                  console.log(res.data[item])
                }
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
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