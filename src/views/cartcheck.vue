<template>
  <div class="container">
    <h2>Оформление заказа</h2>
    <div class="order_info">
      <div class="user_info">
        <h4>Личные данные</h4>
        <div class="input_group">
          <div class="group">
            <input
              type="text"
              placeholder="Имя"
              id="firstname"
              v-model="firstname"
            />
            <label for="firstname">Имя</label>
          </div>
          <div class="group">
            <input
              type="text"
              placeholder="Фамилия"
              id="lastname"
              v-model="lastname"
            />
            <label for="lastname">Фамилия</label>
          </div>
          <div class="group">
            <input
              type="text"
              placeholder="E-mail"
              id="email"
              v-model="email"
            />
            <label for="email">Почта</label>
          </div>
          <div class="group">
            <input
              type="text"
              id="phone"
              placeholder="+7 (999) 999-99-99"
              v-model="phone"
              v-mask="'+7 (###) ###-##-##'"
            />
            <label for="phone">Тел.</label>
          </div>
          <div class="group">
            <input placeholder="Адрес" type="text" id="adres" v-model="adres" />
            <label for="adres">Адрес</label>
          </div>
        </div>
        <div class="cashin">
          <h4>Способ оплаты</h4>
          <select v-model="paymethod">
            <option>Наличными курьеру</option>
            <option>Картой</option>
          </select>
        </div>
        <div class="delivery">
          <h4>Способ доставки</h4>
          <select v-model="deliverymethod">
            <option>Самовызов</option>
            <option>Курьером</option>
          </select>
        </div>
      </div>
      <div class="product_info">
        <h4>Состав заказа</h4>
        <div class="products">
          <div class="product_block">
            <div
              v-for="item in cartproducts"
              :key="item.id"
              class="cart_product"
            >
              <div class="cartproduct_header">
                <h5>{{ item.name }}</h5>
              </div>
              <div class="cartproduct_footer">
                <span>{{ item.price }} ₽</span>
                <span>{{ item.amounts }} шт.</span>
              </div>
            </div>
          </div>
          <div class="fixed">
            <h4>Итого: {{ allsum }}</h4>
            <button>Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      lastname: "",
      firstname: "",
      email: "",
      adres: "",
      phone: "",
      paymethod: "",
      deliverymethod: ""
    };
  },
  created() {
    if (this.getuserrole === 2) {
      (this.lastname = this.authuser.lastname),
        (this.firstname = this.authuser.firstname),
        (this.email = this.authuser.email),
        (this.adres = this.authuser.address),
        (this.phone = this.authuser.phone);
    }
  },
  computed: {
    ...mapGetters(["getuserrole"]),
    ...mapState(["cartproducts", "authuser"]),
    allsum() {
      let sum = 0;
      this.cartproducts.map(e => {
        sum += e.sum;
      });
      return sum;
    }
  }
};
</script>

<style lang="scss" scoped>
.order_info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  .user_info {
    background: #80808026;
    padding: 15px;
    border-radius: 10px 0px 0px 10px;
    .input_group {
      display: flex;
      flex-flow: wrap;
      gap: 1em;
      justify-content: space-between;
      .group {
        flex-direction: column-reverse;
        display: flex;
        label {
          padding-bottom: 5px;
          font-size: 14px;
        }
        input {
          padding: 7px 12px;
          border-radius: 5px;
          width: 255px;
          border: 1px solid;

          &:focus {
            + label {
              color: red;
            }
            outline: none;
            border: 1px solid red;
          }
        }
      }
    }
    .delivery select,
    .cashin select {
      width: 100%;
      padding: 7px 12px;
      border-radius: 5px;
    }
  }
  .product_info {
    padding: 15px;
    border-radius: 0px 10px 10px 0px;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 24px;
    .products {
      display: flex;
      flex-direction: column;
      height: 90%;
      justify-content: space-between;
      .product_block {
        max-height: 557px;
        overflow-y: auto;
        .cart_product {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 5px 0px;
          .cartproduct_footer {
            display: flex;
            flex-direction: column;
          }
        }
      }

      .fixed {
        display: flex;
        justify-content: space-between;
        align-items: center;
        button {
          border: 1px solid white;
          padding: 10px 30px;
          cursor: pointer;
          height: 50px;
          &:hover {
            border: 1px solid #2ba22b;
            color: #2ba22b;
            background: white;
          }
        }
      }
    }
  }
}
</style>
