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
    this.getpayments();
    this.delivery();
    this.getCookie("refresh_token")
      ? this.updaterefresh(this.getCookie("refresh_token"))
      : this.guestreg({
          lastname: "Гостевой",
          firstname: "Аккаунт",
          email: "guesttest@mailforspam.com",
          password: "0000",
          roleId: 1
        });
  },
  methods: {
    ...mapActions(["updaterefresh", "guestreg", "getpayments", "delivery"]),
    getCookie(name) {
      /* eslint-disable */
      let matches = document.cookie.match(
        new RegExp(
          `(?:^|; )${name.replace(
            /([\.$?*|{}\(\)\[\]\\\/\+^])/g,
            "\\$1"
          )}=([^;]*)`
        )
      );
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }
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
    span {
      color: black;
    }
  }
}

.slick-slide div:focus {
  outline: 0px !important;
}
.fa-user {
  font-size: 22.5px;
}
</style>
