<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>Search term - {{ search }}</p>

    <div v-for="name in matchingNames" :key="name">{{ name }}</div>

    <button @click="handleClick">Stop Watching</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";

export default {
  name: "HomeView",
  setup() {
    const search = ref("");
    const names = ref([
      "Alice",
      "Bob",
      "Charlie",
      "David",
      "Eve",
      "Frank",
      "Grace",
      "Hannah",
      "Isaac",
      "Jack",
      "Abdul",
    ]);

    const stopWatch = watch(search, () => {
      console.log("watch function run");
    });

    const stopEffect = watchEffect(() => {
      console.log("effect function run", search.value);
    });

    const handleClick = () => {
      stopWatch();
      stopEffect();
    };

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    return { names, search, matchingNames, handleClick };
  },
};
</script>
