# Sails.js简介及其CRUD

![button](https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4Tpksf/TmEUgtj9EK6.7V8ajmQrEDBJQieZbckh8GCvbcmWyYripjLjtfrLUcQDIg8zhCBVCGjlil0AJ94rp9yMUcuAmch.fMHexDZ.SJxjZbqXHFU!/b&bo=ugVgAroFYAIDORw!&rf=viewer_4)

##  1. Sails.js 简介

> `Sails.js`是一个受`Ruby on Rails`启发的`Node.js` 模型-视图-控制器（MVC）框架。

> `Sails.js`基于`Node.js`构建，使用`Express`来处理HTTP请求，使构建定制的企业级`Node.js`应用程序变得容易。

> 今天，我们将开发基本的`CRUD`（创建，检索，更新，删除）操作。

> 项目地址：https://github.com/singsing215/project-sails


##  2. Sails `MVC` 模型

###  2.1 路由

> `config\routes.js`

```js
module.exports.routes = {
  'GET /rent/viewAllDate': 'RentController.viewAllDate', 
}
```

当用`GET`方法请求`/rent/viewAllDate`时，执行`RentController.js`里的`viewAllDate`方法。


###  2.2 控制器

> `api\controllers\RentController.js`

我们可以在Sails.js控制器中开发许多动作，下面是显示检索所有数据的操作。

```js
module.exports = {
  viewAllDate: async function (req, res) {
    var models = await Rent.find(); //Rent是自定义的模型，执行Waterline ORM find() 方法 
    return res.view("rent/viewAllData", { //渲染rent目录下的viewAllData.ejs
      rents: models //赋值rents到视图层
    });
  },
}
```

###  2.3 模型层

> `api\models\Rent.js`

```js
module.exports = {
  attributes: {
    id: {
      type: "number"
    },
    title: {
      type: "string"
    },
    estate: {
      type: "string"
    },
  }
}
```

这里指定了每个模型属性的类型。

###  2.4 视图层

> `views\Rent\viewAllData.ejs`

```html
<table class="table">
  <% rents.forEach( (model) => { %>
    <tr>
      <td>
        <%= model.id %>
      </td>
      <td>
        <%= model.title %>
      </td>
      <td>
        <%= model.estate %>
      </td>
    </tr>
    <% }); %>
</table>
```
`Embedded JavaScript` (ejs) 是一种web模板引擎格式，它将数据和模板结合在一起以生成HTML。

在`<% %>`里面的JavaScript会被执行，在`<%= %>`里面的JavaScript会被执行并将结果添加到HTML上。

效果图：

![button](https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4Tpksf/TmEUgtj9EK6.7V8ajmQrEBIM4QRK0rmIuTdjU0PujFCNO3tsVf.xekXEBaDcwc7u84srfr6dFfrfsMz*Q*GPVe*8Qw92PK0cUA8mr7Aq15g!/b&bo=rQIFAq0CBQIBGT4!&rf=viewer_4)


> 上面的初始8个数据可在`config\bootstrap.js`创建

```js
module.exports.bootstrap = async function () {
  if (await Rent.count() == 0) {
    await Rent.createEach(
      //初始数据
    );
  }
}
```

##  3. Sails基本的`CRUD`操作

> Sails捆绑了一个功能强大的`ORM`引擎——`Waterline`，它提供了一个简单的数据访问层。

> ORM从数据库中提取所有内容，而app代码仅与它的对象和方法进行交互，如`Model.create()`。

> 我们可以在Sails.js控制器(api\controllers\RentController.js)中开发许多动作。

#### 3.1 自定义路由

```js
//路由路径：`config\routes.js`
module.exports.routes = {
  'GET /rent/viewAllDate': 'RentController.viewAllDate',  //检索
  'GET /rent/create': 'RentController.create', //创建
  'POST /rent/create': 'RentController.create', //创建
  'GET /rent/update/:id': 'RentController.update', //更新
  'POST /rent/update/:id': 'RentController.update', //更新
  'DELETE /rent/:id': 'RentController.delete', //删除
}
```

#### 3.2创建`model.create()`

```js
module.exports = {
  // action - create
  create: async function (req, res) {
    if (req.method == "GET") return res.view("rent/create"); //如果GET方法请求则渲染create.ejs
    if (!req.body.Rent) return res.badRequest("Form-data not received."); //校验表单数据
    await Rent.create(req.body.Rent); //执行Waterline的创建方法 
    return res.ok("Successfully created!");
  },
}
```

#### 3.3 检索`model.find()`

```js
module.exports = {
  // action - read all data
  viewAllDate: async function (req, res) {
    var models = await Rent.find(); //执行Waterline检索方法
    return res.view("rent/viewAllData", { //渲染rent目录下的viewAllData.ejs
      rents: models //赋值rents到视图层
    });
  },
}
```

#### 3.4 更新`model.update().set().fetch()`

```js
module.exports = {
  // action - update
  update: async function (req, res) {
    if (req.method == "GET") {
      var model = await Rent.findOne(req.params.id);
      if (!model) return res.notFound();
      return res.view("rent/update", {
        rent: model
      }); //如果GET方法请求则渲染update.ejs
    } else {
      if (!req.body.Rent) return res.badRequest("Form-data not received."); //校验表单数据
      var models = await Rent.update(req.params.id)
        .set({
          title: req.body.Rent.title,
          estate: req.body.Rent.estate,
          url: req.body.Rent.url,
        })
        .fetch(); //执行Waterline的更新方法，fetch()用于检索已更新的模型
      if (models.length == 0) return res.notFound(); //校验表单数据
      return res.ok("Record updated");
    }
  },
}
```

#### 3.5 删除`model.destroy().fetch()`

```js
module.exports = {
  // action - delete
  delete: async function (req, res) {
    if (req.wantsJSON) { // 检查是否 ajax request
      if (req.method !== "DELETE") return res.forbidden(); //校验Restful的DELETE请求方法
      var models = await Rent.destroy(req.params.id).fetch(); //执行Waterline的删除方法，fetch()用于检索已删除的模型
      if (models.length == 0) return res.notFound(); //校验表单数据
      return res.json({
        message: "Rental information deleted.",
        url: "/"
      }); 
    } else {
      return res.redirect("/"); // for normal request
    }
  },
}
```

## LICENSE

> 微信公众号：Open Tech Blog
> 
> Github地址：github.com/singsing215/Open-Tech-Blog

> 点击`阅读原文`获取最新本篇内容。

![qrcode](https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4ap2ow/bqQfVz5yrrGYSXMvKr.cqZs491lneOtH7kLYV2wRHulaIh6H8AG0sOgrRV5IOzhOeBPqvFlOAcjrjqxHkjHf.PFLhGbXhv2NOlTTJqCDHuw!/b&bo=WAFYAQAAAAABByA!&rf=viewer_4)
