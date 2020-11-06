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

![qrcode](data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAFYAVgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBpbBpQSQDigjNfysE5NAH9U9FfysUUAf1T0V/KxRQB/VPQc1/KxQOtAH9UxbFKCSAcUYzX8rBOTQB/VPQc1/KxQOtAH9UxbFKCSAcUYzX8rBOTQB/VOSQCcUgbJr+VkHBr+qcDFACFsGlBJAOKCM1/KwTk0Af1Tk4FIGJOMUpGa/lYJoA/qnor+ViigD+qiiiigAooooASiv5WKKAP6pixBxilByK/lYBr+qcDFAATgUgYk4xSkZr+VgmgD+qeiv5WKKAP6p6K/lYooA/qnor+ViigD+qiiiigAooooAKKKKAE71/KxX9U/ev5WKAP6pycDJoBzQRkV/KznjpQB/VPRX8rGfajPtQB/VPX8q/pX9VFfyr+lAH9U+cYr+VgjBr+qUjpn0pV6Dn86AP5WQMmv6p8jr2oIJBGaTbigBSRX8rBGKduHT3ppOTQB/VOTgUAg9K/lZHXpX9Ui8HvQA4kDrQDkU1uTnn6V/K2evSgBOtf1T5obp1r+VskHFAH9Um4etAORTMc9a/lcPXpQAgGTQRilHB6fnX9Ug4NAH8rVFf1T0UAfysda/qnz1pD061/K4SKAG4r+qYHIr+VndigsCelAH9U9fyr+lf1UV/Kv6UAf1T5AHNAORSFckc9q/layPSgD+qeiv5WM+1AIz0oA/qm64r+Viv6pwK/lYoA/qoooooAKKKKACiiigBO9fysV/VP3r+VigD+qiv5V+1f1UV/Kv2oAKKKKAP6qK/lX9K/qor+Vf0oA/qmxnFfyskk1/VOO1fysUAf1T0HOK/lYooAD1oo60UAf1THgdPyr+Vs9O3NNBwaMkmgD+qU8YzSr0HH50uM4r+VgnJoA/qnboeM00Gv5WgcGv6p8Dp2oA/lbHOa/qjHTpS4r+VjrQB/VMenSv5XCOKZ0r+qfHWgAHSiv5WD1ooAUcnrSkZGSe9NBxX9U+MUAfysEYooPWigD+qiv5V/Sv6qK/lX9KAP6px2r+Viv6px2r+VigAoHWigdaAP6px2r+Viv6px2r+VigD+qiiiigAooooAKKKKAE71/KxX9U5OK/lYIIoA/qoor+Vj8KPwoA/qnor+Vj8KPwoA/qmJwK/lZxjFAOD0pSc/hQB/VKO1fysV/VNmv5WSCKADrX9U+aCCR1r+VosDjigD+qXcPWgHIpu3Jzn8K/lbyPSgD+qev5V+uK/qnJxX8rI60AJiv6p+tNIJxX8rZPPSgBAMmjBBr+qZunX8q/lbJ6D360Af1SjtX8rFf1TZxiv5WSCKAADJowQa/qmPI6/lX8rZ5wPegD+qXIA5oByKaRnn26V/K2Tz0oA/qnr+Vfriv6qK/lYFACYoIwa/qlIPB9ugr+Vsjnp+VAH9U9fyself1TE4r+VnpQB/VMOlLX8rB+lH4UAf1T0V/Kx+FH4UAf1TE4r+VgjFOzxjFNPJ6UAf1UUUUUAFFFFABRRRQAhGaAAKWigBMUHilpD0oAbnBxj8acOR0r+VnNf1TAYoADwOlNzk4x+NOIzX8rOaAP6pQM9aUACgdKWgBCcCv5WsDAPvX9UpGRg0YFAADX8rFf1T9MV/KxQB/VOenrTQe2KcRmv5Wc0AL360mPev6ph0paAP5V80uSTzSUDrQB/VPjIoAAoHSloA/lYHJ6/nX9Unfoa/laBwaM5NADvfNNPWv6psZxX8rJOaAP6pySBnGa/la29DTQcGjJ9aAP6pSegI7U4DjpX8rINf1TAYoACM0mMU6kPSgAH0FGPYV/KwetFAH9Ux4BOKQNntX8rQODX9U+MUAA+gox7Cv5WD1ooA/qoooooAKKKKACiiigBCQOtAORSMuT17V/K1kelACV/VOe9fysV/VOe9AH8rB60UuCTxSYoA/qnJwMmjIobpX8rXoPfrQB/VLuHrQDkU0jv+lfytk89KAEoHWilxg0Af1TZAHNAORTTzzz06V/K2evSgD+qYnFfysEV/VOenpTV65zQB/K0BmgjBr+qU9c5r+Vs8np+VACAZr+qbOc1/KyOtOJwMelADcZNBGDX9Up9ea/lbI56flQAlA61/VOeKTOaAFziv5WCMGv6pSKcvQc5oA/lYoHWv6pycd6TOelAC5AFAORTSOe9fytnr0oAQDJowQa/qmboecfSv5Wzzge/WgD+qXIA5oByKaRnn26V/K2Tz0oA/qmJwKMgiv5WR16V/VIo5/pQB/K1jJoIwa/qm2nOc1/KyTk0Af1UUUUUAFFFFABRRRQAnev5WK/qn71/KxQAAZNf1S7uSMV/K0Dg0ZyaAHACv6pB06UuOlfysdaAP6pzzSEYFfys0UAKTg0lHWigABxX9U+PrX8rFf1T96AEbg80L0HH50pGa/lYJyaAP6p26dK/laIwOtN6V/VP3oA/laHTrX9Uo5HT86CM0AYGBQB/KyBz1r+qReTjn604jIoAA6UAI3B5oXoOPzpSM1/KwTk0Af1TkZr+VnrX9U9fyselADgAe9f1SL06UY6V/Kx1oAMkV/VNiv5Wa/qnPegD+VodO3Ff1SDkdPzr+VnJBoJyaAP6pz09aaD1H604jNfysk0ALjqaQjnrRk9a/qmAwKAAgGgDFLRQAnev5WK/qn71/KxQB/VRRRRQAUUUUAFFFFACd6/lYr+qfvX8rFAH9U5OK/lZxX9Ux6elNA5780AOz0r+VjpTgwHb8q/qlAIHWgD+VjrX9U/ekPTrX8rjHjpQB/VLRX8rH4UfhQAgGTQRilHB6fnX9Ug4NAH8rQr+qfrSEEnriv5WiR6UAIvUV9YfAX/gml8Z/j54ftdfs9OsfC2g3aeZbX3iGZ4PtCFVZXSNEZyjBshtuD9OT++xHbNZUUTaxJK7SyR2qOY1SJtpfBwSSOeueKANPBI6e1fjgf8Agid8Uic/8J14PH/Arr/4zX7Ajw/aetx/4FS//FUf2Baf9PP/AIFy/wDxVAGi3IIzX42n/gif8Uicf8J14P8Axa6/+M1+u+o2WlaRYz3l7PLa2kCGSWaW8lVUUDJJJavGJP2p/hlFrBsfP1doQ+w3qtL5X1+/ux+FAH53j/gid8Ux/wAzz4PP0a6/+M1+ySjAArD0m20jXtNt9QsLmW7s7hBJFNFeSlXU9wd1W/8AhH7P/p5/8C5f/iqANKkLBRk8Cs4+H7TH/Lx/4Fy//FVnz20nhqW3mhuJprGSVYZYJ3MhQuQFZWOT1IBBJGD2oA6DcPWv5WSMV9Yf8FL/AIDaT8Bf2m9Qs/D9rFYaDr9pHrdpZw7Qlv5jukiKgACKJI32qOgx9K+Tz1oAAM1/VOCK/lYBwacCDxQB/VL1paaDilBzQAE4Ffys4oBwelLnNAH9Uo6Utfys4z0GaT8KAE61/VPnrQ3TrX8rZOe1ADMZNBGDX9Uvfqa/lbPJ6flQB/VPRRRQAUUUUAFFFFADWbB6dq/lawPWv6piAetAGBQAjdDxn6V/K2eBnimg4NBJNACgZGa/qmBJGcYr+VgEignJoAUDnrX9UgOT0p3Wv5WfSgD+qQtjtSjkA4pcZr+VgnJoA/qmPTpX8rhAxTOlf1T4oAbuwcY/Gv5W8D1r+qbaPSgDAoAZn97j2zVHQB/xLj/13m/9GvVz/lv/AMBNU9A/5B5/67zf+jXoA0Gbb9K4ef44+BLbV20yXxRpyXqv5bIZhtVumC3QfnXP/tRa1qGhfBvWp9OZ45ZTHBJInBWNmAY/kcfjXl/h34E/Du++AcWtXLIt4+nG6l1UzHMM23JXGcYDfLt7496APQ/2rUvrv4J6q2nMzIHiecx85h3Asfp0P0rz7TPEfwiX9nhbWZtL+1/2diW1IUXhu9nJHG7O/oemPbitz9m/xv5XwFkuPEha40+0uZLOISLv82IgYTB6jLFcelWI/g18IrrSG8XrpDiyU7zB5riMNnG3y8469q2jRqSjzRi2m7fPscs8VRpzdOU0mlf5dzR/ZAW/tPgxbG/JWFrmV7XzDj91x+m4NXct8cfAi6sdMPijTvtgfy9vm/Lu9N33f1rzP47eOo3/AGfbq58KhrOyaWKxdYl8swRZwVwOgxgfQ1zkXwH+HTfAEa2zRi8Ol/azq3mnIn2biuM4xu+Xb1/GolCUJOM1Zo1p1YVYqcHdPqfUscokAZSGQ9GHQ1R18Z04f9d4f/Rq15P+yTreo638ILJtRd5TbTyW0ErkktEuMcn0yR+Fes69/wAg7/ttD/6NWoNSZn23gQZ+7n9TX8sR61+in/BbI4+PvgX/ALFkf+lU9fnWTkknk0ALj3oAA71/VPSHpQB/Kya/qmAxX8rPrX9U9ACY9hSH/OK/lZoHWgB3bPHFf1SgcdKMZFAGBgUAB5pCMCv5WaB1oAd2JyK/qlHI6fnRjIoAwMCgBaKKKACiiigAooooAKKQnFAINAH8rHWv6p80EEjrX8rWQaAP6peuK/lYr+qYHBr+VnFAB1r+qfNDdOtfytkg0Af1Sbh60A5FN25Oc/hX8reR6UAf1T0h6V/Kzn2peh6UAJgk0hGDTgeK/qkHA6/nQBHn9/8A8BP9KqaB/wAg8/8AXeb/ANGvX4+f8ET/AJvj745I7eGT/wClUFfsHoH/ACDz/wBd5v8A0a9ACa/otl4j0q50zUbdbqxuozHLE/Rgf8/hXy/c/s1/DiPxIdKHxCa3iaTJ0U3UW/dn7uSev1XNeuftN+KdR8JfCLVbvS5HgupWjt/Pj4aNXbDMD2OO/vXkOifsyeDtT+CcfiCe/mXVp9OOoHUjP+7ifZu2lemAeD34PNAHolrd6RZ61D8NIdBCaDEBChVjvBxu8z8+9emR+C9Ih8ONoa2o/s5gQY8nnvnPrXhnwO8T+I/EPwIkvLSM3Wt2Nw1nBdMu6V4V2kcnrgHH4V6daXXi4/DKWeWFh4i2nYpUByM8HH97Feu71KUHRkoK6Vr9f5j5pfuK9WOIi6js3fl+z/KczBf6Q+v3fw4fQBJoU4aKUu5Ls2Mlz+mD1GK87P7Nfw6/4SU6R/wsN1jMmf7E+1xGTdn7uc9e33c1v/FXxP4o8MfAa91G8jNrrdxOtn9rVQsqQMeTkcj0/EVz0P7Mfg6T4IjxAdQmGrnTP7R/tHz/AN2JPL37dvTGfl9a58a4urZLVaN3vd9zvyyE40OaT0eqTVuVdj6f8M+HdO8J6NaaTpVutrY2qbI41549Se5z3qXXv+Qd/wBtof8A0ateW/sqeK9R8WfCWzl1N3mmtZpLVJ5CS0iLjbz3xnH4V6lr3/IO/wC20P8A6NWuA9YfJ/yE1/3P6mv5ZSMGv6m5P+QkvHGz+pq2OBjNAH8rIGTRgg1/VM3Q84+lfytk8fQ0Af1SjtX8rFf1TZr+VkgigAoHWjFAHNAH9U+cYr+VgjBr+qYjOOaBwAM0Afys0DrRilAIoA/qmziv5WCMU72pp60Af1UUUUUAFFFFABRRRQAhGa/lYJJr+qfvX8rFAH9U5JA6V/K1gDvTelf1T460Afyt9u1f1RjkdPzr+VrJBpCcmgD+qc9PWmjrj9acRmv5Wc0Af1SbsH+tfyt4HrX9U2ARQBgUAfysgc9a/qkB7fqacRkUYAFADScHpX8rZHPWj1r+qbpQB+Nn/BEz/kvnjr/sWD/6VQV+wegf8g8/9d5v/Rr1+Pn/AARM/wCS+eOv+xYP/pVBX7B6B/yDz/13m/8ARr0AQeK/DGn+MdBvNI1WHz7G7j8uRM4PsQexBwQa+eX/AGPdTUtpVv8AEC/j8Ku+9tO2NnGc4wH2H64/Cvp3FHBoA8s8WahpP7OPwflfS7UPDYoIreKRuZZnONzkdck5P9K8aim+PN54V/4TmPWIFtGi+2rpYVQxhxuyE24xt5xnNe9/Gv4et8T/AIfajokMqw3TbZbd3OFEinIBPoeR+NeAW3if41WXgxPA8XhAsyW/2FNVVScRY2jDbtvTjNAnY9l8Aa7pn7RXwiLavarsug1teQRnASVcfMpPTsw+tecn9j7Uwf7KHxA1AeFN+86f5bZ65xjfs/HH4V6z8Bfho/wr+Hdno9zIkt+7tcXTRnK+Y2MgewAA/CvRMYoGY3g/whpvgXw7Z6LpMRhsrVNqgnLMepZj3JNWde/5B3/baH/0ataNZ2vf8g7/ALbQ/wDo1aAPx8/4LZY/4X74G/7FkZ/8Cp6/OzHvX9TT86mv+5/U1doAQ9PWmjk4pxGa/lYJoA/qnxmgDHav5WKKAP6p8ewpCOOlfys0UAK3WkzR1ooA/qnI46V/K12zxzX9UpGRg0YwKAGE/Xmv5XCOetHrX9U3SgBaKKKACiiigAooooAQkDrQDkU1hzn26V/K2evSgD+qYnAo3D1r+VnI9K/qk24Oc/hQA7IoByMiv5Ws9vfrX9UoPHWgD+VgDNf1TZzmv5WR1pxOBj0oAaetFf1TA4H+NKDnvQB/KwBk1/VODmggkEZpAuDQApIHWgHIpGXJ69q/layPSgD9Ev8AgiawHx+8dAnBPhgkD/t6gr9g9A/5B5/67Tf+jXr8GP8Agmf8etJ+An7Ten3fiC6isNB1+zk0S7vJ9oS38x0eN2ZiAiiSNNzHoCe3I/eKKVtHlmV4pJbV3MiPEpYpk5IIHPXPNAGvXBeIfHV74e8ST2txZQGwhtjdtMsjGQx52kBdvXPvXVjxBZn/AJ+P/AWX/wCJqtPe6ZcytJLbySMyGMs1lISV9Pu9Patacoxfvq6OavTqVI2py5Wcxe/EnT9QtJrVbW6jlkt3ZlkATZ94DOTzkqemaw4/Ea3Hg2+16M3aTQbGe0aXy0DMqngjt82c4rvB/Yq+VtsMeUCI8WD/ACA9QPk4pwl0kW7wfZG8l8b4/sMm1scDI2e1dCq0o/DH8Tz5YXE1NZ1Ftbb7vxOK0T4rrEIba6syFSIrmKXezOsgQDJA65zkmt/Rfifpuu6la2VtDcb7j7ruoAB27sEZz079K1MaJ5Rj+wfIV2bPsD4xnOPudM81VWz0SPVI9QWC4FzGMIRbTbV4xwNuBxRKeHnd8rXzCnRx1NRTqJrS+nQ6sHNZ+vH/AIl3/baH/wBGpTRr1oOouP8AwFl/+JrPuLmTxHNDDDbzxWMUqyyzzIYy5RshVU8/eAJOMYFcR7JrP/yE1/3P6mv5ZK/qTtLtb6+kljO+NfkVh3x1r+W0jmgBK/qn71/KxX9U/egAJA60A5FIy5PXtX8rWR6UAf1T1/Kx6V/VNkCv5WcYoA/qmHSlr+Vnv0pM+1AH9UxOBX8rOMYoBwelKTn8KAP6pR2r+Viv6ps1/KyQRQB/VRRRRQAUUUUAFFFFADWPPNC9Bx+dKRmv5WCcmgBcD1r+qUNknjtSkZFGABxQB/K0M849aQjk80Zxmv6pgMCgD+VkDnrX9Ui5Jp3Wv5WDQB/VK3XH61/K2Tz1/KkBxQTk0Af1UUUUUANZsHp2r+VrA9a/qmIB60AYFAH8rK9fSvq/4C/8FLfjP8BfD9roFpqFh4q0G0j8q1sfEMTz/Z0CqqIkiOjhFAwF3YGemMV8njiv6pSinqoP1FAH43f8PsvimvH/AAgvhD8Rdf8Ax6j/AIfZ/FP/AKETwf8Aldf/AB6vzrPWigD+mT/hMPFP/QPsf++X/wDiq/LA/wDBbL4pDP8AxQng/wD75uv/AI9X51Zr+qMW8Q/5ZJ/3yKAPxw/4fZ/FL/oRPB//AHzdf/HqP+H2fxS/6ETwf/3zdf8Ax6v2Q+zxf880/wC+RR9ni/55p/3yKAOAXxf4oJ5sLH8Ff/4qvxJ+PX/BS/4z/Hvw9deH7u/sfCug3cflXVj4dheD7QhUqyPI7u5Rg2Cu7Bx065/fX7PF/wA80/75Ffyt5xQB/UzpliLOFUA4AxV7GO1fysUUAFf1Tk4r+Viv6pz3oAaWIPSv5WyB60etf1TdKAP5WM0oOTzSUdKAP6pec45571/K0ev+FGaCcmgD+qY8AnFAO41/KyDg1/VOBigAxmgAClooAKKKKACiiigAooooAQkDrQDkU1hzn26V/K2evSgD+qev5V/Sv6p81/KzjpQB/VNnGK/lYIwa/qlPOKcvQc5oAWkPSv5WfwoHXpQAetf1TdaaRX8rZPPSgD+qYnAyaM5FBGRX8rWeAMUANxk0EYNf1S7eQc1/K0Tk0AAGa/qmznNfytDg9KU8DGPzoATFf1TA5ppHPfinDp60AfysAZNLgg1/VK3Q84+lfyt57frQB/VKOlLX8rOM9Bmk/CgBAMmjB9K/qmboecfSv5W88Y7etADcUEYNf1S4Jwa/laJyaAP6pycDJoyKCeOtfytZ7e/WgD+qXriv5WK/qm6e9fyskEUAFf1TnvX8rAGa/qm6+1AH8rXrX9U3WmkZPWv5WyeelAH9U9fyr+lf1Tk4r+VnFAH9Uw7V/KxX9U4r+VigD+qiiiigAooooAKKKKAGseeaF6Dj86UjNfysE5NACjk9fzr+qTv0NfytA4NGcmgB2O+a/qlXpRjIoAwMCgAx7CkP0r+VmgdaAHd+tJj3r+qYdKWgBCSBnGa/la29DTQcGjJ9aAP6pckYGO1fytEYNGaCcmgD+qcjjpX8rXbPr2r+qUjIwaMYFAH8rJr+qYDFfys+tf1T0AIRmkIxTqTrQB/K2ADX9UY6dKXFfysdaAP6pz09aaOTinEZr+VgmgD+qYkg4r+VkjBoBxQTk0AL+NL1PJzX9U1FADCfUUq9Bx+dLgdO1fysE5NABQSTRRQA5ema/qkHI6fnX8rIJFBOTQB/VOeaTbX8rNFAH9UxJB6Zr+VogetIK/qn6UALRRRQAUUUUAFFFFACEgdaAcikZcnr2r+VrI9KAP6p6K/lY/Cj8KAP6p6K/lY/Cj8KAP6p6K/lY/Cl6HkYoA/qlyOvav5WCMGv6ptuaUAgAZoA/lYr+qfvX8rAGa/qnB/CgAJxX8rBGDX9UxGT1oHAAzQB/KzX9U/TNfysYJr+qY8+1ADqK/lZ6ngZpPwoA/qmJwK/lZxQDz0pTnvQB/VLnAoByMiv5WuOn61/VKvSgD+Viiv6p8+4oz7igD+Viiv6pycUDmgAJxX8rOK/qmPT0po65/SgBw7V/KxX9U4r+VigD+qcnAyaMihulfytZGPp3oA/ql64r+Viv6plr+VmgD+qcnAyaM5FBGRX8rQIxigBp60Up60mKAP6qKKKKACiiigAooooATvX8rFf1T96/lYoA/qnPA6UgOTjFKRmv5WCaAP6p8ewox7Cv5WKKAP6p8A1/Kzmv6p6/lX9KAP6px0paQdKWgD+VjHvS9T1r+qakPSgD+Vg8UZoPWigD+qZuh4/KkB9BX8rQODX9U+B07UAfytgA/nX9UY6dKXFfysdaAP6pm6dPyr+VvHf9KaDg0ZPrQB/VKfT1704dPSv5WQa/qmAxQB/Kz+NH41/VPRQB/KyBkda/qlXp0o71/Kx1oA/qnbp0r+VsgCmdK/qnxQAi1/KzX9U/TFfysUAf1Tnmk21/KzRQB/VMSQcV/KyRg0A4oJyaAP6pySB0r+VoqB3/Om9K/qnx1oAbnnp19acOR0r+VnNf1TAYoAWiiigAooooAKKKKAE71/KxX9U/ev5WKAP6qK/lX7V/VOTiv5WSKAEooxRigD+qiv5V/Sv6qK/lX9KAP6p84xX8rBGDX9UxXOKUAgAZoAWv5WPSv6psgV/KzjFAH9U2elfysdKeMCv6ox060AKTgZNGRQTx1r+VrPb360Af1S7h60A5FN25Oc/hX8reR6UAIBk1/VPnOaQ8gjNAGM80Afys4JNBGDThxke/Wv6pF6DnP1oAdSHpX8rP4UvTtQAnrX9U3WmEfXiv5XCeelACV/VOe9fysV/VOe9AH8rGCTQRg04HqPfrX9Ui9Ov50AfysgZNf1Tg5oIJBGaQDaaAFJA60A5FNbk55+lfytk89KAP6p6/lX64r+qfNfytYxQA3FBGDX9Upz1/Sv5WyOen5UAf1T0UUUAFFFFABRRRQAnev5WK/qn71/KxQB/VOeaAMV/KxRQB/VPj2FGPYV/KxRQB/VOSQM4zX8rJGMH3pAcGjJJoA/qnHSlpB0paAP5V80u4k80lA60Af1Sng9+a/lbPXrX9U2ARzQBgUAfys/jS9e9f1TUh6UANLYxxX8rZA9aPWv6pulAH8rA5PWnY75/Wmg4r+qbGM0AIT2xTh09K/lZzX9UwGKAAjjpX8rXbPr2r+qUjIwaMYFAH8rJODSUHrRQAuB61/VJuycY/GnEZFG0elAH8rQ4yQe9IeD1r+qYgV/KwTmgD+qeg5xX8rFFACk4PFJR1ooAUdetf1SA896cRkUYAFACYz1pQMdq/lYPWigD+qiiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k=)