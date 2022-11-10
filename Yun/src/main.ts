import { createApp } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin} from "@vueuse/motion";


import App from "./App.vue";
import router from "./router";
import "./assets/reset.css";
import Nav from "@/components/Nav.vue";
import Personal from "@/components/Personal.vue";
import store from './store'
//引入切换暗黑模式样式
// import 'element-plus/theme-chalk/dark/css-vars.css';
// import '@/assets/dark.less'

// import VMdPreview from '@kangc/v-md-editor/lib/preview';
// import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
// import '@kangc/v-md-editor/lib/style/base-editor.css';
// import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// VMdPreview.use(vuepressTheme);

// import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
// import '@kangc/v-md-editor/lib/style/preview-html.css';
// // 引入使用主题的样式
// import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

const app = createApp(App);

//注册icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

// 挂载pinia
app.use(store)

//链式注册全局组件(好像不全局注册也能用)
app.component("Nav",Nav).component("Personal",Personal)

app.use(router);

//使用markdown

// highlightjs
import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
app.use(VMdPreview);

//使用vueuse motion
app.use(MotionPlugin)

app.mount("#app");
