# Vue-Element 分页

> 使用el-pagination和el-table实现表格分页。

> 项目地址：https://github.com/singsing215/vue-component/blob/master/decision-data-input/src/views/data/paging/index.vue

## 效果图

![loading](https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4Tpksf/TmEUgtj9EK6.7V8ajmQrEEr8ms4R9Xy0.4QAoFEuqFZUUqKhTAfsHe4MIIn5Y79JdxlnJEJdz4a4zR2DD01zQOt3RiZbSoi4UWNIZytgxEE!/b&bo=fAeYAXwHmAEDGTw!&rf=viewer_4)

> 修改每页显示数据条数目，实时更新table和pagination。

### 1. < el-pagination >

```html
<el-pagination
    class="pagination"
    background
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :pager-count="5"
    :page-sizes="[5, 10, 20, 50]"
    :page-size="5"
    layout="total, sizes, prev, pager, next, jumper"
    :total="totalCount"
>
</el-pagination>
```
`background` 是否为分页按钮添加背景色。

`size-change`	pageSize 改变时会触发。

`current-change`	currentPage 改变时会触发。

`current-page`	当前页数，支持 .sync 修饰符。

`pager-count`	页码按钮的数量，当总页数超过该值时会折叠。

`page-sizes`	每页显示个数选择器的选项设置。

`page-size`	每页显示条目个数，支持 .sync 修饰符。

`layout`	组件布局，子组件名用逗号分隔。

`total`	总条目数。

### 2. < el-table >

```html
<el-table :data="pageList" style="width: 100%">
    <el-table-column prop="name" label="名称" width="180">
    </el-table-column>
    <el-table-column prop="type" label="类型" width="180">
    </el-table-column>
    <el-table-column prop="belong" label="数据">
    </el-table-column>
</el-table>
```

`data`	显示的数据。

`prop`	对应列内容的字段名，也可以使用 property 属性。


### 3. mounted() {}

```javascript
  mounted() {
    this.totalCount = this.tableData.length;
    for (var i = 0; i < 5; i++) {
      this.pageList.push(this.tableData[i]);
    }
  }
```

`totalCount`	计算`tableData`总数据的长度，体现在效果图中的共X条。

`pageList`	初始显示5条数据。

### 4. methods: {}

```javascript
export default {
  methods: {
    handleSizeChange: function (val) {
      this.pageSize = val;
      var currentPage = this.currentPage;
      this.handleCurrentChange(currentPage);
    },
    handleCurrentChange: function (currentPage) {
      let tableData = this.tableData;
      let from = (currentPage - 1) * this.pageSize;
      let to = currentPage * this.pageSize;
      this.pageList = [];
      for (from; from < to; from++) {
        if (tableData[from]) {
          this.pageList.push(tableData[from]);
        }
      }
    }
  }
```

1. `el-pagination`触发`@size-change`运行`handleSizeChange`函数，修改`pageSize`为指定数值`val`，然后运行`handleCurrentChange`函数。
2. `el-pagination`触发`@current-change`运行`handleCurrentChange`函数，根据`currentPage`和`tableData`，修改`pageList`显示的数据。其中，`from`是显示的第一个数据，`to`是显示的最后一个数据。最后，`pageList`push所有`from`小于`to`的数据。


## 参考

> element 表格：https://element.eleme.io/#/zh-CN/component/table#table-column-scoped-slot
> 
> element 分页: https://element.eleme.io/#/zh-CN/component/pagination#slot

## LICENSE

> 微信公众号：Open Tech Blog

> Github地址：github.com/singsing215/Open-Tech-Blog

![qrcode](https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4ap2ow/bqQfVz5yrrGYSXMvKr.cqZs491lneOtH7kLYV2wRHulaIh6H8AG0sOgrRV5IOzhOeBPqvFlOAcjrjqxHkjHf.PFLhGbXhv2NOlTTJqCDHuw!/b&bo=WAFYAQAAAAABByA!&rf=viewer_4)
