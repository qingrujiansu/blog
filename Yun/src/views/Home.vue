<template>
  <div id="bg">
  </div>
  <el-container>
    <el-header>
      <Suspense>
        <Nav />
        <template #fallback>
          Loading...
        </template>
      </Suspense>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Personal />
      </el-aside>
      <el-main>

      </el-main>
    </el-container>
  </el-container>
</template>


<script setup lang="ts">


</script>

<style scoped lang="less">
//背景图片固定不变
#bg {
  position: fixed;
  // position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(@/assets/images/shenlilinghua.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

.el-header {
  --el-header-padding: 0, 0;
  padding: var(--el-header-padding);
  position: relative;
  width: 100%;
  height: 60px;
}

.el-aside {
  display: block;
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
}

.el-main {
  position: absolute;
  left: 200px;
  right: 0;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
}


</style>