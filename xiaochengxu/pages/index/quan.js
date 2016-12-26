// pages/index/quan.js
Page({
  data:{
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
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      title: options.title
      })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})