import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter ({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/login',
            component: () => import('../views/AdminLogin.vue')

        },
        {
            path: '/dashboard',
            component: () => import('../views/Dashboard.vue')
        },
        {
            path: '/studentprofile',
            component: () => import('../views/Student Profile.vue')
        }
    ]
})

export default router