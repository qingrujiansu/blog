<template>
  <div class="h-6" />
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#b7bfcc"
    text-color="#fff" active-text-color="#334569">
    <el-menu-item index="1">
      <router-link to="/" class="link">
        个人空间
      </router-link>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>学习成果</template>
      <el-menu-item v-for="(item) in Study" :key="item.id" >
        <router-link :to="'/' + item.study_name">
          {{ item.study_name }}
        </router-link>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">
      <router-link to="comment" class="link">
        留言
      </router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link to="photo-album" class="link">
        个人相册
      </router-link>
    </el-menu-item>
    <!-- 切换模式的按钮 -->
    <!-- <el-switch 
    v-model="value1" 
    style="--el-switch-on-color: #afacac; --el-switch-off-color: #331d1d"
    class="btn"
    @click="toggleDark()"
    /> -->
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
</template>

<script lang="ts" setup>

import { ref, reactive } from 'vue'
import { useStudyStore } from '@/store/study'
import router from '@/router';
import markdownTxt from '@/markdown/text.md?raw'
import studyView from '@/views/Study/index.vue'
const useStudy = useStudyStore()
useStudy.findAllFiles()
const Study = reactive(useStudy.getterStudy)



// //循环创建study下面的路由,不用先删除好像每次都是重新创建的，之前的不会留在里面
Study.forEach((item) => {
  console.log(item.study_name);
  router.addRoute({
    name: item.study_name,
    path: `/${item.study_name}`,
    props: { markdownTxt: markdownTxt },
    component: studyView
  })
})



console.log(router.getRoutes());
















const value1 = ref(true)
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<style lang="less" scoped>
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