<template>
  <header class="container">
    <div class="header_first_rowmenu">
      <router-link
        src="https://www.romanticanawear.com/dist/images/d90e4fe0a0e5c48daaee65edefda339b.svg"
        alt="Logo"
        width="250px"
        tag="img"
        to="/"
      >
      </router-link>

      <div class="menu">
        <router-link tag="a" active-class="active" to="/shares"
          >Акции</router-link
        >
        <router-link tag="a" active-class="active" to="/about"
          >О нас</router-link
        >
        <router-link tag="a" active-class="active" to="/payments"
          >Оплата</router-link
        >
        <router-link tag="a" active-class="active" to="/delivery"
          >Доставка</router-link
        >
        <router-link tag="a" active-class="active" to="/exchangandreturn"
          >Обмен и возврат</router-link
        >
        <router-link tag="a" active-class="active" to="/contacts"
          >Контакты</router-link
        >
      </div>
    </div>
    <div class="header_second_rowmenu">
      <span @click="categorybar = !categorybar">
        <i class="fa fa-bars" aria-hidden="true"></i> Каталог</span
      >
      <div class="search">
        <input type="text" placeholder="Поиск" /><i
          class="fa fa-search"
          aria-hidden="true"
        ></i>
      </div>
      <div class="icon_button">
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
        <i
          class="fa fa-user-o"
          aria-hidden="true"
          @click="auth = !auth"
          @closemodal="auth = !auth"
        ></i>
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      </div>
    </div>
    <transition name="category">
      <Authmodal v-if="auth" @auth="auth = !auth" />
    </transition>
    <transition name="category">
      <Category
        v-if="categorybar"
        @closecategorybar="categorybar = !categorybar"
      />
    </transition>
  </header>
</template>

<script>
import Category from "@/components/categorybar.vue";
import Authmodal from "@/components/authmodal.vue";

export default {
  data() {
    return {
      categorybar: false,
      blacktheme: false,
      auth: false
    };
  },
  watch: {
    $route() {
      this.categorybar = false;
    }
  },
  components: {
    Category,
    Authmodal
  }
};
</script>

<style lang="scss" scoped>
.header_first_rowmenu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    cursor: pointer;
  }
  .menu {
    display: flex;
    gap: 1rem;

    a {
      text-decoration: none;
      font-size: 14px;
      white-space: nowrap;
      cursor: pointer;
    }

    .active {
      color: red;
      border-bottom: 1px solid red;
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

.category-enter-active,
.category-leave-active {
  transition: opacity 0.2s;
}
.category-enter, .category-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
