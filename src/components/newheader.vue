<template>
  <header class="container">
    <div class="header_first_rowmenu">
      <img
        src="https://www.romanticanawear.com/dist/images/d90e4fe0a0e5c48daaee65edefda339b.svg"
        alt="Logo"
        width="250px"
      />
      <div class="menu">
        <a href="">Акции</a>
        <a href="">О нас</a>
        <a href="">Оплата</a>
        <a href="">Доставка</a>
        <a href="">Обмен и возврат</a>
        <a href="">Контакты</a>
      </div>
    </div>
    <div class="header_second_rowmenu">
      <span> <i class="fa fa-bars" aria-hidden="true"></i> Каталог</span>
      <div class="search">
        <input type="text" placeholder="Поиск" /><i
          class="fa fa-search"
          aria-hidden="true"
        ></i>
      </div>
      <div class="icon_button">
        <i class="fa fa-moon-o" aria-hidden="true"></i>
        <i class="fa fa-user-o" aria-hidden="true"></i>
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header_first_rowmenu {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu {
    display: flex;
    gap: 1rem;
    a {
      text-decoration: none;
      font-size: 14px;
    }
  }
}
.header_second_rowmenu {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0px 0.5rem 0px;
  span {
    cursor: pointer;
  }
  .search {
    width: 50%;
    position: relative;
    input {
      border: none;
      border-bottom: 1px solid;
      padding: 10px;
      font-size: 14px;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
    .fa {
      position: absolute;
      top: 9px;
      right: -10px;
      font-size: 20px;
      cursor: pointer;
    }
  }

  .icon_button {
    cursor: pointer;
    display: flex;
    gap: 1rem;
    font-size: 20px;
  }
}
</style>
