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
    { path: "/login", component: LoginUser },
    { path: "/register", component: RegisterUser },

    { path: "/Userinformation", component: UserInfor },
    {
      path: "/makeappointment",
      component: MakeAppointment,
    },
  ],
});

const app = createApp(App);
app.use(Store);
app.use(router);
app.mount("#app");
