import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import login from "../components/login.vue";
import homePage from "../components/homePage.vue";
import desksPart from "../components/desksPart.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: HelloWorld },
    { path: "/login", component: login },
    { path: "/home", component: homePage },
    {
      path: "/desks",
      component: desksPart,
      beforeEnter: (to, from, next) => {
        if ((window.localStorage.getItem("userRole") !== "admin") || !window.localStorage.getItem("userRole") ){
          next("/login");
        } else {
          next();
        }
      },
    },
  ],
});
