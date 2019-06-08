import Vue from 'vue'
import http from "@/api/fetch";
import api from "@/api/api";

export default {
    install(Vue, options) {
         Vue.prototype.$api = api;//api地址全局方法
         Vue.prototype.isLogin_all = false;
         //Vue.prototype.currentUser_all = null;

        //成功全局方法
        Vue.prototype.successMessage = function (value) {
            this.$message({
                showClose: true,
                message: value,
                type: 'success',
                duration: 1000
            });
        }
        Vue.prototype.errorMessage = function (value) {
            this.$message({
                showClose: true,
                message: value,
                type: 'error',
                duration: 2500
            });
        }

    }
}