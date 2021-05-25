(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{467:function(s,e,a){"use strict";a.r(e);var t=a(53),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"rebase-合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebase-合并"}},[s._v("#")]),s._v(" Rebase 合并")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("该命令可以让和 merge 命令得到的结果基本是一致的。"),a("br")])]),s._v(" "),a("li",[a("p",[s._v("通常使用 merge 操作将分支上的代码合并到 master 中，分支样子如下所示 "),a("br")])]),s._v(" "),a("li",[a("p",[s._v("使用 rebase 后，会将 develop 上的 commit 按顺序移到 master 的第三个 commit 后面，分支样子 "),a("br")])]),s._v(" "),a("li",[a("p",[s._v("Rebase 对比 merge，优势在于合并后的结果很清晰，只有一条线，劣势在于如果一旦出现冲突，解决冲突很麻烦，可能要解决多个冲突，但是 merge 出现冲突只需要解决一次。 "),a("br")])]),s._v(" "),a("li",[a("p",[s._v("使用 rebase 应该在需要被 rebase 的分支上操作，并且该分支是本地分支。如果 develop 分支需要 rebase 到 master 上去，那么应该如下操作")])])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("## branch develop\ngit rebase master\ngit checkout master\n## 用于将 "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("master")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v(" 上的 "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HEAD")]),s._v(" 移动到最新的 commit\ngit merge develop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"stash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stash"}},[s._v("#")]),s._v(" stash")]),s._v(" "),a("ul",[a("li",[s._v("stash 用于临时保存工作目录的改动。开发中可能会遇到代码写一半需要切分支打包的问题，如果这时候你不想 commit 的话，就可以使用该命令。")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("git  stash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("使用该命令可以暂存你的工作目录，后面想恢复工作目录，只需要使用")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("git stash pop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这样你之前临时保存的代码又回来了")]),s._v(" "),a("h2",{attrs:{id:"reflog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflog"}},[s._v("#")]),s._v(" reflog")]),s._v(" "),a("ul",[a("li",[s._v("reflog 可以看到 HEAD 的移动记录，假如之前误删了一个分支，可以通过 git reflog 看到移动 HEAD 的哈希值")])]),s._v(" "),a("h4",{attrs:{id:"如图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如图"}},[s._v("#")]),s._v(" 如图: "),a("img",{attrs:{src:s.$withBase("/img/ggg1.png"),alt:"foo"}})]),s._v(" "),a("ul",[a("li",[s._v("从图中可以看出，HEAD 的最后一次移动行为是 merge 后，接下来分支 new 就被删除了，那么我们可以通过以下命令找回 new 分支")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("git checkout "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),s._v("d9aca\ngit checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("b "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("PS：reflog 记录是时效的，只会保存一段时间内的记录。")]),s._v(" "),a("h2",{attrs:{id:"reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[s._v("#")]),s._v(" Reset")]),s._v(" "),a("ul",[a("li",[s._v("如果你想删除刚写的 commit，就可以通过以下命令实现")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("git reset "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("hard "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HEAD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("但是 reset 的本质并不是删除了 commit，而是重新设置了 HEAD 和它指向的 branch。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);