<template>
  <div class="container" v-if="check">
    <Breadcrumbs />
    <Productsgrid />
  </div>
</template>

<script>
import Productsgrid from "@/components/productsgrid.vue";
import Breadcrumbs from "@/components/breadcrumbs.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Productsgrid,
    Breadcrumbs
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
}
</style>
