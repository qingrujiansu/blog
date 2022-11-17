<template>
  <Suspense>
    <!-- 具有深层异步依赖的组件 -->
    <Nav />
    <!-- 在 #fallback 插槽中显示 “正在加载中” -->
    <template #fallback>
      Loading...
    </template>
  </Suspense>

  <div class="box">
    <div class="box1">
      <Personal />
    </div>
    <div class="box2">
    </div>
  </div>
</template>


<script setup lang="ts">


</script>

<style scoped lang="less">
.box {
  display: flex;
}

.box2 {
  flex: 1;
  background: url(@/assets/images/shenlilinghua.jpg) no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>