<template>
	<div>
		<div class="logo-msg">
			<div><img src="../static/logo.png"></div>
			<div >{{msg}}</div>
		</div>
		<div class="content">
			{{content}}
		</div>
	</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: '欢迎回来',
      content:"这是登录&注册内容"
    }
  }
}
</script>

<style scoped>
@import '../static/css/common.css';

</style>