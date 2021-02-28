<template>
  <div class="home">
    <Slider />
    <Slogan />
    <Newprod />
  </div>
</template>

<script>
import Slider from "@/components/slider.vue";
import Slogan from "@/components/slogan.vue";
import Newprod from "@/components/productsgrid.vue";

export default {
  name: "Home",
  components: {
    Slider,
    Slogan,
    Newprod
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  margin: auto;
}
</style>
