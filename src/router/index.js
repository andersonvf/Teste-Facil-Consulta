import { createRouter, createWebHistory } from 'vue-router'

import Page1 from "../views/Page1.vue";
import Page2 from "../views/Page2.vue";
import Page3 from "../views/Page3.vue";

const routes = [
    {
        path: '/',
        name: 'profissional',
        component: Page1
    },
    {
        path: '/atendimento',
        name: 'atendimento',
        component: Page2
    },
    {
        path: '/cadastro',
        name: 'cadastro',
        component: Page3 
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;