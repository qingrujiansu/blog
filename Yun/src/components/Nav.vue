<template>
  <div class="h-6" />
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#b7bfcc"
    text-color="#fff" active-text-color="#334569" >
    <el-menu-item index="1">
      <router-link to="/" class="link">
        个人空间
      </router-link>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>学习成果</template>
      <el-menu-item index="2-1">
        <router-link to="html">
          Html
        </router-link>
      </el-menu-item>
      <el-menu-item index="2-2">
        <router-link to="css">
          Css
        </router-link>
      </el-menu-item>
      <el-sub-menu index="2-3">
        <template #title>JavaScript</template>
        <el-menu-item index="2-4-1">
          <router-link to="javaScript">
            基础
          </router-link>
        </el-menu-item>
        <el-menu-item index="2-4-2">Vue</el-menu-item>
        <el-menu-item index="2-4-3">Nodejs</el-menu-item>
      </el-sub-menu>
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

import { ref } from 'vue'

import {useStudyStore} from '@/store/study'
const useStudy = useStudyStore()
useStudy.updateName('李四')
useStudy.findAllFiles()
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