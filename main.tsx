import blog from "https://deno.land/x/blog/blog.tsx";

blog({
  author: "Jim",
  title: "Jim's Blog",
  description: "The blog description.",
  avatar: "https://deno-avatar.deno.dev/avatar/83a531.svg",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:bjimsblog@outlook.com" },
    { title: "GitHub", url: "https://github.com/bet-io" },
    { title: "Twitter", url: "https://twitter.com/" },
    { title: "Bilibili", url: "https://space.bilibili.com/699324580" }
  ],
  lang: "zh",
});
