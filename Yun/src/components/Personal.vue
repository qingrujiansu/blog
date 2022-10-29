<template >
    <div class="suspension"   v-motion-roll-top>
        <div class="person">
            <img src="@/assets/images/leishen4.webp" alt="">
            <div class="info">
                <span>个人信息</span>
                <el-divider border-style="dashed" />
                <span>个人信息</span>
                <el-divider border-style="dashed" />
                <span>个人信息</span>
                <el-divider border-style="dashed" />
                <span>个人信息</span>
                <el-divider border-style="dashed" />
                <span>个人信息</span>
                <el-divider border-style="dashed" />
                
            </div>
        </div>
    </div>

</template>

<script setup lang='ts'>

</script>

<style lang='less' scoped>
.suspension {
    margin-left: 1px;
}

.person {
    display: flex;
    width: 200px;
    height: 700px;
    flex-direction: column;
    justify-content: space-between;
    // background-color: pink;
    box-shadow: 1px 5px 10px gray;

    .info {
        flex-grow: 1;
        // background-color: aqua;
    }

    &-info>* {
        display: block;
        margin-bottom: 50px;
    }
}
</style>