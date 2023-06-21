import {createRouter} from 'vue-router'
import Home from '@/views/Home.vue'

export default createRouter({
    // mode: 'history',
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
