var UserDetailsController={
    demo:function (req,res) {
        //渲染 在售商品页面
        res.render('UserDetails');
    }
};
//导出在售商品渲染模块
module.exports=UserDetailsController;