(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{500:function(s,a,t){"use strict";t.r(a);var r=t(53),n=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"计算机只认识0和1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算机只认识0和1"}},[s._v("#")]),s._v(" 计算机只认识0和1")]),s._v(" "),t("p",[s._v("计算机中只有电路, 电路有0v和5v的情况, 就是低电平和高电平 "),t("br"),s._v("\n对应我们二进制0和1, 所以计算机只认识0和1, 我们的字符串/数字/图片/音视频等, 其实都是0和1的组合")]),s._v(" "),t("h2",{attrs:{id:"number范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#number范围"}},[s._v("#")]),s._v(" Number范围")]),s._v(" "),t("p",[s._v("这里操作系统是64位的, 同时可以用64位二进制表示一个Number "),t("br"),s._v(" "),t("img",{attrs:{src:"/webFront/Snipaste_2020-03-20_22-56-07.png",alt:""}})]),s._v(" "),t("ul",[t("li",[s._v("sign(符号位): 0代表正数, 1代表负数")]),s._v(" "),t("li",[s._v("exponent(指数位): 能表示的Number范围, 2^10=1024")]),s._v(" "),t("li",[s._v("fraction(尾数为): 决定数字的精度, 2^53=9007199254740992 "),t("br"),s._v("\n所以, Number能表示的范围在 2^1024 (就是Number.MAX_VALUE的值)")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("Number"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MAX_VALUE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 近似值为 1.7976931348623157e+308")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"整数范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整数范围"}},[s._v("#")]),s._v(" 整数范围")]),s._v(" "),t("p",[s._v("所以, 超过了2^53的运算, 计算机能算, 但是就不敢保证精度了 "),t("br")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9007199254740992")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 结果: 9007199254740992")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9007199254740992")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 结果: 9007199254740994")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9007199254740992")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 结果: 9007199254740996")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9007199254740992")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 结果: 9007199254740996")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("所以, 整数范围也叫安全数范围"),t("br"),s._v("\n2^53 "),t("br"),s._v("\nIEEE754规定, 有效数字第一位默认总是1, 所以实际上我们的安全数应该是 "),t("br"),s._v("\n2^53-1 (52位二进制全为1的情况即时2^53-1的值)")]),s._v(" "),t("h2",{attrs:{id:"_0-1和0-2相加运算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-1和0-2相加运算"}},[s._v("#")]),s._v(" 0.1和0.2相加运算")]),s._v(" "),t("p",[s._v("计算机只认识0和1, 所以要先把0.1和0.2都转换成0和1来进行运算")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 0.1转化成二进制的算法：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v("取出整数部分"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.4")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v("取出整数部分"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.4")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v("取出整数部分"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.6")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v("取出整数部分"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v("取出整数部分"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.4")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v("取出整数部分"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.4")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v("取出整数部分"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.6")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v("取出整数部分"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v("取出整数部分"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 接下来会无限循环, 结果是")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v("…（无限循环）\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v("…（无限循环）\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("h2",{attrs:{id:"计算0-1-0-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算0-1-0-2"}},[s._v("#")]),s._v(" 计算0.1+0.2")]),s._v(" "),t("p",[s._v("其实无论是0.1+0.2还是其他小数相加/相乘/相减..运算, 都会有精度误差问题"),t("br"),s._v("\n计算机在计算时, 先把0.1和0.2转换成二进制才能计算"),t("br")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v("…（无限循环）\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v("…（无限循环）\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",[t("li",[s._v("对阶: 使2个数的小数点位置对齐, 对到小数点左边不是1, (0.2的大, 所以按照0.2的对阶), 向左移动三位 (|左边是对阶出去的)  "),t("br")]),s._v(" "),t("li",[s._v("数值存储结构中的尾数最多只能表示53位, 为了能近似表示0.1, 所以第54位就，模仿十进制的四舍五入，但二进制只有0和1, 于是变为0舍1入 "),t("br")]),s._v(" "),t("li",[s._v("对阶后保留53位的值")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("010")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("接下来进行按位+运算, 结果如第三行")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("指数\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0011")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("010")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("111")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 整数部分化为1(固定, 小数点左移1位, 指数少一位)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0111")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 刚刚最后(右)超出一位是1前进(舍入)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 再把小数位恢复, 所以最后结果")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.010011001100110011001100110011001100110011001100110100")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2^-2 + 2^-5 + 2^-6 + ... (因为小数位前是2^0, 小数位后面就是2^-位数), 所以挨个累加后的结果:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.30000000000000004440892098500626")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 所以最后的结果是0.30000000000000004")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"结论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[s._v("#")]),s._v(" 结论")]),s._v(" "),t("ul",[t("li",[s._v("在转成二进制保留53位时, 精度丢失一次(可能多补个1, 也可能丢失个1)")]),s._v(" "),t("li",[s._v("在指数归位时, 后面有多补进去个1, 于是进度误差 (有的小数没有误差, 因为丢失的不重要, 也补不上来1)")])]),s._v(" "),t("h2",{attrs:{id:"处理办法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#处理办法"}},[s._v("#")]),s._v(" 处理办法")]),s._v(" "),t("ol",[t("li",[s._v("当进行小数运算时, 保留2位小数即可")]),s._v(" "),t("li",[s._v("升阶, 先变成整数, 运算后, 再降阶回小数")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 都乘以10^1  (有多少位小数就^多少)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 再乘以0.1^1 (有多少位小数就^多少)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 结果为0.3")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"其他语言-统计精度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他语言-统计精度"}},[s._v("#")]),s._v(" 其他语言-统计精度")]),s._v(" "),t("p",[s._v("统计了所有语言精度结果: "),t("a",{attrs:{href:"https://0.30000000000000004.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://0.30000000000000004.com/"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);