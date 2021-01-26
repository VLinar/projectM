<template>
  <div class="header-menu">
    <a href="#" class="active">Магазин</a>
    <a href="#">О нас</a>
    <img
      src="https://www.romanticanawear.com/dist/images/d90e4fe0a0e5c48daaee65edefda339b.svg"
      alt="Logo"
    />
    <a href="#">Конакты</a>
    <a href="#">Корзина (0)</a>
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
}
</style>
