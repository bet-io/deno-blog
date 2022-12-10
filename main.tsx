import blog from "https://deno.land/x/blog/blog.tsx";

blog({
  author: "Dino",
  title: "Jim's Blog",
  description: "The blog description.",
  avatar: "https://deno-avatar.deno.dev/avatar/83a531.svg",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:dengyvjun0507@outlook.com },
    { title: "GitHub", url: "https://github.com/bet-io" },
  ],
  lang: "zh",
});
