<template>
  <div class="home">
    <Slider />
    <Slogan />
    <div class="container">
      <Newprod :limit="8" />
    </div>
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
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
