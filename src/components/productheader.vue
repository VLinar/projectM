<template>
  <div class="prod_header">
    <Productimage :image="image" :deafaultimage="deafaultimage" />
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
    },
    deafaultimage: {
      type: String,
      default: "https://biolik.com.ua/wp-content/uploads/2019/12/NOFoto.png"
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
