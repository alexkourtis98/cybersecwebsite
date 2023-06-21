import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/members',
            component: async () => await import('@/views/Members.vue'),
        },
    ],
})
