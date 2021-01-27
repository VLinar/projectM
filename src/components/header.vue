<template>
  <div class="header-menu">
    <router-link to="/shop" tag="a" active-class="active">Магазин</router-link>
    <router-link to="/about" tag="a" active-class="active">О нас</router-link>
    <router-link
      to="/"
      tag="img"
      src="https://www.romanticanawear.com/dist/images/d90e4fe0a0e5c48daaee65edefda339b.svg"
      alt="Logo"
      >Магазин</router-link
    >
    <router-link to="/contacts" tag="a" active-class="active"
      >Конакты</router-link
    >
    <router-link to="/cart" tag="a" active-class="active"
      >Корзина (0)</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$activecolor: red;

.header-menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2% 20%;
  max-width: 1440px;
  a {
    text-decoration: none;
    color: black;
    border-bottom: 1px solid #00000000;
    line-height: 23px;
  }
  a:hover {
    color: $activecolor;
  }
  .active {
    color: $activecolor;
    border-bottom: 1px solid $activecolor;
  }
  img {
    width: 35%;
  }
}
</style>
