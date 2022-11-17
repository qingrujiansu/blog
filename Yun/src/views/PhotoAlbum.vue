<template>
    <Suspense>
    <!-- 具有深层异步依赖的组件 -->
    <Nav />
    <!-- 在 #fallback 插槽中显示 “正在加载中” -->
    <template #fallback>
      Loading...
    </template>
  </Suspense>
    <div id="bg">
        <div class="box">
            <div class="box1">
                <Personal />
            </div>
            <div class="box2">
                <el-row>
                    <el-col v-for="(o, index) in 9" :key="o" :span="8" :offset="index > 0 ? 2 : 0">
                        <el-card :body-style="{ padding: '0px' }">
                            <img src="@/assets/images/leishen1.webp" class="image" />
                            <div style="padding: 14px">
                                <span>Yummy hamburger</span>
                                <div class="bottom">
                                    <time class="time">{{ currentDate }}</time>
                                    <el-button text class="button">Operating</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>

</template>

<script setup lang='ts'>
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>

<style lang='less' scoped>
.box {
    display: flex;
}

.box2 {
    flex: 1;
}
//背景图片固定不变
#bg {
    position: relative;
    // position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(@/assets/images/ganyu.jpg);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size:cover;
    float: left;
}

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
</style>