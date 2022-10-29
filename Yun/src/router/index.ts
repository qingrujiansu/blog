import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/Home.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    //路由懒加载
    {
      path: "/photo-album",
      name: "photo-album",
      component: () => import("@/views/PhotoAlbum.vue"),
    },
    {
      path: "/comment",
      name: "comment",
      component: () => import("@/views/Comment.vue"),
    },
    {
      path:'/html',
      name:'html',
      component:()=> import("@/views/Study/Html.vue"),
    },
    {
      path:'/css',
      name:'css',
      component:()=> import("@/views/Study/Css.vue"),
    },
    {
      path:'/javascript',
      name:'javascript',
      component:()=> import("@/views/Study/JavaScript/JavaScript.vue"),
    },
   
  ],
});

export default router;
