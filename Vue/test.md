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

![qrcode](data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAFYAVgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBpbBpQSQDigjNfysE5NAH9U9FfysUUAf1T0V/KxRQB/VPQc1/KxQOtAH9UxbFKCSAcUYzX8rBOTQB/VPQc1/KxQOtAH9UxbFKCSAcUYzX8rBOTQB/VOSQCcUgbJr+VkHBr+qcDFACFsGlBJAOKCM1/KwTk0Af1Tk4FIGJOMUpGa/lYJoA/qnor+ViigD+qiiiigAooooASiv5WKKAP6pixBxilByK/lYBr+qcDFAATgUgYk4xSkZr+VgmgD+qeiv5WKKAP6p6K/lYooA/qnor+ViigD+qiiiigAooooAKKKKAE71/KxX9U/ev5WKAP6pycDJoBzQRkV/KznjpQB/VPRX8rGfajPtQB/VPX8q/pX9VFfyr+lAH9U+cYr+VgjBr+qUjpn0pV6Dn86AP5WQMmv6p8jr2oIJBGaTbigBSRX8rBGKduHT3ppOTQB/VOTgUAg9K/lZHXpX9Ui8HvQA4kDrQDkU1uTnn6V/K2evSgBOtf1T5obp1r+VskHFAH9Um4etAORTMc9a/lcPXpQAgGTQRilHB6fnX9Ug4NAH8rVFf1T0UAfysda/qnz1pD061/K4SKAG4r+qYHIr+VndigsCelAH9U9fyr+lf1UV/Kv6UAf1T5AHNAORSFckc9q/layPSgD+qeiv5WM+1AIz0oA/qm64r+Viv6pwK/lYoA/qoooooAKKKKACiiigBO9fysV/VP3r+VigD+qiv5V+1f1UV/Kv2oAKKKKAP6qK/lX9K/qor+Vf0oA/qmxnFfyskk1/VOO1fysUAf1T0HOK/lYooAD1oo60UAf1THgdPyr+Vs9O3NNBwaMkmgD+qU8YzSr0HH50uM4r+VgnJoA/qnboeM00Gv5WgcGv6p8Dp2oA/lbHOa/qjHTpS4r+VjrQB/VMenSv5XCOKZ0r+qfHWgAHSiv5WD1ooAUcnrSkZGSe9NBxX9U+MUAfysEYooPWigD+qiv5V/Sv6qK/lX9KAP6px2r+Viv6px2r+VigAoHWigdaAP6px2r+Viv6px2r+VigD+qiiiigAooooAKKKKAE71/KxX9U5OK/lYIIoA/qoor+Vj8KPwoA/qnor+Vj8KPwoA/qmJwK/lZxjFAOD0pSc/hQB/VKO1fysV/VNmv5WSCKADrX9U+aCCR1r+VosDjigD+qXcPWgHIpu3Jzn8K/lbyPSgD+qev5V+uK/qnJxX8rI60AJiv6p+tNIJxX8rZPPSgBAMmjBBr+qZunX8q/lbJ6D360Af1SjtX8rFf1TZxiv5WSCKAADJowQa/qmPI6/lX8rZ5wPegD+qXIA5oByKaRnn26V/K2Tz0oA/qnr+Vfriv6qK/lYFACYoIwa/qlIPB9ugr+Vsjnp+VAH9U9fyself1TE4r+VnpQB/VMOlLX8rB+lH4UAf1T0V/Kx+FH4UAf1TE4r+VgjFOzxjFNPJ6UAf1UUUUUAFFFFABRRRQAhGaAAKWigBMUHilpD0oAbnBxj8acOR0r+VnNf1TAYoADwOlNzk4x+NOIzX8rOaAP6pQM9aUACgdKWgBCcCv5WsDAPvX9UpGRg0YFAADX8rFf1T9MV/KxQB/VOenrTQe2KcRmv5Wc0AL360mPev6ph0paAP5V80uSTzSUDrQB/VPjIoAAoHSloA/lYHJ6/nX9Unfoa/laBwaM5NADvfNNPWv6psZxX8rJOaAP6pySBnGa/la29DTQcGjJ9aAP6pSegI7U4DjpX8rINf1TAYoACM0mMU6kPSgAH0FGPYV/KwetFAH9Ux4BOKQNntX8rQODX9U+MUAA+gox7Cv5WD1ooA/qoooooAKKKKACiiigBCQOtAORSMuT17V/K1kelACV/VOe9fysV/VOe9AH8rB60UuCTxSYoA/qnJwMmjIobpX8rXoPfrQB/VLuHrQDkU0jv+lfytk89KAEoHWilxg0Af1TZAHNAORTTzzz06V/K2evSgD+qYnFfysEV/VOenpTV65zQB/K0BmgjBr+qU9c5r+Vs8np+VACAZr+qbOc1/KyOtOJwMelADcZNBGDX9Up9ea/lbI56flQAlA61/VOeKTOaAFziv5WCMGv6pSKcvQc5oA/lYoHWv6pycd6TOelAC5AFAORTSOe9fytnr0oAQDJowQa/qmboecfSv5Wzzge/WgD+qXIA5oByKaRnn26V/K2Tz0oA/qmJwKMgiv5WR16V/VIo5/pQB/K1jJoIwa/qm2nOc1/KyTk0Af1UUUUUAFFFFABRRRQAnev5WK/qn71/KxQAAZNf1S7uSMV/K0Dg0ZyaAHACv6pB06UuOlfysdaAP6pzzSEYFfys0UAKTg0lHWigABxX9U+PrX8rFf1T96AEbg80L0HH50pGa/lYJyaAP6p26dK/laIwOtN6V/VP3oA/laHTrX9Uo5HT86CM0AYGBQB/KyBz1r+qReTjn604jIoAA6UAI3B5oXoOPzpSM1/KwTk0Af1TkZr+VnrX9U9fyselADgAe9f1SL06UY6V/Kx1oAMkV/VNiv5Wa/qnPegD+VodO3Ff1SDkdPzr+VnJBoJyaAP6pz09aaD1H604jNfysk0ALjqaQjnrRk9a/qmAwKAAgGgDFLRQAnev5WK/qn71/KxQB/VRRRRQAUUUUAFFFFACd6/lYr+qfvX8rFAH9U5OK/lZxX9Ux6elNA5780AOz0r+VjpTgwHb8q/qlAIHWgD+VjrX9U/ekPTrX8rjHjpQB/VLRX8rH4UfhQAgGTQRilHB6fnX9Ug4NAH8rQr+qfrSEEnriv5WiR6UAIvUV9YfAX/gml8Z/j54ftdfs9OsfC2g3aeZbX3iGZ4PtCFVZXSNEZyjBshtuD9OT++xHbNZUUTaxJK7SyR2qOY1SJtpfBwSSOeueKANPBI6e1fjgf8Agib8Uyc/8J14P5/2rr/4zX7Ajw/aetx/4FS//FUf2BZ/9PP/AIFy/wDxVAGicEEZ61+Np/4In/FI5/4rnwh6/euv/jNfrD4+1LS/AnhLUtculu5IrOIuEW7ly7dFUfN3JFeC/wDCR/FqPw1/wnDWtmdC2faTpf2mXzPI67s7s9OeufagD4YH/BE/4pj/AJnnweeezXX/AMZr9klGABXIeBL/AEvx34T03XLVLqOK8iEmxruUlT0IPzdjkVvf2BZ/9PP/AIFS/wDxVAGlSFgoyeBWcfD9mRwbj/wLl/8Aiqz57aTw1LbzQ3E01jJKsMsE7mQoXICsrHJ6kAgkjB7UAdBuHrX8rJGK+sP+Cl/wG0n4C/tN6hZ+H7WKw0HX7SPW7Szh2hLfzHdJEVAAEUSRvtUdBj6V8nnrQAAZr+qcEV/KwDg04EHigD+qXrS00HFKDmgAJwK/lZxQDg9KXOaAP6pR0pa/lZxnoM0n4UAJ1r+qfPWhunWv5Wyc9qAGYyaCMGv6pe/U1/K2eT0/KgD+qeiiigAooooAKKKKAGs2D07V/K1getf1TEA9aAMCgBG6HjP0r+Vs8DPFNBwaCSaAFAyM1/VMCSM4xX8rAJFBOTQAoHPWv6pAcnpTutfys+lAH9UhbHalHIBxS4zX8rBOTQB/VMenSv5XCBimdK/qnxQA3dg4x+Nfyt4HrX9U20elAGBQAzP73HtmqOgD/iXH/rvN/wCjXq5/y3/4CaqaB/yDz/13m/8ARr0AXZ5lt4nkdgiIpZmPQAd68AuP2h/FviO4vL7wX4JfWPDtk7I95LIQ0+3rsA9vr/SvdtZ09NW0q8sZGKx3MLwsV6gMpB/nXzV4K8S+NvgjoNz4Ok8D3uuvBLIdPv7FSYJAxyC5APGeex7e9AHp0Gp6X+0b8JL6O2L2QvEaCSN/ma2mXBwfXBwfcV5k2h/Gd/Cf/CBNpunDT/JFk2smTH7jG319OOmcV1/wk8OXvwu+Gl4dZvLfTNd1e4lulSYgJFK4G1P0yfT8K3f7J8eXHggRHUYk1f7Rv80OM+V6bgMdea6adHnjzOSWvU86vjFSm4Rg5NK+g6+1Sw/Z3+D9sHDXy6fEsEaj5DcTN+eASSe+B61wc/xj+KPhGytfEXifwxZDw3MymWK2JW4gRiMEjceee4/Kur+IXhkfGT4YzaNY6pbXet2TRyeahwhuFHIPoD8wzXCeIJ/i18S/D0Xgy+8Kw6PFOUjvNWkkyjIpHIXoM4ycZz2rGcXCXKzspVI1YKcT6S0jVLfWdMtL+0kEttdRLNE4/iVhkH9ai18Z04f9d4f/AEatM8MaFF4Z0HTtKgYtDZW6W6E9SFGMn8qk17/kHf8AbaH/ANGrUGpMz7bwIM/dz+pr+WI9a/RT/gtkcfH3wL/2LI/9Kp6/OsnJJPJoAXHvQAB3r+qekPSgD+Vk1/VMBiv5WfWv6p6AEx7CkP8AnFfys0DrQA7tnjiv6pQOOlGMigDAwKAA80hGBX8rNA60AO7E5Ff1SjkdPzoxkUAYGBQAtFFFABRRRQAUUUUAFFITigEGgD+VjrX9U+aCCR1r+VrINAH9UvXFfysV/VMDg1/KzigA61/VPmhunWv5WyQaAP6pNw9aAcim7cnOfwr+VvI9KAP6p6Q9K/lZz7UvQ9KAEwSaQjBpwPFf1SDgdfzoAjz+/wD+An+lVNA/5B5/67zf+jXr8fP+CJ/zfH3xyR28Mn/0qgr9g9A/5B5/67zf+jXoAvSHArwnUv2jNS1HV79PB/gy78T6bp7lLnUI5dikjqEG054H/wBavcryL7RbSxEkb1K5HbIr5g8CeMta/Z60/UfCeq+EdR1Qi5klsLzT4t0dzu6AnHsPUj0oA9PsdY8OfHjwXHqyQXDLZyNvtC22WOQDlDjrnii2+Juo3Hge71ODw/Ms9tKIFt23EFePm6Z471Q/Z98Mal4Q8LeINb8RQJpVxq97JqUtqflW3jxnn+73+gxWVcftV6FHLNNaeHNYvtCgk8uXVooP3Kn157fUiuqFZRioTjezutfvPMr4OU6jqUpcras9N+33HU6fdaB8LfAd54rnsZNNjljWa4twdz7v4UXPueB71wv/AA0T4x062h8Qap4Ee28HzEEXKSkzrGTw5HT07Dr1rt/idosXxt+D86+HrhLj7WiXNoxO0OynO056Zxj2NeX67418e+NvAw8CjwBe2erTRJaXN9Ku23VFwN4OMDOPXH1rCpN1JOTOuhRjQpqnHofS2javba9plpqNnIJrS6iWWJx/EpGQabr3/IO/7bQ/+jVrO+H3hj/hDPBejaIZfOaxtkiaTGNzY5I9s1o69/yDv+20P/o1ag6B8n/ITX/c/qa/llIwa/qbk/5CS8cbP6mrY4GM0AfysgZNGCDX9UzdDzj6V/K2Tx9DQB/VKO1fysV/VNmv5WSCKACgdaMUAc0Af1T5xiv5WCMGv6piM45oHAAzQB/KzQOtGKUAigD+qbOK/lYIxTvamnrQB/VRRRRQAUUUUAFFFFACEZr+Vgkmv6p+9fysUAf1TkkDpX8rWAO9N6V/VPjrQB/K327V/VGOR0/Ov5WskGkJyaAP6pz09aaOuP1pxGa/lZzQB/VJuwf61/K3getf1TYBFAGBQB/KyBz1r+qQHt+ppxGRRgAUANJwelfytkc9aPWv6pulAH42f8ETP+S+eOv+xYP/AKVQV+wWg/8AIPP/AF3m/wDRr1+Pv/BEz/kvnjr/ALFg/wDpVBX7A6H/AMg0/wDXab/0a9AGieT6Um0EfWsPWPGekaDdLb399HbSkZCvnkfl7GtW2vobmBJYpAyOodSO4PQ1Ti1rYyVSDbipK6MH4l6Bc+KPAOu6TZvsuru0eKMk4BYjgH69Pxr538KfG/S/BPwvfwTqnh6+HiO3hks/7PNvlJ2bIBPsc8/pX0br+qrb3NnB5zgzs4VI8bmIGep9KxdR1e80e0+2XogiZGEbXEigc8YweTyc1SpykjCeJpwbv0M79nXwpqPg34VaZYaqjQ3rM87wyfejDtkKff2r0sIOOvFclovi+C9lgJvoZ4bhzChiHSUc7fyyea6pZlIJ3Djrz0qZQlF2aNadaFVXiyXrWfr3/IO/7bQ/+jVq6jq5+U5+lUte/wCQd/22h/8ARq1Jsmnsfj5/wWyx/wAL98Df9iyM/wDgVPX52Y96/qafnU1/3P6mrtAxD09aaOTinEZr+VgmgD+qfGaAMdq/lYooA/qnx7CkI46V/KzRQArdaTNHWigD+qcjjpX8rXbPHNf1SkZGDRjAoAYT9ea/lcI560etf1TdKAFooooAKKKKACiiigBCQOtAORTWHOfbpX8rZ69KAP6picCjcPWv5Wcj0r+qTbg5z+FADsigHIyK/laz29+tf1Sg8daAP5WAM1/VNnOa/lZHWnE4GPSgBp60V/VMDgf40oOe9AH8rAGTX9U4OaCCQRmkC4NACkgdaAcikZcnr2r+VrI9KAP0S/4ImsB8fvHQJwT4YJA/7eoK/YLQudOP/Xab/wBGvX4M/wDBM/49aT8BP2m9Pu/EF1FYaDr9nJol3eT7Qlv5jo8bszEBFEkabmPQE9uR+8McjaPJMrxSS2ruZEeJSxTJyQQOeueaT1ApeKtBm1e40h4QmLW7WaQt/dAYce/NcT/wrfXGvtUkW88mSdZRHdpNywY/KrLtzgDjO7jtXo416zPJFx/4Cy//ABNH9u2eelx/4Cy//E10wxE6a5UebVwFGtLnle5wMfw6nvRp8d1p9raWsMzvLBFcPIGym0HkDnNXrzwhqs3gHT9K3pLf20kbkmUgEK+fvYPbHOK6/wDtyz54uP8AwFl/+Jo/tuz7C4z/ANesv/xNU8TUbT7ELLqKUorqrHnlr8Pta3F3ljtna8NwCJjK6fuimd+0ZOcHpWdN4D1jT9LuGcJCixRJJb27yTC6ZXyzuAARuHHGa9V/tu064uP/AAFl/wDiaQ6zZntcf+Asv/xNWsXUvd2MXlNG1k2vmcv8KbC6sdO1B7m2Nos10zxRfMAF2qBjdzjj0rq9eI/s7/ttD/6NSmDW7RecXHH/AE6y/wDxNUbi4k8RzQwwwTxWMUqyyzTIYy+w7gqqeT8wGTjGBXNUm6k3Jqx6WHo+wpKne9jWf/kJr/uf1NfyyV/UnaXa319JLGd8a/IrDvjrX8tpHNZnSJX9U/ev5WK/qn70ABIHWgHIpGXJ69q/layPSgD+qev5WPSv6psgV/KzjFAH9Uw6Utfys9+lJn2oA/qmJwK/lZxjFAOD0pSc/hQB/VKO1fysV/VNmv5WSCKAP6qKKKKACiiigAooooAax55oXoOPzpSM1/KwTk0ALgetf1Shsk8dqUjIowAOKAP5WhnnHrSEcnmjOM1/VMBgUAfysgc9a/qkXJNO61/KwaAP6pW64/Wv5Wyeev5UgOKCcmgD+qiiiigBrNg9O1fytYHrX9UxAPWgDAoA/lZXr6V9X/AX/gpb8Z/gL4ftdAtNQsPFWg2kflWtj4hief7OgVVREkR0cIoGAu7Az0xivk8cV/VKUU9VB+ooA/G7/h9l8U14/wCEF8IfiLr/AOPUv/D7P4p/9CL4P/K6/wDj1fnUetFAH9Mv/CY+Kf8AoH2P/fL/APxVflef+C2XxT5/4oXwh/3zdf8Ax6vzqzX9UYt4h/yyT/vkUAfjh/w+z+KX/QieD/8Avm6/+PUf8Ps/il/0Ing//vm6/wDj1fsh9ni/55p/3yKPs8X/ADzT/vkUAcAvi/xQTzYWP4K//wAVX4k/Hr/gpf8AGf49+Hrrw/d39j4V0G7j8q6sfDsLwfaEKlWR5Hd3KMGwV3YOOnXP76/Z4v8Anmn/AHyK/lbzigD+pnTLEWcKoBwBir2Mdq/lYooAK/qnJxX8rFf1TnvQA0sQelfytkD1o9a/qm6UAfysZpQcnmko6UAf1S85xzz3r+Vo9f8ACjNBOTQB/VMeATigHca/lZBwa/qnAxQAYzQABS0UAFFFFABRRRQAUUUUAISB1oByKaw5z7dK/lbPXpQB/VPX8q/pX9U+a/lZx0oA/qmzjFfysEYNf1SnnFOXoOc0ALSHpX8rP4UDr0oAPWv6putNIr+VsnnpQB/VMTgZNGcigjIr+VrPAGKAG4yaCMGv6pdvIOa/laJyaAADNf1TZzmv5WhwelKeBjH50AJiv6pgc00jnvxTh09aAP5WAMmlwQa/qlboecfSv5W89v1oA/qlHSlr+VnGegzSfhQAgGTRg+lf1TN0POPpX8reeMdvWgBuKCMGv6pcE4NfytE5NAH9U5OBk0ZFBPHWv5Ws9vfrQB/VL1xX8rFf1TdPev5WSCKACv6pz3r+VgDNf1TdfagD+Vr1r+qbrTSMnrX8rZPPSgD+qev5V/Sv6pycV/KzigD+qYdq/lYr+qcV/KxQB/VRRRRQAUUUUAFFFFADWPPNC9Bx+dKRmv5WCcmgBRyev51/VJ36Gv5WgcGjOTQA7HfNf1Sr0oxkUAYGBQAY9hSH6V/KzQOtADu/Wkx71/VMOlLQAhJAzjNfytbehpoODRk+tAH9UuSMDHav5WiMGjNBOTQB/VORx0r+Vrtn17V/VKRkYNGMCgD+Vk1/VMBiv5WfWv6p6AEIzSEYp1J1oA/lbABr+qMdOlLiv5WOtAH9U56etNHJxTiM1/KwTQB/VMSQcV/KyRg0A4oJyaAF/Gl6nk5r+qaigBhPqKVeg4/OlwOnav5WCcmgAoJJoooAcvTNf1SDkdPzr+VkEignJoA/qnPNJtr+VmigD+qYkg9M1/K0QPWkFf1T9KAFooooAKKKKACiiigBCQOtAORSMuT17V/K1kelAH9U9FfysfhR+FAH9U9FfysfhR+FAH9U9FfysfhS9DyMUAf1S5HXtX8rBGDX9U23NKAQAM0AfysV/VP3r+VgDNf1Tg/hQAE4r+VgjBr+qYjJ60DgAZoA/lZr+qfpmv5WME1/VMefagB1Ffys9TwM0n4UAf1TE4Ffys4oB56Upz3oA/qlzgUA5GRX8rXHT9a/qlXpQB/KxRX9U+fcUZ9xQB/KxRX9U5OKBzQAE4r+VnFf1THp6U0dc/pQA4dq/lYr+qcV/KxQB/VOTgZNGRQ3Sv5WsjH070Af1S9cV/KxX9Uy1/KzQB/VOTgZNGcigjIr+VoEYxQA09aKU9aTFAH9VFFFFABRRRQAUUUUAJ3r+Viv6p+9fysUAf1TngdKQHJxilIzX8rBNAH9U+PYUY9hX8rFFAH9U+Aa/lZzX9U9fyr+lAH9U46UtIOlLQB/Kxj3pep61/VNSHpQB/KweKM0HrRQB/VM3Q8flSA+gr+VoHBr+qfA6dqAP5WwAfzr+qMdOlLiv5WOtAH9UzdOn5V/K3jv+lNBwaMn1oA/qlPp696cOnpX8rINf1TAYoA/lZ/Gj8a/qnooA/lZAyOtf1Sr06Ud6/lY60Af1Tt06V/K2QBTOlf1T4oARa/lZr+qfpiv5WKAP6pzzSba/lZooA/qmJIOK/lZIwaAcUE5NAH9U5JA6V/K0VA7/nTelf1T460ANzz06+tOHI6V/Kzmv6pgMUALRRRQAUUUUAFFFFACd6/lYr+qfvX8rFAH9VFfyr9q/qnJxX8rJFACUUYoxQB/VRX8q/pX9VFfyr+lAH9U+cYr+VgjBr+qYrnFKAQAM0ALX8rHpX9U2QK/lZxigD+qbPSv5WOlPGBX9UY6daAFJwMmjIoJ461/K1nt79aAP6pdw9aAcim7cnOfwr+VvI9KAEAya/qnznNIeQRmgDGeaAP5WcEmgjBpw4yPfrX9Ui9Bzn60AOpD0r+Vn8KXp2oAT1r+qbrTCPrxX8rhPPSgBK/qnPev5WK/qnPegD+VjBJoIwacD1Hv1r+qRenX86AP5WQMmv6pwc0EEgjNIBtNACkgdaAcimtyc8/Sv5WyeelAH9U9fyr9cV/VPmv5WsYoAbigjBr+qU56/pX8rZHPT8qAP6p6KKKACiiigAooooATvX8rFf1T96/lYoA/qnPNAGK/lYooA/qnx7CjHsK/lYooA/qnJIGcZr+VkjGD70gODRkk0Af1TjpS0g6UtAH8q+aXcSeaSgdaAP6pTwe/Nfytnr1r+qbAI5oAwKAP5Wfxpevev6pqQ9KAGlsY4r+VsgetHrX9U3SgD+VgcnrTsd8/rTQcV/VNjGaAEJ7Ypw6elfys5r+qYDFAARx0r+Vrtn17V/VKRkYNGMCgD+VknBpKD1ooAXA9a/qk3ZOMfjTiMijaPSgD+VocZIPekPB61/VMQK/lYJzQB/VPQc4r+ViigBScHiko60UAKOvWv6pAee9OIyKMACgBMZ60oGO1fysHrRQB/VRRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB/9k=)