# Vue-Element 获取数据

> 本篇简单介绍通过Vue-Element实现获取数据，数据绑定和数据查询。

> 1. 通过`v-model`进行数据绑定。
> 2. 通过`el-form` 设置`:model`, `el-form-item`设置`prop`, 实现数据查询。

###  1. 定义queryParam和tableData

```js
data() {
    return {
        // 查询参数
        queryParam: {
        dataName: "",
        fileName: "",
        },
        // table显示的数据
        tableData: [],
    }   
}
```


###  2. 显示数据 < template >

```html
<el-table
  :data="tableData"
  style="width: 100%"
  ref="table"
>
  <!-- 数据名称 -->
  <el-table-column
    label="数据名称"
    class-name="reused-column"
    min-width="15%"
  >
    <template v-slot="{row}">
      <span>{{ row.dataName }}</span>
    </template>
  </el-table-column>
  <!-- 变量文件名称 -->
  <el-table-column
    prop="fileName"
    label="变量文件名称"
    min-width="20%"
  >
    <template v-slot="{ row }">
      <div>{{ row.fileName || "/" }}</div>
    </template>
  </el-table-column>
</el-table>

```
1. `:data="tableData"`	显示的数据。
2. 通过 `v-slot` 可以获取到 `row`, `column`, `$index` 和 `store`（table 内部的状态管理）的数据。
3. `v-slot="{row}"`代替`slot-scope="scope"`, 免去定义`scope`。
4. 查询后`tableData`数据会根据的`prop`显示相应的数据。

### 3. 查询数据 < template >

```html
<el-form
 :inline="true"
 :model="queryParam"
 ref="queryParam"
 class="demo-form-inline"
>
    <div class="form-item">
        <el-form-item label="数据名称" prop="dataName">
        <el-input
            v-model.trim="queryParam.dataName"
            placeholder="请输入查询条件"
        ></el-input>
        </el-form-item>
        <el-form-item label="文件名称" prop="fileName">
        <el-input
            v-model.trim="queryParam.fileName"
            placeholder="请输入查询条件"
        ></el-input>
        </el-form-item>
    </div>
    <el-button @click="resetForm('queryParam')" class="clearBtn">清空</el-button>
</el-form>
```

1. `:inline`行内表单模式。
2. `:model`	表单数据对象绑定`queryParam`。
3. `v-model` 将input框输入数据与`queryParam`数据绑定。
4. `v-model.trim` 将用户输入的前后的空格去掉。

###  4. 执行查询输入数据

```js
async getList() {
    // queryParam = 查询参数
    const queryParam = this.queryParam;
    // 获取数据
    const res = await getDataInputList({
        queryParam, // 传递查询参数
    });
    // 将数据放在el-table的tableData
    if (res && res.data) {
        // 定义获取到的list
        const list = res.data.resultList || [];
        // 将list映射到tableData
        this.tableData = list.map((item, index) => {
            return item;
        });
    }
},
```

###  5. 清除input数据

```js
methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
}
```

 `el-form` 设置`ref="queryParam"`, 用于`resetForm()`清除表单数据。

## LICENSE

> 微信公众号：Open Tech Blog

> Github地址：github.com/singsing215/Open-Tech-Blog

![qrcode](https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4ap2ow/bqQfVz5yrrGYSXMvKr.cqZs491lneOtH7kLYV2wRHulaIh6H8AG0sOgrRV5IOzhOeBPqvFlOAcjrjqxHkjHf.PFLhGbXhv2NOlTTJqCDHuw!/b&bo=WAFYAQAAAAABByA!&rf=viewer_4)



