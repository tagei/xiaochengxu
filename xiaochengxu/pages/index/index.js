//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      '../images/585a3ff5c9c9d.png',
      '../images/585a401ab4674.png',
      '../images/585a404d9c0f9.png'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
   
    array: [{
      imgListUrls:'../images/menu_1.png',
      message: '全职',
      urlList:'quan'
    }, {
      imgListUrls:'../images/menu_3.png',
      message: '实习',
      urlList:'detail'
    },{
      imgListUrls:'../images/menu_4.png',
      message: '热门',
      urlList:'hot'
    }],
    
    arrays:[{
      imgUlist:'../images/kuaidipeisong.png',
      message:'会计助理',
      city_name:'广州',
      experience_str:'经验不限',
      education_str:'大专',
      job_type_str:'实习',
      company_nam:'餐饮集团',
      salary_unit_str:'3K-5K',
      create_time:"12月15日",

    },{
      imgUlist:'../images/fuwuyuan.png',
      message:'前端工程师',
       city_name:'广州',
      experience_str:'经验不限',
      education_str:'大专',
      job_type_str:'实习',
      company_nam:'网络科技',
      salary_unit_str:'5K-8K',
      create_time:"12月25日",
    },{
      imgUlist:'../images/fuwuyuan.png',
      message:'男朋友',
       city_name:'广州',
      experience_str:'经验不限',
      education_str:'本科',
      job_type_str:'实习',
      company_nam:'家庭主妇',
      salary_unit_str:'8K-10K',
      create_time:"12月25日",
    },{
      imgUlist:'../images/fuwuyuan.png',
      message:'女朋友',
       city_name:'广州',
      experience_str:'经验不限',
      education_str:'本科',
      job_type_str:'转正',
      company_nam:'家庭主妇',
      salary_unit_str:'8K-10K',
      create_time:"12月25日",
    }],
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onPullDownRefresh: function(){
    wx.stopPullDownRefresh()
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: 'car?id=1'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
