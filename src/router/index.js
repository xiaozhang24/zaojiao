import Vue from 'vue'
import Lockr from 'lockr'
import axios from 'axios'
import VueRouter from 'vue-router'
import store from '@/vuex/store'
import Index from '@/components/Index'
import Home from '@/components/home/home'
import News from '@/components/home/news'
import Apps from '@/components/home/apps'
import Mail from '@/components/home/mail'
import Me from '@/components/home/me'
import Login from '@/components/login/login'
import Refresh from '@/components/base/refresh'
import rules from '@/components/rules/ruleList'
import phar from '@/components/apps/phar/babyPhar'
import baby from '@/components/apps/phar/baby'


const routes = [{
	path: '/login',
	name: 'login',
	component: Login
}, {
	path: '/',
	redirect: 'Apps',
	component: Index,
	meta: {
		requireAuth: true
	},
	children: [{
		path: '/news',
		name: 'news',
		meta: {
			requireAuth: true
		},
		component: News
	}, {
		path: '/apps',
		name: 'apps',
		meta: {
			requireAuth: true
		},
		component: Apps
	}, {
		path: '/mail',
		name: 'mail',
		meta: {
			requireAuth: true
		},
		component: Mail
	}, {
		path: '/me',
		name: 'me',
		meta: {
			requireAuth: true
		},
		component: Me
	}]
}, {
	path: '/apps/rules',
	meta: {
		requireAuth: true
	},
	component: rules,
	children: [{
		path: '/baby',
		component: baby,
	}]
}, {
	path: '/apps/rules/phar',
	meta: {
		requireAuth: true
	},
	component: phar
}, {
	path: '/refresh',
	component: Refresh
}]

Vue.use(VueRouter)
const router = new VueRouter({
	mode: 'history',
	routes
})

if (Lockr.get('token')) {
	store.state.isLogin = !store.state.isLogin;
}

router.beforeEach((to, from, next) => {
	if (store.state.isLogin) {
        if (to.path == '/login') {
		    router.replace({ name: router.history.path })
		} else {
			next();
		}
	} else {
		if (to.meta.requireAuth){
			next({
				path:'/login'
			})
		} else {
			next()
		}	
	}
})
export default router