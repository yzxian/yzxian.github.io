import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "面试指南", icon: "java", link: "/home.md" },
  {
    text: "知识星球",
    icon: "planet",
    link: "/about-the-author/zhishixingqiu-two-years.md",
  },
  { text: "开源项目", icon: "github", link: "/open-source-project/" },
  { text: "技术书籍", icon: "book", link: "/books/" },
  {
    text: "程序人生",
    icon: "article",
    link: "/high-quality-technical-articles/",
  },
  {
    text: "网站相关",
    icon: "about",
    children: [
      { text: "关于作者", icon: "zuozhe", link: "/about-the-author/" },
      {
        text: "更新历史",
        icon: "history",
        link: "/timeline/",
      },
    ],
  },
]);
