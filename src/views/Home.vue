<template>
  <div class="home">
    <Slider />
    <Slogan />
  </div>
</template>

<script>
import Slider from "@/components/slider.vue";
import Slogan from "@/components/slogan.vue";
export default {
  name: "Home",
  components: {
    Slider,
    Slogan
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  margin: auto;
}
</style>
