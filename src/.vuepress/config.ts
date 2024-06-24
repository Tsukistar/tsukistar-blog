import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "星河夜梦记",
      description: "月落星河Tsukistar的博客",
    },
    "/zh-TC/": {
      lang: "zh-TW",
      title: "星河夜夢記",
      description: "月落星河Tsukistar的博客",
    },
    "/en-US/": {
      lang: "en-US",
      title: "Tsukistar's Fantasy Hometown",
      description: "Tsukistar's Blog",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
