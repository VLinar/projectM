<template>
  <header class="container">
    <div class="header_first_rowmenu">
      <router-link
        src="http://testdomainokey.000webhostapp.com/dipl/logo_1.png"
        alt="Logo"
        width="150px"
        tag="img"
        to="/"
      >
      </router-link>

      <div class="menu">
        <router-link tag="a" active-class="active" to="/shares"
          >Акции</router-link
        >
        <router-link tag="a" active-class="active" to="/info" exact
          >О нас</router-link
        >
        <router-link tag="a" active-class="active" to="/info/payment"
          >Оплата</router-link
        >
        <router-link tag="a" active-class="active" to="/info/delivery"
          >Доставка</router-link
        >
        <router-link tag="a" active-class="active" to="/info/contacts"
          >Контакты</router-link
        >
      </div>
    </div>
    <div class="header_second_rowmenu">
      <span @click="categorybar = !categorybar">
        <i class="fa fa-bars" aria-hidden="true"></i> Каталог</span
      >
      <div class="search">
        <input
          type="text"
          placeholder="Поиск"
          v-model="search"
          @input="searchinput"
        /><i class="fa fa-search" aria-hidden="true"></i>
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
          @click="authmodalopen"
          @closemodal="modalauth = !modalauth"
          v-if="!getuserrole || getuserrole === 1"
        ></i>
        <i
          class="fa fa-user usermenu"
          aria-hidden="true"
          v-if="getuserrole && getuserrole !== 1"
          @mouseenter="usermenu = true"
          @mouseleave="usermenu = false"
        >
          <div v-if="usermenu">
            <router-link to="/profile/myorders" tag="span"
              >Мои заказы</router-link
            >
            <router-link to="/profile" tag="span">Профиль</router-link>
            <span @click="logout">Выйти</span>
          </div>
        </i>
        <i
          class="fa fa-shopping-cart shopping-cart"
          aria-hidden="true"
          @click="cartbar = !cartbar"
          ><span v-if="getcartproductslength > 0">{{
            getcartproductslength
          }}</span></i
        >
      </div>
    </div>
    <transition name="category">
      <Authmodal v-if="modalauth" @closemodalwindow="modalauth = !modalauth" />
    </transition>
    <transition name="category">
      <Category
        v-if="categorybar"
        @closecategorybar="categorybar = !categorybar"
      />
    </transition>
    <transition name="category">
      <Cart v-if="cartbar" @closecartbar="cartbar = !cartbar" />
    </transition>
  </header>
</template>

<script>
import Category from "@/components/categorybar.vue";
import Cart from "@/components/cartbar";
import Authmodal from "@/components/authmodal.vue";
// import axios from "axios";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      categorybar: false,
      blacktheme: false,
      modalauth: false,
      usermenu: false,
      cartbar: false,
      search: null
    };
  },
  watch: {
    $route() {
      this.categorybar = false;
    }
  },
  components: {
    Category,
    Authmodal,
    Cart
  },
  methods: {
    ...mapActions(["userexit", "guestreg"]),
    authmodalopen() {
      document.body.style.overflow = "hidden";
      this.modalauth = !this.modalauth;
    },
    logout() {
      this.guestreg({
        lastname: "Гостевой",
        firstname: "Аккаунт",
        email: "guesttest@mailforspam.com",
        password: "0000",
        roleId: 1
      });
      this.$router.push("/");
    },
    searchinput() {
      // axios.get("http://localhost:3012/search", {
      //   params: {
      //     text: this.search
      //   }
      // });
    }
  },
  computed: {
    ...mapGetters(["getuserrole", "getcartproductslength"])
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
    .usermenu {
      position: relative;
      div {
        display: flex;
        flex-direction: column;
        position: absolute;
        z-index: 1;
        background: white;
        right: 0;
        top: 23px;
        font-size: 16px;
        padding: 10px;
        width: max-content;
        border-radius: 5px;
        box-shadow: 4px 5px 20px 0px #0000006b;
        span {
          padding: 2.5px 0px;
          &:hover {
            color: red;
          }
        }
      }
    }

    .shopping-cart {
      position: relative;
      span {
        position: absolute;
        top: -5px;
        font-size: 10px;
        padding: 3px 5px;
        background: red;
        border-radius: 20px;
      }
    }
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
