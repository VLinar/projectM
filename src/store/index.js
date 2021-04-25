import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    category: [],
    products: [],
    authuser: {},
    basket: []
  },
  mutations: {
    sendgroups(state, value) {
      state.category = value;
    },
    sendproducts(state, value) {
      state.products = value;
    },
    senduserauth(state, value) {
      state.authuser = value;
    },
    reg(state, value) {
      state.authuser = value;
    }
  },
  actions: {
    getgroups({ commit }) {
      return axios
        .get("http://localhost:3012/groups", {})
        .then(res => {
          commit("sendgroups", res.data.response);
          return false;
        })
        .catch(err => {
          console.log(err);
          return true;
        });
    },
    getproduct({ commit }, payload) {
      return axios
        .get("http://localhost:3012/products", {
          params: payload
        })
        .then(res => {
          commit("sendproducts", res.data.result);
          return false;
        })
        .catch(err => {
          console.log(err);
          return true;
        });
    },
    checkauth({ commit }, payload) {
      return axios
        .post("http://localhost:3012/login", {
          login: payload.login,
          password: payload.pass
        })
        .then(res => {
          document.cookie = `refresh_token=${res.data.refreshtoken}`;
          commit("senduserauth", res.data);
          return true;
        })
        .catch(err => {
          err = JSON.parse(JSON.stringify(err));
          return err.name;
        });
    },
    registration({ commit }, payload) {
      return axios
        .post("http://localhost:3012/reg", payload)
        .then(res => {
          commit("senduserauth", res.data);
          return res.data;
        })
        .catch(err => err);
    }
  },
  getters: {
    getmaincategory: state => {
      return state.category.filter(el => el.maingroup === null);
    },
    getsubcategory: state => id => {
      return id
        ? state.category.filter(category => category.maingroup === id)
        : [];
    },
    sheckgroup: state => grouproute => {
      return state.category.find(category => category.url === grouproute)
        ? true
        : false;
    },
    getidongroup: state => url => {
      return state.category.find(el => el.url === url).id;
    },
    breadcrumbs: state => groupid => {
      let mass = [];
      let id = groupid;

      while (id !== null) {
        let item = state.category.find(el => el.id === id);
        mass.push(item);
        id = item.maingroup;
      }

      return mass.reverse();
    }
  }
});
