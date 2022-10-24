
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

import hello from "@/components/Home.vue"


const router = createRouter({
    history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),
    routes: [
        { path: '/', name: "home", component: hello }
    ]
})

export default router