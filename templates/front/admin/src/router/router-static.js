import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import discussertongtushu from '@/views/modules/discussertongtushu/list'
    import ertongtushu from '@/views/modules/ertongtushu/list'
    import tushufenlei from '@/views/modules/tushufenlei/list'
    import yonghu from '@/views/modules/yonghu/list'
    import chat from '@/views/modules/chat/list'
    import orders from '@/views/modules/orders/list'
    import gonggaoxinxi from '@/views/modules/gonggaoxinxi/list'
    import discussrexiaotushu from '@/views/modules/discussrexiaotushu/list'
    import rexiaotushu from '@/views/modules/rexiaotushu/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/discussertongtushu',
        name: '儿童图书评论',
        component: discussertongtushu
      }
      ,{
	path: '/ertongtushu',
        name: '儿童图书',
        component: ertongtushu
      }
      ,{
	path: '/tushufenlei',
        name: '图书分类',
        component: tushufenlei
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/chat',
        name: '在线客服',
        component: chat
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/gonggaoxinxi',
        name: '公告信息',
        component: gonggaoxinxi
      }
      ,{
	path: '/discussrexiaotushu',
        name: '热销图书评论',
        component: discussrexiaotushu
      }
      ,{
	path: '/rexiaotushu',
        name: '热销图书',
        component: rexiaotushu
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
