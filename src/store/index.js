import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import jwt_decode from "jwt-decode";

Vue.use(Vuex);

const getUserApiontoken = async token => {
  let user = jwt_decode(token);

  return await axios
    .get(`http://localhost:3012/users/${user.id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(resp => resp.data)
    .catch(err => console.log(err));
};

export default new Vuex.Store({
  state: {
    category: [],
    users: [],
    products: [],
    orders: [],
    oneproduct: {},
    oneuser: {},
    oneorder: {},
    authuser: {},
    basket: [],
    token: "",
    cartproducts: [],
    payments: [],
    delivery: [],
    maxnumbername: 0,
    myorders: [],
    statuses:[]
  },
  mutations: {
    sendgroups(state, value) {
      state.category = value;
    },
    sendproducts(state, value) {
      state.products = value;
    },
    sendorders(state, value) {
      state.orders = value;
    },
    sendusers(state, value) {
      state.users = value;
    },
    sendproduct(state, value) {
      state.oneproduct = value;
    },
    senduser(state, value) {
      state.oneuser = value;
    },
    sendorder(state, value) {
      state.oneorder = value;
    },
    senduserauth(state, value) {
      state.authuser = value;
    },
    updateuserauth(state, value) {
      state.authuser = value;
    },
    sendtoken(state, value) {
      localStorage.setItem("token", value);
      state.token = value;
    },
    reg(state, value) {
      state.authuser = value;
    },
    addproducttocart(state, value) {
      state.cartproducts = value;
    },
    addpayment(state, value) {
      state.payments = value;
    },
    delivery(state, value) {
      state.delivery = value;
    },
    updatemaxordernumver(state, value) {
      state.maxnumbername = value;
    },
    deletecartitem(state, value) {
      state.cartproducts = value;
    },
    getmyorders(state, value) {
      state.myorders = value;
    },
    setStatuses(state, value){
      state.statuses = value
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
        .then(async res => {
          document.cookie = `refresh_token=${res.data.refreshtoken}`;
          commit("sendtoken", res.data.token);

          commit("senduserauth", await getUserApiontoken(res.data.token));
          return true;
        })
        .catch(err => {
          err = JSON.parse(JSON.stringify(err));
          return err.name;
        });
    },
    updaterefresh({ commit }, payload) {
      console.log("payload", payload);
      axios
        .post("http://localhost:3012/refreshtoken", {
          refreshtoken: payload
        })
        .then(async res => {
          document.cookie = `refresh_token=${res.data.refreshtoken}`;
          commit("sendtoken", res.data.token);
          commit("senduserauth", await getUserApiontoken(res.data.token));
        })
        .catch(err => console.log(err));
    },
    registration({ commit }, payload) {
      return axios
        .post("http://localhost:3012/reg", payload)
        .then(async res => {
          document.cookie = `refresh_token=${res.data.refreshtoken}`;
          commit("sendtoken", res.data.token);
          commit("senduserauth", await getUserApiontoken(res.data.token));
          return res.data;
        })
        .catch(err => err);
    },
    guestreg({ commit }, payload) {
      axios
        .post("http://localhost:3012/guest", payload)
        .then(async res => {
          document.cookie = `refresh_token=${res.data.refreshtoken}`;
          commit("sendtoken", res.data.token);
          commit("senduserauth", await getUserApiontoken(res.data.token));
          return res.data;
        })
        .catch(err => err);
    },
    userexit({ commit }) {
      document.cookie = "refresh_token=1; max-age = -1";
      commit("sendtoken", "");
      commit("senduserauth", {});
    },
    updateuser({ commit }, payload) {
      return axios
        .put(`http://localhost:3012/users/${this.state.authuser.id}`, payload, {
          headers: {
            Authorization: `Bearer ${this.state.token}`
          }
        })
        .then(res => {
          commit("updateuserauth", res.data.result);
        })
        .catch(error => error.response.status);
    },
    getoneproduct({ commit }, payload) {
      return axios
        .get(`http://localhost:3012/products/${payload}`)
        .then(res => {
          commit("sendproduct", res.data.result);
          return false;
        })
        .catch(err => {
          console.log(err);
          return true;
        });
    },
    getoneusers({ commit }, payload) {
      return axios
        .get(`http://localhost:3012/users/${payload}`)
        .then(res => {
          commit("senduser", res.data);
          return false;
        })
        .catch(err => {
          console.log(err);
          return true;
        });
    },
    getoneorders({ commit }, payload) {
      return axios
        .get(`http://localhost:3012/orders/${payload}`)
        .then(res => {
          commit("sendorder", res.data);
          return false;
        })
        .catch(err => {
          console.log(err);
          return true;
        });
    },
    addproducttocart({ commit }, payload) {
      let maxvalue = 0;
      let newproductcart = this.state.cartproducts;
      if (payload.id) {
        newproductcart.map(e => {
          if (e.id === payload.id) {
            e.amounts += payload.amounts;
            e.sum = e.price * e.amounts;
          }
          return e;
        });
        console.log(newproductcart);
      } else {
        if (newproductcart.length > 0) {
          maxvalue = this.state.cartproducts.reduce((newvalue, currentvalue) =>
            newvalue.id < currentvalue.id ? currentvalue : maxvalue
          ).id;
        } else {
          maxvalue = 1;
        }
        payload.id = maxvalue + 1;
        newproductcart.push(payload);
      }

      commit("addproducttocart", newproductcart);
    },
    productcartamount({ commit }, payload) {
      let newproductcart = this.state.cartproducts;
      newproductcart.map(e => {
        if (e.id === payload.id) {
          e.amounts = payload.amounts;
        }
        e.sum = e.price * e.amounts;
        return e;
      });
      commit("addproducttocart", newproductcart);
    },
    deteleproductincart({ commit }, payload) {
      let newproductcart = this.state.cartproducts;
      commit(
        "addproducttocart",
        newproductcart.filter(e => e.id !== payload)
      );
    },
    getpayments({ commit }) {
      axios
        .get("http://localhost:3012/payments/")
        .then(res => {
          commit("addpayment", res.data.response);
        })
        .catch(err => console.log(err));
    },
    delivery({ commit }) {
      axios
        .get("http://localhost:3012/delivery/")
        .then(res => {
          commit("delivery", res.data.response);
        })
        .catch(err => console.log(err));
    },
    async addupdatemaxordernumber({ commit }) {
      await axios
        .get("http://localhost:3012/orders/")
        .then(async res => {
          let result = res.data.response;
          let number = 0;
          if (result.length) {
            number = await result.reduce((newvalue, currentvalue) =>
              newvalue.number < currentvalue.number ? currentvalue : newvalue
            ).number;
            number++;
          } else {
            number = 1;
          }
          commit("updatemaxordernumver", number);
        })
        .catch(err => console.log(err));
    },
    deletecart({ commit }) {
      commit("deletecartitem", []);
    },
    getmyorders({ commit }) {
      let userid = this.state.authuser.id;
      axios
        .get(`http://localhost:3012/myorders/${userid}`)
        .then(res => {
          commit("getmyorders", res.data);
        })
        .catch(err => console.log(err));
    },
    getproductbygroupid({ commit }, payload) {
      axios
        .get(`http://localhost:3012/productsid/${payload.groupid}`, {
          params: {
            limit: payload.limit,
            page: payload.pages
          }
        })
        .then(res => {
          commit("sendproducts", res.data.result);
        })
        .catch(err => console.log(err));
      return axios
        .get(`http://localhost:3012/productscount/${payload.groupid}`)
        .then(res => res.data.count)
        .catch(err => console.log(err));
    },
    getallproducts({ commit }, payload) {
      axios
        .get(`http://localhost:3012/products`, {
          params: {
            limit: payload.limit,
            page: payload.pages
          }
        })
        .then(res => {
          commit("sendproducts", res.data.result);
        })
        .catch(err => console.log(err));
      return axios
        .get(`http://localhost:3012/productscount`)
        .then(res => res.data.count)
        .catch(err => console.log(err));
    },
    getallorders({ commit }, payload) {
      axios
        .get(`http://localhost:3012/orders`, {
          params: {
            limit: payload.limit,
            page: payload.pages
          }
        })
        .then(res => {
          commit("sendorders", res.data.response);
        })
        .catch(err => console.log(err));
      return axios
        .get(`http://localhost:3012/orderscount`)
        .then(res => res.data.count)
        .catch(err => console.log(err));
    },
    getalluser({ commit }, payload) {
      axios
        .get(`http://localhost:3012/users`, {
          params: {
            limit: payload.limit,
            page: payload.pages
          }
        })
        .then(res => {
          commit("sendusers", res.data);
        })
        .catch(err => console.log(err));
      return axios
        .get(`http://localhost:3012/userscount`)
        .then(res => res.data.count)
        .catch(err => console.log(err));
    },
    cleanuserauth({ commit }) {
      document.cookie = "refresh_token=1; max-age = -1";
      commit("senduserauth", {});
    },
    getstatuses({commit}){
      
      axios.get('http://localhost:3012/statuses').then(res => {
        commit('setStatuses', res.data.response)
      }).catch(err => console.log(err))

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
    },
    getuserrole: state => {
      return state.authuser.roleId;
    },
    getdoubleproduct: state => id => {
      return state.cartproducts.find(e => e.productId === id);
    },
    getcartproductslength: state => {
      return state.cartproducts.length;
    },
    getdeliveryid: state => id => {
      return state.delivery.find(e => (e.id = id));
    }
  }
});
