(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{515:function(a,s,n){"use strict";n.r(s);var e=n(53),t=Object(e.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h3",{attrs:{id:"webpack和grunt以及gulp相比有什么特性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack和grunt以及gulp相比有什么特性"}},[a._v("#")]),a._v(" WebPack和Grunt以及Gulp相比有什么特性")]),a._v(" "),n("h4",{attrs:{id:"grunt和gulp的工作方式是："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grunt和gulp的工作方式是："}},[a._v("#")]),a._v(" Grunt和Gulp的工作方式是：")]),a._v(" "),n("p",[a._v("在一个配置文件中，指明对某些文件进行类似编译，组合，压缩等任务的具体步骤，这个工具之后可以自动替你完成这些任务。")]),a._v(" "),n("h4",{attrs:{id:"webpack的工作方式是："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack的工作方式是："}},[a._v("#")]),a._v(" Webpack的工作方式是：")]),a._v(" "),n("p",[a._v("把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个浏览器可识别的JavaScript文件。")]),a._v(" "),n("h5",{attrs:{id:"总结-webpack的处理速度更快更直接，能打包更多不同类型的文件。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结-webpack的处理速度更快更直接，能打包更多不同类型的文件。"}},[a._v("#")]),a._v(" 总结: Webpack的处理速度更快更直接，能打包更多不同类型的文件。")]),a._v(" "),n("h3",{attrs:{id:"使用步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用步骤"}},[a._v("#")]),a._v(" 使用步骤")]),a._v(" "),n("ul",[n("li",[a._v("全局安装webpack\n"),n("ul",[n("li",[a._v("npm install -g webpack")])])]),a._v(" "),n("li",[a._v("安装到你的项目目录\n"),n("ul",[n("li",[a._v("npm install --save-dev webpack")])])]),a._v(" "),n("li",[a._v("自动创建package.json文件---其作用:用来记录安装模块的版本号以及信息的\n"),n("ul",[n("li",[a._v("npm init")])])]),a._v(" "),n("li",[a._v("通过配置文件来使用Webpack\n"),n("ul",[n("li",[a._v("简单配置:")])])])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('module.exports = {\n  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件\n  output: {\n    path: __dirname + "/public",//打包后的文件存放的地方\n    filename: "bundle.js"//打包后输出文件的文件名\n  }\n}\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br")])]),n("h4",{attrs:{id:"更快捷的执行打包任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更快捷的执行打包任务"}},[a._v("#")]),a._v(" 更快捷的执行打包任务")]),a._v(" "),n("p",[a._v("使用简单的npm start命令来代替这些繁琐的命令。在package.json中对npm的脚本部分进行相关设置即可")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('{\n  "name": "webpack-sample-project",\n  "version": "1.0.0",\n  "description": "Sample webpack project",\n  "scripts": {\n    "start": "webpack" //配置的地方就是这里啦，相当于把npm的start命令指向webpack命令\n  },\n  "author": "zhang",\n  "license": "ISC",\n  "devDependencies": {\n    "webpack": "^1.12.9"\n  }\n}\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);