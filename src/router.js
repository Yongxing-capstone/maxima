
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

import home from "@/components/HomePage.vue"
import loginResult from "@/components/LoginResult"
import login from "@/components/LoginPage"
import profile from "@/components/profilePage"
import about from "@/components/about"
import verify from "@/components/VerifyPage"
import verifyResult from "@/components/verifyResult"

const router = createRouter({
    history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),
    routes: [
        { path: '/', name: "home", component: home, meta: { isLogIn: false } },
        { path: '/logIn', name: "login", component: login, meta: { isLogIn: false } },
        { path: '/loginResult', name: "loginResult", component: loginResult, meta: { isLogIn: false } },
        { path: '/profile', name: "profile", component: profile, meta: { isLogIn: true } },
        { path: '/about', name: "about", component: about, meta: { isLogIn: false } },
        { path: '/verify', name: "verify", component: verify, meta: { isLogIn: true } },
        { path: '/verifyResult', name: "verifyResult", component: verifyResult, meta: { isLogIn: true } },
    ]
})

export default router