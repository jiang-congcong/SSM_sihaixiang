//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    imgPath: ['../img/banner.png', '../img/banner2.png', '../img/banner.png', '../img/banner2.png'],
    // nav
    navArr:[
      {imgPath:"../img/4.png",imgTxt:"餐宴",navPath:"../testdata/testdata"},
      { imgPath: "../img/5.png", imgTxt: "名厨", navPath:"../testdata/testdata"},
      { imgPath: "../img/6.png", imgTxt: "坝坝宴", navPath:"../testdata/testdata"},
      { imgPath: "../img/7.png", imgTxt: "餐宴周边", navPath:"../testdata/testdata"},
    ],
    // end nav
    // goodCook
    cookArr:[
      {id:1,imgPath:"../img/11.png",name:"张小美",star:5},
      {id:2,imgPath:"../img/11.png",name:"王大牛",star:4},
      {id:3,imgPath:"../img/11.png",name:"斯塔克",star:3},
    ],
    // goodCook
    // dinner
    dinnerArr:[
      {id:1,imgPath:"../img/25.png",name:"盛夏海鲜家宴",price:"￥4999/桌"},
      {id:1,imgPath:"../img/26.png",name:"精品西式家宴",price:"￥1299/桌"},
      {id:1,imgPath:"../img/27.png",name:"盛夏海鲜家宴",price:"￥4999/桌"},
      {id:1,imgPath:"../img/27.png",name:"盛夏海鲜家宴",price:"￥4999/桌"},
      {id:1,imgPath:"../img/27.png",name:"盛夏海鲜家宴",price:"￥4999/桌"},
    ]
    // dinner
  },
  toSearch:function(){
    wx.switchTab({
      url: '../cook/cook',
    })
  },
  
  onLoad: function () {
    wx.request({
      // url: 'http://localhost/javascript/beike/14minprogram/data.json',
      url: 'http://127.0.0.1:5500/pages/data/jsondata.json',
      success:function(res){
        console.log(res.data)
      }
    })
  }
})
