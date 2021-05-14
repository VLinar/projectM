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
      path: "/info",
      name: "info",
      component: () => import("../views/info"),
      children: [
        {
          path: "payment",
          name: "payment",
          component: () => import("../views/payment")
        },
        {
          path: "delivery",
          name: "delivery",
          component: () => import("../views/delivery")
        },
        {
          path: "contacts",
          name: "contacts",
          component: () => import("../views/contacts")
        }
      ]
    },
    {
      path: "/info/payment",
      name: "payment",
      component: () => import("../views/payment"),
      children: [
        {
          path: "about",
          name: "about",
          component: () => import("../views/about")
        },
        {
          path: "delivery",
          name: "delivery",
          component: () => import("../views/delivery")
        },
        {
          path: "contacts",
          name: "contacts",
          component: () => import("../views/contacts")
        }
      ]
    },
    {
      path: "/info/delivery",
      name: "delivery",
      component: () => import("../views/delivery"),
      children: [
        {
          path: "about",
          name: "about",
          component: () => import("../views/about")
        },
        {
          path: "payment",
          name: "payment",
          component: () => import("../views/payment")
        },
        {
          path: "contacts",
          name: "contacts",
          component: () => import("../views/contacts")
        }
      ]
    },
    {
      path: "/info/contacts",
      name: "contacts",
      component: () => import("../views/contacts"),
      children: [
        {
          path: "about",
          name: "about",
          component: () => import("../views/about")
        },
        {
          path: "delivery",
          name: "delivery",
          component: () => import("../views/delivery")
        },
        {
          path: "payment",
          name: "payment",
          component: () => import("../views/payment")
        }
      ]
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("../views/product")
    },
    {
      path: "/cartcheckout",
      name: "cartcheckout",
      component: () => import("../views/cartcheck")
    }
  ],
  mode: "history"
});
