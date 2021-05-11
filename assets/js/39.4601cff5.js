(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{464:function(t,s,a){"use strict";a.r(s);var r=a(53),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"什么是git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是git"}},[t._v("#")]),t._v(" 什么是Git")]),t._v(" "),a("p",[t._v("分布式版本控制系统 "),a("br"),t._v("\n多人分别在自己电脑上开发同一个项目, 但是他们要把项目合并到一起, 但是谁改了什么文件需要一一核对, 很麻烦, 所以需要git来帮助我们合并代码, 每个人在电脑里都可以记录这些信息 "),a("br"),t._v(" "),a("img",{attrs:{src:"/software/Snipaste_2020-06-20_19-48-28.png",alt:""}}),t._v(" "),a("br")]),t._v(" "),a("ol",[a("li",[t._v("Git能监控文件变更")]),t._v(" "),a("li",[t._v("合并文件")]),t._v(" "),a("li",[t._v("记录每个提交节点所有文件状态")])]),t._v(" "),a("h2",{attrs:{id:"git中央服务器准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git中央服务器准备"}},[t._v("#")]),t._v(" Git中央服务器准备")]),t._v(" "),a("p",[t._v("其实git是分布式的, 但是我们一般会专门准备一台git服务器负责同步托管代码的 "),a("br")]),t._v(" "),a("ol",[a("li",[t._v("准备Git服务器端: 可以使用github.com / gitlab.com / gitee.com / 自己服务器架设(申请一块共享保存代码的地方)")]),t._v(" "),a("li",[t._v("这里我选择gitee.com(国内服务器, 访问快), 注册账号, 新建项目 "),a("br"),t._v(" "),a("ul",[a("li",[t._v("给仓库起个名字")]),t._v(" "),a("li",[t._v("公开就是所有人能下载你上传的代码, 私有的团队外的人看不到")]),t._v(" "),a("li",[t._v("REDAME.md文件是一个项目介绍文件 "),a("br"),t._v(" "),a("img",{attrs:{src:"/software/Snipaste_2020-06-20_20-08-15.png",alt:""}}),t._v(" "),a("br")])])]),t._v(" "),a("li",[t._v("得到Git服务器端地址(一般以.git结尾) 例: https://gitee.com/lidongxuwork/ceshi.git\n"),a("img",{attrs:{src:"/software/Snipaste_2020-06-20_20-09-39.png",alt:""}}),t._v(" "),a("br")])]),t._v(" "),a("h2",{attrs:{id:"本地安装git软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地安装git软件"}},[t._v("#")]),t._v(" 本地安装git软件")]),t._v(" "),a("ol",[a("li",[t._v("根据自己操作系统, 下载git软件: "),a("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),a("OutboundLink")],1),t._v(" "),a("br"),t._v(" "),a("img",{attrs:{src:"/software/Snipaste_2020-06-20_20-24-13.png",alt:""}}),t._v(" "),a("br")]),t._v(" "),a("li",[t._v("双击安装后, 验证本机是否安装成功, 在终端中执行\n"),a("img",{attrs:{src:"/software/Snipaste_2020-06-21_11-52-46.png",alt:""}}),t._v(" "),a("br"),t._v("\n如果显示版本, 就代表安装成功")])]),t._v(" "),a("h2",{attrs:{id:"本地暂无项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地暂无项目"}},[t._v("#")]),t._v(" 本地暂无项目")]),t._v(" "),a("p",[t._v("本地无git里代码, 想从Git上拉取项目(或者新建项目_建立Git连接)")]),t._v(" "),a("ol",[a("li",[t._v("本地准备一个空文件夹(有隐藏文件存在的不算空文件夹)")]),t._v(" "),a("li",[t._v("克隆Git服务器上的项目代码到本地, 注意这步类似于下载, 所以只需要执行一次即可\n"),a("code",[t._v("git clone https://gitee.com/lidongxuwork/ceshi.git .")])])]),t._v(" "),a("blockquote",[a("p",[t._v("命令解释: git clone git服务器仓库地址 点代表当前终端执行命令所在目录 "),a("br")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/software/Snipaste_2020-06-21_11-39-48.png",alt:""}}),t._v(" "),a("img",{attrs:{src:"/software/Snipaste_2020-06-21_12-12-13.png",alt:""}}),t._v("\n这个目录是Git来跟踪管理版本库的，git相关信息都保存在这里(so, 不要随意删除和修改)")]),t._v(" "),a("h2",{attrs:{id:"本地已有项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地已有项目"}},[t._v("#")]),t._v(" 本地已有项目")]),t._v(" "),a("ol",[a("li",[t._v("git init 初始化git环境 (生成一个隐藏的.git文件夹---用于记录git操作信息)")]),t._v(" "),a("li",[t._v("git remote add origin https://gitee.com/lidongxuwork/ceshi.git (添加远程仓库的地址)")]),t._v(" "),a("li",[t._v("如果是和线上Git合并, 本地需要先暂存, 提交, 拉取, 推送")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git add "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\ngit commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'提交说明'")]),t._v("\ngit pull origin master "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("allow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("unrelated"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("histories \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许不同的本地git拉取远程git仓库的内容")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (origin是远程仓库的名字, master是一个分支, 指向origin)")]),t._v("\ngit push "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("u origin master\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -u 作用是把本地和远程origin仓库关联起来")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 下次直接git push就可以了")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("push以后可以去远程仓库的网页中查看是否有刚刚推送上来的代码")])]),t._v(" "),a("h2",{attrs:{id:"gitignore文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitignore文件"}},[t._v("#")]),t._v(" .gitignore文件")]),t._v(" "),a("p",[t._v("创建此文件")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("type nul"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gitignore\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("此文件一般在git项目的根目录上, 来管理哪些文件/文件夹是不需要Git来监测的, 也不会进行提交/合并")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("node_modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n\n# Editor directories and files\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("idea\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vscode\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("效果就是, 当你工程中出现此文件里配置的文件夹/文件, 都不会被git检测, 也不会和别人合并和提交了 "),a("br"),t._v("\ngit status查看本地的变更 "),a("br"),t._v(" "),a("img",{attrs:{src:"/software/Snipaste_2020-06-21_19-49-31.png",alt:""}}),t._v(" "),a("br"),t._v("\n发现本地新建的node_modules和隐藏的.idea都没有被检测到")])])}),[],!1,null,null,null);s.default=e.exports}}]);