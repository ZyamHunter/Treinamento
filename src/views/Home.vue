<template>
  <div class="home">
    <buttonTraining path="Info"></buttonTraining>
    <Number />
  </div>
</template>
<script>
import buttonTraining from "../components/Button.vue";
import Number from "../components/Number.vue";
export default {
  name: "Home",
  components: {
    buttonTraining,
    Number,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
<style scoped>
.home {
  width: 100vw;
  height: 100vh;
}
</style>
