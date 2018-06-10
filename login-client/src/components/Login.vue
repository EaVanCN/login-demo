<template>
    <div class="login container">
        <el-form :model="ruleForm" :rules="rules" ref="loginForm" >
            <el-row :gutter="20">
                <el-col :span="8" :offset="8">
                    <div class="grid-content bg-purple">
                        <el-form-item  prop="username">
                            <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8" :offset="8">
                    <div class="grid-content bg-purple">
                        <el-form-item  prop="password">
                        <el-input v-model="ruleForm.password" placeholder="密码" prop="password"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8" :offset="8">
                    <div class="grid-content bg-purple">
                        <el-button type="primary" @click="login('loginForm')">登录</el-button>
                        <el-button type="primary" @click="signOn('loginForm')">注册</el-button>
                    </div>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            ruleForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        login(formName){
            let username = this.ruleForm.username;
            let password = this.ruleForm.password;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                } else {
                    return false;
                }
            });
             this.$http.get('/api/checkPassword',{
                params:{
                    username,
                    password
                }
            }).then(res=>{
                if(res.data.status == 1){
                    this.$message({
                        message: '登录成功！',
                        type: 'success'
                    });
                    return;
                }else{
                     this.$message.error(res.data.info);
                     return;
                }
            }).catch(err=>{
                this.$message.error('请求失败：'+err);
                return;
            })

        },
        signOn(formName){
            let username = this.ruleForm.username;
            let password = this.ruleForm.password;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                } else {
                    return false;
                }
            });
            this.$http.get('/api/findByUsername',{
                params:{
                    username
                }
            }).then(res=>{
                console.log(res);
                //可能的状态有0:服务器连接错误，1:用户未被注册，可进行接下来的步骤，2:该用户已被注册
                if(res.data.status == 1){
                //用户未被注册
                    this.$http.post('/api/insert',{
                        params:{
                            username,
                            password
                        }
                    }).then(res=>{
                        console.log(res);
                        if(res.data.status == 1){
                            this.$message({
                                message: '注册成功！',
                                type: 'success'
                            });
                            return;
                        }else{
                            this.$message.error('数据插入mongoDB错误!');
                            return;
                        }   
                    }).catch(function(err){
                    this.$message.error('连接服务器错误！');
                    return;
                    });
                }else if(res.data.status == 2){
                    this.$message({
                        message: '该用户已被注册！',
                        type: 'warning'
                    });
                    return;
                }else{
                    this.$message.error('连接服务器错误！');
                }
            }).catch(function(err){
                this.$message.error('连接服务器错误！');
                return;
            })
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
