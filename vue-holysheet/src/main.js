import { createApp } from 'vue'
import router from "@/router";
import First_page from './First_page'
import store from './store';

const app = createApp (First_page);
app.use(router)
app.use(store)
app.mount('#app')

