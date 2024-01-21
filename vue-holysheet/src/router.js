import { createWebHistory, createRouter } from "vue-router";
import Login from "@/Apps/Login.vue" ;
import Register from "@/Apps/Register.vue" ;
import Home from "@/Apps/Home.vue"


const routes= [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;