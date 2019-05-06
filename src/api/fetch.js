import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'

//axios.defaults.baseURL = "http://localhost:8082"
axios.defaults.timeout = 15000;

/**
 * 请求拦截器
 * 
 */
axios.interceptors.request.use(config => {//在此处统一配置公共参数
   
    let params = {
        
    }; 
    for (let key in config.data) {
        params[key] = config.data[key]; //添加进参数列表
    }
    config.data = qs.stringify(params);//序列化
    return config;
}, error => {
  
    Promise.reject(error);// 错误提示
})

export default axios