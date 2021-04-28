# el-table与el-form共用方案

> 使用场景：在el-table单元格内使用入输入框，以及数据绑定。

###  1. 先上效果图

![button](https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4Tpksf/TmEUgtj9EK6.7V8ajmQrEHd4bOTNDan9cuerGaOSoc3vGMCmFTua55mjxZF*rIIEU5YW.y9ckLeCgzlJnsoWSRXEZin2SP.ADXHD4lP8aqM!/b&bo=UgKrAVICqwEDGTw!&rf=viewer_4)

###  2. `el-table` + `el-form` 的数据绑定

> 可以通过向 `axios(config) `传递相关配置来创建请求。

```html
<el-form :model="form" ref="form">
  <el-table
    ref="enumTableData"
    :data="form.enumTableData"
  >
    <el-table-column prop="label" label="名称" min-width="30%">
      <template slot-scope="scope">
        <el-form-item
          :prop="'enumTableData.' + scope.$index + '.label'"
          required
          :show-message="false"
        >
          <el-input
            placeholder="请输入内容"
            v-model="scope.row.label"
            clearable
          >
          </el-input>
        </el-form-item>
      </template>
    </el-table-column>
    <el-table-column prop="remark" label="备注" min-width="65%">
      <template slot-scope="scope">
        <el-form-item
          :prop="'enumTableData.' + scope.$index + '.remark'"
          required
          :show-message="false"
        >
          <el-input
            placeholder="请输入内容"
            v-model="scope.row.remark"
            clearable
          >
          </el-input>
        </el-form-item>
      </template>
    </el-table-column>
  </el-table>
</el-form>
```

```js
data() {
  return {
    form: {
      enumTableData: [],
    },
  };
},
```

`el-form`包裹`el-table`，`el-form`中`:model="form"`用于`form`数据绑定，`ref="form"`用于检验表单输入数据。

`el-table`的数据绑定`form.enumTableData`。

`el-form-item`属性设置`required`和`:show-message="false"`，用于校验输入框必填以及不显示提示信息。

数据绑定的核心是基于索引，在`el-form-item`定义`:prop`属性为`"'enumTableData.' + scope.$index + '.label'"`。

###  3. 数据绑定验证

> 数据绑定验证demo

![button](https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4Tpksf/TmEUgtj9EK6.7V8ajmQrEOCM*cplq5Jxwfadl1bcxQsR1EyZfahRXjp1QksEbDEUeVTXtvjS7VmceEQ3LNyfzgWGJDmngzINYOoC08JBHMY!/b&bo=wAShAcAEoQECGT0!&rf=viewer_4)

> 定义表单保存方法

```js
enumTableDataSave() {
  try {
    this.$refs["form"].validate(async (valid) => {
      if (valid) {
        // 通过验证
      }
    });
  } catch (error) {
    console.log(error); // 打印错误信息
  }
},
```

> 执行`enumTableDataSave()`方法后，控制台打印一下错误信息

```json
async-validator: ["enumTableData.0.label is required"]
async-validator: ["enumTableData.0.remark is required"]
async-validator: ["enumTableData.1.label is required"]
async-validator: ["enumTableData.1.remark is required"]
async-validator: ["enumTableData.2.label is required"]
async-validator: ["enumTableData.2.remark is required"]
```

例如，`enumTableData.0.label`对应第一个输入框，即在`el-form-item`定义的`:prop`属性。



## LICENSE

> 微信公众号：Open Tech Blog
> 
> Github地址：github.com/singsing215/Open-Tech-Blog

> 点击`阅读原文`获取最新本篇内容。

![qrcode](https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4ap2ow/bqQfVz5yrrGYSXMvKr.cqZs491lneOtH7kLYV2wRHulaIh6H8AG0sOgrRV5IOzhOeBPqvFlOAcjrjqxHkjHf.PFLhGbXhv2NOlTTJqCDHuw!/b&bo=WAFYAQAAAAABByA!&rf=viewer_4)
