<template>
	<div class="content">
		 <h2>通道管理</h2>
		 <div class="page">
		 	 <channel-list v-if="comlist" @listenadd="addchannel"></channel-list>
		 	 <channel-add v-if="comadd"   @listenlist="listchannel"></channel-add>
		 </div> 
		 
	</div>
</template>

<script>
import ChannelList from "./list.vue"
import ChannelAdd from "./add.vue"
export default {
   components: {
      "channel-list":ChannelList,
      "channel-add":ChannelAdd
   },

   data () {
    return {
       comlist:true,
       comadd:false,
    }
  },
  methods:{
  	 addchannel(data){
    	 	this.comadd= data;
  	 	  this.comlist= !data;
  	 },
     listchannel(data){
        this.comadd= !data;
        this.comlist= data;
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