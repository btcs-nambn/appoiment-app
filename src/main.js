import { createApp } from 'vue'
import App from './App.vue'
import { createRouter,createWebHistory } from 'vue-router'
import './css/index.css'

import LoginUser from './pages/LoginUser.vue'
import HistoryAppointment from './pages/UserHistoryAppointment.vue'
import UserInfor from './pages/UserInfor.vue'
import MakeAppointment from './pages/MakeAppointment.vue'
import ShowCalendar from './components/ShowCalendar.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path:'/', redirect:'./login'},
        { path:'/login', component:LoginUser},
        { path:'/history', component:HistoryAppointment},
        { path:'/Userinfor', component:UserInfor},
        { path:'/makeappointment', component:MakeAppointment},
        { path:'/ShowCalendar', component:ShowCalendar}
    ]
    
});
const app = createApp(App);
app.use(router);
app.mount('#app');
