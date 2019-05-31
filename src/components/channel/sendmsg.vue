<template>
	<div>
		 <div class="one-div">
		 	<div class="title color-text">通道名称</div>
		 	<div class="text color-common">{{channelname}}</div>
		 	<div class="claer"></div>
		 </div>
		 <div class="one-div">
		 	<div class="title color-text">SendKey</div>
		 	<div class="text " ><span class="color-l">{{sendKey}}</span></div>
		 		<div class="claer"></div>
		 </div>
		 <div class="send-title">SubscribedMessage</div>
		 <div class="one-div">
		 	<div class="title color-text">API地址</div>
		 	<div class="text  "><span class="color-l">https://push.honeywen.com/send</span></div>
		 		<div class="claer"></div>
		 </div>
		 <div class="one-div">
		 	<div class="title color-text">说明</div>
		 	<div class="color-text text">订阅消息将发送给所有扫描过本通道订阅二维码的用户，只支持微信，不支持短信</div>
		 		<div class="claer"></div>
		 </div>
		 <div class="one-div">
		 	<div class="title color-text">sendKey*</div>
		 	<div class="text color-common">通道的SendKey，必填</div>
		 	<div class="claer"></div>
		 </div>
		 <div class="one-div">
		 	<div class="title color-text">title*</div>
		 	<div class="text color-common">标题，必填。不超过80个字</div>
		 	<div class="claer"></div>
		 </div>
		 <div class="one-div">
		 	<div class="title color-text">content</div>
		 	<div class="text color-common">长文本内容，选填。用户通过点击短信里的链接，打开浏览器阅读。支持Markdown语法，不超过64K</div>
		 	<div class="claer"></div>
		 </div>
		 <div class="one-div">
		 	<div class="title color-text">测试工具</div>
		 	<div class="text ">
		 		<el-button v-if="!open" type="danger" class="notopen-button" size="small" @click="opentestform">打开测试表单</el-button>
		 		<div class="form-div"  v-if="open">
		 		<div class="open-form-div">
		 			<div class="add-channel-font">通道SendKey</div>
					<el-input placeholder="通道的SendKey，必填" v-model="sendKey"> </el-input>
		 		</div>
		 		<div  class="open-form-div">
		 			<div class="add-channel-font">消息标题</div>
					<el-input placeholder="消息标题，80字以内，必填"  v-model="title"> </el-input>
		 		</div>
		 		<div   class="open-form-div">
		 			<div class="add-channel-font">消息长内容</div>
 					<el-input type="textarea" :rows="5" placeholder="消息长内容" v-model="content"> </el-input>
		 		</div>
		 		<div   class="open-form-div">
		 			<div class="add-channel-font">请求串</div>
 					<el-input type="textarea" :rows="5" placeholder="请求串" v-model="request">  </el-input>
		 		</div>
		 		<div  class="open-form-div">
		 			<el-button  type="danger" size="small" @click="sendMsg">发送测试</el-button>
		 			<el-button    size="small" @click="closefrom" >收起测试表单</el-button>
		 		</div>
		 		<div  class="open-form-div">
		 			<div class="add-channel-font">测试结果</div>
 					<el-input type="textarea" :rows="5" placeholder="测试结果" v-model="response">  </el-input>
		 		</div>
		 		</div>
 		 	</div>
		 	<div class="claer"></div>
		 </div>
	</div>
</template>

<script>
import axios from "axios";
export default { 
  props:["channelid"],
   
  data () {
    return {
       cid:"",
			 open:false,
			 title: "",
       content:"",
       request: '{"sendKey": "", "title":"", "content": ""}',
       response:"",
       sendKey:"",
       channelname:"",//通道名称
     }
  },
  watch:{
      channelid: {
        handler:function(newName, oldName) {
            this.cid = newName;
       　　  this.getChannelById(newName);
    　　},
    　　immediate: true
			}
       
  },
  methods:{
  	opentestform(){
  		this.open = true;
  	},
  	closefrom(){
  		this.open = false;
  	},
  	getChannelById(id){//根据通道id获取通道信息
        axios.post(this.$api.getChannelById, {
            id:id
         }).then(res => {
               if(res.status == 200){
                   if(res.data.status == 0){
                       this.channelname = res.data.data.name;
                        this.sendKey = res.data.data.sendKey;
                  }else{
                    this.errorMessage(res.data.msg);
                  }
             }
             
        }).catch(error => {
            this.errorMessage("请求失败");
        });
     },
	},
	sendMsg: function() {
		console.log("send msg");
		axios.get(this.$api.send, {
			sendKey: this.sendKey,
			title: this.title,
			content: this.content
		}).then(res => {
			
		});
	}
}
</script>

<style scoped>
.one-div .title,.one-div .text{
	
	font-size:18px;
	float:left;
}
.one-div {
	 
	line-height:40px;
     border-bottom: 1px solid #eee;
}
.one-div .title{
	width:120px;
}
.send-title{
	    padding-top: 10px;
    padding-bottom: 10px;
    background: #fafafa;
    color: #ff6c9d;
    clear: both;
    font-size: 20px;
    text-align: left;
    padding-left: 45px;
    margin-bottom: 10px;
    margin-top: 20px;

}
.one-div .text{
	 
	margin-left: 20px;
    width: calc(100% - 150px);
    text-align: left;
    
}
.color-text{
	color: #ff6c9d;  
	  text-align: left;
    margin-left: 10px;
}
.color-common{
	color: #646464;
}
.claer{
	clear:both;
}
.form-div{
	   
	    background: #fafafa;
	    margin-top: 20px;
	    padding:20px;
	    width: calc(100% - 190px) !important;
}
.notopen-button{
	 margin-bottom: 6px;
}
.open-form-div{
	 
   
}
.add-channel-font{
  font-size:16px;
  text-align:left;
  color:#aaa; 
  margin-top: 30px;
  margin-left:15px;
}
.color-l{
	background: #ff6c9d;
    color: #fff;
    padding: 5px 0;
    border-radius: 5px;
}
</style>