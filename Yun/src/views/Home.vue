<template>
  <Nav />
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

.box{
  display: flex;
}
.box2{
  flex: 1;
  background: url(@/assets/images/shenlilinghua.jpg) no-repeat;
  background-size:cover;
  background-attachment:fixed;
}
</style>