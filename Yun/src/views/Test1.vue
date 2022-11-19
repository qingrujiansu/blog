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

<script setup lang='ts'>
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>

<style lang='less' scoped>
//背景图片固定不变
#bg {
  position: fixed;
  // position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(@/assets/images/ganyu.jpg);
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



//这下面是卡片的样式
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}


//卡片
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>