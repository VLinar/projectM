<template>
  <div class="container" v-if="check">
    <div class="products_header">
      <div>Главная / Штаны</div>
      <div>3 иконки</div>
    </div>
    <Productsgrid />
  </div>
</template>

<script>
import Productsgrid from "@/components/productsgrid.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Productsgrid
  },
  data() {
    return {
      check: false
    };
  },
  computed: {
    ...mapGetters(["sheckgroup"])
  },
  created() {
    this.checkcategories();
  },
  methods: {
    checkcategories() {
      if (this.sheckgroup(this.$route.params.categories) === false) {
        let parameters = this.$route.path;
        this.$router.push({
          name: "404error",
          params: { pathMatch: parameters }
        });
      } else {
        this.check = true;
      }
    }
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
