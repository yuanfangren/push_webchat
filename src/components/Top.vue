<template>
	<div class="all">
		<div class="top_all">
		 <div class="top">
			<div class="top-item top-item-left"><span>Push_Webchat</span></div>
			<router-link to="/login"><div class="top-item top-item-right" ><span>注册&登入</span></div></router-link>
			<router-link to="/user/list" v-if="isAdmin"><div class="top-item top-item-right" ><span>用户</span></div></router-link>
			<router-link to="/api"><div class="top-item top-item-right" ><span>API</span></div></router-link>
			<router-link to="/home"><div class="top-item top-item-right" ><span>首页</span></div></router-link>
		</div>
		</div>
		 <router-view/>  
	</div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      msg: 'top',
      isAdmin:true,
    }
  },
  methods:{
  	 
  }
}
</script>

<style scoped>
.top_all{
    background: #656f7f;
    height: 40px;
    line-height: 40px;
    padding-top: 10px;
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