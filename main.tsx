import blog from "https://deno.land/x/blog/blog.tsx";

blog({
  author: "Jim",
  title: "Jim's Blog",
  description: "The blog description.",
  avatar: "https://cravatar.cn/avatar/90ab9245b61d143ed247ea107082fcb0",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:bjimsblog@outlook.com" },
    { title: "GitHub", url: "https://github.com/bet-io" },
    { title: "Twitter", url: "https://twitter.com/" },
    { title: "Bilibili", url: "https://space.bilibili.com/699324580" }
  ],
  lang: "zh",
  favicon: "https://i.imgtg.com/2022/12/11/DpUeb.png",
});
