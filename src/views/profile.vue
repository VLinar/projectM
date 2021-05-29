<template>
  <div class="profile container">
    <div class="profile_menu">
      <router-link to="/profile/myorders" tag="span" active-class="active" exact
        >Мои заказы</router-link
      >
      <router-link to="/profile" tag="span" active-class="active" exact
        >Профиль</router-link
      >
      <span @click="logout">Выйти</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["guestreg"]),
    logout() {
      this.guestreg({
        lastname: "Гостевой",
        firstname: "Аккаунт",
        email: "guesttest@mailforspam.com",
        password: "0000",
        roleId: 1
      });
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.profile {
  min-height: calc(100vh - 328px);
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  justify-items: center;
  .profile_menu {
    display: flex;
    gap: 10px;
    flex-direction: column;
    span {
      text-align: center;
      cursor: pointer;
      border-bottom: 1px solid white;
      padding: 5px 0px;
      width: fit-content;
    }
    span:hover {
      color: red;
    }
    .active {
      color: red;
      border-bottom: 1px solid red;
    }
  }
}
</style>
