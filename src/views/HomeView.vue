<template>
  <div class="home">
    Home
    <p>my name is {{ name }} and age is {{ age }}</p>
    <button @click="handleClick">Click me</button>

    <button @click="age++">Increase age</button>

    <input type="text" v-model="name" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HomeView",
  setup() {
    //const p = ref(null);

    let name = ref("deep");
    let age = ref(18);

    const handleClick = () => {
      name.value = "lungi";
      age.value = 20;
    };

    return {
      name,
      age,
      handleClick,
    };
  },
  data() {
    return {
      score: 5,
    };
  },
};
</script>
