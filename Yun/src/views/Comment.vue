<template>
  <div id="bg"></div>
  <el-container>
    <el-header>
      <Suspense>
        <Nav />
        <template #fallback> Loading... </template>
      </Suspense>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Personal />
      </el-aside>
      <el-main>
        <div class="ui minimal comments">
          <h3 class="ui dividing header">留言区域</h3>
          <!-- 一条评论 -->
          <div class="comment" v-for="item in comment_catalogue" :key="item.id">
            <a class="avatar">
              <img src="@/assets/images/head_portrait.jpg" />
            </a>
            <div class="content">
              <div class="author">{{ "游客" + item.user_id }}</div>
              <div class="metadata">
                <span class="date">{{ item.createdAt }}</span>
              </div>
              <div class="text">
                <p>{{ item.txtContent }}</p>
              </div>
            </div>
            <div class="comments" v-if="item.authorContent">
              <div class="comment">
                <a class="avatar">
                  <img src="@/assets/images/author.jpg" />
                </a>
                <div class="content">
                  <div class="author">清如笺素</div>
                  <div class="text">{{ item.authorContent }}</div>
                </div>
              </div>
            </div>
          </div>
          <form class="ui reply form">
            <div class="field">
              <textarea v-model="textValue"></textarea>
            </div>
            <div class="ui blue labeled submit icon button" @click="AddComment">
              <i class="icon edit"></i> Add Reply
            </div>
          </form>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import { onMounted, ref } from "vue";
import useStore from "@/store";
import { ElMessage } from "element-plus";

const { useComments } = useStore();
//生成uuid
onMounted(() => {
  let uid = "";
  if (localStorage.getItem("uid")) {
    uid = localStorage.getItem("uid")!;
  } else {
    uid = uuidv4();
    localStorage.setItem("uid", uid);
  }
  useComments.uid = uid;
});
useComments.findAllComments();
const { comment_catalogue } = useComments;
const textValue = ref<string>("");
//添加留言
async function AddComment() {
  try {
    if (!textValue.value) {
      throw new Error("请输入内容");
    }
    const res = await useComments.uploadComment(textValue.value);
    textValue.value = "";
    ElMessage({
      message: "留言成功,请刷新网页",
      type: "success",
    });
  } catch (error) {
    ElMessage({
      message: "留言失败",
      type: "error",
    });
  }
}
</script>

<style lang="less" scoped>
#bg {
  position: fixed;
  // position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(@/assets/images/bachongshenzi.jpg);
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
