import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/cybersecwebsite/',
            component: Home,
        },
        {
            path: '/cybersecwebsite/members',
            component: async () => await import('@/views/Members.vue'),
        },
    ],
})
