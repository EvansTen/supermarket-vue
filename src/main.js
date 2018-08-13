import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
import 'babel-polyfill';
//axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

// http响应拦截器
//统一的错误处理
axios.interceptors.response.use(response => {
        return response;
    },
    error => {
        if (error.response.status == 401) {
            localStorage.removeItem('ms_username');
            this.$router.push('/login');
        } else if (error.response.status >= 500) {
            Vue.prototype.$message({
                showClose: true,
                message: "服务器异常！",
                type: "error"
            });
        }else if  (error.response.status >= 400){
            Vue.prototype.$message({
                showClose: true,
                message: "请求错误！",
                type: "error"
            });
        }
        return Promise.reject(error);
    }
);

//统一的提交前处理
axios.interceptors.request.use(data => {
        // data.headers['Authorization'] = localStorage.getItem('token');
        return data;
    },
    error => {
        return error;
    }
)

Vue.prototype.$axios = axios;


//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    const role = localStorage.getItem('ms_username');

    if(!role && to.path !== '/login'){
        next('/login');
    }else if(to.meta.permission){
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403');
    }else{
        // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        }else{
            next();
        }
    }
})

Vue.use(ElementUI, { size: 'small' });
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
