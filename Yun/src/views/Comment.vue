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
                <div class="ui minimal comments">
                    <h3 class="ui dividing header">留言区域</h3>
                    <div class="comment">
                        <a class="avatar">
                            <img src="@/assets/images/head_portrait.jpg">
                        </a>
                        <div class="content">
                            <a class="author">Matt</a>
                            <div class="metadata">
                                <span class="date">今天下午 5:42</span>
                            </div>
                            <div class="text">太赞了！ </div>
                            <div class="actions">
                                <a class="reply">Reply</a>
                            </div>
                        </div>
                    </div>
                    <div class="comment">
                        <a class="avatar">
                            <img src="@/assets/images/head_portrait.jpg">
                        </a>
                        <div class="content">
                            <a class="author">Elliot Fu</a>
                            <div class="metadata">
                                <span class="date">昨天上午12:30</span>
                            </div>
                            <div class="text">
                                <p>這對我的研究是非常有用.謝謝!</p>
                            </div>
                            <div class="actions">
                                <a class="reply">Reply</a>
                            </div>
                        </div>
                        <div class="comments">
                            <div class="comment">
                                <a class="avatar">
                                    <img src="@/assets/images/leishen.jpg">
                                </a>
                                <div class="content">
                                    <a class="author">Jenny Hess</a>
                                    <div class="metadata">
                                        <span class="date">刚刚</span>
                                    </div>
                                    <div class="text">艾略特你永远是多么正确 :) </div>
                                    <div class="actions">
                                        <a class="reply">Reply</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="comment">
                        <a class="avatar">
                            <img src="@/assets/images/head_portrait.jpg">
                        </a>
                        <div class="content">
                            <a class="author">Joe Henderson</a>
                            <div class="metadata">
                                <span class="date">5 天以前</span>
                            </div>
                            <div class="text">老兄，这太棒了。非常感谢。 </div>
                            <div class="actions">
                                <a class="reply">Reply</a>
                            </div>
                        </div>
                    </div>
                    <form class="ui reply form">
                        <div class="field">
                            <textarea></textarea>
                        </div>
                        <div class="ui blue labeled submit icon button">
                            <i class="icon edit"></i> Add Reply
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup lang='ts'>

</script>

<style lang='less' scoped>
#bg {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(@/assets/images/bachongshenzi.jpg);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size:cover;
    float: left;
}
.box {
    display: flex;
}

.box2 {
    flex: 1;
}
</style>