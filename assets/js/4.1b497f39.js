(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{390:function(t,i,e){},427:function(t,i,e){"use strict";var a=e(390);e.n(a).a},432:function(t,i,e){"use strict";e.r(i);var a={name:"Valine",mounted:function(){var t=e(425);"undefined"!=typeof window&&(this.Windows=window,this.Windows.AV=e(426)),this.valine=new t,this.initValine()},watch:{$route:function(t,i){i.path!=t.path&&this.initValine()}},methods:{initValine:function(){var t=location.origin+location.pathname;document.getElementsByClassName("leancloud-visitors")[0].id=t,this.valine.init({el:"#vcomments",appId:"7fLzTcCdGIDpqxxea3yEHzRt-gzGzoHsz",appKey:"zswNifCP0Q1xv791UCjoYm7F",placeholder:"如果有好的想法, 还请不吝赐教",avatar:"wavatar",path:t,meta:["nick","mail"],visitor:!0})}}},n=(e(427),e(53)),s=Object(n.a)(a,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,i=this._self._c||t;return i("section",{staticClass:"page",staticStyle:{"border-top":"2px solid #eaecef","padding-top":"1rem","margin-top":"2rem","padding-right":"2.5rem"}},[i("div",{staticStyle:{"padding-left":"2.5rem"}},[i("span",{staticClass:"leancloud-visitors",attrs:{"data-flag-title":"Your Article Title"}},[i("em",{staticClass:"post-meta-item-text"},[this._v("阅读量：")]),this._v(" "),i("i",{staticClass:"leancloud-visitors-count"})])]),this._v(" "),i("h3",{staticStyle:{"padding-left":"2.5rem"}},[this._v("发表评论：")]),this._v(" "),i("div",{staticStyle:{"padding-left":"2.5rem"},attrs:{id:"vcomments"}})])}],!1,null,null,null);i.default=s.exports}}]);