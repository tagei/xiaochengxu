// pages/index/car.js
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

    }],
    img:"../images/fuwuyuan.png",
    name:'深圳市鹏华物业管理有限公司',
    imgUrls: [
      '../images/staron_icon.png',
     '../images/staron_icon.png',
     '../images/staron_icon.png',
     '../images/staron_icon.png',
     '../images/staron_icon.png',
    ],
    text:'正在招聘2个职位',
    title:'职位描述',
    address:'工作地址',
    addressInfo:'广州',
    lists:[{
      message:'负责日常的收支和核对；'
    },{
      message:'办公室基本账务处理;'
    },{
      message:'员工工资发放与统计'
    },{
      message:'负责日常的收支和核对；'
    },{
      message:'办公室基本账务处理;'
    },{
      message:'员工工资发放与统计'
    }]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
     console.log(option.query)
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