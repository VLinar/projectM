<template>
  <div class="container">
    <h2>История заказов</h2>
    <div class="inf" v-for="order in myorders" :key="order.id">
      <div class="info">
        <p>Заказ №{{ order.number }}</p>
        <p>Дата заказа:{{ order.date }}</p>
        <p>Статус заказа:{{ order.status.name }}</p>
      </div>
      <div class="order_info">
        <div class="prod_info">
          <div
            class="fixed"
            v-for="product in order.products"
            :key="product.id"
          >
            <div class="name">
              <label for="">{{ product.name }}</label>
              <label for="">{{ product.price }} руб.</label>
              <label for="">Количество: {{ product.amounts }} шт.</label>
            </div>
          </div>
        </div>
        <div class="product_info">
          <h4>Способ оплаты</h4>
          <label for="">{{ order.payment.name }}</label>
          <h4>Количество:</h4>
          <label for="">x{{ order.products.length }}</label>
          <h4>Итого: {{ order.sum }} руб.</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  created() {
    this.getmyorders;
  },
  computed: {
    ...mapState(["myorders"]),
    ...mapActions(["getmyorders"])
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 345px);
  width: 850px;
  background: #f7f7f7;
  border-radius: 6px;
  .inf {
    background: #eceef1;
    border-radius: 6px;
    padding: 0;
  }
  .info {
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-between;
    & p {
      padding-right: 20px;
    }
  }
  .order_info {
    display: grid;
    grid-template-columns: 1.5fr 0.5fr;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: #fff;
    padding: 15px;
  }
  h2 {
    text-align: left;
    margin-top: 3px;
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
  .prod_info {
    padding: 0px 15px;
  }
  .fixed {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(128, 128, 128, 0.5);
    .name {
      display: flex;
      flex-direction: column;
      margin: 10px;
    }

    & img {
      width: 85px;
      height: 85px;
    }
  }
  button {
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
