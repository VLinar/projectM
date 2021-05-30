<template>
  <div class="container">
    <h2>Спасибо за заказ!</h2>
    <hr />
    <h4>Заказ №{{ order.number }}</h4>
    <label for="">{{ dateformat(new Date(order.date)) }}</label>
    <hr />
    <h4>Статус платежа: Ожидается оплата</h4>
    <label for="">Итого {{ order.sum }} руб.</label>
    <hr />
    <h4>Доставим по адресу</h4>
    <label for="">{{ order.delivery_address }}</label>
    <h4>Способ доставки</h4>
    <label for="">{{ getdeliveryid(order.deliveryId).name }}</label>
    <hr />
    <h4>Ваш заказ</h4>
    <div class="fixed">
      <div class="prod" v-for="prod in product" :key="prod.id">
        <div class="name">
          <label for="">{{ prod.product.name }}</label>
          <label for="">{{ prod.amounts }} шт.</label>
          <label for="">{{ prod.price }} руб.</label>
        </div>           
      </div>
       <label class="itog" for=""><b>Итого</b>{{ order.sum }} руб.</label>
    </div>
    <router-link tag="button" to="/">Продолжить покупки</router-link>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      order: "",
      product: ""
    };
  },
  created() {
    axios
      .get(`http://localhost:3012/orders/${this.$route.query.id}`)
      .then(res => {
        this.order = res.data;
        axios
          .get(`http://localhost:3012/ordersgoodsid/${res.data.id}`)
          .then(res => {
            this.product = res.data;
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  },
  computed: {
    ...mapGetters(["getdeliveryid"])
  },
  methods: {
    dateformat(data) {
      return `${data.getDate()}-${
        data.getMonth().length > 1
          ? data.getMonth() + 1
          : "0" + (data.getMonth() + 1)
      }-${data.getFullYear()}  ${data.getHours()}:${data.getMinutes()}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 345px);
  width: 800px;
  h2 {
    text-align: center;
  }
  h4 {
    margin-bottom: 10px;
  }
  hr {
    border: 0;
    height: 1px;
    background: #80808065;
    margin-top: 20px;
  }
  .fixed {
    display: flex;
    // align-items: center;
    flex-direction: column;
    .prod {
      display: flex;
      img {
        width: 70px;
        height: 70px;
      }
      .name {
        margin: 10px;
        display: flex;
        flex-direction: column;
      }
    }
  }
  .itog{
    right: 0;
  }
  button {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    margin-top: 10px;
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
</style>
