import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from "axios"
import global from './assets/Global'


const app = createApp(App)
app.use(router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
axios.defaults.baseURL = global.serverAdrr
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
app.config.globalProperties.$http = axios

app.mount('#app')
