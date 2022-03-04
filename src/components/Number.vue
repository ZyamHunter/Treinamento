<template>
  <div class="viewNumber">{{ count }}</div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["count"]),
  },
};
</script>
<style scoped>
.viewNumber {
  position: absolute;
  left: 47%;
  top: 70%;
  font-weight: 600;
  color: white;
  font-size: 48px;
  background-color: green;
  padding: 20px;
}
</style>
