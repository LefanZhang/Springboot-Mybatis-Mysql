var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page = this;
    wx.request({
      url: 'http://localhost:8082/wx/superadmin/movielist',
      success: function(res){
        console.log(res);
        page.setData({
          movies:res
        })
        app.movies = res.data.movieList;
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
    this.onLoad();
    wx.pageScrollTo({
      scrollTop: 0,
    })
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
    this.onLoad();
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
    
  },
  detail: function(res){
    console.log(res);
    app.detail = res.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail'
    })
  }
})