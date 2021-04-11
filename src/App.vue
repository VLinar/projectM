<template>
  <div id="app">
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
  created() {
    this.getapptoken();
    setTimeout(() => {
      this.getgroups();
      this.getmainpageproduct();
    }, 500);
  },
  methods: {
    ...mapActions(["getapptoken", "getgroups", "getmainpageproduct"])
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

$background: #1d1d1d;

* {
  font-family: "Open Sans";
}
.container {
  max-width: 1260px;
  margin: auto;
  padding: 1rem;
}
body {
  margin: 0;
  padding: 0;
}
a {
  color: black;
}

header {
  a:hover,
  span:hover,
  .fa:hover {
    color: red;
  }
}

.slick-slide div:focus {
  outline: 0px !important;
}
</style>
