<template>
	<div class="content">
		 <div class="msg">消息必须通过通道才能发送，不同的通道可以发送给不同的人群（通过二维码绑定）</div>
		
	</div>
</template>

<script>
export default {
   data () {
    return {
       
    }
  },
  methods:{
  	 
  }
}
</script>

<style scoped>
@import '../../static/css/common.css';
.msg{
	    background-color: #edf6fd;
    color: #43a3e5;
    -webkit-box-shadow: 0 2px #d6ebfa;
    box-shadow: 0 2px #d6ebfa;
        padding-bottom: 10px;
    border-radius: 2px;
    border: none;
}
</style>