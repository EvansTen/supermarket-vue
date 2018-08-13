<template>
    <div class="right">
        <div class="location">
            <strong>你现在所在的位置是:</strong>
            <span>供应商管理页面</span>
        </div>
        <div class="search">
            <span>供应商名称：</span>
            <input type="text" placeholder="请输入供应商的名称">
            <input type="button" value="查询">
            <a href="providerAdd.html">添加供应商</a>
        </div>
        <!--供应商操作表格-->
        <table class="providerTable" cellpadding="0" cellspacing="0">
            <tbody><tr class="firstTr">
                <th width="10%">供应商编码</th>
                <th width="20%">供应商名称</th>
                <th width="10%">联系人</th>
                <th width="10%">联系电话</th>
                <th width="10%">传真</th>
                <th width="10%">创建时间</th>
                <th width="30%">操作</th>
            </tr>
            <tr>
                <td>PRO-CODE—001</td>
                <td>测试供应商001</td>
                <td>韩露</td>
                <td>15918230478</td>
                <td>15918230478</td>
                <td>2015-11-12</td>
                <td>
                    <a href="providerView.html"><img src="/static/img/read.png" alt="查看" title="查看"></a>
                    <a href="providerUpdate.html"><img src="/static/img/xiugai.png" alt="修改" title="修改"></a>
                    <a href="#" class="removeProvider"><img src="/static/img/schu.png" alt="删除" title="删除"></a>
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
                    <a href="providerView.html"><img src="/static/img/read.png" alt="查看" title="查看"></a>
                    <a href="providerUpdate.html"><img src="/static/img/xiugai.png" alt="修改" title="修改"></a>
                    <a href="#" class="removeProvider"><img src="/static/img/schu.png" alt="删除" title="删除"></a>
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
