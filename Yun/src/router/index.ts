import { createRouter, createWebHistory } from "vue-router";
//引入markdown文件
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
      path: "/test",
      name: "test",
      component: () => import("@/views/Test1.vue")
    },

    // {
    //   path:'/study',
    //   name:'study',
    //   children:[
    //       {
    //         path:'/study/test',
    //         name:'test',
    //         props:{markdownTxt:markdownTxt},
    //         component:()=> import("@/views/Study/index.vue"),
    //       },  
    //       {
    //         path:'/study/h',
    //         name:'h',
    //         props:{markdownTxt:markdownTxt},
    //         component:()=> import("@/views/Study/index.vue"),
    //       },  
    //   ],
    // }
  ],
});

export default router;
