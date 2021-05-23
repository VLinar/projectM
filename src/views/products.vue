<template>
  <div class="container" v-if="check">
    <Breadcrumbs />
    <Productsgrid :groupid="groupid" />
    <h4 v-if="products.length < 1 ? true : false">
      В данной группе, нет товаров
    </h4>
    <pagination
      v-model="page"
      :per-page="limit"
      :records="records"
      @paginate="myCallback"
    />
  </div>
</template>

<script>
import Productsgrid from "@/components/productsgrid.vue";
import Breadcrumbs from "@/components/breadcrumbs.vue";
import Pagination from "vue-pagination-2";

import { mapActions, mapGetters, mapState } from "vuex";

export default {
  components: {
    Productsgrid,
    Breadcrumbs,
    Pagination
  },
  data() {
    return {
      check: false,
      groupid: null,
      page: 1,
      limit: 8,
      records: 0
    };
  },
  computed: {
    ...mapGetters(["sheckgroup", "getidongroup"]),
    ...mapState(["products"])
  },
  created() {
    this.productbygroupid();
    this.checkcategories();
  },
  watch: {
    async $route() {
      this.productbygroupid();
    },
    async page(newvalue) {
      this.records = await this.getproductbygroupid({
        groupid: this.groupid,
        limit: this.limit,
        pages: newvalue
      });
    }
  },
  methods: {
    ...mapActions(["getproductbygroupid", "deleteproduct"]),
    async productbygroupid() {
      this.groupid = this.getidongroup(this.$route.params.categories);

      this.records = await this.getproductbygroupid({
        groupid: this.groupid,
        limit: this.limit,
        pages: this.page
      });
    },
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
    },
    myCallback(page) {
      this.page = page;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 293px);
}
</style>
