<template>
  <div>
    <Spinner v-if="loading" />
    <div class="newprodgrid" v-else>
      <router-link
        class="product_card"
        tag="div"
        v-for="item in products"
        :key="item.id"
        :to="`/product/${item.id}`"
      >
        <img
          :src="
            item.images.length > 0 ? defoltimage(item.images).url : emtyimage
          "
          alt="Изображение товара"
        />
        <div class="card_text">
          <h4>{{ item.name }}</h4>
          <div>
            <span>{{ item.price }} ₽/шт</span>
            <i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Spinner from "@/components/loadspinner.vue";
export default {
  props: {
    limit: Number
  },
  components: {
    Spinner
  },
  data() {
    return {
      loading: true,
      emtyimage: "https://biolik.com.ua/wp-content/uploads/2019/12/NOFoto.png"
    };
  },
  async mounted() {
    let params = {};

    Object.entries(this.$props).map(e => {
      params[e[0]] = e[1];
    });

    setTimeout(
      async () => (this.loading = await this.getproduct(params)),
      2500
    );
  },
  computed: {
    ...mapState(["products"])
  },
  methods: {
    ...mapActions(["getproduct"]),
    defoltimage(imagearray) {
      return imagearray.find(e => e.default === true);
    }
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
    img {
      padding-top: 5px;
    }
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
