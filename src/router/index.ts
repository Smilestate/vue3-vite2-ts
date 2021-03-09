import {RouteRecordRaw, createRouter, createWebHashHistory} from 'vue-router'
import register_login from "./register_login";

const routes:RouteRecordRaw[] = [
    { path: '/', name: 'Home', component: () => import('../App.vue') },
    ...register_login,
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
