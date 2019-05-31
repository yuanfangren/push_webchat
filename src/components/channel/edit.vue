<template>
	<div class="content2">
		 <div class="msg-edit-channel">基本信息</div>
     <div class="edit-channel-font">通道名称</div>
		<el-input  placeholder="建议填写贵司、产品或者网站的名称，将显示给收信人" class="input_ac" v-model="channelname" > </el-input>
    <div class="edit-channel-font">联系用Email</div>
    <el-input  placeholder="建议使用贵司域名后缀的电子邮箱，将显示给收信人" class="input_ac" v-model="channelemail" > </el-input>
    <div class="edit-forbidden-div">
    <el-switch v-model="isforbidden" active-color="#ff6c9d"   inactive-color="#aaa" active-value="1"  inactive-value="0" > </el-switch><span> 停用</span>
    </div>
     <div class="edit-create-channel">
      <el-button @click="realeditChannel" type="danger" size="medium">更改设置</el-button> 
      <el-button @click="returnlist" size="medium" class="return-list">返回列表</el-button> 
      <el-button @click="returnlist" size="medium" class="return-list">重置sendkey</el-button>
      <el-button @click="deleteChannel" size="medium" class="return-list">删除通道</el-button>
      <el-button @click="sendmsg" size="medium" type="primary" class="return-list">发送消息</el-button> 
    </div>
    <div class="msg-edit-channel">本通道的订阅二维码
      <img :src="imgurl" alt="">
    </div>
    <div class="edit-show-msg">可以通过「订阅消息API」发送微信给所有扫描过此二维码的人(共<span v-model="number"></span>人)</div>
    <div>
      {{ subscribeList }}
    </div>
	</div>
</template>

<script>
import axios from "axios";
export default {
    props:["channelid"],
   data () {
    return {
       channelname:"",
       channelemail:"",
       flag:true,
       cid:"",//通道ID
       isforbidden:0,//是否禁用 否
       oldname:"",
       number:"",//订阅的人数
       imgurl: "",
       subscribeList: []
    }
  },
  watch:{
      channelid: {
        handler:function(newName, oldName) {
            this.cid = newName;
      　　   this.getChannelById(newName);
    　　},
    　　immediate: true
      },
       
  },
  created(){
    
  },
  methods:{
    sendmsg(){//跳转到发送消息页面
      this.$emit("listensend",this.flag,this.cid);
    },
    deleteChannel(){//删除通道
        this.$confirm('确认删除该通道?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
             axios.post(this.$api.deleteChannelById, {
                id:this.cid,
             }).then(res => {
                  if(res.status == 200){
                       if(res.data.status == 0){
                           this.successMessage("删除成功");
                           this.returnlist();
                      }else{
                        this.errorMessage(res.data.msg);
                      }
                 }
                 
            }).catch(error => {
                this.errorMessage("请求失败");
            });
        }).catch(() => {
                     
        });
    },
     getChannelById(id){//根据通道id获取通道信息
        axios.post(this.$api.getChannelById, {
            id:id
         }).then(res => {
          console.log(res);
              if(res.status == 200){
                   if(res.data.status == 0){
                       this.channelname = res.data.data.name;
                       this.oldname = res.data.data.name;
                       this.channelemail = res.data.data.email;
                       this.imgurl = res.data.data.qrcodeUrl;
                  }else{
                    this.errorMessage(res.data.msg);
                  }
             }
             
        }).catch(error => {
            this.errorMessage("请求失败");
        });
     },
  	 returnlist(){//返回列表
        this.$emit("listenlist",this.flag);
     },
     realeditChannel(){//更新
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

        axios.post(this.$api.editChannel, {
            id:this.cid,
            name:this.channelname,
            email:this.channelemail,
            isforbidden:this.isforbidden,
            oldname :this.oldname
         }).then(res => {
              if(res.status == 200){
                   if(res.data.status == 0){
                       this.successMessage("更改成功");
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
.msg-edit-channel{
	 
    border-radius: 2px;
    border: none;
    font-size:20px;
        margin-bottom: 20px;
    color: #ff6c9d;
    background: #fafafa;
    padding: 10px;
    text-align: left; 
}
.edit-channel-font{
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
.edit-create-channel{
      margin-left: 15px;
    text-align: left;
    margin-top: 20px;
    margin-bottom: 20px;
}
.edit-create-channel .return-list{
  float:right;
}
.edit-forbidden-div{
  text-align: left;
    margin-left: 15px;
    margin-top: 20px;
    font-size: 17px;
    color: #aaa;
}
.edit-show-msg{
  font-size:18px;
  text-align:left;
  margin-left:15px;
  color:#aaa;
}
</style>