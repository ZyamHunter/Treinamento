<template>
  <div class="info">
    <buttonTraining path="Home"></buttonTraining>
    <Number />
  </div>
</template>
<script>
import buttonTraining from "../components/Button.vue";
import Number from "../components/Number.vue";

export default {
  name: "Info",
  components: {
    buttonTraining,
    Number,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increaseCount() {
      this.count++;
    },
    toPath() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
<style scoped>
.info {
  width: 100vw;
  height: 100vh;
}
</style>
