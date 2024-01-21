import { createWebHistory, createRouter } from "vue-router";
import Login from "@/Apps/Login.vue" ;
import Register from "@/Apps/Register.vue" ;
import Home from "@/Apps/Home.vue"
import Explore from "@/Apps/Explore.vue"
import Profile from "@/Apps/Profile.vue"
import Add from "@/Apps/Add_Content.vue"

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
    },
    {
        path: '/explore',
        component: Explore
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/add',
        component: Add
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;