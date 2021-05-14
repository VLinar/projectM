<template>
  <div class="profile container">
    <div class="profile_menu">
      <router-link to="/info" tag="span" active-class="active" exact
        >О нас</router-link
      >
      <router-link to="/info/payment" tag="span" active-class="active" exact
        >Оплата</router-link
      >
     <router-link to="/info/delivery" tag="span" active-class="active" exact
        >Доставка</router-link
      >
      <router-link to="/info/contacts" tag="span" active-class="active" exact
        >Контакты</router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

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
