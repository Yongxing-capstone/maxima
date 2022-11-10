import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from "axios"
import global from './assets/Global'
import { AES_Encrypt, AES_Decrypt } from './assets/secret'
import store from './assets/base'
import { Vue3Geolocation } from 'vue3-geolocation'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(store)
app.use(Vue3Geolocation)

axios.defaults.baseURL = global.serverAdrr
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
app.config.globalProperties.$axios = axios
app.config.globalProperties.$store = store

app.config.globalProperties.$AES_Encrypt = AES_Encrypt //global encrypt
app.config.globalProperties.$AES_Decrypt = AES_Decrypt //global decrypt

router.beforeEach((to, from, next) => {
    // get login stage
    let isLogIn = store.state.isLogin
    console.log("login stage", store.state.isLogin);
    if (isLogIn) {
        //already login 
        if (to.name === "login") {
            next({ path: '/' })
            console.log("already log in");
        }
        else {
            next()
        }
    } else {
        if (to.meta.isLogIn) {
            next({ path: "/logIn" })
        } else {
            next()
        }
    }
})
app.mount('#app')
