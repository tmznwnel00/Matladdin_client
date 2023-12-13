import { createWebHistory, createRouter } from 'vue-router';
import Home from './views/Mat-Home.vue'
import About from './views/Mat-About.vue'

 const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
});

export default router;