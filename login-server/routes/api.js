var express = require('express');
var router = express.Router();

var User = require('../models/User');// 引入模型

//查询某个user是否存在
router.get('/findByUsername', function(req, res, next) {
    User.find({username: req.query.username},function(err, docs){
        if(err){
            console.log('findByUsername方法查询失败：'+docs);
            res.send({
                status:0,
                info:"服务器连接失败..."
            });
        }else{
            console.log('连接数据库成功，查到的数据为：'+docs);
            if(docs.length==0){
                res.send({
                    status:1,
                    info:"未查到该用户,可以注册该用户"
                });
            }else{
                res.send({
                    status:2,
                    info:"该用户已被注册"
                });
            }
        }
    })  
});

//登录的验证
router.get('/checkPassword', function(req, res, next) {
    User.find({username: req.query.username,password: req.query.password,},(err,docs)=>{
        if(err){
            console.log('登录失败：'+docs);
            res.send({status:0,info:'服务器错误！'});
        }else{
            console.log('登录成功用户：'+docs);
            if(docs.length==0){
                res.send({status:0,info:'用户名或密码错误！'});
            }else{
                res.send({status:1,info:'登录成功！'});
            }
        }
    })

});

//往数据库中插入一条数据
router.post('/insert', function(req, res, next) {
	let user = new User({
		username: req.body.params.username,
		password: req.body.params.password
    });
    console.log(req.body.params.username);
    user.save(function (err) {
		if (err){
            res.send({
                status: 0
            })
            return console.error(err);
        }else{
            res.send({
                status: 1
            })
            return;
        }
	});
});

module.exports = router;








// var express = require('express');
// var router = express.Router();


// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// var User = require('../models/User');// 引入模型

// router.get('/submit',(req,res,next)=>{
// 	var user = new User({
// 		username:'admin',
// 		password:'123'
// 	});
// 	// user.save(function (err, auser) {
// 	// 	if (err) return console.error(err);
// 	// 	auser.speak();
// 	// });


// 	User.find({
// 		username:"admin",
// 		password:"123"
// 	},(err,docs)=>{
// 		if(err){
// 			console.log('登录失败：'+docs);
// 			res.send('server or db error');
// 		}else{
// 			console.log('登录成功用户：'+docs);
// 			if(docs.length==0){
// 				res.send('用户名或密码有误');
// 			}else{
// 				res.send('login success');
// 			}
// 		}
// 	})
  
//   //  User.find({ //查找
//   //      username:'admin',
//   //      password:'123'
//   //  },(err, docs)=>{
//   //      if(err){
//   //          res.send('server or db error');
//   //      }else{
//   //          console.log('登录成功用户：'+docs);
//   //          if(docs.length==0){
//   //              res.send('用户名或密码有误');
//   //          }else{
//   //              req.session.user = {
//   //                  _id:docs[0]._id,
//   //                  username:docs[0].username
//   //              };
//   //              res.send('login success');
//   //          }
//   //      }
//   //  });
//   });



// module.exports = router;
