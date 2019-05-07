<template>
	<div class="content">

    <div class="bar-div">

        <div class="bar"><span class="bar-span">openID：</span></div><el-input v-model="params.queryOpenid" size="mini" placeholder="请输入微信ID" class="bar"  style="width:300px;"></el-input>
        <div class="bar"><span class="bar-span">是否管理员：</span></div><el-select size="mini" style="width:100px;" v-model="params.queryAdmin" class="bar" placeholder="请选择是否管理员">
           <el-option label="全部" value=""></el-option>
           <el-option label="是" value="1"></el-option>
           <el-option label="否" value="0"></el-option>
        </el-select>
         <div class="bar"><span class="bar-span">是否禁用：</span></div><el-select size="mini" style="width:100px;" v-model="params.queryForbidden" class="bar" placeholder="请选择是否禁用">
           <el-option label="全部" value=""></el-option>
           <el-option label="是" value="1"></el-option>
           <el-option label="否" value="0"></el-option>
        </el-select>
        <el-button @click="query" size="mini">查询</el-button> 
    </div>
		<el-table :data="tableData"  stripe style="width: 100%" >
     		<el-table-column  prop="id" label="用户ID"  width="100" align="center"> </el-table-column>
      		<el-table-column  prop="openid" label="openID"  > </el-table-column>
      		<el-table-column prop="isAdmin" label="是否管理员"  width="100" align="center" :formatter="isAdmin">
             
          </el-table-column>
      		<el-table-column prop="isForbidden" label="是否禁用" width="100" align="center"> 
              <div slot-scope="childReview">
                <span v-if='childReview.row.isForbidden == "1"' >是</span>
                <span v-else>否</span>
               </div>
          </el-table-column>
      		<el-table-column  prop="channelcount" label="通道个数"  width="100" align="center"> </el-table-column>
      		<el-table-column prop="" label="操作"   align="center"> 
      			<template slot-scope="scope">

			        <el-button v-if='scope.row.isForbidden == "0"'
			          size="mini" 
			          type="danger"
			          @click="handleForbidden(scope.$index, scope.row)" >禁用</el-button>
              <el-button v-else
                size="mini" 
                type="danger"
                @click="handleForbidden(scope.$index, scope.row)" >启用</el-button>
			        <el-button
			          size="mini"
			          @click="handleShowChannel(scope.$index, scope.row)">查看通道</el-button>
			    </template>
      		</el-table-column>
    </el-table>
	</div>
</template>

<script>
import axios from "axios";
export default {
   data () {
    return {
      tableData: [],
      params:{
        queryOpenid:"",
        queryForbidden:"",
        queryAdmin:""
      }

    }
  },
	methods: {
	  handleForbidden(index, row) {//禁用启用,原有是禁用(0)改为启用(1)，是启用(1)改为禁用(0)
       axios.post(this.$api.setForbiddenById, {
          id:row.id,
          forbidden:row.isForbidden
      }).then(res => {
          console.log(res);
          if(res.status == 200){
            if(res.data){
               if(row.isForbidden == 0){
                  row.isForbidden = 1;
               }else if(row.isForbidden == 1){
                  row.isForbidden = 0;
               }
            }
          }else{
            this.errorMessage("系统内部错误");
          }
           
      }).catch(error => {
          this.errorMessage("请求失败");
      });
	  },
     
	  handleShowChannel(index, row) {//查看通道
	    console.log(index, row);
	  },
    isAdmin(row,column){
      return row.isAdmin == "1" ? "是":"否";
    },
    query(){//查询
    console.log(this.params);
      axios.post(this.$api.getAllUsers, {
            queryOpenid:this.params.queryOpenid,
            queryForbidden:this.params.queryForbidden,
            queryAdmin:this.params.queryAdmin
       }).then(res => {
          this.tableData = res.data;   
           
      }).catch(error => {
          this.errorMessage("请求失败");
      });
    }

	},
	created(){
       axios.post(this.$api.getAllUsers, {
            queryOpenid:this.params.queryOpenid,
            queryForbidden:this.params.queryForbidden,
            queryAdmin:this.params.queryAdmin
       }).then(res => {
          this.tableData = res.data;   
           
      }).catch(error => {
          this.errorMessage("请求失败");
      });
	}
}
</script>

<style scoped>
@import '../../static/css/common.css';
.bar-div{
  margin-top:10px;
}
.bar{
  float:left;
  margin-right:10px;
}
.bar-span{
  font-size:16px;
  line-height: 26px;
  color: #606266;
     
}
 
</style>