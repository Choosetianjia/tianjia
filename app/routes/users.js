var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('users/index', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
  res.render('users/list', { title: 'Express' });
});

router.get('/cart',function(req,res){
	res.render('users/cart');
})
module.exports = router;
