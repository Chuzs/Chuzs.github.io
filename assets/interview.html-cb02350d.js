import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as s,c as h,e as p,a as e,b as t,d as r,f as i}from"./app-efe0c205.js";const c={},u=e("p",null,[e("code",null,"more"),t(" webpack面试题。")],-1),d=i('<h2 id="webpack与grunt、gulp的不同" tabindex="-1"><a class="header-anchor" href="#webpack与grunt、gulp的不同" aria-hidden="true">#</a> webpack与grunt、gulp的不同？</h2><p>三者都是前端构建工具，grunt和gulp在早期比较流行，现在webpack相对来说比较主流，不过一些轻量化的任务还是会用gulp来处理，比如单独打包CSS文件等。<br> grunt和gulp是基于任务和流（Task、Stream）的。类似jQuery，找到一个（或一类）文件，对其做一系列链式操作，更新流上的数据， 整条链式操作构成了一个任务，多个任务就构成了整个web的构建流程。<br> webpack是基于入口的。webpack会自动地递归解析入口所需要加载的所有资源文件，然后用不同的Loader来处理不同的文件，用Plugin来扩展webpack功能。<br> 所以总结一下：</p><ul><li>从构建思路来说<br> gulp和grunt需要开发者将整个前端构建过程拆分成多个<code>Task</code>，并合理控制所有<code>Task</code>的调用关系 webpack需要开发者找到入口，并需要清楚对于不同的资源应该使用什么Loader做何种解析和加工</li><li>对于知识背景来说<br> gulp更像后端开发者的思路，需要对于整个流程了如指掌 webpack更倾向于前端开发者的思路</li></ul><h2 id="页面内容" tabindex="-1"><a class="header-anchor" href="#页面内容" aria-hidden="true">#</a> 页面内容</h2><p>你可以自由在这里书写你的 Markdown。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li><p>你可以将图片和 Markdown 文件放置在一起，但是你需要使用<strong>相对链接</strong><code>./</code> 进行引用。</p></li><li><p>对于 <code>.vuepress/public</code> 文件夹的图片，请使用绝对链接 <code>/</code> 进行引用。</p></li></ul></div><p>主题包含了一个自定义徽章可以使用:</p>',7),_=e("h2",{id:"页面结构",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#页面结构","aria-hidden":"true"},"#"),t(" 页面结构")],-1),g=e("p",null,"此页面应当包含:",-1),m={href:"https://theme-hope.vuejs.press/zh/guide/layout/breadcrumb.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://theme-hope.vuejs.press/zh/guide/feature/page-info.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://theme-hope.vuejs.press/zh/guide/layout/page.html#%E6%A0%87%E9%A2%98%E5%88%97%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"},k={href:"https://theme-hope.vuejs.press/guide/feature/meta.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://theme-hope.vuejs.press/zh/guide/feature/comment.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://theme-hope.vuejs.press/zh/guide/layout/navbar.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html",target:"_blank",rel:"noopener noreferrer"},j={href:"https://theme-hope.vuejs.press/zh/guide/layout/footer.html",target:"_blank",rel:"noopener noreferrer"},z=e("li",null,"返回顶部按钮",-1),E=e("p",null,"你可以通过主题选项和页面 Frontmatter 自定义它们。",-1);function y(B,N){const l=n("Badge"),o=n("ExternalLinkIcon");return s(),h("div",null,[u,p(" more "),d,e("blockquote",null,[e("p",null,[t("文字结尾应该有深蓝色的 徽章文字 徽章。 "),r(l,{text:"徽章文字",color:"#242378"})])]),_,g,e("ul",null,[e("li",null,[e("a",m,[t("路径导航"),r(o)])]),e("li",null,[e("a",b,[t("标题和页面信息"),r(o)])]),e("li",null,[e("a",f,[t("TOC (文章标题列表)"),r(o)])]),e("li",null,[e("a",k,[t("贡献者、更新时间等页面元信息"),r(o)])]),e("li",null,[e("a",v,[t("评论"),r(o)])]),e("li",null,[e("a",w,[t("导航栏"),r(o)])]),e("li",null,[e("a",x,[t("侧边栏"),r(o)])]),e("li",null,[e("a",j,[t("页脚"),r(o)])]),z]),E])}const A=a(c,[["render",y],["__file","interview.html.vue"]]);export{A as default};
