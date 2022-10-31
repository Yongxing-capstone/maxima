
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

import home from "@/components/HomePage.vue"
import loginResult from "@/components/LoginResult"
import login from "@/components/LoginPage"

const router = createRouter({
    history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),
    routes: [
        { path: '/', name: "home", component: home },
        { path: '/logIn', name: "login", component: login },
        { path: '/loginResult', name: "loginResult", component: loginResult },

    ]
})

export default router