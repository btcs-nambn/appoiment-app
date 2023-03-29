import { createApp } from "vue";
import App from "./App.vue";
import "./css/style.css";
// calendar 



// import router Link
import { createRouter, createWebHistory } from "vue-router";
import LoginUser from "./components/LoginUser.vue";
import UserHome from "./pages/UserInfor.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
  
    // { path: "/" ,component: HomePage },
    { path: "/login", component: LoginUser },
    { path: "/user", component: UserHome },
  ],
});
const app = createApp(App);

app.use(router);
app.mount("#app");
