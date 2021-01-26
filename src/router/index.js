import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "About",
      component: () => import("../views/Home.vue")
    }
  ],
  mode: "history"
});
