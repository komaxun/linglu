import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import index from '../pages/index.vue'; // 首页
import details from '../pages/details.vue'; // 首页

const router = new VueRouter({
	// mode: 'history',
	routes: [
		// 重定向
		{
			path: '/',
			redirect: '/index'
		},
		{
			path: '/index',
			name: 'index',
			component: index,
			meta: {
				keepAlive: true //需要使用keepalive
			}
		},
		{
			path: '/details',
			name: 'details',
			// 首页
			component: details,
			meta: {
				keepAlive: true //需要使用keepalive
			}
		}
	]
})

const b=1

export default router
