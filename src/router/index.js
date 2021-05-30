import Vue from "vue";
import VueRouter from "vue-router";
import jwt_decode from "jwt-decode";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Main",
      component: () => import("../views/mainpage.vue"),
      children: [
        {
          path: "/",
          name: "Home",
          component: () => import("../views/Home.vue")
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
            let token = localStorage.getItem("token");
            let role = jwt_decode(token).role;
            if (to.matched.some(record => record.meta.requiresAuth)) {
              if (role === 2 || role === 3) {
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
              path: "contacts",
              name: "contacts",
              component: () => import("../views/contacts")
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
      ]
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/admin.vue"),
      beforeEnter: (to, from, next) => {
        let token = localStorage.getItem("token");
        let role = jwt_decode(token).role;
        if (role === 3) {
          next();
        } else {
          next({
            path: "/adminauth"
          });
        }
      },
      children: [
        {
          path: "",
          name: "adminproducts",
          component: () => import("../views/adminproducts")
        },
        {
          path: "adminusers",
          name: "adminusers",
          component: () => import("../views/adminusers")
        },
        {
          path: "adminorders",
          name: "adminorders",
          component: () => import("../views/adminorders")
        }
      ]
    },
    {
      path: "/adminauth",
      name: "adminauth",
      component: () => import("../views/adminauth.vue"),
      beforeEnter: (to, from, next) => {
        let token = localStorage.getItem("token");
        let role = jwt_decode(token).role;
        console.log(role);
        if (role === 3) {
          next({ path: "/admin" });
        } else {
          next();
        }
      }
    },
    {
      path: "*",
      name: "404error",
      component: () => import("../views/404error.vue")
    }
  ],
  mode: "history"
});

// const getCookie = cookiname => {
//   let matches = document.cookie.match(
//     /* eslint-disable */
//     new RegExp(
//       `(?:^|; )${cookiname.replace(
//         /([\.$?*|{}\(\)\[\]\\\/\+^])/g,
//         "\\$1"
//       )}=([^;]*)`
//     )
//   );
//   return matches ? decodeURIComponent(matches[1]) : undefined;
// };
