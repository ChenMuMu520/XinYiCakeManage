//引入express
var express=require('express');
//引入ejs
var ejs=require('ejs');
//引入库存商品渲染路由
var FinishedGoodsRouter=require('./router/FinishedGoodsRouter');

//引入在售商品渲染路由
var InSellingGoodsRouter=require('./router/InSellingGoodsRouter');

//引入用户详情路由
var UserDetailsRouter=require('./router/UserDetailsRouter');

//引入主页渲染路由
var indexRouter=require('./router/indexRouter');

//引入日志模块
var morgan = require('morgan');
//引入post
var bodyParser = require('body-parser');
//创建服务
var server=express();

//配置浏览器访问的静态文件目录
//__dirname //当前目录的绝对路径
server.use(express.static(__dirname+'/public'));
//使用日志
server.use(morgan('dev'));
//配置post
server.use(bodyParser.urlencoded({ extended: false }));//设置请求头的类型
server.use(bodyParser.json());//数据以json的形式传输
//使用 库存商品页面 路由
server.use(FinishedGoodsRouter);

server.use(UserDetailsRouter);
//使用 在售商品页面 路由
server.use(InSellingGoodsRouter);
//使用index路由
server.use(indexRouter);

//配置ejs
server.set('views',__dirname+'/public/pages'); //配置模板的路径
server.engine('html',ejs.__express);//声明html引擎
server.set('view engine','html'); //配置模板引擎 模板类型

//给服务配置端口号
server.listen(80);