import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import login from "../components/login.vue";

Vue.use(Router);

export default new Router({
    routes:[
        {path:"/", component:HelloWorld},
        {path:"/login", component:login},
    ],
});