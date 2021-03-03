<template>
  <div class="container">
    <div class="products_header">
      <div>Главная / Штаны</div>
      <div>3 иконки</div>
    </div>
    <Productsgrid />
  </div>
</template>

<script>
import Productsgrid from "@/components/productsgrid.vue";
export default {
  components: {
    Productsgrid
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 293px);
  .products_header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
}
</style>
