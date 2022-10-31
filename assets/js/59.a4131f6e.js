(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{392:function(t,s,a){"use strict";a.r(s);var n=a(12),p=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_18-css如何画一个三角形-原理是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_18-css如何画一个三角形-原理是什么"}},[t._v("#")]),t._v(" 18.CSS如何画一个三角形？原理是什么？")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/640-20210928145343585",alt:"图片"}})]),t._v(" "),s("h2",{attrs:{id:"一、前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),s("p",[t._v("在前端开发的时候，我们有时候会需要用到一个三角形的形状，比如地址选择或者播放器里面播放按钮")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/640-20210928145347395",alt:"图片"}})]),t._v(" "),s("p",[t._v("通常情况下，我们会使用图片或者"),s("code",[t._v("svg")]),t._v("去完成三角形效果图，但如果单纯使用"),s("code",[t._v("css")]),t._v("如何完成一个三角形呢？")]),t._v(" "),s("p",[t._v("实现过程似乎也并不困难，通过边框就可完成")]),t._v(" "),s("h2",{attrs:{id:"二、实现过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、实现过程"}},[t._v("#")]),t._v(" 二、实现过程")]),t._v(" "),s("p",[t._v("在以前也讲过盒子模型，默认情况下是一个矩形，实现也很简单")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("<style>\n    .border")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px solid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #96ceb4 #ffeead #d9534f #ffad60"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n</style>\n<div class="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"border"')]),t._v("></div>\n")])])]),s("p",[t._v("效果如下图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/640-20210928145351878",alt:"图片"}})]),t._v(" "),s("p",[t._v("将"),s("code",[t._v("border")]),t._v("设置"),s("code",[t._v("50px")]),t._v("，效果图如下所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/640-20210928145356951",alt:"图片"}})]),t._v(" "),s("p",[t._v("白色区域则为"),s("code",[t._v("width")]),t._v("、"),s("code",[t._v("height")]),t._v("，这时候只需要你将白色区域部分宽高逐渐变小，最终变为0，则变成如下图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/640-20210928145402472",alt:"图片"}})]),t._v(" "),s("p",[t._v("这时候就已经能够看到4个不同颜色的三角形，如果需要下方三角形，只需要将上、左、右边框设置为透明就可以得到下方的红色三角形")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/640-20210928145407896",alt:"图片"}})]),t._v(" "),s("p",[t._v("但这种方式，虽然视觉上是实现了三角形，但实际上，隐藏的部分任然占据部分高度，需要将上方的宽度去掉")]),t._v(" "),s("p",[t._v("最终实现代码如下：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".border")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("solid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 50px 50px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" transparent transparent #d9534f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如果想要实现一个只有边框是空心的三角形，由于这里不能再使用"),s("code",[t._v("border")]),t._v("属性，所以最直接的方法是利用伪类新建一个小一点的三角形定位上去")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".border")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("solid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 50px 50px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" transparent transparent #d9534f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".border:after")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("solid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 40px 40px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" transparent transparent #96ceb4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("效果图如下所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/640-20210928145420732",alt:"图片"}}),t._v("i")]),t._v(" "),s("p",[t._v("伪类元素定位参照对象的内容区域宽高都为0，则内容区域即可以理解成中心一点，所以伪元素相对中心这点定位")]),t._v(" "),s("p",[t._v("将元素定位进行微调以及改变颜色，就能够完成下方效果图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/640-20210928145425417",alt:"图片"}})]),t._v(" "),s("p",[t._v("最终代码如下：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".border:after")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" solid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 40px 40px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" transparent transparent #96ceb4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 6px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -40px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"三、原理分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、原理分析"}},[t._v("#")]),t._v(" 三、原理分析")]),t._v(" "),s("p",[t._v("可以看到，边框是实现三角形的部分，边框实际上并不是一个直线，如果我们将四条边设置不同的颜色，将边框逐渐放大，可以得到每条边框都是一个梯形")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/640-20210928145430129",alt:"图片"}})]),t._v(" "),s("p",[t._v("当分别取消边框的时候，发现下面几种情况：")]),t._v(" "),s("ul",[s("li",[t._v("取消一条边的时候，与这条边相邻的两条边的接触部分会变成直的")]),t._v(" "),s("li",[t._v("当仅有邻边时， 两个边会变成对分的三角")]),t._v(" "),s("li",[t._v("当保留边没有其他接触时，极限情况所有东西都会消失")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/640-20210928145434834",alt:"图片"}})]),t._v(" "),s("p",[t._v("通过上图的变化规则，利用旋转、隐藏，以及设置内容宽高等属性，就能够实现其他类型的三角形")]),t._v(" "),s("p",[t._v("如设置直角三角形，如上图倒数第三行实现过程，我们就能知道整个实现原理")]),t._v(" "),s("p",[t._v("实现代码如下：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 内部大小 */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 边框大小 只设置两条边*/")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #4285f4 solid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-right")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" transparent solid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 85px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 其他设置 */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=p.exports}}]);