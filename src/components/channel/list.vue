<template>
	<div class="">	
		 	<div v-if="!haschannel" class="msg">还没有可用通道呢,<span class="add-channel-no" @click="addchannel"><i class="el-icon-circle-plus"></i>新增通道</span></div>
		 	 <ul v-if="haschannel">
			 	<li v-for="(channel,index) of channellist" :key="channel.id">
			 		<span class="channel" @click="editchannel(channel.id)">{{channel.id}} {{channel.name}}</span>
			 		<span class="sendmsg" @click="sendmsg(channel.id)"><i class="el-icon-s-promotion"></i>发送消息</span> 
			 		<span class="set" @click="editchannel(channel.id)"><i class="el-icon-setting"></i>设置</span>
			 	</li>
			 	 
			 </ul>
 			 <div class="add-channel" @click="addchannel"><i class="el-icon-circle-plus"></i>新增通道</div> 
 		 
		 
	</div>
</template>

<script>
import axios from "axios";

export default {
    data () {
    return {
        flag : true,//传递给父组件用来新增组件用的
        channellist:[],
        haschannel:true,
        time:"",
       

    }
  },
  
   
  methods:{
  sendmsg(id){//跳转到发送消息页面
      this.$emit("listensend",this.flag,id);
    },
  	editchannel(id){
    	this.$emit("listenedit",this.flag,id);
   	},
  	addchannel(){
   		this.$emit("listenadd",this.flag);
   	},
   	getChannel(){

   		axios.post(this.$api.getChannel, {
			   token: sessionStorage.getItem("token")
            
         }).then(res => {
               if(res.status == 200){
                   if(res.data.status == 0){
                   		if(res.data.data.length>0){
                   			this.haschannel = true;
                   		}else{
                   			this.haschannel = false;
                   		}
                   		this.channellist = res.data.data;
                  }
             }
             
        }).catch(error => {
            this.errorMessage("请求失败");
        });
   	}
  },
  created(){
  		this.getChannel();
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
.msg{
	    background-color: #edf6fd;
    color: #43a3e5;
    -webkit-box-shadow: 0 2px #d6ebfa;
    box-shadow: 0 2px #d6ebfa;
        padding: 10px;
    border-radius: 2px;
    border: none;
    font-size:18px;
}
 
li{
   list-style-type :none;
   font-size:24px;
   cursor:pointer;
       border-bottom: 1px solid #eee;
           height: 50px;
     line-height: 50px;
}

.channel{
	float:left;
	color: #ff6c9d;
}
.add-channel-no:hover,.add-channel:hover,.set:hover,.sendmsg:hover,.channel:hover{
	color: #ff206a;
}
.set{
	float:right;
	margin-right:10px;
	font-size:16px;
	color:#ccc;
}
.sendmsg{
	float:right;
	font-size:16px;
	color:#ccc;
}
.add-channel{
	font-size:16px;
	color:#aaa;
	    text-align: left;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor:pointer;
 }
 .add-channel-no{
	font-size:20px;
	color: #ff6c9d;
	    text-align: left;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor:pointer;
 }
</style>