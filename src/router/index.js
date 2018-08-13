import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/welcome'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/public.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/welcome',
                    component: resolve => require(['../components/page/welcome.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/bill',
                    component: resolve => require(['../components/page/bill/list.vue'], resolve),
                    meta: { title: '账单管理' }
                },
                {
                    path: '/provider',
                    component: resolve => require(['../components/page/provider/list.vue'], resolve),
                    meta: { title: '供应商管理' }
                },
                {
                    path: '/user',
                    component: resolve => require(['../components/page/user/list.vue'], resolve),
                    meta: { title: '用户管理' }
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/login.vue'], resolve)
        },
        {
            path: '/404',
            component: resolve => require(['../components/page/404.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../components/page/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
