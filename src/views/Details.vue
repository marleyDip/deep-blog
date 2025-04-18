<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h2>{{ post.title }}</h2>
    <p class="pre">{{ post.body }}</p>
  </div>
</template>

<script>
import getPost from "@/composables/getPost";

export default {
  props: ["id"],
  setup(props) {
    const { error, post, load } = getPost(props.id);

    load();

    return {
      error,
      post,
    };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>