<template>
	<div class="content1">
		 <div class="msg-add-channel">消息必须通过通道才能发送，不同的通道可以发送给不同的人群（通过二维码绑定）</div>
     <div class="add-channel-font">通道名称</div>
		<el-input placeholder="建议填写贵司、产品或者网站的名称，将显示给收信人" class="input_ac" v-model="channelname" > </el-input>
    <div class="add-channel-font">联系用Email</div>
    <el-input placeholder="建议使用贵司域名后缀的电子邮箱，将显示给收信人" class="input_ac" v-model="channelemail" > </el-input>

    <div class="add-create-channel">
      <el-button @click="realaddChannel" type="danger" size="medium">创建通道</el-button> 
      <el-button @click="returnlist" size="medium" class="return-list">返回列表</el-button> 
    </div>
	</div>
</template>

<script>
import axios from "axios";
export default {
   data () {
    return {
       channelname:"",
       channelemail:"",
       flag:true,
    }
  },
  methods:{
  	 returnlist(){
        this.$emit("listenlist",this.flag);
     },
     realaddChannel(){
        if("" == this.channelname){
            this.errorMessage("通道名称不能为空");
            return;
        }
        if("" == this.channelemail){
            this.errorMessage("Email不能为空");
            return;
        }
        let  re = /^[0-9A-Za-z][\.-_0-9A-Za-z]*@[0-9A-Za-z]+(?:\.[0-9A-Za-z]+)+$/;
        if(!re.test(this.channelemail)){
           this.errorMessage("Email格式不正确");
           return;
        } 
        axios.post(this.$api.addChannel, {
            name:this.channelname,
            email:this.channelemail,
             
         }).then(res => {
              if(res.status == 200){
                   if(res.data.status == 0){
                       this.returnlist();
                  }else{
                    this.errorMessage(res.data.msg);
                  }
             }
             
        }).catch(error => {
            this.errorMessage("请求失败");
        });
     }
  }
}
</script>

<style >
.msg-add-channel{
	    background-color: #edf6fd;
    color: #43a3e5;
    -webkit-box-shadow: 0 2px #d6ebfa;
    box-shadow: 0 2px #d6ebfa;
        padding: 10px;
    border-radius: 2px;
    border: none;
    font-size:18px;
}
.add-channel-font{
  font-size:16px;
  text-align:left;
  color:#aaa; 
  margin-top: 30px;
  margin-left:15px;
}
.input_ac .el-input__inner{
  border:0;
  border-bottom:1px solid #eee;
  height:35px;
}
.add-create-channel{
      margin-left: 15px;
    text-align: left;
    margin-top: 20px;
}
.add-create-channel .return-list{
  float:right;
}
</style>