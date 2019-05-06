<template>
	<div class="content">
		<el-table :data="tableData"  stripe style="width: 100%" >
     		<el-table-column  prop="id" label="用户ID"  width="100" align="center"> </el-table-column>
      		<el-table-column  prop="openid" label="openID"  > </el-table-column>
      		<el-table-column prop="isAdmin" label="是否管理员"  width="100" align="center" :formatter="isAdmin">
             
          </el-table-column>
      		<el-table-column prop="isForbidden" label="是否禁用" width="100" align="center"> 
              <div slot-scope="childReview">
                <span v-if='childReview.row.isForbidden=== "1"' >是</span>
                <span v-else>否</span>
               </div>
          </el-table-column>
      		<el-table-column  prop="channelcount" label="通道个数"  width="100" align="center"> </el-table-column>
      		<el-table-column prop="" label="操作"   align="center"> 
      			<template slot-scope="scope">
			        <el-button
			          size="mini" 
			          type="danger"
			          @click="handleForbidden(scope.$index, scope.row)">禁用</el-button>
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
      tableData: []
    }
  },
	methods: {
	  handleForbidden(index, row) {
	    console.log(index, row);
	  },
	  handleShowChannel(index, row) {
	    console.log(index, row);
	  },
    isAdmin(row,column){
      return row.isAdmin == "1" ? "是":"否";
    }
	},
	created(){
       axios.post(this.$api.getAllUsers, {}).then(res => {
          this.tableData = res.data;   
           
      }).catch(error => {
          this.errorMessage("失败");
      });
	}
}
</script>

<style scoped>
@import '../../static/css/common.css';

</style>