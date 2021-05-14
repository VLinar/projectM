<template>
  <div class="prod_header">
    <Productimage :image="image" />
    <Productinfo :productinfo="productinfo" />
  </div>
</template>

<script>
import Productimage from "@/components/productimage.vue";
import Productinfo from "@/components/productinfo.vue";
export default {
  props: {
    image: {
      type: Array
    },
    productinfo: {
      type: Object
    }
  },
  components: {
    Productimage,
    Productinfo
  }
};
</script>

<style lang="scss" scoped>
.prod_header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
}
</style>
