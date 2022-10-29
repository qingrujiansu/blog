<template>
    <Nav />
    <!-- <div id="bg">
        <div style="margin-bottom:100px ;">111</div>
        <div style="margin-bottom:100px ;">111</div>
        <div style="margin-bottom:100px ;">111</div>
        <div style="margin-bottom:100px ;">111</div>
        <div style="margin-bottom:100px ;">111</div>
        <div style="margin-bottom:100px ;">111</div>
        <div style="margin-bottom:100px ;">111</div>
        <div style="margin-bottom:100px ;">111</div>
        <div style="margin-bottom:100px ;">111</div>
        <div style="margin-bottom:100px ;">111</div>
        <div style="margin-bottom:100px ;">111</div>
        <div style="margin-bottom:100px ;">111</div>
        <div style="margin-bottom:100px ;">111</div>
        <div style="margin-bottom:100px ;">111</div>
        <div style="margin-bottom:100px ;">111</div>
        <div style="margin-bottom:100px ;">111</div>
         
    </div> -->

    <div class="bg">
        <div class="drag">
            
        </div>
        
    </div>
   





</template>

<script setup lang='ts'>

</script>

<style lang='less' scoped>
//背景图片固定不变
// #bg {
//     position: relative;
//     width: 100%;
//     height: 100%;
//     background-image: url(@/assets/images/shenli1.jpg);
//     background-attachment: fixed;
//     background-repeat: no-repeat;
//     background-size: cover;
//     float: left;

// }
/*背景模糊*/
.bg {
    width: 100%;
    height: 1200px;
    position: relative;
    background: url(@/assets/images/shenli1.jpg) no-repeat fixed;
    background-size: cover;
    padding: 1px;
    box-sizing: border-box;
    z-index: 1;
}

.bg:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: inherit;
    filter: blur(2px);
    z-index: 2;
}

.drag {
    position: absolute;
    width: 200px;
    height: 200px;
    text-align: center;
    z-index: 11;
}
</style>