//引入express
var express=require('express');
//引入用户详情渲染模块
var UserDetailsController=require('../controller/UserDetailsController');
var myRouter=express.Router();
//拦截路由
myRouter.route('/UserDetails').get(UserDetailsController.demo);
//导出路由模块
module.exports=myRouter;