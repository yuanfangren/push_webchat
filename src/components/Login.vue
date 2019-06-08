<template>
	<div>
		<div class="logo-msg">
			<div><img src="../static/logo.png"></div>
			<div >{{msg}}</div>
		</div>
		<div class="content">
			{{content}}
		</div>
		<div class="login_div">
			<img :src="imgurl" class="login_img">
		</div>
	</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'login',
  data () {
	    return {
	      	msg: '欢迎回来',
			content:"这是登录&注册内容",
			imgurl: '',
			timer:'',
			logintoken:'',
	    }
	},
	methods: {
		timerCheck(){
 			var that = this;
			//假设成功后，跳转到通道页面
			sessionStorage.setItem("isLogin_all",true);
			this.$router.push({path:"/",query:{t:+new Date(),isLogin:true}});
 			/**if(this.logintoken !=''){
				axios.get(this.$api.getCheck, {
					params:{
						logintoken:that.logintoken
					}
		       }).then(res => {
		          this.tableData = res.data;   
		          console.log(res.data);
		          if(res.data.status == 0){
		          	 if(res.data.data ){
		          	 	clearInterval(this.timer);//登录
		          	 	//登录跳转到通道

		          	 }
		          }
		          
		      }).catch(error => {
		          this.errorMessage("请求失败");
		      });
			}*/
		}	
	},
	 
	created(){
       axios.post(this.$api.getLoginImg, {
             
       }).then(res => {
          this.tableData = res.data;   
           if(res.data.status == 0){
          	this.imgurl = res.data.data.qr_url;
          	this.logintoken = res.data.data.logintoken;
          	//this.timer = setInterval(this.timerCheck, 1000);
          	this.timerCheck();
          }
          
      }).catch(error => {
          this.errorMessage("请求失败");
      });
	}
}

</script>

<style scoped>
@import '../static/css/common.css';
.login_div{
	text-align: center;
}
.login_img{
	width:250px;
	height:250px;
}
</style>