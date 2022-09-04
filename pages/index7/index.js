// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    a : 0,
    b : 0,
    c : 0,
    d : 0,
    e : 0,
    f : 0,
    g : 0,
    a1 : 0,
    b1 : 0,
    c1 : 0,
    d1 : 0,
    e1 : 0,
    f1 : 0,
    g1 : 0,
  },

  onLoad:function(options){
    this.setData({
      a:app.globalData.answer_1, //全局变量不能再wxml中引用，需要将全局变量赋值给子页面中的某个变量
      b:app.globalData.answer_2,
      c:app.globalData.answer_3,
      d:app.globalData.answer_4,
      e:app.globalData.answer_5,
      f:app.globalData.answer_6,
      g:app.globalData.answer_7,

      })
  },
})






