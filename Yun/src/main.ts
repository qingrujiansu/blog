import { createApp } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin} from "@vueuse/motion";


import App from "./App.vue";
import router from "./router";
import "./assets/reset.css";
import Nav from "@/components/Nav.vue";
import Personal from "@/components/Personal.vue";

//引入切换暗黑模式样式
// import 'element-plus/theme-chalk/dark/css-vars.css';
// import '@/assets/dark.less'

const app = createApp(App);

//注册icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

//链式注册全局组件(好像不全局注册也能用)
app.component("Nav",Nav).component("Personal",Personal)
app.use(createPinia());
app.use(router);

//使用vueuse motion
app.use(MotionPlugin)

app.mount("#app");
