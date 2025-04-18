<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}]</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import getPosts from "@/composables/getPosts";

export default {
  name: "HomeView",
  components: {
    PostList,
  },
  setup() {
    const { posts, error, load } = getPosts();

    load();
    // This is a good place to call load() if you want to fetch posts when the component mounts
    // However, if you want to fetch posts when the component is created, you can call load() in the created() lifecycle hook
    // But in this case, we are using the setup() function, so we can call load() directly here

    return {
      posts,
      error,
    };
  },
};
</script>
