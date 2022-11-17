<template>
    <Suspense>
        <!-- 具有深层异步依赖的组件 -->
        <Nav />
        <!-- 在 #fallback 插槽中显示 “正在加载中” -->
        <template #fallback>
            Loading...
        </template>
    </Suspense>
    <v-md-preview :text="markdownTxt"></v-md-preview>

</template>

<script setup lang='ts'>
//通过路由参数方式传入markdown文件内容
let props = defineProps({
    markdownTxt: String
})



</script>

<style lang='less' scoped>

</style>