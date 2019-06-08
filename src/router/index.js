import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Api from '@/components/Api'
import Top from '@/components/Top'
//import UserList from '@/components/user/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      
      path: '/',
      name: 'Top',
      component: Top,
      //redirect:"/home",
      redirect:to =>{
      	const{hash,params,query}  = to;
    	if(query.isLogin === true){
  			return {path:'/channel',query:{t:query.t}}
      	}else{
      		return {path:'/home',query:{t:query.t}}
      	}
      },
      children:[
      	 {
	      path: '/api',
	      name: 'Api',
	      component: Api
	    },
	    {
	      path: '/home',
	      name: 'Home',
	      component: Home
	    },
	    {
	      path: '/login',
	      name: 'Login',
	      component: Login
	    } ,
	    {
	      path: '/channel',
	      name: '通道管理',
	      component: resolve => {
	        require(['@/components/channel/channel'], resolve)
	      },
	      children:[
	        {
			      path: '/channel/list',
			      name: '通道列表',
			     component: resolve => {
			        require(['@/components/channel/list'], resolve)
			      },
			 },
	      	 {
			      path: '/channel/add',
			      name: '新增通道',
			     component: resolve => {
			        require(['@/components/channel/add'], resolve)
			      },
			 },
	      ]
	    } 
      ]
    }
   
  ]
})
