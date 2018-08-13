<template>
    <div class="right">
        <div class="location">
            <strong>你现在所在的位置是:</strong>
            <span>账单管理页面</span>
        </div>
        <div class="search">
            <span>商品名称：</span>
            <input type="text" placeholder="请输入商品的名称"/>

            <span>供应商：</span>
            <select name="tigong" >
                <option value="">--请选择--</option>
                <option value="">北京市粮油总公司</option>
                <option value="">邯郸市五得利面粉厂</option>
            </select>

            <span>是否付款：</span>
            <select name="fukuan">
                <option value="">--请选择--</option>
                <option value="">已付款</option>
                <option value="">未付款</option>
            </select>

            <input type="button" value="查询"/>
            <a href="billAdd.html">添加订单</a>
        </div>
        <!--账单表格 样式和供应商公用-->
        <table class="providerTable" cellpadding="0" cellspacing="0">
            <tr class="firstTr">
                <th width="10%">账单编码</th>
                <th width="20%">商品名称</th>
                <th width="10%">供应商</th>
                <th width="10%">账单金额</th>
                <th width="10%">是否付款</th>
                <th width="10%">创建时间</th>
                <th width="30%">操作</th>
            </tr>
            <tr>
                <td>213</td>
                <td>123</td>
                <td>北京市粮油总公司</td>
                <td>22.00</td>
                <td>未付款</td>
                <td>2015-11-12</td>
                <td>
                    <a href="billView.html"><img src="/static/img/read.png" alt="查看" title="查看"/></a>
                    <a href="billUpdate.html"><img src="/static/img/xiugai.png" alt="修改" title="修改"/></a>
                    <a href="#" class="removeBill"><img src="/static/img/schu.png" alt="删除" title="删除"/></a>
                </td>
            </tr>
            <tr>
                <td>PRO-CODE—001</td>
                <td>测试供应商001</td>
                <td>邯郸市五得利面粉厂</td>
                <td>15918230478</td>
                <td>15918230478</td>
                <td>2015-11-12</td>
                <td>
                    <a href="providerView.html"><img src="/static/img/read.png" alt="查看" title="查看"/></a>
                    <a href="providerUpdate.html"><img src="/static/img/xiugai.png" alt="修改" title="修改"/></a>
                    <a href="#" class="removeBill"><img src="/static/img/schu.png" alt="删除" title="删除"/></a>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
