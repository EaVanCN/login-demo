var mongoose = require('mongoose');
var UserSchema = require('../schemas/UserSchema');
//创建model，这个地方的login_user对应mongodb数据库中login_users的conllection
//mongoose会自动改成复数，如模型名：xx―>xxes, kitten―>kittens, money还是money
var User = mongoose.model('login_user',UserSchema);
module.exports = User;