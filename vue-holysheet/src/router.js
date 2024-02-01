import { createWebHistory, createRouter } from "vue-router";
import Login from "@/Apps/Login.vue" ;
import Register from "@/Apps/Register.vue" ;
import Explore from "@/Apps/Explore.vue"
import Profile from "@/Apps/Profile.vue"
import Add from "@/Apps/Add.vue"
import SheetDetail from "@/Apps/SheetDetail.vue";

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
    },
    {
        path: '/concerto/:id',
        name: 'SheetDetail',
        component: SheetDetail
      },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;