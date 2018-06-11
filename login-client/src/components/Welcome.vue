<template>
  <div class="welcome">
    <div>登陆成功,欢迎您：{{username}}</div><br>
    <button type="submit" class="btn btn-default">注销</button>
  </div>
</template>
<script>
export default {
  	name: 'welcome',
  	data () {
   		return {
        	username: ""
    	}
  	},
  	computed : {
		loginStatus : function(){
			return this.$store.getters.loginStatus;
		}
    },
    mounted : function(){
        if(this.loginStatus){   	//判断如果登陆了，从localstroge中拿值，否则跳回欢迎页
            this.username = sessionStorage.getItem('loginUsername')
        }else{
			this.$router.push({ path: '/login' });
		}
    },
	methods : {

	}
}
</script>
