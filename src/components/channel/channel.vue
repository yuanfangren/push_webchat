<template>
	<div class="content">
		 <h2>通道管理</h2>
		 <div class="page">
		 	 <channelList v-if="comlist"></channelList>
		 	 <channelAdd v-if="comadd" @listenadd="getaddmsg"></channelAdd>
		 </div> 
		 
	</div>
</template>

<script>
import channelList from "./list.vue"
import channelAdd from "./add.vue"
export default {
   components: {channelList,channelAdd},

   data () {
    return {
       comlist:true,
       comadd:false,
    }
  },
  methods:{
  	 getaddmsg(data){
  	 	console.log(2222);
  	 	console.log(data);
  	 	this.comadd= data;
  	 	this.comlist= !data;
  	 }
  }
}
</script>

<style scoped>
@import '../../static/css/common.css';
*{
	padding:0;
	border:0;
	margin:0;
}
a {  
	text-decoration:none;
}
.content h2{
	color: #828282;
    margin-top: 20px;
    font-size: 24px;
    font-weight: 100;
    text-align: left;
}
.page{
	margin-top: 20px;
    background: #fff;
    padding: 40px;
    min-height: 400px;
}
 
</style>