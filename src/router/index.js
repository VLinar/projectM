import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue")
    },
    {
      path: "*",
      name: "404error",
      component: () => import("../views/404error.vue")
    },
    {
      path: "/categories/:categories",
      name: "products",
      component: () => import("../views/products.vue")
    }
  ],
  mode: "history"
});
