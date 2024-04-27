(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{444:function(t,s,a){"use strict";a.r(s);var e=a(9),v=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"github-pages在腾讯云域名解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-pages在腾讯云域名解析"}},[t._v("#")]),t._v(" Github Pages在腾讯云域名解析")]),t._v(" "),s("p",[t._v("这里选择部署在Github Pages而不是在国内访问速度更快的Gitte Pages，有两个原因")]),t._v(" "),s("ul",[s("li",[t._v("Github Pages可以绑定自己的域名，Gitte Pages不能。")]),t._v(" "),s("li",[t._v("Gitte Pages没有自动更新网站内容的功能，每次在depoly之后还需要手动去Gitte Pages的设置页面更新。")])]),t._v(" "),s("h2",{attrs:{id:"_1-关于网站备案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-关于网站备案"}},[t._v("#")]),t._v(" 1.关于网站备案")]),t._v(" "),s("p",[t._v("很多人好奇Github Pages需不需要备案，所以先讲一下网站备案的规则。")]),t._v(" "),s("blockquote",[s("p",[t._v("国内主机需要备案，国外主机不用。")])]),t._v(" "),s("p",[t._v("由于Github Pages的主机是在国外，绑定域名是不需要备案的。")]),t._v(" "),s("h2",{attrs:{id:"_2-购买域名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-购买域名"}},[t._v("#")]),t._v(" 2.购买域名")]),t._v(" "),s("p",[t._v("我是在腾讯云购买的域名，购买的地址"),s("a",{attrs:{href:"https://buy.cloud.tencent.com/domain?from=console",target:"_blank",rel:"noopener noreferrer"}},[t._v("在这"),s("OutboundLink")],1),t._v("（不是广告）。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Master-Frank/Image-hosting/img/20211019142936.png",alt:"image-20211019142929708"}})]),t._v(" "),s("p",[t._v("域名购买后打开"),s("a",{attrs:{href:"https://console.cloud.tencent.com/domain",target:"_blank",rel:"noopener noreferrer"}},[t._v("控制台"),s("OutboundLink")],1),t._v("，点击左侧的域名信息模板，点击新建模板，填写详细的信息，完成实名认证。时间可能要1-3天。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Master-Frank/Image-hosting/img/20211019143944.png",alt:"image-20211019143944751"}})]),t._v(" "),s("p",[t._v("实名认证成功后，在控制台看到域名的服务状态为正常，那么该域名已经可以使用了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Master-Frank/Image-hosting/img/20211019144206.png",alt:"image-20211019144206093"}})]),t._v(" "),s("h2",{attrs:{id:"_3-为github-pages增加域名解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-为github-pages增加域名解析"}},[t._v("#")]),t._v(" 3.为Github Pages增加域名解析")]),t._v(" "),s("p",[t._v("在域名的控制台点击"),s("code",[t._v("解析")]),t._v("进入DNSPod的域名解析页面。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Master-Frank/Image-hosting/img/20211019144356.png",alt:"image-20211019144356447"}})]),t._v(" "),s("p",[t._v("接下来需要添加两条记录。具体看图")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Master-Frank/Image-hosting/img/20211019152803.png",alt:"image-20211019152803450"}})]),t._v(" "),s("p",[t._v("首先设置确定你希望用来访问Github Pages的域名。如果是一级域名，如www.frankdawn.com.cn，则第一条的主机记录为"),s("code",[t._v("@")]),t._v("，第二条的主机记录为"),s("code",[t._v("www")]),t._v("；如果要设置二级域名，如www.blog.frankdawn.com.cn，则第一条主机记录为"),s("code",[t._v("blog")]),t._v("，第二条主机记录为"),s("code",[t._v("www.blog")]),t._v("。")]),t._v(" "),s("p",[t._v("第一条记录：")]),t._v(" "),s("ul",[s("li",[t._v("主机记录："),s("code",[t._v("@")]),t._v("/"),s("code",[t._v("自定义的二级域名")])]),t._v(" "),s("li",[t._v("记录类型：A")]),t._v(" "),s("li",[t._v("记录值：在cmd中ping自己的Github Pages地址"),s("code",[t._v("<用户名>.github.io")]),t._v("得到的ip地址，如下图。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Master-Frank/Image-hosting/img/20211019130708.png",alt:"image-20211019130708257"}})]),t._v(" "),s("p",[t._v("第二条记录:")]),t._v(" "),s("ul",[s("li",[t._v("主机记录："),s("code",[t._v("www")]),t._v("/"),s("code",[t._v("www.自定义的二级域名")])]),t._v(" "),s("li",[t._v("记录类型：CNAME")]),t._v(" "),s("li",[t._v("记录值：你的Github Pages地址"),s("code",[t._v("<用户名>.github.io")])])]),t._v(" "),s("h2",{attrs:{id:"_4-在github-pages中绑定域名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-在github-pages中绑定域名"}},[t._v("#")]),t._v(" 4.在Github Pages中绑定域名")]),t._v(" "),s("p",[t._v("在Github Pages中绑定域名可以在Pages的设置页面的Custom domain中直接输入。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Master-Frank/Image-hosting/img/20211027132947.png",alt:"image-20211027132940334"}})]),t._v(" "),s("p",[t._v("但是这样有一个问题，"),s("strong",[t._v("每次提交到"),s("code",[t._v("gh-pages")]),t._v("分支，使用Custom domain绑定的域名就会失效")]),t._v("。所以需要用Github Pages绑定域名的另一个方法："),s("strong",[t._v("添加CNAME文件")]),t._v("。")]),t._v(" "),s("p",[t._v("vuepress提交到"),s("code",[t._v("gh-pages")]),t._v("并生成 Github Pages的页面的目录是执行"),s("code",[t._v("npm run build")]),t._v("后生成的dist目录，而"),s("strong",[t._v("生成dist目录时是以"),s("code",[t._v("/docs/.vuepress/public")]),t._v("为根目录的")]),t._v("。因为CNAME文件需要提交到部署Github Pages所在的分支的根目录，因此需要放在"),s("code",[t._v("/docs/.vuepress/public")]),t._v("下。")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("/docs/.vuepress/public")]),t._v("下中添加一个文件"),s("code",[t._v("CNAME")]),t._v("，"),s("strong",[t._v("没有后缀")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Master-Frank/Image-hosting/img/20211019162746.png",alt:"创建CNAME"}})]),t._v(" "),s("p",[t._v("用记事本打开CNAME，内容填写你希望用来访问Github Pages的域名，如下图")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Master-Frank/Image-hosting/img/20211019151838.png",alt:"CNAME"}})]),t._v(" "),s("p",[t._v("然后更新代码，在主目录中Git Bash")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"update CNAME"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("进入仓库的Github Pages的设置，如果看到红色圈住的地方已经是在"),s("code",[t._v("CNAME")]),t._v("中的域名，说明已经生效，可以用这个域名访问了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Master-Frank/Image-hosting/img/20211019155559.png",alt:"image-20211019155559582"}})]),t._v(" "),s("h2",{attrs:{id:"_5-修改config-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-修改config-js"}},[t._v("#")]),t._v(" 5.修改config.js")]),t._v(" "),s("p",[t._v("绑定成功后会发现一个问题，页面的样式消失了。此时打开docs下的config.js，将base那一行注释掉，如下图。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Master-Frank/Image-hosting/img/20211019154122.png",alt:"image-20211019154121945"}})]),t._v(" "),s("p",[t._v("再运行一次deploy.sh，然后就能使用自己的域名正常访问啦。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Master-Frank/Image-hosting/img/20211019160012.png",alt:"image-20211019160011520"}})]),t._v(" "),s("Vssue")],1)}),[],!1,null,null,null);s.default=v.exports}}]);