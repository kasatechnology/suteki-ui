import { defineConfig } from "vitepress";
import UnocssVitePlugin from "unocss/vite";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Suteki UI",
  description: "A fast, modern UI framework built for VueJS.",
  vite: {
    plugins: [
      UnocssVitePlugin({
        mode: "global",
        preprocess: (t) => {
          if (t.includes("!")) return t;
          return `!${t}`;
        },
      }),
    ],
  },
  vue: {
    script: {
      defineModel: true,
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: "Components",
        items: [
          {
            text: "Buttons",
            link: "/components/buttons",
          },
          {
            text: "Inputs",
            link: "/components/inputs",
          },
          {
            text: "Boolean Inputs",
            link: "/components/booleans",
          },
          {
            text: "Combobox Inputs",
            link: "/components/combobox",
          },
          {
            text: "Modals",
            link: "/components/modals",
          },
          {
            text: "Typography",
            link: "/components/typography",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/kasatechnology/suteki-ui" },
    ],
  },
});
