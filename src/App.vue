<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/header.vue";

export default {
  components: {
    Header
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
  max-width: 1440px;
  margin: auto;
  padding: 1rem;
}
body {
  margin: 0;
  padding: 0;
}

.slick-slide div:focus {
  outline: 0px !important;
}
</style>
