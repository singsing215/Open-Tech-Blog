# Web模板引擎ejs

> 本篇介绍房屋租赁系统后端用到的Web模板引擎ejs，地址：github.com/singsing215/project-sails

ejs（Embedded JavaScript）是一种Web模板引擎格式。Web模板引擎将数据和模板结合在一起以生成HTML。

## ejs介绍

1. 安装

``` 

$ npm install ejs
```

2. 用法

``` javascript
let ejs = require('ejs'),
    people = ['geddy', 'neil', 'alex'],
    html = ejs.render('<%= people.join(", "); %>', {
        people: people
    });
```

3. 引入页面

``` html
<script src="ejs.js"></script>
<script>
    let people = ['geddy', 'neil', 'alex'],
        html = ejs.render('<%= people.join(", "); %>', {
            people: people
        });
</script>
```

## 项目应用

#### 创建表单

``` html
<!--create.ejs-->
<form action="/person/create" method="POST">
    <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" name="Person[name]" required>
    </div>
    <div class="form-group">
        <label>Age</label>
        <input type="number" class="form-control" name="Person[age]" required>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

`action="/person/create"` 指定将表单数据发送到何处

`name="Person[name]"` 这里使用了数组

<br>

``` javascript
// action - create
create: async function(req, res) {
    if (req.method == "GET")
        return res.view('person/create');
    if (!req.body.Person)
        return res.badRequest("Form-data not received.");
    await Person.create(req.body.Person);
    return res.ok("Successfully created!");
}
```

在此操作中，目的是 `return res.view('person/create');` 。

如果使用 `GET` 方法，我们将显示HTML表单（person / create.ejs）以收集用户输入。

否则，将采用 `POST` 方法， `await Person.create(req.body.Person);` 将检查是否接收到表单数据。

如果未提供此表单数据，则会将 `badRequest` 发送回给用户。

如果接收到数据， `await Person.create(req.body.Person);` 将保存提交的数据， `return res.ok("Successfully created!");` 将向客户端发送200（“OK”）响应。

在 `await Person.create(req.body.Person);` 中，Person表示我们的Person数据模型，create是一个ORM（对象关系映射）方法，可以在数据模型中创建新记录。 Sails中的所有ORM方法都是异步的，因此我们使用关键字await来确保仅在 `await Person.create(req.body.Person);` 完成后才能到达 `return res.ok("Successfully created!");` 。为了支持此 `await` 关键字，我们的操作必须使用 `async` 关键字定义。

<br>

#### 检索所有内容

``` html
<!--index.ejs-->
<table class="table">
    <% persons.forEach( function(model) { %>
    <tr>
        <td><%= model.name %></td>
        <td><%= model.age %></td>
    </tr>
    <% }); %>
</table>
```

模板标签：`<% %>`

在`<% %>`里面的JavaScript会被直接执行。

在`<%= %>`里面的JavaScript会被执行，然后把执行结果显示到HTML里。

<br>

``` javascript
// action - index
index: async function(req, res) {
    var models = await Person.find();
    return res.view('person/index', {persons: models});
}
```

在`var models = await Person.find();`中，models是包含所有已存储记录的数组。

在`return res.view('person/index', {persons: models});`中，我们使用此models数组中的数据呈现index.ejs文件，以将其引用为ejs文件中的persons。

***
本篇对Web模板引擎ejs做简单介绍和结合项目的应用，未对动作和路线作详细介绍，只有当将其绑定到路线时，才能执行我们的create和index动作。

参考：https://ejs.co/

## LICENSE

> 微信公众号：Open Tech Blog

> Github地址：github.com/singsing215/Open-Tech-Blog

![qrcode](https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4ap2ow/bqQfVz5yrrGYSXMvKr.cqZs491lneOtH7kLYV2wRHulaIh6H8AG0sOgrRV5IOzhOeBPqvFlOAcjrjqxHkjHf.PFLhGbXhv2NOlTTJqCDHuw!/b&bo=WAFYAQAAAAABByA!&rf=viewer_4)