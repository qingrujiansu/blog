<template>
  <el-affix>
    <div id="fixed">
      <el-menu class="el-menu-demo" mode="horizontal" background-color="#b7bfcc" text-color="#fff"
        active-text-color="#334569" :router="trueValue" :default-active="router.currentRoute.value.fullPath">
        <el-menu-item index="/">个人空间</el-menu-item>
        <el-sub-menu index="study">
          <template #title>学习笔记</template>
          <el-menu-item v-for="(item) in getterStudy" :key="item.id" :index="'/' + item.study_name">
            {{ item.study_name }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/comment">留言</el-menu-item>
        <el-menu-item index="/photo-album">个人相册</el-menu-item>
        <!-- 二维码 -->
        <div class="contact">
          <el-popover placement="right" :width="450" trigger="hover">
            <template #reference>
              <el-button style="margin-right: 16px">
                <el-icon>
                  <UserFilled />
                </el-icon>联系方式
              </el-button>
            </template>
            <div><img src="@/assets/images/微信.jpg" alt=""></div>
          </el-popover>
        </div>
      </el-menu>
    </div>
  </el-affix>
</template>

<script lang="ts" setup>

import { ref, reactive } from 'vue'
import useStore from '@/store'
import router from '@/router';
import { storeToRefs } from 'pinia';
//引入hooks
import {useDynamicImportMarkdown} from '@/hooks/useDynamicImport'
const { useStudy } = useStore()
useStudy.findAllFiles()
const { getterStudy } = storeToRefs(useStudy)
//循环创建study下面的路由,不用先删除好像每次都是重新创建的，之前的不会留在里面，使用异步组件
let studyArrString = await useDynamicImportMarkdown()
getterStudy.value.forEach((item, index) => {
  router.addRoute({
    name: item.study_name,
    path: `/${item.study_name}`,
    props: { markdownTxt: studyArrString[index] },
    component: () => import('@/views/Study/index.vue')
  })
})

const trueValue = ref(true)


</script>

<style lang="less" scoped>
#fixed {
  width: 100%;
  height: 59px;


}

.link {
  text-decoration: none;
}

.contact {
  position: absolute;
  top: 25%;
  right: 30px;

  img {
    width: 50px;
    height: 40px;
  }
}
</style>