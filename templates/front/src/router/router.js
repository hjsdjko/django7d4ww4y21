import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import AddrList from '../pages/shop-address/list'
import AddrAdd from '../pages/shop-address/addOrUpdate'
import Order from '../pages/shop-order/list'
import OrderConfirm from '../pages/shop-order/confirm'
import Cart from '../pages/shop-cart/list'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import tushufenleiList from '../pages/tushufenlei/list'
import tushufenleiDetail from '../pages/tushufenlei/detail'
import tushufenleiAdd from '../pages/tushufenlei/add'
import ertongtushuList from '../pages/ertongtushu/list'
import ertongtushuDetail from '../pages/ertongtushu/detail'
import ertongtushuAdd from '../pages/ertongtushu/add'
import rexiaotushuList from '../pages/rexiaotushu/list'
import rexiaotushuDetail from '../pages/rexiaotushu/detail'
import rexiaotushuAdd from '../pages/rexiaotushu/add'
import gonggaoxinxiList from '../pages/gonggaoxinxi/list'
import gonggaoxinxiDetail from '../pages/gonggaoxinxi/detail'
import gonggaoxinxiAdd from '../pages/gonggaoxinxi/add'
import discussertongtushuList from '../pages/discussertongtushu/list'
import discussertongtushuDetail from '../pages/discussertongtushu/detail'
import discussertongtushuAdd from '../pages/discussertongtushu/add'
import discussrexiaotushuList from '../pages/discussrexiaotushu/list'
import discussrexiaotushuDetail from '../pages/discussrexiaotushu/detail'
import discussrexiaotushuAdd from '../pages/discussrexiaotushu/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
                {
                    path: 'shop-address/list',
                    component: AddrList
                },
                {
                    path: 'shop-address/addOrUpdate',
                    component: AddrAdd
                },
				{
					path: 'shop-order/order',
					component: Order
				},
				{
					path: 'cart',
					component: Cart
				},
				{
					path: 'shop-order/orderConfirm',
					component: OrderConfirm
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'tushufenlei',
					component: tushufenleiList
				},
				{
					path: 'tushufenleiDetail',
					component: tushufenleiDetail
				},
				{
					path: 'tushufenleiAdd',
					component: tushufenleiAdd
				},
				{
					path: 'ertongtushu',
					component: ertongtushuList
				},
				{
					path: 'ertongtushuDetail',
					component: ertongtushuDetail
				},
				{
					path: 'ertongtushuAdd',
					component: ertongtushuAdd
				},
				{
					path: 'rexiaotushu',
					component: rexiaotushuList
				},
				{
					path: 'rexiaotushuDetail',
					component: rexiaotushuDetail
				},
				{
					path: 'rexiaotushuAdd',
					component: rexiaotushuAdd
				},
				{
					path: 'gonggaoxinxi',
					component: gonggaoxinxiList
				},
				{
					path: 'gonggaoxinxiDetail',
					component: gonggaoxinxiDetail
				},
				{
					path: 'gonggaoxinxiAdd',
					component: gonggaoxinxiAdd
				},
				{
					path: 'discussertongtushu',
					component: discussertongtushuList
				},
				{
					path: 'discussertongtushuDetail',
					component: discussertongtushuDetail
				},
				{
					path: 'discussertongtushuAdd',
					component: discussertongtushuAdd
				},
				{
					path: 'discussrexiaotushu',
					component: discussrexiaotushuList
				},
				{
					path: 'discussrexiaotushuDetail',
					component: discussrexiaotushuDetail
				},
				{
					path: 'discussrexiaotushuAdd',
					component: discussrexiaotushuAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
