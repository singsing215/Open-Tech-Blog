# NativeScript

> 市面上有许多流行的混合移动开发框架，例如Ionic，NativeScript，ReactNative，Titanium，Cordova等。这些混合框架通常允许开发人员在应用程序开发中使用Web技术（HTML5，JavaScript）。通常，相同的代码库可以在iOS和Android平台上发布。

NativeScript框架可以与Angular和Vue等不同的前端技术一起使用。

NativeScript提供了一个在线可视编辑器(playground)，使我们可以直接在浏览器内部开发移动应用程序。

playground在线编译地址：https://play.nativescript.org/?template=play-vue

在Vue设计下，我们的应用布局在XML语法的`<template>`部分内开发。 XML文档是通过具有成对的标签而形成的，这些标签通常以嵌套结构排列。下面显示了当前的`<template>`部分。

```xml
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
现在该检查代码了。` <ActionBar title="Home" class="action-bar" />`在我们应用的顶部开发了一个ActionBar（导航栏）。`<ScrollView>`定义了一个滚动视图，因此其中的内容将是可滚动的。`<StackLayout class="home-panel">`定义了一个StackLayout，因此其中的内容将自动垂直排列。最后，第7-9行定义了三个不同的标签。