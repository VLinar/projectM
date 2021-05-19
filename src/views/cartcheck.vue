<template>
  <div class="container">
    <h2>Оформление заказа</h2>
    <div class="order_info">
      <div class="user_info">
        <h4>Личные данные</h4>
        <div class="input_group">
          <div class="group">
            <span v-if="error.firstname.empty">Обязательное поле</span>
            <input
              type="text"
              placeholder="Имя"
              id="firstname"
              @input="error.firstname.empty = false"
              v-model.trim="$v.firstname.$model"
              :class="error.firstname.empty ? 'input_err' : ''"
            />
            <label for="firstname">Имя</label>
          </div>
          <div class="group">
            <span v-if="error.lastname.empty">Обязательное поле</span>
            <input
              type="text"
              @input="error.lastname.empty = false"
              placeholder="Фамилия"
              id="lastname"
              v-model.trim="$v.lastname.$model"
              :class="error.lastname.empty ? 'input_err' : ''"
            />
            <label for="lastname">Фамилия</label>
          </div>
          <div class="group">
            <span v-if="error.email.empty">Обязательное поле</span>
            <span v-if="error.email.email">Некорректный E-mail</span>
            <input
              type="text"
              placeholder="E-mail"
              @input="error.email = { empty: false, email: false }"
              id="email"
              v-model.trim="$v.email.$model"
              :class="error.email.empty || error.email.email ? 'input_err' : ''"
            />
            <label for="email">Почта</label>
          </div>
          <div class="group">
            <span v-if="error.phone.empty">Обязательное поле</span>
            <span v-if="error.phone.min">Не корректный номер телефона</span>
            <input
              type="text"
              id="phone"
              @input="error.phone = { empty: false, min: false }"
              placeholder="+7 (999) 999-99-99"
              v-model.trim="$v.phone.$model"
              v-mask="'+7 (###) ###-##-##'"
              :class="error.phone.empty || error.phone.min ? 'input_err' : ''"
            />
            <label for="phone">Тел.</label>
          </div>
          <div class="group">
            <span v-if="error.adres.empty">Обязательное поле</span>
            <input
              placeholder="Адрес"
              type="text"
              id="adres"
              @input="error.adres.empty = false"
              v-model.trim="$v.adres.$model"
              :class="error.adres.empty ? 'input_err' : ''"
            />
            <label for="adres">Адрес</label>
          </div>
        </div>
        <div class="cashin">
          <h4>Способ оплаты</h4>
          <select v-model="paymethod">
            <option
              v-for="(pay, index) in payments"
              :key="index"
              :value="pay.id"
              >{{ pay.name }}</option
            >
          </select>
        </div>
        <div class="delivery">
          <h4>Способ доставки</h4>
          <select v-model="deliverymethod">
            <option
              v-for="(item, index) in delivery"
              :key="index"
              :value="item.id"
              >{{ item.name }}</option
            >
          </select>
        </div>
      </div>
      <div class="product_info">
        <h4>Состав заказа</h4>
        <div class="products">
          <div class="product_block" v-if="cartproducts.length > 0">
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
          <div class="product_block" v-else>
            <h4>Вы не выбрали товары</h4>
          </div>
          <div class="fixed">
            <h4>Итого: {{ allsum }}</h4>
            <button
              :disabled="cartproducts.length < 1 ? true : false"
              @click="addorder"
            >
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters, mapState } from "vuex";
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  name: "cartcheck",
  data() {
    return {
      lastname: "",
      firstname: "",
      email: "",
      adres: "",
      phone: "",
      paymethod: 1,
      deliverymethod: 1,
      error: {
        lastname: {
          empty: false
        },
        firstname: {
          empty: false
        },
        email: {
          empty: false,
          email: false
        },
        adres: {
          empty: false
        },
        phone: {
          empty: false,
          min: false
        },
        paymethod: {
          empty: false
        },
        deliverymethod: {
          empty: false
        }
      }
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
    ...mapActions(["addupdatemaxordernumber", "deletecart"]),
    ...mapState([
      "cartproducts",
      "authuser",
      "payments",
      "delivery",
      "maxnumbername"
    ]),
    allsum() {
      let sum = 0;
      this.cartproducts.map(e => {
        sum += e.sum;
      });
      return sum;
    }
  },
  methods: {
    async addorder() {
      let valid = this.inputvalid();
      if (valid) {
        return;
      }
      await this.addupdatemaxordernumber
        .then(async () => {
          if (this.authuser.roleId === 1) {
            await axios
              .put(`http://localhost:3012/users/${this.authuser.id}`, {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                address: this.adres,
                phone: this.phone
              })
              .then(res => res)
              .catch(err => console.log(err));
          }
          await axios
            .post("http://localhost:3012/orders", {
              date: new Date(),
              number: this.maxnumbername,
              sum: this.allsum,
              delivery_address: this.adres,
              phone_contact_inform_id: this.phone.match(/[0-9]/g).join(""),
              email_contact_inform_id: this.email,
              pay: false,
              userId: this.authuser.id,
              statusId: 1,
              deliveryId: this.deliverymethod,
              paymentId: this.paymethod
            })
            .then(res => {
              let orderid = res.data.id;
              this.cartproducts.map(async e => {
                delete e.id;
                delete e.name;
                e.orderId = orderid;
                await axios
                  .post("http://localhost:3012/ordersgoods", e)
                  .then(res => {
                    if (res.data.id) {
                      this.deletecart;
                      this.$router.push("/cartcheckout/orderconfirmation");
                    }
                  })
                  .catch(err => console.log(err));
              });
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    },
    formatdate() {
      let date = new Date();
      return `${date.getDate()}-${
        (date.getMonth() + 1).toString().length === 1
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1
      }-${date.getFullYear()}`;
    },
    inputvalid() {
      let newobj = {};
      this.$v.firstname.$model === ""
        ? (newobj.firstname = { empty: true })
        : (newobj.firstname = { empty: false });
      this.$v.lastname.$model === ""
        ? (newobj.lastname = { empty: true })
        : (newobj.lastname = { empty: false });
      this.$v.email.$model === ""
        ? (newobj.email = { empty: true })
        : (newobj.email = { empty: false });
      !this.$v.email.email && this.$v.email.$dirty
        ? (newobj.email.email = true)
        : (newobj.email.email = false);

      this.$v.phone.$model === ""
        ? (newobj.phone = { empty: true })
        : (newobj.phone = { empty: false });
      !this.$v.phone.minLength && this.$v.phone.$dirty
        ? (newobj.phone.min = true)
        : (newobj.phone.min = false);
      this.$v.adres.$model === ""
        ? (newobj.adres = { empty: true })
        : (newobj.adres = { empty: false });

      this.error = newobj;

      return this.$v.$invalid;
    }
  },
  validations: {
    lastname: {
      required
    },
    firstname: {
      required
    },
    email: {
      required,
      email
    },
    adres: {
      required
    },
    phone: {
      minLength: minLength(17)
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 345px);
  .order_info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .user_info {
      background: #8080800a;
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
          span {
            color: red;
            font-size: 12px;
            padding-top: 3px;
          }
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

            &.input_err {
              + label {
                color: red;
              }
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
              &:disabled {
                cursor: not-allowed;
                color: red;
                border: 1px solid red;
              }
            }
          }
        }
      }
    }
  }
}
</style>
