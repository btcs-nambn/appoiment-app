import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "./css/index.css";

import LoginUser from "./pages/SignIn.vue";
import RegisterUser from "./pages/SigUp.vue";

import UserInfor from "./pages/UserInforHistory.vue";
import MakeAppointment from "./pages/MakeAppointment.vue";

import Store from "./store";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "./login" },
    { name:"login" ,path: "/login", component: LoginUser },
    { name : "register" ,path: "/register", component: RegisterUser },

    { name:"userInfor", path: "/Userinformation", component: UserInfor },
    {
      name:"makeappointment",
      path: "/makeappointment",
      component: MakeAppointment,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (localStorage.getItem("UserName") === null && to.name !== "login" && to.name !== 'register'){
    next({ name: 'login' });
  } else {
    next();
  }
});
const app = createApp(App);
app.use(Store);
app.use(router);
app.mount("#app");
