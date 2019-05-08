<template>
	<div class="content">
		 <h2 v-if="comlist">通道管理</h2>
     <h2 v-if="comadd"><span class="addColor" @click="listchannel">通道管理</span><i class="el-icon-d-arrow-right"></i>新增 </h2>
     <h2 v-if="comedit"><span class="addColor" @click="listchannel">通道管理</span><i class="el-icon-d-arrow-right"></i>设置 </h2>
     <h2 v-if="comsend"><span class="addColor" @click="listchannel">通道管理</span><i class="el-icon-d-arrow-right"></i>发送消息 </h2>
 		 <div class="page">
		 	 <channel-list v-if="comlist" @listenadd="addchannel" @listenedit="editchannel" @listensend="sendchannel"></channel-list>
		 	 <channel-add v-if="comadd"   @listenlist="listchannel"></channel-add>
       <channel-edit v-if="comedit" :channelid="cid" @listenlist="listchannel" @listensend="sendchannel"></channel-edit>
       <channel-sendmsg v-if="comsend"  :channelid="cid"></channel-sendmsg>
		 </div> 
		 
	</div>
</template>

<script>
import ChannelList from "./list.vue"
import ChannelAdd from "./add.vue"
import ChannelEdit from "./edit.vue"
import SendMsg from "./sendmsg.vue"

export default {
   components: {
      "channel-list":ChannelList,
      "channel-add":ChannelAdd,
      "channel-edit":ChannelEdit,
      "channel-sendmsg":SendMsg
   },

   data () {
    return {
       comlist:true,
       comadd:false,
       comedit:false,
       comsend:false,
       cid:""
    }
  },
  watch: {
    '$route' (to, from) {//监听路由变化（目前是点击通道的时候会触发） 
       if(this.comlist){//如果当前是list页面 ，重新加载list中的getChannel方法加载数据
        this.$children[0].getChannel();
      }else{//否则的话将当前页面改为list页面
        this.listchannel(true);
       }
      
     
    }
  },
  methods:{
     sendchannel(data,id){
     console.log(id+"=====================");
        this.cid = id;
        this.comadd= !data;
        this.comlist= !data;
        this.comedit= !data;
        this.comsend =data;
     },
     editchannel(data,id){
         this.cid = id;
        this.comadd= !data;
        this.comlist= !data;
        this.comedit= data;
        this.comsend =!data;
     },
  	 addchannel(data){
    	 	this.comadd= data;
  	 	  this.comlist= !data;
        this.comedit= !data;
        this.comsend =!data;
  	 },
     listchannel(data){
        this.comadd= !data;
        this.comlist= data;
        this.comedit= !data;
        this.comsend =!data;
     }
  },
  created(){
      
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
.addColor{
  color: #ff6c9d;
  cursor:pointer;
}
 
</style>