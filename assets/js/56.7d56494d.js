(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{391:function(s,t,v){"use strict";v.r(t);var _=v(12),e=Object(_.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_15-如果要做优化-css提高性能的方法有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-如果要做优化-css提高性能的方法有哪些"}},[s._v("#")]),s._v(" 15.如果要做优化，CSS提高性能的方法有哪些？")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/640-20210928145021977",alt:"图片"}})]),s._v(" "),t("h2",{attrs:{id:"一、前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[s._v("#")]),s._v(" 一、前言")]),s._v(" "),t("p",[s._v("每一个网页都离不开"),t("code",[s._v("css")]),s._v("，但是很多人又认为，"),t("code",[s._v("css")]),s._v("主要是用来完成页面布局的，像一些细节或者优化，就不需要怎么考虑，实际上这种想法是不正确的")]),s._v(" "),t("p",[s._v("作为页面渲染和内容展现的重要环节，"),t("code",[s._v("css")]),s._v("影响着用户对整个网站的第一体验")]),s._v(" "),t("p",[s._v("因此，在整个产品研发过程中，"),t("code",[s._v("css")]),s._v("性能优化同样需要贯穿全程")]),s._v(" "),t("h2",{attrs:{id:"二、实现方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、实现方式"}},[s._v("#")]),s._v(" 二、实现方式")]),s._v(" "),t("p",[s._v("实现方式有很多种，主要有如下：")]),s._v(" "),t("ul",[t("li",[s._v("内联首屏关键CSS")]),s._v(" "),t("li",[s._v("异步加载CSS")]),s._v(" "),t("li",[s._v("资源压缩")]),s._v(" "),t("li",[s._v("合理使用选择器")]),s._v(" "),t("li",[s._v("减少使用昂贵的属性")]),s._v(" "),t("li",[s._v("不要使用@import")])]),s._v(" "),t("h3",{attrs:{id:"内联首屏关键css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内联首屏关键css"}},[s._v("#")]),s._v(" 内联首屏关键CSS")]),s._v(" "),t("p",[s._v("在打开一个页面，页面首要内容出现在屏幕的时间影响着用户的体验，而通过内联"),t("code",[s._v("css")]),s._v("关键代码能够使浏览器在下载完"),t("code",[s._v("html")]),s._v("后就能立刻渲染")]),s._v(" "),t("p",[s._v("而如果外部引用"),t("code",[s._v("css")]),s._v("代码，在解析"),t("code",[s._v("html")]),s._v("结构过程中遇到外部"),t("code",[s._v("css")]),s._v("文件，才会开始下载"),t("code",[s._v("css")]),s._v("代码，再渲染")]),s._v(" "),t("p",[s._v("所以，"),t("code",[s._v("CSS")]),s._v("内联使用使渲染时间提前")]),s._v(" "),t("p",[s._v("注意：但是较大的"),t("code",[s._v("css")]),s._v("代码并不合适内联（初始拥塞窗口、没有缓存），而其余代码则采取外部引用方式")]),s._v(" "),t("h3",{attrs:{id:"异步加载css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#异步加载css"}},[s._v("#")]),s._v(" 异步加载CSS")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("CSS")]),s._v("文件请求、下载、解析完成之前，"),t("code",[s._v("CSS")]),s._v("会阻塞渲染，浏览器将不会渲染任何已处理的内容")]),s._v(" "),t("p",[s._v("前面加载内联代码后，后面的外部引用"),t("code",[s._v("css")]),s._v("则没必要阻塞浏览器渲染。这时候就可以采取异步加载的方案，主要有如下：")]),s._v(" "),t("ul",[t("li",[s._v("使用javascript将link标签插到head标签最后")])]),s._v(" "),t("div",{staticClass:"language-css extra-class"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[s._v("// 创建link标签\nconst myCSS = document."),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createElement")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"link"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmyCSS.rel = "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stylesheet"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmyCSS.href = "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mystyles.css"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n// 插入到header的最后位置\ndocument.head."),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("insertBefore")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" myCSS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" document.head.childNodes[ document.head.childNodes.length - 1 ].nextSibling "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("设置link标签media属性为noexis，浏览器会认为当前样式表不适用当前类型，会在不阻塞页面渲染的情况下再进行下载。加载完成后，将"),t("code",[s._v("media")]),s._v("的值设为"),t("code",[s._v("screen")]),s._v("或"),t("code",[s._v("all")]),s._v("，从而让浏览器开始解析CSS")])]),s._v(" "),t("div",{staticClass:"language-css extra-class"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[s._v("<link rel="),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stylesheet"')]),s._v(" href="),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mystyles.css"')]),s._v(" media="),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"noexist"')]),s._v(" onload="),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"this.media='all'\"")]),s._v(">\n")])])]),t("ul",[t("li",[s._v("通过rel属性将link元素标记为alternate可选样式表，也能实现浏览器异步加载。同样别忘了加载完成之后，将rel设回stylesheet")])]),s._v(" "),t("div",{staticClass:"language-css extra-class"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[s._v("<link rel="),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"alternate stylesheet"')]),s._v(" href="),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mystyles.css"')]),s._v(" onload="),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"this.rel='stylesheet'\"")]),s._v(">\n")])])]),t("h3",{attrs:{id:"资源压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#资源压缩"}},[s._v("#")]),s._v(" 资源压缩")]),s._v(" "),t("p",[s._v("利用"),t("code",[s._v("webpack")]),s._v("、"),t("code",[s._v("gulp/grunt")]),s._v("、"),t("code",[s._v("rollup")]),s._v("等模块化工具，将"),t("code",[s._v("css")]),s._v("代码进行压缩，使文件变小，大大降低了浏览器的加载时间")]),s._v(" "),t("h3",{attrs:{id:"合理使用选择器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合理使用选择器"}},[s._v("#")]),s._v(" 合理使用选择器")]),s._v(" "),t("p",[t("code",[s._v("css")]),s._v("匹配的规则是从右往左开始匹配，例如"),t("code",[s._v("#markdown .content h3")]),s._v("匹配规则如下：")]),s._v(" "),t("ul",[t("li",[s._v("先找到h3标签元素")]),s._v(" "),t("li",[s._v("然后去除祖先不是.content的元素")]),s._v(" "),t("li",[s._v("最后去除祖先不是#markdown的元素")])]),s._v(" "),t("p",[s._v("如果嵌套的层级更多，页面中的元素更多，那么匹配所要花费的时间代价自然更高")]),s._v(" "),t("p",[s._v("所以我们在编写选择器的时候，可以遵循以下规则：")]),s._v(" "),t("ul",[t("li",[s._v("不要嵌套使用过多复杂选择器，最好不要三层以上")]),s._v(" "),t("li",[s._v("使用id选择器就没必要再进行嵌套")]),s._v(" "),t("li",[s._v("通配符和属性选择器效率最低，避免使用")])]),s._v(" "),t("h3",{attrs:{id:"减少使用昂贵的属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#减少使用昂贵的属性"}},[s._v("#")]),s._v(" 减少使用昂贵的属性")]),s._v(" "),t("p",[s._v("在页面发生重绘的时候，昂贵属性如"),t("code",[s._v("box-shadow")]),s._v("/"),t("code",[s._v("border-radius")]),s._v("/"),t("code",[s._v("filter")]),s._v("/透明度/"),t("code",[s._v(":nth-child")]),s._v("等，会降低浏览器的渲染性能")]),s._v(" "),t("h3",{attrs:{id:"不要使用-import"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不要使用-import"}},[s._v("#")]),s._v(" 不要使用@import")]),s._v(" "),t("p",[s._v("css样式文件有两种引入方式，一种是"),t("code",[s._v("link")]),s._v("元素，另一种是"),t("code",[s._v("@import")])]),s._v(" "),t("p",[t("code",[s._v("@import")]),s._v("会影响浏览器的并行下载，使得页面在加载时增加额外的延迟，增添了额外的往返耗时")]),s._v(" "),t("p",[s._v("而且多个"),t("code",[s._v("@import")]),s._v("可能会导致下载顺序紊乱")]),s._v(" "),t("p",[s._v("比如一个css文件"),t("code",[s._v("index.css")]),s._v("包含了以下内容："),t("code",[s._v('@import url("reset.css")')])]),s._v(" "),t("p",[s._v("那么浏览器就必须先把"),t("code",[s._v("index.css")]),s._v("下载、解析和执行后，才下载、解析和执行第二个文件"),t("code",[s._v("reset.css")])]),s._v(" "),t("h3",{attrs:{id:"其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),t("ul",[t("li",[s._v("减少重排操作，以及减少不必要的重绘")]),s._v(" "),t("li",[s._v("了解哪些属性可以继承而来，避免对这些属性重复编写")]),s._v(" "),t("li",[s._v("cssSprite，合成所有icon图片，用宽高加上backgroud-position的背景图方式显现出我们要的icon图，减少了http请求")]),s._v(" "),t("li",[s._v("把小的icon图片转成base64编码")]),s._v(" "),t("li",[s._v("CSS3动画或者过渡尽量使用transform和opacity来实现动画，不要使用left和top属性")])]),s._v(" "),t("h2",{attrs:{id:"三、总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、总结"}},[s._v("#")]),s._v(" 三、总结")]),s._v(" "),t("p",[t("code",[s._v("css")]),s._v("实现性能的方式可以从选择器嵌套、属性特性、减少"),t("code",[s._v("http")]),s._v("这三面考虑，同时还要注意"),t("code",[s._v("css")]),s._v("代码的加载顺序")])])}),[],!1,null,null,null);t.default=e.exports}}]);