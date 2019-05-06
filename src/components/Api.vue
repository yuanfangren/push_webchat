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
  name: 'api',
  data () {
    return {
      msg: '1个接口，2个参数',
      content:"这是API内容"
    }
  }
}
</script>

<style scoped>
@import '../static/css/common.css';

</style>