// 插件配置
module.exports = [
  // 本地插件
  [require('../plugins/love-me'), { // 鼠标点击爱心特效
    color: '#11a8cd', // 爱心颜色，默认随机色
    //excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
  }],

  'vuepress-plugin-baidu-autopush', // 百度自动推送

  // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
  [
    'thirdparty-search',
    {
      thirdparty: [
        // 可选，默认 []
        {
          title: '在MDN中搜索',
          frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
          behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
        },
        {
          title: '在Runoob中搜索',
          frontUrl: 'https://www.runoob.com/?s=',
        },
        {
          title: '在Vue API中搜索',
          frontUrl: 'https://cn.vuejs.org/v2/api/#',
        },
        {
          title: '在Bing中搜索',
          frontUrl: 'https://cn.bing.com/search?q=',
        },
        //{
        //  title: '通过百度搜索本站的',
        //  frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20',
        //},
      ],
    },
  ],

  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    'demo-block',
    {
      // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },
  ],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  [
    'vuepress-plugin-baidu-tongji', // 百度统计
    {
      hm: '503f098e7e5b3a5b5d8c5fc2938af002',
    },
  ],
  //[
  //  'vuepress-plugin-comment', // 评论
  //  {
  //    choosen: 'gitalk',
  //    options: {
  //      clientID: 'a6e1355287947096b88b',
  //      clientSecret: 'f0e77d070fabfcd5af95bebb82b2d574d7248d71',
  //      repo: 'blog-gitalk-comment', // GitHub 仓库
  //      owner: 'xugaoyi', // GitHub仓库所有者
  //      admin: ['xugaoyi'], // 对仓库有写权限的人
  //      // distractionFreeMode: true,
  //      pagerDirection: 'last', // 'first'正序 | 'last'倒序
  //      id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
  //      title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
  //      labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
  //      body:
  //        '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
  //    },
  //  },
  //],
  [
    '@vssue/vuepress-plugin-vssue',
    {
      // 设置 `platform` 而不是 `api`
      platform: 'github-v4', //如果使用github-v3，这里改为github
      locale: 'zh', //语言：中文

      // 其他的 Vssue 配置
      owner: 'Master-Frank', //你的Gihub用户名
      repo: 'Frank-Notes',  //你的vuepress所在仓库名称
      clientId: 'cd316451343a5f21ffa2',  //OAuth app的Client ID
      clientSecret: '75b3bf34987232dc4c8de198ef11884efabb8052',  //OAuth app的Client secret
      autoCreateIssue: true // 自动创建评论，默认是false，最好设置为true，这样首次进入页面的时候就不用手动去创建评论了。
    },
  ],
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],
]
