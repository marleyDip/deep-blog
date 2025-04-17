<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts" />

    <button @click="showPosts = !showPosts">toggle Posts</button>

    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import { ref } from "vue";

export default {
  name: "HomeView",
  components: {
    PostList,
  },
  setup() {
    const posts = ref([
      {
        title: "Welcome to the blog",
        body: "Its me, Mr. Dip Akand here to help you with your Vue.js journey and beyond. I am a full stack developer and I love to share my knowledge with you. I hope you will find this blog helpful. I will be posting about Vue.js, JavaScript, CSS, HTML, and other web development topics. I will also be sharing my personal experiences and tips on how to become a better developer.",
        id: 1,
      },
      {
        title: "Top 5 CSS tips",
        body: "1. Use Flexbox, 2. Use Grid, 3. Use Variables, 4. Use Transitions, 5. Use Custom Properties",
        id: 2,
      },
      {
        title: "Top 5 JS tips",
        body: "1. Use ES6, 2. Use Async/Await, 3. Use Arrow Functions, 4. Use Destructuring, 5. Use Spread Operator",
        id: 3,
      },
      {
        title: "Top 5 Vue tips",
        body: "1. Use Composition API, 2. Use Teleport, 3. Use Fragments, 4. Use Suspense, 5. Use v-slot",
        id: 4,
      },
    ]);

    const showPosts = ref(true);

    return {
      posts,
      showPosts,
    };
  },
};
</script>
