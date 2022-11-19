import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // proxy: {
    //   // 选项写法
    //   '/api': {
    //     target: 'http://localhost:8000', // 所要代理的目标地址
    //     rewrite: path => path.replace(/^\/api/, ''), 
    //   }
    // },
    //允许外部文件的引入
    fs: {
      strict: false,
    },

  },
  
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
