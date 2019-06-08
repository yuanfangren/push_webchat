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
  name: 'home',
  data () {
    return {
      msg: '基于微信模板的一对多消息送达服务',
      content:"这是首页内容"
    }
  },
  created(){
     
  },
   mounted() {
        if(sessionStorage.getItem("isLogin_all")){
            this.isLogin_all=true;
        }
    }
}
</script>

<style scoped>
@import '../static/css/common.css';
 
</style>