### Markeditor 简介

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

***

### LICENSE

> 微信公众号：Open-Tech-Blog

> Github地址：github.com/singsing215/Open-Tech-Blog

![qrcod](data:image/jpg; base64, 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)
