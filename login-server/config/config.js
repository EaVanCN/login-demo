//config这个文件夹主要用于与数据库进行连接
// 数据库地址： 'mongodb://用户名:密码@ip地址:端口号/数据库';
module.exports = {
    mongodb : 'mongodb://root:root@localhost:27017/login_db'
}

//为数据库创建用户
// db.createUser({user:"root",pwd:"root",roles:["readWrite"]})
// db.auth("root","root")


