# Vue自定义指令

> 本篇简单介绍Vue自定义指令，并定义`v-auto-table-height`指令实现固定表格位置。

###  1. 先上效果图

`Before:`

![non](https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4Tpksf/TmEUgtj9EK6.7V8ajmQrEP*Egbhrmae57wc7v17np5s4HlPAUL.7qrBzwa2.dsTx3UqBuTQtj2Wb7k6PGrijZ1jdRG6RfiisMTu.wGMorVA!/b&bo=eQZsAgAAAAACJxI!&rf=viewer_4)

`After:`

![vauto](https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4Tpksf/TmEUgtj9EK6.7V8ajmQrEPEeq00ZeMY*F6BesSzsh90lpp3VC.JQjuqfZ41z8fFGSh2IBC.AN6qfYMJcNaUzu8aN7NaL2lANrg7lTpAgEPs!/b&bo=eQZsAgAAAAACFyI!&rf=viewer_4)


### 2. 自定义Vue指令方法

```js
// 注册一个全局自定义指令 `v-auto-table-height`
Vue.directive("autoTableHeight", {
    bind() {},
    componentUpdated() {},
    unbind() {}
})
```

1. `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
   
2. `componentUpdated`：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
   
3. `unbind`：只调用一次，指令与元素解绑时调用。

### 3. 定义`v-auto-table-height`指令实现固定表格位置

>文件位置：src\directive\autoTableHeight.js

```js
import Vue from 'vue'

const doResize = (el, binding, vnode) => {
  const ctx = vnode.context;
  if (!ctx || typeof ctx[binding.arg] === 'undefined') return;
  Vue.nextTick(() => {
    const top = el.getBoundingClientRect().top;
    const h = (window.innerHeight - top) - (binding.value || 0);
    ctx[binding.arg] = Math.max(h, 100);
  })
}

const autoTableHeight = Vue.directive('autoTableHeight', {
  bind(el, binding, vnode) {
    el.resizeListener = () => {
      doResize(el, binding, vnode)
    }
    window.addEventListener('resize', el.resizeListener)
  },
  componentUpdated(el, binding, vnode) {
    doResize(el, binding, vnode)
  },
  unbind(el) {
    window.removeEventListener('resize', el.resizeListener)
  }
})

export {
  autoTableHeight
}
```

1. `el`：指令所绑定的元素，可以用来直接操作 DOM。

2. `binding`：一个对象，包含以下 property：name,value,oldValue,expression,arg,modifiers

3. `binding.arg`传给指令的参数，可选。例如 v-auto-table-height:maxHeight 中，参数为 "maxHeight"。
 
4. `vnode`：Vue 编译生成的虚拟节点。可从 VNode API 来了解更多详情。

5. `target.addEventListener(type, listener, options)`方法将指定的监听器注册到 EventTarget 上，当该对象触发指定的事件时，指定的回调函数就会被执行。

>最后你可以在模板中任何元素上使用新的 v-auto-table-height property，如下：

```html
<el-table v-auto-table-height:maxHeight>
```

## LICENSE

> 微信公众号：Open Tech Blog
> 
> Github地址：github.com/singsing215/Open-Tech-Blog

> 点击`阅读原文`获取最新本篇内容。

![qrcode](https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4ap2ow/bqQfVz5yrrGYSXMvKr.cqZs491lneOtH7kLYV2wRHulaIh6H8AG0sOgrRV5IOzhOeBPqvFlOAcjrjqxHkjHf.PFLhGbXhv2NOlTTJqCDHuw!/b&bo=WAFYAQAAAAABByA!&rf=viewer_4)
