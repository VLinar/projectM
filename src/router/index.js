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
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/profile"),
      children: [
        {
          path: "/",
          name: "myprofile",
          component: () => import("../views/myprofile")
        },
        {
          path: "myorders",
          name: "myorders",
          component: () => import("../views/myorders")
        }
      ]
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("../views/product")
    }
  ],
  mode: "history"
});
