import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from "path";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts(), cssInjectedByJsPlugin(),],
  build: {
    lib: {
      entry: resolve(__dirname, "src/ease-button-ui.ts"),
      name: "EaseButton",
      fileName: "ease-button-ui",
    },
    rollupOptions: {
      external: ["vue", "pinia"],
      output: {
        globals: {
          vue: "Vue",
          pinia: "Pinia",
        },
      },
    },
  },
});
