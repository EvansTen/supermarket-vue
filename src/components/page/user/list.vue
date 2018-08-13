<template>
    <div class="right">
        <div class="location">
            <strong>你现在所在的位置是:</strong>
            <span>用户管理页面</span>
        </div>
        <div class="search">
            <span>用户名：</span>
            <input type="text" placeholder="请输入用户名">
            <input type="button" value="查询">
            <a href="userAdd.html">添加用户</a>
        </div>
        <!--用户-->
        <table class="providerTable" cellpadding="0" cellspacing="0">
            <tbody><tr class="firstTr">
                <th width="10%">用户编码</th>
                <th width="20%">用户名称</th>
                <th width="10%">性别</th>
                <th width="10%">年龄</th>
                <th width="10%">电话</th>
                <th width="10%">用户类型</th>
                <th width="30%">操作</th>
            </tr>
            <tr>
                <td>hanlu</td>
                <td>韩露</td>
                <td>女</td>
                <td>20</td>
                <td>15918230478</td>
                <td>经理</td>
                <td>
                    <a href="userView.html"><img src="/static/img/read.png" alt="查看" title="查看"></a>
                    <a href="userUpdate.html"><img src="/static/img/xiugai.png" alt="修改" title="修改"></a>
                    <a href="#" class="removeUser"><img src="/static/img/schu.png" alt="删除" title="删除"></a>
                </td>
            </tr>
            <tr>
                <td>PRO-CODE—001</td>
                <td>测试供应商001</td>
                <td>韩露</td>
                <td>15918230478</td>
                <td>15918230478</td>
                <td>2015-11-12</td>
                <td>
                    <a href="userView.html"><img src="/static/img/read.png" alt="查看" title="查看"></a>
                    <a href="userUpdate.html"><img src="/static/img/xiugai.png" alt="修改" title="修改"></a>
                    <a href="#" class="removeUser"><img src="/static/img/schu.png" alt="删除" title="删除"></a>
                </td>
            </tr>
            </tbody></table>

    </div>
</template>

<script>
    export default {
        name: "list"
    }
</script>

<style scoped>

</style>
