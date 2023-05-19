import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnocssVitePlugin from "unocss/vite";

// https://vitejs.dev/config/

interface IConfig {
  mode: string;
}

export default ({ mode }: IConfig) => {
  const isDev = mode === "development";

  return defineConfig({
    plugins: [
      vue({
        script: {
          defineModel: true
        }
      }),
      UnocssVitePlugin({ mode: isDev ? "global" : "vue-scoped" }),
    ],
    build: {
      lib: {
        entry: "./src/index.ts",
        name: "SutekiUI",
        fileName: "suteki-ui",
      },
      rollupOptions: {
        external: ["vue"],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            vue: "Vue",
          },
        },
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  });
};
