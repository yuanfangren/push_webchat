import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Api from '@/components/Api'
import Top from '@/components/Top'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top,
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
	    }
      ]
    }
   
  ]
})
