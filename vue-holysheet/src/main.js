import { createApp } from 'vue'
import router from "@/router";
import First_page from './First_page'

const app = createApp (First_page);
app.use(router)
app.mount('#app')

