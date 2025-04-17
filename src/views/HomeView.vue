<template>
  <div class="home">
    <h1>Home</h1>
    <h2>{{ ninjaOne.name }}</h2>
    <h2>{{ ninjaOne.age }} - {{ nameOne }}</h2>
    <button @click="updateNinjaOne">Update Ninja One</button>

    <h1>Reactive</h1>
    <h2>{{ ninjaTwo.name }} - {{ ninjaTwo.age }} - {{ nameTwo }}</h2>
    <button @click="updateNinjaTwo">Update Ninja Two</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "HomeView",
  setup() {
    const ninjaOne = ref({ name: "deep", age: 30 });

    const ninjaTwo = reactive({
      name: "sofian",
      age: 30,
    });

    const nameOne = ref("dip");
    const nameTwo = reactive("Hasan");

    const updateNinjaOne = () => {
      ninjaOne.value.age = 88;
      nameOne.value = "deep";
    };

    const updateNinjaTwo = () => {
      ninjaTwo.age = 45;
      //nameTwo = reactive("akash");
    };

    return {
      ninjaOne,
      updateNinjaOne,
      ninjaTwo,
      updateNinjaTwo,
      nameOne,
      nameTwo,
    };
  },
};
</script>
