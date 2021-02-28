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
