<template>
  <div class="container">
    <Spinner v-if="loading" />
    <Breadcrumbs
      :prod="oneproduct[0].groupId"
      :prodname="oneproduct[0].name"
      v-else
    />
    <Productheader
      :image="oneproduct[0].images"
      :productinfo="oneproduct[0]"
      :deafaultimage="deafaultimage()"
    />
    <hr />
    <Productfooter
      :description="oneproduct[0].description"
      :paramsvalue="oneproduct[0].paramsvalue"
    />
    <br />
    <h2>Похожие товары</h2>
    <div class="container">
      <Newprod :limit="4" />
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/loadspinner.vue";
import Breadcrumbs from "@/components/breadcrumbs";
import Newprod from "@/components/productsgrid.vue";
import Productheader from "@/components/productheader.vue";
import Productfooter from "@/components/productfooter.vue";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      loading: true
    };
  },
  components: {
    Spinner,
    Breadcrumbs,
    Newprod,
    Productheader,
    Productfooter
  },
  async created() {
    this.getgroups();
    this.loading = await this.getoneproduct(this.$route.params.id);
  },
  computed: {
    ...mapState(["oneproduct"])
  },
  watch: {
    async $route() {
      this.loading = await this.getoneproduct(this.$route.params.id);
    }
  },
  methods: {
    ...mapActions(["getoneproduct", "getgroups"]),
    deafaultimage() {
      return this.oneproduct[0].images.find(e => e.default === true).url;
    }
  }
};
</script>

<style lang="scss" scoped></style>
