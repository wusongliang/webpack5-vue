import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import Axios from "axios";

import App from "./app.vue";
import routes from "./routes";
import stores from "./store";

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.prototype.$axios = Axios;

const router = new VueRouter({
  routes,
  linkActiveClass: "active",
  mode: "history",
});

const store = new Vuex.Store(stores);

new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  store,
});
