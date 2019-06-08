<template>
	<div class="all bgcolor">
		<div class="top_all">
		 <div class="top">
			<div class="top-item top-item-left"><span>Push_Wechat</span></div>
			<div class="top-item top-item-right" @click="logout" v-if="this.isLogin_all"><span>退出</span></div>
			<router-link to="/login"><div class="top-item top-item-right" v-if="!this.isLogin_all"><span>注册&登入</span></div></router-link>
 			<div class="top-item top-item-right" @click="channelRouter" v-if="this.isLogin_all"><span>通道</span></div>
 			<router-link to="/api"><div class="top-item top-item-right" ><span>API</span></div></router-link>
			<router-link to="/home"><div class="top-item top-item-right" ><span>首页</span></div></router-link>
		</div>
		</div>
		 <router-view />  
	</div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      msg: 'top',
     }
  }, 
  methods:{
  	 channelRouter(){
   	 	 this.$router.push({path:"/channel",query:{t:+new Date()}});
  	 },
  	 logout(){
  	 	console.log("====");
  	 	sessionStorage.setItem("isLogin_all",false);
  	 	this.isLogin_all = false;
		this.$router.push({path:"/",query:{t:+new Date(),isLogin:false}});
  	 }
  },
 watch: {
　　// 利用watch方法检测路由变化：
　　'$route': function (to, from) {	
 		if(sessionStorage.getItem("isLogin_all")  == "true"){
 			console.log("1");
			 this.isLogin_all = true;
		}else{
			console.log("2");
			this.isLogin_all = false;
		}
		 
　　}
  },
  created(){
   	if(sessionStorage.getItem("isLogin_all") == "true"){
			 this.isLogin_all = true;
		}else{
			this.isLogin_all = false;
		}
  }
 
}
</script>

<style scoped>
.bgcolor{
	    background-color: #f7f5f6;
	    font-family: Helvetica Neue,Helvetica Arial sans-serif,Hiragino Sans GB,STHeitiSC-Light,Microsoft YaHei;
	    height:100%;
}
.top_all{
    background: #656f7f;
    height: 40px;
    line-height: 40px;
    
}
.top{
	max-width:900px;
	position:relative;
	margin:0 auto;
	color:#fff;
}
.top-item{
	font-size:16px;
}
.top-item span{
	color:#fff;
}
.top-item-left{
	float:left;
	cursor:pointer;
	font-size:20px;
}
.top-item-right{
	float:right;
	cursor:pointer;
	margin-left:20px;
}
</style>