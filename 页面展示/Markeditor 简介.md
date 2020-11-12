### Markeditor 简介

> 本公众号所有图文推文由Markeditor提供格式转换支持。

Markdown 转微信公众帐号内容神器，能让 `Markdown` 内容，无需作任何调整就能**一键复制**到微信公众号使用，特别针对代码展示做了优化。

下载地址：[https://www.markeditor.com/](https://www.markeditor.com/)

> 使用微信公众号编辑器有一个十分头疼的问题——粘贴出来的代码，格式错乱，而且特别丑。

***

### 代码块显示效果

> 注：markdown对代码块的语法是开始和结束行都要添加：\ `\` \ `,其中 \` 为windows键盘左上角那个，如下：

``` javascript
module.exports = {
    delete: async function(req, res) {
        if (req.wantsJSON) {
            if (req.method == "GET") return res.forbidden();
            var models = await Rent.destroy(req.params.id).fetch();
            if (models.length == 0) return res.notFound();
            return res.json({
                message: "Rental information deleted.",
                url: "/"
            }); // for ajax request
        } else {
            return res.redirect("/"); // for normal request
        }
    }
}
```

要精确指定语言（如： `java,cpp,css,xml,javascript,python,php,go,kotlin,lua,objectivec` 等等）时，在头部直接指定，如：\ `\` \`javascript，如下：

``` javascript
console.log('1'); // 1.打印
setTimeout(function() { //1.加入宏任务暂且记为 setTimeout1
    console.log('2');
    process.nextTick(function() { //2.微任务 记为 process2
        console.log('3'); //3.打印
    })
    new Promise(function(resolve) {
        console.log('4'); //2.打印
        resolve();
    }).then(function() { //2.微任务 记为 then2
        console.log('5') //3.打印
    })
})
process.nextTick(function() { //1.加入微任务队列 记为 process1
    console.log('6'); //2.打印
})
new Promise(function(resolve) {
    console.log('7'); // 1.打印
    resolve();
}).then(function() { //1.微任务 记为 then1
    console.log('8') //2.打印
})
setTimeout(function() { //1.宏任务 记为 setTimeout2
    console.log('9'); //3.执行第一个宏任务,打印
    process.nextTick(function() { //3.微任务 记为 process3
        console.log('10'); //4.打印
    })
    new Promise(function(resolve) { //3.打印
        console.log('11'); //3.打印
        resolve();
    }).then(function() { //3.微任务 记为 then3
        console.log('12') //4.打印
    })
})
```

***

### Markdown基本语法

#### 标题

支持6种大小的标题，分别对应 `#` , `##` , `###` , `####` , `#####` , `######` ，和样式文件中的 `h1,...,h6` 如：

##### H5

###### H6

#### 行内代码

如： `AppCompatActivity` 类, markdown对行内代码的语法是前后用：\ `,其中 \` 为windows键盘左上角那个, 

#### 强调

**我是强调**

#### 删除

试试 ~~删除~~

#### 有序列表

1. 有序列表 1
2. 有序列表 2
3. 有序列表 3

#### 无序列表

* 无序列表 1
* 无序列表 2
* 无序列表 3

#### 引用块

只需要在前面加 `>` , 如下:

> 我是引用块

#### 分隔线

***

### Markdown扩展语法

#### 表格

| People | Dog | Cat |
|-----|-----|------|
| John | 1   | 1 |
| Olivia | 0   | 1 |

注：表格在公众号预览时，可能在PC端显示的不是正确的全屏，但在手机上预览时就会正常显示为全屏的了。

### 直接支持html, css

<span  style="color: #5bdaed; ">#5bdaed颜色</span>
<span  style="color: #AE87FA; ">#AE87FA颜色</span>
<span  style="font-size:1.3em; ">改变字体大小</span>
<span  style="font-size:1.3em; font-weight: bold; ">改变字体大小，字体粗体</span>
<p style="text-align:center">内容居中</p>
<p style="text-align:right">内容居右</p>
<p style="text-align:center; color:#1e819e; font-size:1.3em; font-weight: bold; ">
来个综合的试试
<br/>
第二行
</p>

## LICENSE

> 微信公众号：Open Tech Blog

> Github地址：github.com/singsing215/Open-Tech-Blog

![qrcode](https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4ap2ow/bqQfVz5yrrGYSXMvKr.cqZs491lneOtH7kLYV2wRHulaIh6H8AG0sOgrRV5IOzhOeBPqvFlOAcjrjqxHkjHf.PFLhGbXhv2NOlTTJqCDHuw!/b&bo=WAFYAQAAAAABByA!&rf=viewer_4)