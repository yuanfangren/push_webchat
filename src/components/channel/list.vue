<template>
	<div class="">	
		 	<div class="msg">还没有可用通道呢,<span class="add-channel-no" @click="addchannel">新增通道</span></div>
		 	 <ul>
			 	<li>
			 		<span class="channel">12075 okash 催收</span>
			 		<span class="sendmsg">发送消息</span>
			 		<span class="set">设置</span>
			 	</li>
			 	<li>
			 		<span class="channel">12075 okash 催收</span>
			 		<span class="sendmsg">发送消息</span>
			 		<span class="set">设置</span>
			 	</li>
			 	<li>
			 		<span class="channel">12075 okash 催收</span>
			 		<span class="sendmsg">发送消息</span>
			 		<span class="set">设置</span>
			 	</li>
			 </ul>
 			 <div class="add-channel" @click="addchannel">新增通道</div> 
		 
		 
	</div>
</template>

<script>
export default {
    data () {
    return {

        flag : true,//传递给父组件用来新增组件用的
    }
  },
  methods:{
  	addchannel(){
   		this.$emit("listenadd",this.flag);
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
	color:#aaa;
	    text-align: left;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor:pointer;
 }
</style>