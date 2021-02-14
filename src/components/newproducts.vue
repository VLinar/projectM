<template>
  <div class="container newprodgrid">
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
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          image:
            "https://cdn.b-catalog.ru/bcbucket/public/a/102/2020/8/3/0f25cc7f-e5d9-4922-8a31-feacebe2891d",
          name: "Product 1",
          tags: ["NEW"],
          price: 100
        },
        {
          id: 2,
          image:
            "https://cdn.b-catalog.ru/bcbucket/public/a/102/2020/8/3/195b6cc1-0640-48b9-8dd7-79ef5077ffe7",
          name: "Product 1",
          tags: ["NEW"],
          price: 100
        },
        {
          id: 3,
          image:
            "https://cdn.b-catalog.ru/bcbucket/public/a/102/2020/8/3/3761d78a-0218-49c0-a7a5-835f5617de4a",
          name: "Product 1",
          tags: ["NEW"],
          price: 100
        },
        {
          id: 4,
          image:
            "https://images.wallpaperscraft.ru/image/ulitsa_osveshchenie_podsvetka_134856_1920x1080.jpg",
          name: "Product 1",
          tags: ["NEW"],
          price: 100
        },
        {
          id: 5,
          image: "",
          name: "Product 1",
          tags: ["NEW"],
          price: 100
        },
        {
          id: 6,
          image: "",
          name: "Product 1",
          tags: ["NEW"],
          price: 100
        }
      ],
      emtyimage: "https://biolik.com.ua/wp-content/uploads/2019/12/NOFoto.png"
    };
  }
};
</script>

<style lang="scss" scoped>
.newprodgrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  justify-content: center;
  padding: 1rem 3rem;
  margin-bottom: 30px;
  .product_card {
    padding: 5px;
    display: flex;
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
      height: 282px;
      align-self: center;
      max-width: 300px;
    }
  }
}
</style>
