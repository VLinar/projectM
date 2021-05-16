<template>
  <div class="product_info">
    <h1>{{ productinfo.name }}</h1>
    <div class="price">
      <h2>{{ productinfo.price }} ₽</h2>
      <span>/{{ productinfo.measure.shortname }}</span>
    </div>
    <div class="count_block">
      <h3>Количество</h3>
      <div class="count_button">
        <i
          class="fa fa-minus-circle fa-1.5x"
          @click="count === 0 ? (count = 0) : count--"
          aria-hidden="true"
        ></i>
        {{ count }}
        <i
          class="fa fa-plus-circle"
          aria-hidden="true"
          @click="
            productinfo.amount > count ? count++ : (count = productinfo.amount)
          "
        ></i>
      </div>
    </div>
    <button
      v-if="productinfo.amount > 0"
      @click="addtocart(productinfo.id, productinfo.price, productinfo.name)"
    >
      В корзину
    </button>

    <span v-else>Нет в наличии</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    productinfo: {
      type: Object
    }
  },
  data() {
    return {
      count: 1
    };
  },
  computed: {
    ...mapGetters(["getdoubleproduct"])
  },
  methods: {
    ...mapActions(["addproducttocart"]),

    addtocart(prodid, prodprice, prodname) {
      console.log(this.getdoubleproduct(prodid));
      if (this.getdoubleproduct(prodid) === undefined) {
        let orderproduct = {
          name: prodname,
          amounts: this.count,
          price: prodprice,
          sum: prodprice * this.count,
          productId: prodid
        };
        this.addproducttocart(orderproduct);
      } else {
        let orderproduct = {
          id: this.getdoubleproduct(prodid).id,
          name: prodname,
          amounts: this.count,
          price: prodprice,
          sum: prodprice,
          productId: prodid
        };
        this.addproducttocart(orderproduct);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.product_info {
  padding: 15px 0px;
  h1 {
    margin-top: 0;
  }
  .price {
    display: flex;
    gap: 5px;
    align-items: center;
    h2 {
      margin: 0;
      padding: 0;
    }
    span {
      color: gray;
    }
  }
  .count_button {
    font-size: 27px;
    display: flex;
    align-items: baseline;
    gap: 0.3em;
    i {
      color: red;
      cursor: pointer;
    }
  }
  button {
    margin-top: 10px;
    color: white;
    border: 0;
    background: #333;
    padding: 10px 50px;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      background: red;
    }
  }
}
</style>
