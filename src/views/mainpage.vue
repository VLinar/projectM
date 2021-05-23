<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/newheader.vue";
import Footer from "@/components/footer.vue";
import { mapActions } from "vuex";
export default {
  components: {
    Header,
    Footer
  },
  async created() {
    await this.getgroups();
  },
  methods: {
    ...mapActions(["getgroups"])
  }
};
</script>

<style lang="scss" scoped></style>
