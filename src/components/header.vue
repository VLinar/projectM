<template>
  <header class="header-menu container">
    <div class="icons">
      <i
        class="fa fa-sun-o"
        aria-hidden="true"
        v-if="blacktheme"
        @click="blacktheme = !blacktheme"
      ></i>
      <i
        class="fa fa-moon-o"
        aria-hidden="true"
        v-else
        @click="blacktheme = !blacktheme"
      ></i>
      <i class="fa fa-user-o" aria-hidden="true"></i>
      <i class="fa fa-search" aria-hidden="true"></i>
    </div>
    <div class="menu">
      <router-link to="/shop" tag="a" active-class="active"
        >Магазин</router-link
      >
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
        >Корзина (1)</router-link
      >
    </div>
    <div class="scrollicon" v-if="scrollY > 40 ? true : false">
      <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
      <i class="fa fa-search fa-2x" aria-hidden="true"></i>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      blacktheme: false,
      scrollY: 0
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    }
  }
};
</script>

<style lang="scss" scoped>
.header-menu {
  display: flex;
  flex-direction: column;
  .icons {
    padding: 2.5px;
    align-self: flex-end;
    display: flex;
    gap: 0.75rem;
    font-size: 1.2rem;
    i:hover {
      color: red;
    }
  }
  .menu {
    align-self: center;
    display: flex;
    align-items: center;
    gap: 4rem;
    font-weight: 300;
    letter-spacing: 2px;
    font-size: 15px;
    img {
      height: 100px;
      width: 100%;
      max-width: 300px;
      max-height: 150px;
    }
    a {
      white-space: nowrap;
      color: black;
      text-transform: uppercase;
      text-decoration: none;
      &:hover {
        color: red;
      }
    }
    .active {
      color: red;
      border-bottom: 1px solid red;
      line-height: 23px;
    }
  }
  .scrollicon {
    position: fixed;
    right: 0px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 1;
    padding: 15px;
    background: white;
  }
}
</style>
