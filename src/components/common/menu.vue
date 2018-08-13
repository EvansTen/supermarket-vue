<template>
    <div class="left">
        <h2 class="leftH2"><span class="span1"></span>功能列表 <span></span></h2>
        <nav>
            <ul class="list">
                <li v-for="item in menu" :id="isActive(item.path)?'active':''">
                    <router-link :to="item.path">{{item.name}}</router-link>
                </li>
            </ul>
        </nav>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                radio: '上海',
                menu: [
                    {
                        path: '/bill',
                        name: '账单管理'
                    },
                    {
                        path: '/provider',
                        name: '供应商管理'
                    },
                    {
                        path: '/user',
                        name: '用户管理'
                    },
                    {
                        path: '/welcome',
                        name: '密码修改'
                    },
                    {
                        path: '/login',
                        name: '退出登录'
                    }
                ]
            }
        },
        methods: {
            isActive(path) {
                console.log(path);
                console.log(this.$route.path);
                console.log('-----------');
                return path === this.$route.path;
            }
        },

    }
</script>

<style scoped>
    .active {
        background-color: #92c609;
        border-radius: 4px;
    }
    .list li:nth-child(1){
        background: url("/static/img/zd.png") 0  center no-repeat;
    }
    .list li:nth-child(2){
        background: url("/static/img/gys.png") 0  center no-repeat;
    }
    .list li:nth-child(3){
        background: url("/static/img/yh.png") 0  center no-repeat;
    }
    .list li:nth-child(4){
        background: url("/static/img/mm.png") 0  center no-repeat;
    }
    .list li:nth-child(5){
        background: url("/static/img/tc.png") 0  center no-repeat;
    }
</style>
