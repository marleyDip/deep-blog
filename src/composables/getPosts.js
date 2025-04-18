import { ref } from "vue";
// This function fetches posts from a local server and handles errors if any occur during the fetch process.
// It uses the Vue Composition API to create a reactive state for posts and error messages.

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts");
      if (!data.ok) {
        throw new Error("No Data available");
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { posts, error, load };
};

export default getPosts;
