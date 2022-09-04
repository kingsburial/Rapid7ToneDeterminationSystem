// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    img_one : 1,
    img_two : 1,
    img_three : 1,
    img_four : 1,
    array: [1, 2, 3, 4],
    view1: 'selection1',
    view2: 'selection1',
    view3: 'selection1',
    view4: 'selection1',
    // 默认答案为2，后台会给的
    key: Math.floor(Math.random()*10)%4 +1,
    // 选项是否被点击
    isSelect: false,
    answer:0
  },
  view1Click: function(e) {
    var select = 1;
    if (!this.data.isSelect) {
      // 将选项设置为“已被选择”
      if(select == this.data.key){
        app.globalData.answer_1++;
        console.log(app.globalData.answer_1);
      }
      this.setData({
        isSelect: true,
        view1:'selection2',
        view2:'selection3',
        view3:'selection3',
        view4:'selection3',
      })
    }
  },
  view2Click: function(e) {
    var select = 2
    // 选项没被选择时将执行
    if (!this.data.isSelect) {
      if(select == this.data.key){
        app.globalData.answer_1++;
        console.log(app.globalData.answer_1);
      }
      this.setData({
        isSelect: true,
        view1:'selection3',
        view2:'selection2',
        view3:'selection3',
        view4:'selection3',
      })
    }
  },
  view3Click: function(e) {
    var select = 3
    // 选项没被选择时将执行
    if (!this.data.isSelect) {
      if(select == this.data.key){
        app.globalData.answer_1++;
        console.log(app.globalData.answer_1);
      }
      this.setData({
        isSelect: true,
        view1:'selection3',
        view2:'selection3',
        view3:'selection2',
        view4:'selection3',
      })
    }
  },
  view4Click: function(e) {
    var select = 4
    // 选项没被选择时将执行
    if (!this.data.isSelect) {
      if(select == this.data.key){
        app.globalData.answer_1++;
        console.log(app.globalData.answer_1);
      }
      this.setData({
        isSelect: true,
        view1:'selection3',
        view2:'selection3',
        view3:'selection3',
        view4:'selection2',
      })
    }
  },
  onLoad:function(options){
    var img = [0,0,0,0];
    var img_data = this.data.key - 1;
    console.log(img_data);
    img[0] = Math.floor(Math.random()*10)%7 +1;
    img[1] = Math.floor(Math.random()*10)%7 +1;
    img[2] = Math.floor(Math.random()*10)%7 +1; 
    img[3] = Math.floor(Math.random()*10)%7 +1; 
    if(img_data == 0){
      img[0] = 1;
      while(img[1] == img[0] || img[2] == img[0] || img[2] == img[1] || img[3] == img[2] || img[3] == img[1] || img[3] == img[0]){
        img[1] = Math.floor(Math.random()*10)%7 +1;
        img[2] = Math.floor(Math.random()*10)%7 +1;
        img[3] = Math.floor(Math.random()*10)%7 +1;
      }
      console.log(img[0]);
    }
    if(img_data == 1){
      img[1] = 1;
      while(img[0] == img[1] || img[2] == img[1] || img[2] == img[0] || img[3] == img[2] || img[3] == img[1] || img[3] == img[0]){
        
        img[0] = Math.floor(Math.random()*10)%7 +1;
        img[2] = Math.floor(Math.random()*10)%7 +1;
        img[3] = Math.floor(Math.random()*10)%7 +1;
      }
      console.log(img[1]);
    }
    if(img_data == 2){
      img[2] = 1;
      while(img[0] == img[2] || img[1] == img[0] || img[1] == img[2] || img[3] == img[1] || img[3] == img[0] || img[3] == img[2]){
        
        img[0] = Math.floor(Math.random()*10)%7 +1;
        img[1] = Math.floor(Math.random()*10)%7 +1;
        img[3] = Math.floor(Math.random()*10)%7 +1;
      }
      console.log(img[2]);
    }
    if(img_data == 3){
      img[3] = 1;
      while(img[0] == img[3] || img[1] == img[0] || img[1] == img[3] || img[2] == img[1] || img[2] == img[0] || img[2] == img[3]){
        
        img[0] = Math.floor(Math.random()*10)%7 +1;
        img[1] = Math.floor(Math.random()*10)%7 +1;
        img[2] = Math.floor(Math.random()*10)%7 +1;
      }
      console.log(img[3]);
    }
    this.setData({
      img_one : img[0],
      img_two : img[1],
      img_three : img[2],
      img_four : img[3]
    })
  },
  Next_question(){
    app.globalData.click++;
    console.log(app.globalData.click);
    wx.redirectTo({
      url: '/pages/index1/index',
    })
  },
})
