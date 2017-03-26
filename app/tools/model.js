// 1.引入mongoose
var mongoose = require('mongoose');

// 2.连接Mongodb
mongoose.connect('mongodb://localhost:27017/users');

// 3.创建模型
var User = mongoose.model('user', { username: String, age: Number, sex: String, password: String, img: String, addtime: { type: Date, default: new Date() }, phone: Number, ip: String,password:Number });

// 4.导出模块
exports.User = User;
