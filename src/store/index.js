import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    category: [
      {
        id: 1,
        name: "Кофты",
        maingroup: null,
        url: "kovta"
      },
      {
        id: 2,
        name: "Свитшоты",
        maingroup: 1,
        url: "svitshot"
      },
      {
        id: 3,
        name: "Штаны",
        maingroup: 2,
        url: "shtani"
      },
      {
        id: 4,
        name: "Шорты",
        maingroup: 2,
        url: "shorti"
      },
      {
        id: 5,
        name: "Куртки",
        maingroup: 1,
        url: "shtani"
      },
      {
        id: 7,
        name: "Куртки",
        maingroup: 1,
        url: "shtani"
      },
      {
        id: 8,
        name: "Куртки",
        maingroup: 1,
        url: "shtani"
      },
      {
        id: 9,
        name: "Куртки",
        maingroup: 1,
        url: "shtani"
      },
      {
        id: 6,
        name: "другое",
        maingroup: null,
        url: "shtani"
      }
    ],
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
      },
      {
        id: 7,
        image:
          "https://cdn.b-catalog.ru/bcbucket/public/a/102/2020/8/3/0f25cc7f-e5d9-4922-8a31-feacebe2891d",
        name: "Product 1",
        tags: ["NEW"],
        price: 100
      },
      {
        id: 8,
        image:
          "https://cdn.b-catalog.ru/bcbucket/public/a/102/2020/8/3/0f25cc7f-e5d9-4922-8a31-feacebe2891d",
        name: "Product 1",
        tags: ["NEW"],
        price: 100
      },
      {
        id: 9,
        image:
          "https://cdn.b-catalog.ru/bcbucket/public/a/102/2020/8/3/0f25cc7f-e5d9-4922-8a31-feacebe2891d",
        name: "Product 1",
        tags: ["NEW"],
        price: 100
      },
      {
        id: 10,
        image:
          "https://cdn.b-catalog.ru/bcbucket/public/a/102/2020/8/3/0f25cc7f-e5d9-4922-8a31-feacebe2891d",
        name: "Product 1",
        tags: ["NEW"],
        price: 100
      },
      {
        id: 11,
        image:
          "https://cdn.b-catalog.ru/bcbucket/public/a/102/2020/8/3/0f25cc7f-e5d9-4922-8a31-feacebe2891d",
        name: "Product 1",
        tags: ["NEW"],
        price: 100
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getmaincategory: state => {
      return state.category.filter(el => el.maingroup === null);
    },
    getcategoryname: state => id => {
      return id
        ? state.category.find(el => el.id === id).name
        : state.category.find(el => el.id === id);
    },
    getsubcategory: state => id => {
      return id
        ? state.category.filter(category => category.maingroup === id)
        : [];
    }
  }
});
