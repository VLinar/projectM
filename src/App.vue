<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
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
.VuePagination {
  padding: 15px 0px;
  .VuePagination__count {
    display: none;
  }
  .pagination {
    display: flex;
    gap: 0.5em;
    justify-content: center;
    user-select: none;
    .page-item {
      list-style-type: none;
      &.VuePagination__pagination-item-prev-chunk a,
      &.VuePagination__pagination-item-prev-page a,
      &.VuePagination__pagination-item-next-page a,
      &.VuePagination__pagination-item-next-chunk a {
        border-bottom: none;
      }
    }
    .page-link {
      padding: 5px 10px;
      cursor: pointer;
      border-bottom: 1px solid white;
      &.active {
        color: red;
        border-bottom: 1px solid red;
      }
      &:hover {
        border-bottom: 1px solid gray;
      }
    }
  }
}
</style>
