<template>
  <div id="app">
    <Header />
    <hr v-if="$route.path !== '/'" />
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

* {
  font-family: "Open Sans";
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 300;
}

body {
  margin: 0;
  padding: 0;
}

hr {
  width: 80%;
}

.slick-slide div:focus {
  outline: 0px !important;
}
</style>
