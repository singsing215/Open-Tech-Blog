# axios创建下载请求及其处理

> 通过axios API创建下载请求，引用公共下载方法exportFile()处理下载文件。

###  1. axios API

> 可以通过向 `axios(config) `传递相关配置来创建请求。

```js
//发送 POST 请求
axios({
    method: 'post',
    url: '/user/12345',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

###  2. 定义batchExportXml()下载方法

```js
async batchExportXml() {
  let reqParam = this.queryParam;
  showFullScreenLoading(); //公共方法显示loading
  axios({
      baseURL: process.env.BASE_API,
      url: `/api/export`,
      method: "post",
      data: {
        reqParam
      }
    })
    .then(res => {
      if (res.data.data) {
        if (res.data.data.totalCount === 0) {
          tryHideFullScreenLoading(); //公共方法隐藏loading
          setNotification({ //公共提示方法
            message: "导出数为0",
            type: "error"
          });
        } else {
        exportFile(res); //引用下载文件方法
        tryHideFullScreenLoading();
        setNotification({
          message: "导出成功",
          type: "success"
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
},
```

> 发送请求后响应的数据

![button](https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4Tpksf/TmEUgtj9EK6.7V8ajmQrEAZHDisDSlnrM9Na4dw.o4OwASrDQmE3twg2F39VvjZF*OhoAt2.RkQYpb14VyxVRJs3m8GD93V4nAEl.cyEUFs!/b&bo=CgbaAAAAAAADF.Q!&rf=viewer_4)

###  3. 导出exportFile()下载文件方法

```js
export function exportFile(res, fileName) {
  const content = res.data;
  const blob = new Blob([content]); //构造一个blob对象来处理数据
  //对于<a>标签，只有 Firefox 和 Chrome（内核） 支持 download 属性
  //IE10以上支持blob但是依然不支持download
  if ('download' in document.createElement('a')) {
    //支持a标签download的浏览器
    const link = document.createElement('a'); //创建a标签
    if (!fileName) {
      fileName = decodeURIComponent(
        res.headers["content-disposition"].split("filename=")[1].slice(1, -1)
      );
    }
    link.download = fileName; //a标签添加属性
    link.style.display = 'none';
    link.href = URL.createObjectURL(blob); //创建一个的URL
    document.body.appendChild(link); //将link附加到指定父节点的子节点列表的末尾处
    link.click(); //执行下载
    URL.revokeObjectURL(link.href); //释放url
    document.body.removeChild(link); //释放标签
  } else {
    //其他浏览器
    navigator.msSaveBlob(blob, fileName);
  }
}
```
* `Blob` 对象表示一个不可变、原始数据的类文件对象。它的数据可以按`文本`或`二进制`的格式进行读取，也可以转换成 `ReadableStream` 来用于数据操作。 `[Blob]`
https://developer.mozilla.org/zh-CN/docs/Web/API/Blob

* `decodeURIComponent()` 方法用于解码由 encodeURIComponent 方法或者其它类似方法编码的部分统一资源标识符（URI）。`[decodeURIComponent()]`
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent

* `URL.createObjectURL()` 静态方法会创建一个 DOMString，其中包含一个表示参数中给出的对象的URL。这个 URL 的生命周期和创建它的窗口中的 document 绑定。这个新的URL 对象表示指定的 File 对象或 Blob 对象。`[URL.createObjectURL()]`
https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL

* `Node.appendChild()` 方法将一个节点附加到指定父节点的子节点列表的末尾处。如果将被插入的节点已经存在于当前文档的文档树中，那么 appendChild() 只会将它从原先的位置移动到新的位置（不需要事先移除要移动的节点）。`[Node.appendChild()]`
https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild


* `URL.revokeObjectURL() `静态方法用来释放一个之前已经存在的、通过调用 URL.createObjectURL() 创建的 URL 对象。当你结束使用某个 URL 对象之后，应该通过调用这个方法来让浏览器知道不用在内存中继续保留对这个文件的引用了。`[URL.revokeObjectURL()]`
https://developer.mozilla.org/zh-CN/docs/Web/API/URL/revokeObjectURL

* `Node.removeChild()` 方法从DOM中删除一个子节点。返回删除的节点。`[Node.removeChild()]`
https://developer.mozilla.org/zh-CN/docs/Web/API/Node/removeChild

* `Navigator.msSaveBlob()`方法将`File`或`Blob`保存到磁盘中。此方法与`Navigator.msSaveOrOpenBlob()`禁用文件打开选项的行为相同。`[Navigator.msSaveBlob()]`
https://developer.mozilla.org/en-US/docs/Web/API/Navigator/msSaveBlob

###  4. 下载文件名处理

> 需要处理的文件名：
> 
![button](https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4Tpksf/TmEUgtj9EK6.7V8ajmQrEEX6pNZ8wec94CZz09JRDDaIlzoGcKPaii1KOmpCfk1IdPZG8MfrJiuNv8Tmpf1JV9GkkE*9g45r3KPWh2RAWUo!/b&bo=dwR8AAAAAAADFz0!&rf=viewer_4)


```js
res.headers.content-disposition //无法以此获取 content-disposition 数据
```

```js
res.headers["content-disposition"] //获取 content-disposition 数据
```

```js
res.headers["content-disposition"].split("filename=")[1].slice(1,-1) //获取filename内容
```

>%E5%86%B3%E7%AD%96%E6%8A%A5%E5%91%8A%E5%88%97%E8%A1%A8%28%E5%B7%B2%E8%84%B1%E6%95%8F%29_202103311503808%E5%AF%BC%E5%87%BA.csv


## LICENSE

> 微信公众号：Open Tech Blog
> 
> Github地址：github.com/singsing215/Open-Tech-Blog

> 点击`阅读原文`获取最新本篇内容。

![qrcode](https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4ap2ow/bqQfVz5yrrGYSXMvKr.cqZs491lneOtH7kLYV2wRHulaIh6H8AG0sOgrRV5IOzhOeBPqvFlOAcjrjqxHkjHf.PFLhGbXhv2NOlTTJqCDHuw!/b&bo=WAFYAQAAAAABByA!&rf=viewer_4)
