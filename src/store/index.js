import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    category: [],
    products: [],
    authuser: {},
    applogin: "applogin@mailforspam.com",
    apppass: "apppass",
    apptoken: ""
  },
  mutations: {
    sendapptoken(state, value) {
      state.apptoken = value;
    },
    sendgroups(state, value) {
      state.category = value;
    },
    sendproducts(state, value) {
      state.products = value;
    },
    senduserauth(state, value) {
      state.authuser = value;
    }
  },
  actions: {
    getapptoken({ commit }) {
      axios
        .post("http://localhost:3012/login", {
          login: this.state.applogin,
          password: this.state.apppass
        })
        .then(res => {
          commit("sendapptoken", res.data.token);
        })
        .catch(err => console.log(err));
    },
    getgroups({ commit }) {
      axios
        .get("http://localhost:3012/groups", {
          headers: {
            authorization: `Basic ${this.state.apptoken}`,
            "Content-Type": "application/json"
          }
        })
        .then(res => {
          commit("sendgroups", res.data.response);
        })
        .catch(err => {
          console.log(this.state.apptoken);
          console.log(err);
        });
    },
    getmainpageproduct({ commit }) {
      axios
        .get("http://localhost:3012/products", {
          params: {
            limit: 8
          },
          headers: {
            authorization: `Basic ${this.state.apptoken}`,
            "Content-Type": "application/json"
          }
        })
        .then(res => {
          console.log("test");
          commit("sendproducts", res.data.result);
        })
        .catch(err => {
          console.log(this.state.apptoken);
          console.log(err);
        });
    },
    checkauth({ commit }, payload) {
      return axios
        .post("http://localhost:3012/login", {
          login: payload.login,
          password: payload.pass
        })
        .then(res => {
          console.log(res);
          commit("senduserauth", res.data);
          return true;
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
