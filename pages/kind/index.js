// pages/kind/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateItems: [{
        cate_id: 1,
        cate_name: "护肤",
        ishaveChild: true,
        showImageUrl: 'http://img3.imgtn.bdimg.com/it/u=1798233457,4143585420&fm=26&gp=0.jpg',
        children: [{
            child_id: 1,
            name: '洁面皂',
            image: "http://img0.imgtn.bdimg.com/it/u=1138662413,2627006305&fm=26&gp=0.jpg"
          },
          {
            child_id: 2,
            name: '卸妆',
            image: "http://img3.imgtn.bdimg.com/it/u=46574630,3801160495&fm=26&gp=0.jpg"
          }
        ]
      },
      {
        cate_id: 2,
        cate_name: "彩妆",
        ishaveChild: true,
        showImageUrl: 'http://img3.imgtn.bdimg.com/it/u=1798233457,4143585420&fm=26&gp=0.jpg',
        children: [{
            child_id: 1,
            name: '气垫bb',
            image: "http://img0.imgtn.bdimg.com/it/u=921197123,1741426939&fm=26&gp=0.jpg"
          },
          {
            child_id: 2,
            name: '修容/高光',
            image: "http://img0.imgtn.bdimg.com/it/u=921197123,1741426939&fm=26&gp=0.jpg"
          },
          {
            child_id: 3,
            name: '遮瑕',
            image: "http://img0.imgtn.bdimg.com/it/u=921197123,1741426939&fm=26&gp=0.jpg"
          },
          {
            child_id: 4,
            name: '气垫bb',
            image: "http://img0.imgtn.bdimg.com/it/u=921197123,1741426939&fm=26&gp=0.jpg"
          },
          {
            child_id: 5,
            name: '修容/高光',
            image: "http://img0.imgtn.bdimg.com/it/u=921197123,1741426939&fm=26&gp=0.jpg"
          },
          {
            child_id: 6,
            name: '遮瑕',
            image: "http://img0.imgtn.bdimg.com/it/u=921197123,1741426939&fm=26&gp=0.jpg"
          }
        ]
      },
      {
        cate_id: 3,
        cate_name: "香水/香氛",
        ishaveChild: true,
        showImageUrl: 'http://img3.imgtn.bdimg.com/it/u=1798233457,4143585420&fm=26&gp=0.jpg',
        children: [{
          child_id: 1,
          name: '淡香水EDT',
          image: "http://img0.imgtn.bdimg.com/it/u=921197123,1741426939&fm=26&gp=0.jpg"
        }]
      },
      {
        cate_id: 4,
        cate_name: "个人护理",
        ishaveChild: false,
        showImageUrl: 'http://img3.imgtn.bdimg.com/it/u=1798233457,4143585420&fm=26&gp=0.jpg',
        children: []
      }
    ],
    curNav: 1,
    curIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //点击左侧大分类处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
  //点击右侧小分类
  godetailopt(e){
    wx.navigateTo({
      url: '../kind/detail?id='+e.currentTarget.dataset.id
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