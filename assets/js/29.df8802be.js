(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{453:function(t,i,l){"use strict";l.r(i);var a=l(53),s=Object(a.a)({},(function(){var t=this,i=t.$createElement,l=t._self._c||i;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h3",{attrs:{id:"md5加密的使用"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#md5加密的使用"}},[t._v("#")]),t._v(" md5加密的使用")]),t._v(" "),l("p",[t._v("一般在注册输入用户名和密码时, 用户输入的密码如果不进行 md5加密的话,那么在数据库上显示的就会把用户输入的原密码显示出来.")]),t._v(" "),l("h3",{attrs:{id:"md5加密方式-通过第三方模块-utility"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#md5加密方式-通过第三方模块-utility"}},[t._v("#")]),t._v(" md5加密方式----通过第三方模块: utility")]),t._v(" "),l("ul",[l("li",[t._v("使用步骤:\n"),l("ul",[l("li",[t._v("通过下载第三方模块, npm i utility")]),t._v(" "),l("li",[t._v("2.引入该模块")]),t._v(" "),l("li",[t._v("3.使用其方法md5();    参数就是想要加密的密码")]),t._v(" "),l("li",[t._v("post方式就是:   req.body.id=utility.md5(req. body.utility)")])])])]),t._v(" "),l("h3",{attrs:{id:"在进行登录验证的时候遇到的问题"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#在进行登录验证的时候遇到的问题"}},[t._v("#")]),t._v(" 在进行登录验证的时候遇到的问题")]),t._v(" "),l("ul",[l("li",[t._v("进行登录的时候,数据库会自动进行匹配,查看数据库中是否有相同的用户名和密码,进行匹配,")]),t._v(" "),l("li",[t._v("那么在验证sql语句的时候,会有一个小问题,不管数据库是否有匹配的值,那么数据库都不会报错,")]),t._v(" "),l("li",[t._v("所以:进行验证的时候会有俩种情况:\n"),l("ul",[l("li",[t._v("1.在查到匹配的值时,返回的是数组,里面带有数据,")]),t._v(" "),l("li",[t._v("2.在查不到匹配的时候,返回的是空数组.")])])])])])}),[],!1,null,null,null);i.default=s.exports}}]);