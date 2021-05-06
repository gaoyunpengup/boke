(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{508:function(t,_,v){"use strict";v.r(_);var e=v(53),r=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"cors简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cors简介"}},[t._v("#")]),t._v(" CORS简介")]),t._v(" "),v("p",[t._v('CORS是一个W3C标准，全称是"跨域资源共享" '),v("br"),t._v("\n它允许浏览器向跨源服务器，发出"),v("code",[t._v("XMLHttpRequest")]),t._v("请求，从而克服了AJAX只能同源使用的限制 "),v("br"),t._v("\n浏览器和服务器同时支持CORS, 所以如果服务器端不支持CORS, 那么浏览器还是会爆出跨域问题 (IE10+支持)")]),t._v(" "),v("h2",{attrs:{id:"简单请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简单请求"}},[t._v("#")]),t._v(" 简单请求")]),t._v(" "),v("p",[t._v("请求方法:")]),t._v(" "),v("ul",[v("li",[t._v("GET")]),t._v(" "),v("li",[t._v("POST")]),t._v(" "),v("li",[t._v("HEAD "),v("br")])]),t._v(" "),v("p",[t._v("请求头")]),t._v(" "),v("ul",[v("li",[t._v("Accept")]),t._v(" "),v("li",[t._v("Accept-Language")]),t._v(" "),v("li",[t._v("Content-Language")]),t._v(" "),v("li",[t._v("Last-Event-ID")]),t._v(" "),v("li",[t._v("Content-Type：只限于三个值"),v("code",[t._v("application/x-www-form-urlencoded")]),t._v("、"),v("code",[t._v("multipart/form-data")]),t._v("、"),v("code",[t._v("text/plain")])])]),t._v(" "),v("h2",{attrs:{id:"简单请求-跨域问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简单请求-跨域问题"}},[t._v("#")]),t._v(" 简单请求_跨域问题")]),t._v(" "),v("p",[t._v("Ajax可以捕获异常, 抛出跨域请求的错误, 因为后台, 没有支持CORS, 设置响应头"),v("code",[t._v('Access-Control-Allow-Origin", "*"')]),t._v(" "),v("br"),t._v(" "),v("img",{attrs:{src:"/webFront/screenshot_1575981177669.png",alt:""}}),t._v(" "),v("br"),t._v("\n后端想要支持CORS, 需要设置响应头"),v("code",[t._v('Access-Control-Allow-Origin", "*"')]),t._v(" (但是仅限于简单请求哦)\n"),v("img",{attrs:{src:"/webFront/screenshot_1575981571427.png",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"简单请求-响应头字段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简单请求-响应头字段"}},[t._v("#")]),t._v(" 简单请求_响应头字段")]),t._v(" "),v("ul",[v("li",[t._v("Access-Control-Allow-Origin 设置允许请求的浏览器端域名, *代表所有")]),t._v(" "),v("li",[t._v("Access-Control-Allow-Credentials 为true 的时候, 服务器允许浏览器发送Cookie到后台, 删除此字段, 不允许携带Cookie")])]),t._v(" "),v("blockquote",[v("p",[t._v("切记, 前端要设置ajaxObj.withCredentials = true 才可以让浏览器带上cookie")])]),t._v(" "),v("blockquote",[v("p",[t._v("切记2: cookie还是存在同源策略, 所以不同域名后台设置cookie不生效")])]),t._v(" "),v("ul",[v("li",[t._v("Access-Control-Allow-Headers 服务器端允许客户端, 携带过来的请求头")]),t._v(" "),v("li",[t._v("Access-Control-Expose-Headers 服务器端允许客户端, 拿到提取的响应头 "),v("br"),t._v("\n(默认只能拿到以下这些, 如果不设置此字段)\n"),v("ul",[v("li",[v("code",[t._v("ache-Control")])]),t._v(" "),v("li",[v("code",[t._v("Content-Language")])]),t._v(" "),v("li",[v("code",[t._v("Content-Type")])]),t._v(" "),v("li",[v("code",[t._v("Expires")])]),t._v(" "),v("li",[v("code",[t._v("Last-Modified")])]),t._v(" "),v("li",[v("code",[t._v("Pragma")])])])])]),t._v(" "),v("h2",{attrs:{id:"简单请求-跨域成功案例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简单请求-跨域成功案例"}},[t._v("#")]),t._v(" 简单请求_跨域成功案例")]),t._v(" "),v("ol",[v("li",[t._v("浏览器请求跨域资源, 请求是成功的, 看图\n"),v("img",{attrs:{src:"/webFront/screenshot_1575979398184.png",alt:""}})]),t._v(" "),v("li",[t._v("浏览器会在请求头添加Origin字段, 表明自己所在(协议+域名+端口), 服务器根据这个值来决定是否同意本次请求, 浏览器会接收到200正确的HTTP状态码\n"),v("ul",[v("li",[v("span",{staticStyle:{color:"red"}},[t._v("同意需要开启: 响应头:Access-Control-Allow-Origin: 同意链接的域名(*代表所有)")])]),t._v(" "),v("li",[t._v("不设置, 就是不同意跨域访问")])])])]),t._v(" "),v("blockquote",[v("p",[t._v("示例上的c.m.163.com默认是不支持跨域的, 我在谷歌浏览器上使用了CORS插件, 主要你明白, 后台只要开启了响应头(Access-Control-Allow-Origin), 我们就可以跨域访问")])]),t._v(" "),v("h2",{attrs:{id:"非简单请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#非简单请求"}},[t._v("#")]),t._v(" 非简单请求")]),t._v(" "),v("p",[t._v("请求方法")]),t._v(" "),v("ul",[v("li",[t._v("PUT")]),t._v(" "),v("li",[t._v("DELETE")])]),t._v(" "),v("p",[t._v("请求头")]),t._v(" "),v("ul",[v("li",[t._v("自定义名字的")])]),t._v(" "),v("h2",{attrs:{id:"非简单请求-options请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#非简单请求-options请求"}},[t._v("#")]),t._v(" 非简单请求_OPTIONS请求")]),t._v(" "),v("p",[t._v("会在正式发送PUT/DELETE请求前, 发送一次OPTIONS请求. 确认下后端是否允许非简单的请求\n"),v("img",{attrs:{src:"/webFront/screenshot_1575986306080.png",alt:""}}),t._v("\n不允许则报错\n"),v("img",{attrs:{src:"/webFront/screenshot_1575986322118.png",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"非简单请求-跨域成功"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#非简单请求-跨域成功"}},[t._v("#")]),t._v(" 非简单请求_跨域成功")]),t._v(" "),v("p",[t._v("服务器端, 需要作出响应设置")]),t._v(" "),v("ul",[v("li",[t._v('Access-Control-Allow-Methods 允许浏览器端的请求方式 例如"GET, POST, DELETE, PUT, OPTIONS"')]),t._v(" "),v("li",[t._v("Access-Control-Allow-Headers 允许浏览器端发送的请求头字段 "),v("br")])]),t._v(" "),v("p",[t._v("第一次OPTIONS请求, 查看响应头\n"),v("img",{attrs:{src:"/webFront/screenshot_1576053267637.png",alt:""}}),t._v("\n第二次, 正常发送Ajax请求, 接收结果\n"),v("img",{attrs:{src:"/webFront/screenshot_1576053291683.png",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),v("ol",[v("li",[t._v("浏览器同源策略, 作出的跨域限制, 但是现在浏览器支持了CORS标准, 允许跨域请求, 但是还需要后端支持CORS才可以.")]),t._v(" "),v("li",[t._v("Cookie还是存在同源策略的限制")]),t._v(" "),v("li",[t._v("JSONP只支持GET方式, 而CORS都可以支持")]),t._v(" "),v("li",[t._v("非简单请求, 注意让后台支持. 不单单只是跨域的支持哦")]),t._v(" "),v("li",[t._v("如果后台不支持跨域响应头设置, 前端可以采用代理服务器转发的方式, 来请求后台的接口")])])])}),[],!1,null,null,null);_.default=r.exports}}]);