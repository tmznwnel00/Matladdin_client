import { createWebHistory, createRouter } from 'vue-router';
import Home from './views/Mat-Home.vue'
import two_choice from './views/Mat-TwoChoice.vue'
import four_choice from './views/Mat-FourChoice.vue'
import resultScreen from './views/Mat-ResultScreen.vue'
import restaurant from './views/Mat-Restaurant.vue'
import matbti from './views/Mat-Matbti.vue'

 const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title : "맛라딘 v2.1"
            }
        },
        {
            path: '/page1',
            name: '2choice',
            component: two_choice
        },
        {
            path: '/page2',
            name: '4choice',
            component: four_choice
        },
        {
            path: '/page3',
            name: 'result',
            component: resultScreen
        },
        {
            path: '/restaurant',
            name: 'restaurant',
            component: restaurant
        },
        {
            path: '/mat-bti',
            name: 'matbti',
            component: matbti
        }
    ]
});

export default router;