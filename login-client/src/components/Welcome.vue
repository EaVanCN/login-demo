<template>
  <div class="welcome">
    <div>登陆成功,欢迎您：{{username}}</div><br>
    <button type="submit" class="btn btn-default">注销</button>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
        username:"penygf"
    }
  }
}
</script>
