import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

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
      meta: { requiresAuth: true },
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
      ],
      beforeEnter: (to, from, next) => {
        console.log(store.state.authuser.roleId);
        if (to.matched.some(record => record.meta.requiresAuth)) {
          if (store.state.authuser.roleId === 2) {
            next();
          } else {
            alert("Вы не авторизованы");
            next({
              path: "/"
            });
          }
        } else {
          next();
        }
      }
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
          path: "contact",
          name: "contact",
          component: () => import("../views/contact")
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
    },
    {
      path: "/cartcheckout/orderconfirmation",
      name: "orderconfirmation",
      component: () => import("../views/orderconfirmation")
    }
  ],
  mode: "history"
});
