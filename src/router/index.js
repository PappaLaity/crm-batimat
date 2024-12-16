import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    { path: '/login', name: 'Login', component: () => import('../views/auth/Login.vue') },
    {
        path: '/',
        name: 'Landing',
        component: () => import('../views/public/HomePage.vue'),
        children: [
            { path: '', name: 'about', component: () => import('../views/public/About.vue') },
            { path: 'services', name: 'services', component: () => import('../views/public/Service.vue') }
        ]
    },
    {
        path: '/',
        name: 'Admin',
        component: () => import('../views/admin/AdminLayout.vue'),
        children: [
            { path: 'dashboard', name: 'dashboard', component: () => import('../views/admin/Dashboard.vue') },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
