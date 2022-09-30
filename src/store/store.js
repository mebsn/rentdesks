import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import users from "./modules/users.js";

export const store = new Vuex.Store({
  modules: {
    users,
  },

  state: {},
  actions: {},
  mutations: {},
});
