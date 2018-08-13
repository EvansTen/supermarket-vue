<template>
    <div>
        <div class="publicHeader">
            <h1>超市账单管理系统</h1>
            <div class="publicHeaderR">
                <p><span>下午好！</span><span style="color: #fff21b"> {{username}}</span> , 欢迎你！</p>
                <a @click="logout">退出</a>
            </div>
        </div>
        <section class="publicTime">
            <span  >2015年1月1日 11:11  星期一</span>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                username: localStorage.getItem('ms_username')
            }
        },
        methods: {
            logout(){
                //TODO退出登录
            }
        }
    }
</script>

<style scoped>

</style>
