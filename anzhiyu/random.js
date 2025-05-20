var posts=["2025/03/23/文学/文字上的中国/文字上的中国-谚语/","2024/10/24/技术/android/ADB命令集合/","2018/03/11/文学/杂文/从军行/","2016/07/31/文学/杂文/随想记/","2018/01/31/文学/杂文/万籁如息/","2023/02/19/技术/git/Git异常处理/","2023/02/18/技术/git/Git操作文档/","2018/11/13/技术/ecmascript/ES6深入研究/","2019/05/08/技术/css/CSS的Transition与Animation/","2019/05/06/技术/css/CSS团队协作规范/","2025/05/02/技术/css/W3C实用技术/","2019/10/11/技术/css/清除浮动细节介绍/","2019/03/20/技术/css/网页设计的垂直居中/","2019/03/13/技术/css/CSS编程技巧/","2024/10/26/技术/html/HTML字符实体/","2020/08/23/技术/javascript/JavaScript常用方法集/","2018/11/13/技术/javascript/JavaScript知多少/","2024/11/07/技术/javascript/PixiJS学习笔记/","2024/11/25/技术/javascript/axios知识点汇总/","2019/08/29/技术/javascript/正则表达式实例/","2018/11/13/技术/javascript/数组大概知多少/","2018/11/13/技术/javascript/正则表达式手册/","2024/04/06/技术/node/Nodejs开发库/","2018/10/02/技术/node/基于Node的实时聊天室/","2019/05/08/技术/jquery/jQuery选择器/","2019/05/13/技术/react/React生命周期/","2019/05/14/技术/react/Redux制作memeGenerator/","2019/04/09/技术/react/React项目详解/","2019/04/17/技术/react/React进阶训练/","2019/04/11/技术/react/使用ReactNative构建App/","2025/04/13/技术/uniapp/安卓终端UniApp项目集成wangEditor富文本编辑器/","2019/10/13/技术/typescript/TypeScript开发文档/","2024/06/10/技术/vite/Vite开发配置/","2019/09/05/技术/vscode/vscode配置/","2019/02/18/技术/vue/Vue基础教程/","2019/02/18/技术/vue/Vuejs基础教程/","2023/01/22/技术/vue/Vue技术点汇总/","2025/03/10/技术/vue/Vue3学习笔记/","2019/08/23/技术/vue/Vue技术细节/","2019/10/12/技术/vue/Vue组件通信/","2019/08/24/技术/vue/状态管理与Vuex/","2018/11/13/技术/vue/管中窥Vue/","2025/05/18/技术/webpack/webpack学习笔记/","2019/02/23/技术/web安全/读书笔记Web安全一/","2019/05/07/技术/前端/前端优化/","2020/08/23/技术/数据库/Web-SQL浏览器数据库实例/","2019/05/12/技术/前端/前端插件库/","2023/01/24/技术/前端/功能代码集合/","2024/06/29/技术/文档/开发文档/","2025/04/26/技术/网络/前端性能优化之网络负载/","2025/04/26/技术/文档/解决方案备忘录/","2019/02/22/技术/项目/无人点餐收银系统-项目初始化/","2018/11/13/技术/网络/网络知识面面观/","2019/02/23/技术/项目/使用Quasar设计Material和IOS风格的响应式网站/","2025/05/10/技术/项目/项目开发配置汇总/","2023/06/06/技术/项目/项目总集/","2016/10/21/诗词/可以攻玉/仲秋记事/","2017/09/03/诗词/可以攻玉/又见新春/","2017/10/02/诗词/可以攻玉/少年锦时/","2017/09/03/诗词/可以攻玉/月影横斜水清浅/","2017/09/03/诗词/可以攻玉/月落风荷咏/","2017/09/03/诗词/可以攻玉/水脉洗春芳/","2017/09/03/诗词/可以攻玉/蓝色盛夏/","2017/09/03/诗词/可以攻玉/醉是流年/","2017/09/03/诗词/七言/七月作别/","2017/11/16/诗词/七言/临窗幕/","2017/09/03/诗词/七言/仲夏/","2017/11/12/诗词/七言/双十一作/","2018/04/17/诗词/七言/如梦令/","2016/10/11/诗词/七言/怀秋瑾/","2016/10/17/诗词/七言/登高楼，怀家老/","2016/10/11/诗词/七言/秋思/","2018/05/24/诗词/七言/空山鸟语/","2018/05/24/诗词/七言/孟夏/","2017/09/03/诗词/七言/粤北明珠·英德/","2016/08/28/诗词/七言/苏杭行记/","2017/12/31/诗词/七言/辞岁/","2024/04/01/诗词/七言/踏春/","2016/09/02/诗词/七言/醉相逢/","2016/07/27/诗词/七言/锦字华年/","2016/02/26/诗词/它山之石/周庄水韵/","2018/03/23/诗词/它山之石/岁月神偷/","2016/07/24/诗词/它山之石/归根/","2016/07/31/诗词/它山之石/百字令·投袁大琴南/","2016/07/31/诗词/它山之石/统计十载有所感/","2016/02/26/诗词/它山之石/逍遥游/","2016/06/18/诗词/它山之石/鹧鸪天/","2016/11/04/诗词/五言/今又重阳，岁岁重阳/","2016/12/03/诗词/五言/初冬闲情/","2020/08/23/诗词/五言/八月新作/","2016/07/19/诗词/五言/吴山晚登临/","2017/12/19/诗词/五言/层林尽染/","2018/03/21/诗词/五言/春分/","2018/01/15/诗词/五言/打油诗/","2018/01/31/诗词/五言/春芳/","2018/05/24/诗词/五言/晓风轻/","2016/07/29/诗词/五言/正月记事/","2018/05/24/诗词/五言/樊城多锦绣/","2016/10/01/诗词/五言/雨后说秋/","2020/05/16/诗词/五言/远方无从往/","2016/08/12/文学/散文/少年行/","2017/09/03/文学/散文/念/","2017/09/03/文学/散文/荔园晚风/","2025/05/02/文学/美绘国学/美绘国学书系/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://wuhuajin.com/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://wuhuajin.com/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"吴华锦","link":"https://wuhuajin.com/","avatar":"/img/pic/circle.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"吴华锦","link":"https://wuhuajin.com/","avatar":"/img/pic/circle.jpg","descr":"生活明朗，万物可爱","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };