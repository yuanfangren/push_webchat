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
      redirect:"/home",
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
	  /*  {
	      path: '/user/list',
	      name: '用户管理',
	      component: resolve => {
	        require(['@/components/user/list'], resolve)
	      }
	    } ,*/
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
