var express = require('express');
var router = express.Router();


// 1.引入mongoose
var mongoose = require('mongoose');

// 2.连接Mongodb
mongoose.connect('mongodb://localhost:27017/users');

// 3.创建模型
var User = mongoose.model('user', { username: String,password: String});




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login/index');
});




// 用户注册页面
router.get('/register', function(req, res, next) {
  res.render('login/register');
});


// // 用户注册
router.post('/register',function(req,res){
	console.log(req.body)
	User.create(req.body,function(err,data){
		if(err){
			res.redirect('login/register');
		}else{
			res.redirect('/login');
		}
	})
})
module.exports = router;
