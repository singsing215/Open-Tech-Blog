# NativeScript

> 本篇结合NativeScript-Vue混合开发项目shopping-app介绍NativeScript，项目地址：github.com/singsing215/shopping-app

* 市面上有许多流行的混合移动开发框架，例如Ionic，NativeScript，ReactNative，Titanium，Cordova等。

* 这些混合框架通常允许开发人员在应用程序开发中使用Web技术（HTML5，JavaScript）。

* 通常，相同的代码库可以在iOS和Android平台上发布。

* NativeScript框架可以与Angular和Vue等不同的前端技术一起使用。

* NativeScript提供了一个在线可视编辑器(playground)，使我们可以直接在浏览器内部开发移动应用程序。

playground在线编译地址：https://play.nativescript.org/?template=play-vue

## 语法介绍

在Vue，我们的应用在XML语法的 `<template>` 内开发。 XML文档是通过具有成对的标签而形成的，这些标签通常以嵌套结构排列。下面显示了当前的 `<template>` 部分。

``` xml
<template>
    <Page class="page">
        <ActionBar title="Home" class="action-bar" />
        <ScrollView>
            <StackLayout class="home-panel">
                <!--Add your page content here-->
                <Label textWrap="true" text="7">
                <Label textWrap="true" text="8"/>
                <Label textWrap="true" text="9"/>
            </StackLayout>
        </ScrollView>
    </Page>
</template>
```

` <ActionBar title="Home" class="action-bar" />` 在我们应用的顶部开发了一个ActionBar（导航栏）。 `<ScrollView>` 定义了一个滚动视图，因此其中的内容将是可滚动的。 `<StackLayout class="home-panel">` 定义了一个`StackLayout`，因此其中的内容将自动垂直排列。最后，第7-9行定义了三个不同的标签。

``` xml
<TabStrip>
    <TabStripItem>
        <Label text="Ladies"></Label>
        <Image src="res://home"></Image>
    </TabStripItem>
    <TabStripItem>
        <Label text="Gents"></Label>
        <Image src="res://search"></Image>
    </TabStripItem>
    <TabStripItem>
</TabStrip>
```

``` xml
<TabContentItem>
    <ListView for="product in ladies" @itemTap="onItemTap">
    <v-template>
        <!--Add your content here-->
    </v-template>
    </ListView>
</TabContentItem>
```

在这里，生成了一些新的XML代码。 `TabStrip` 部分定义选项卡栏项，而 `TabContentItem` 表示选项卡内容。

## 数据绑定
> 场景：计算加入购物车小计`SubTotal`


``` xml
<TextField
    v-model="textFieldValue"
    hint="Enter text..."
    class="input input-border"
    keyboardType="phone"
/>
```

将 `<TextField/>` 添加到应用时，已经发生了双向数据绑定。这里设置了一个变量 `textFieldValue` ，该变量已绑定到 `<TextField/>` 。这是双向的，因为文本字段将始终显示 `textFieldValue` 的值。但是，当用户更新了文本字段时，新值也将自动存储在 `textFieldValue` 中。整个事情是通过使用 `v-model` 来实现的。

该数据模型 `textFieldValue` 也可以直接在模板上使用。下面显示了SubTotal计算，该计算在此视图上增加了两个动态值。请注意，计算不涉及脚本。

``` xml
<Label :text="'SubTotal: $' + textFieldValue * selectedProduct.price" class="h3" margin="10" />
```

还要注意我们如何将静态文本 `SubTotal：$` 与动态值 `textFieldValue * selectedProduct.price` 合并在一起。


``` javascript
data() {
    return {
        textFieldValue: this.selectedProduct.quantity || ""
    };
}
```
最后，文本区域`<TextField/>`应显示当前选定的数量`selectedProduct.quantity`。

如果 `selectedProduct.quantity` 为0，我们将显示一个空字符串。

参考：https://nativescript-vue.org

## LICENSE

> 微信公众号：Open-Tech-Blog

> Github地址：github.com/singsing215/Open-Tech-Blog

![qrcode](https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4ap2ow/bqQfVz5yrrGYSXMvKr.cqZs491lneOtH7kLYV2wRHulaIh6H8AG0sOgrRV5IOzhOeBPqvFlOAcjrjqxHkjHf.PFLhGbXhv2NOlTTJqCDHuw!/b&bo=WAFYAQAAAAABByA!&rf=viewer_4)