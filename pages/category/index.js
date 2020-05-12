// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateItems:[
      {
        cate_id:1,
        cate_name:'洗护',
        children: [
          { 
            child_id: 1, 
            name: '洁面皂', 
            image: "http://hqxz.oss-cn-beijing.aliyuncs.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2F%E9%9B%AA%E8%8A%B1%E7%A7%80.jpg" 
          }, 
          { 
            child_id: 2, 
            name: '卸妆', 
            image: "http://hqxz.oss-cn-beijing.aliyuncs.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2F%E9%9B%AA%E8%8A%B1%E7%A7%80.jpg"  
          }
        ]
      },
      {
        cate_id:2,
        cate_name:'生鲜',
        children: [
          { 
            child_id: 1, 
            name: '叶子类', 
            image: "http://hqxz.oss-cn-beijing.aliyuncs.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2F%E9%9B%AA%E8%8A%B1%E7%A7%80.jpg" 
          }, 
          { 
            child_id: 2, 
            name: '根茎类', 
            image: "http://hqxz.oss-cn-beijing.aliyuncs.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2F%E9%9B%AA%E8%8A%B1%E7%A7%80.jpg"  
          },
          { 
            child_id: 3, 
            name: '菌菇类', 
            image: "http://hqxz.oss-cn-beijing.aliyuncs.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2F%E9%9B%AA%E8%8A%B1%E7%A7%80.jpg" 
          }, 
          { 
            child_id: 4, 
            name: '调味类', 
            image: "http://hqxz.oss-cn-beijing.aliyuncs.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2F%E9%9B%AA%E8%8A%B1%E7%A7%80.jpg"  
          }
        ]
      },
      {
        cate_id:3,
        cate_name:'食品'
      },
      {
        cate_id: 4,
        cate_name: '女装'
      },
      {
        cate_id: 5,
        cate_name: '百货'
      },
      {
        cate_id: 6,
        cate_name: '母婴'
      },
      {
        cate_id: 7,
        cate_name: '手机'
      },
      {
        cate_id: 8,
        cate_name: '鞋靴'
      },
      {
        cate_id: 9,
        cate_name: '运动'
      },
      {
        cate_id: 10,
        cate_name: '美家'
      },
      {
        cate_id: 11,
        cate_name: '男装'
      },
      {
        cate_id: 12,
        cate_name: '水果'
      },
      {
        cate_id: 13,
        cate_name: '电子'
      }
    ],
    curNav:1,
    curIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  switchRightTab:function(e){
    let id = e.target.dataset.id,index=e.target.dataset.index;
    this.setData({
      curNav:id,
      curIndex:index
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