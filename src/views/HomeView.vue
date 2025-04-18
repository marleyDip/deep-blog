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
import { ref } from "vue";

export default {
  name: "HomeView",
  components: {
    PostList,
  },
  setup() {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts");
        //console.log(data);
        if (!data.ok) {
          throw new Error("No Data available");
        }
        posts.value = await data.json();
        /*  const response = await fetch("http://localhost:3000/posts");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        posts.value = await response.json(); */
      } catch (err) {
        error.value = err.message;
        //console.log(error.value);
      }
    };
    load();
    // Simulate a network error
    // setTimeout(() => {
    //   error.value = "Network error";
    // }, 2000);
    return {
      posts,
      error,
    };
  },
};
</script>
