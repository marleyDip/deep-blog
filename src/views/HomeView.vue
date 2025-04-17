<template>
  <div class="home">
    Home
    <p ref="p">my name is {{ name }} and age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HomeView",
  setup() {
    console.log(this);

    const p = ref("Hello, deep");
    console.log(p, p.value);

    let name = "deep";
    let age = 18;

    const handleClick = () => {
      console.log(p, p.value);
      p.value.classList.add("test");
      p.value.textContent = "Hello, ninja!";
    };

    return {
      name,
      age,
      handleClick,
      p,
    };

    //console.log("setup");
    // Composition API setup function
    // You can define reactive properties, computed properties, and methods here
  },
  /* created() {
    console.log("created");

    // Lifecycle hook that runs when the component is created
    // You can perform data fetching or other setup tasks here
  },
  mounted() {
    console.log("mounted");

    // Lifecycle hook that runs when the component is mounted to the DOM
    // You can perform DOM manipulations or start timers here
  }, */
};
</script>
