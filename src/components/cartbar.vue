<template>
  <div class="rightbar">
    <div class="background"></div>
    <div class="cartbar">
      <i class="fa fa-close fa-2x" @click="$emit('closecartbar')"></i>
      <div class="cart_header">
        <div class="cart_header_info">
          <h2>Корзина</h2>
          <h4>Итого: {{ allsum }} ₽</h4>
        </div>
        <div class="cart_button_group">
          <router-link
            to="/cartcheckout"
            tag="button"
            @click.native="$emit('closecartbar')"
            >Оформить заказ</router-link
          >
          
        </div>
      </div>
      <div class="cart_product">
        <div class="cartproduct" v-for="item in cartproducts" :key="item.name">
          <div class="cartproduct_header">
            <h4>{{ item.name }}</h4>
            <i
              class="fa fa-times"
              aria-hidden="true"
              @click="deteleproductincart(item.id)"
            ></i>
          </div>

          <div class="cartproduct_footer">
            <h5>{{ item.price }} ₽</h5>
            <div class="count_block">
              <i
                class="fa fa-minus-circle"
                aria-hidden="true"
                @click="minussum(item)"
              ></i>
              {{ item.amounts }}
              <i
                class="fa fa-plus-circle"
                aria-hidden="true"
                @click="plussum(item)"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["cartproducts"]),
    allsum() {
      let sum = 0;
      this.cartproducts.map(e => {
        sum += e.sum;
      });
      return sum;
    }
  },
  methods: {
    ...mapActions(["productcartamount", "deteleproductincart"]),
    minussum(item) {
      this.productcartamount(item.id, item.amounts--);
      if (item.amounts === 0) {
        this.deteleproductincart(item.id);
      }
    },
    plussum(item) {
      this.productcartamount(item.id, item.amounts++);
    }
  }
};
</script>

<style lang="scss" scoped>
.rightbar {
  position: fixed;
  right: 0;
  top: 0;
  width: auto;
  z-index: 1;
  .cartbar {
    overflow-y: scroll;
    background: white;
    height: 100vh;
    width: auto;
    
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 10px 20px 10px 20px;
    i {
      position: absolute;
      top: 10px;
      left: -35px;
      cursor: pointer;
      color: white;
      &:hover {
        color: red;
      }
    }
    .cart_header {
      .cart_header_info {
        display: flex;
        gap: 3em;
        justify-content: space-between;
        align-items: center;
      }
      .cart_button_group {
        display: flex;
        gap: 1em;
        button {
          border: 1px solid white;
          padding: 10px 30px;
          cursor: pointer;
          width: 350px;
          &:hover {
            border: 1px solid red;
            background: white;
            color: red;
          }
        }
      }
    }
    .cart_product {
      .cartproduct {
        border: 1px solid gray;
        padding: 0px 15px;
      }

      h4 {
        margin: 10px 0px;
      }
      h5 {
        margin: 10px 0px;
      }
      i {
        position: initial;
        color: black;
        &:hover {
          color: red;
        }
      }
      .cartproduct_header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .cartproduct_footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  .background {
    position: absolute;
    top: 0%;
    right: 0;
    height: 100vh;
    width: 100vw;
    background: rgb(0 0 0 / 65%);
    z-index: -1;
  }
}
</style>
