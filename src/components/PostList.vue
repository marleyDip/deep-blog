<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id" class="post-item">
      <singlePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
import SinglePost from "./SinglePost.vue";

export default {
  components: { SinglePost },
  props: ["posts"],
  setup(props) {
    onMounted(() => {
      console.log("PostList mounted");
    });
    onUnmounted(() => {
      console.log("PostList unmounted");
    });
    onUpdated(() => {
      console.log("PostList updated");
    });
  },
};
</script>

<style>
</style>