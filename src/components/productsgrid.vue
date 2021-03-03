<template>
  <div class="container">
    <div class="newprodgrid">
      <div v-for="item in products" :key="item.id" class="product_card">
        <img
          :src="item.image ? item.image : emtyimage"
          alt="Изображение товара"
        />
        <div class="card_text">
          <h4>{{ item.name }}</h4>
          <div>
            <span>{{ item.price }}₽</span>
            <i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      // products: [],
      emtyimage: "https://biolik.com.ua/wp-content/uploads/2019/12/NOFoto.png"
    };
  },
  computed: {
    ...mapState(["products"])
  }
};
</script>

<style lang="scss" scoped>
.newprodgrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  justify-content: center;
  margin-bottom: 30px;
  .product_card {
    display: flex;
    width: 290px;
    flex-direction: column;
    box-shadow: rgb(0 0 0 / 8%) 0px 6.11106px 21.3887px;
    transition: box-shadow 0.2s ease 0s;
    &:hover {
      box-shadow: rgb(0 0 0 / 15%) 0px 0px 20px 10px;
      transition: box-shadow 0.2s ease 0s;
    }
    .card_text {
      padding: 0 20px 10px 20px;
      h4 {
        margin-bottom: 10px;
      }
      & div {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      }
    }

    img {
      height: 250px;
      align-self: center;
      // max-width: 300px;
      max-width: -webkit-fill-available;
    }
  }
}
</style>
