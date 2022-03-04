<template>
  <div class="button">
    <b-button variant="danger" @click="increaseCount">Treinamento</b-button>
    <b-button variant="warning" @click="toPath"> {{ path }} Page</b-button>
  </div>
</template>
<script>
export default {
  name: "Button",
  props: {
    path: String,
  },
  data() {
    return {};
  },
  methods: {
    increaseCount() {
      this.$store.commit("increaseCount");
    },
    toPath() {
      this.$router.push({ name: this.path });
    },
  },
};
</script>
<style scoped>
.button {
  position: absolute;
  top: 50%;
  width: 100%;
  height: 50%;
}
</style>
