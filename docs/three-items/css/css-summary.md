### css 重要概念

#### BFC 布局概念及作用

1. BFC 是块级格式化上下文，它是一个独立渲染区域，规定了区域内如何布局，并且与这个区域外部毫无关系。
2. BFC 触发条件

   - float 的值不为 none
   - overflow 的值不为 visible
   - display 的值为 inline-block，table-cell, table-caption
   - position 的值为 absolute 和 fixed

3. BFC 的作用
   - 自适应两栏布局
   - 可以阻止元素被浮动元素覆盖
   - 可以包含浮动元素-清除内部浮动
   - 分属不同 BFC 之时可以阻止 margin 重叠

#### 盒模型

> 盒模型有两种，w3c 和 IE 盒子模型

1. W3C 定义的盒模型包括 margin、border、padding、content，元素的宽度 width=content 的宽度
2. IE 盒模型与 W3C 盒模型的唯一区别就是元素的宽度，元素的 width=border + padding + content

> 对盒模型的理解

1. IE 定义的盒模型较为合理，所以在 css3 中新增了 box-sizing，包含两个属性 content-box 和 border-box。

   - **content-box** 元素的 width = content

   - **border-box** 元素的 width = border + padding + content

2. 对于行内元素 margin-top/margin-bottom 对于上下元素无效，margin-left/margin-right 有效

   对于相邻的块级元素 margin-top 和 margin-bottom 两者叠加按照一定的规则

   - 都是整数 margin 值取两者的最大值

   - 都是负数 margin 值取最小值

   - 两者正负相反，margin 值取两者之和

#### 移动端根据设计稿宽度适配 px 转 rem

> 为了计算方便，一般建议 1rem = 100px(设计稿 px)，要换算这样的比例需要设置 html 对应的 fontSize，计算规则如下：
> fontSize = 屏幕宽度 / 设计稿宽度 \* 基本宽度
> 如果基本宽度是 100，那么 1rem = 100px(设计稿 px)
>
> 假如设计稿宽度是 750px , 开发以 iphone6/7/8 为例，宽度是 375，如果想 1rem=100px(设计稿 px)，那么 fontSize = 375/750\*100 = 50px;
>
> 以下代码可以按设计稿适配 1rem = 100px;

```javascript
<meta name="viewport" content="width=device-width,initial-scale=1.0">

let baseSize = 100 // 1rem === 100px
let baseWidth = 750 // 设计稿宽度 640 750 1080
let fontSize = (document.documentElement.clientWidth / baseWidth * baseSize).toFixed(2)
document.getElementsByTagName("html")[0].style.fontSize = fontSize
```

##### 常用样式

1. 特殊图形
2. 文本省略
3. 1px 实现
