import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import users from "./modules/users.js";
import rooms from "./modules/rooms.js";
import desks from "./modules/desks.js";

export const store = new Vuex.Store({
  modules: {
    users,
    rooms,
    desks,
  },

  state: {},
  actions: {},
  mutations: {},
});
