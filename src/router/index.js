import {createRouter, createWebHistory} from 'vue-router'
import Login from "@/views/auth/Login.vue";
import * as Admin from '@/views/admin';
import {authGuard} from "@/_helpers/auth-guard";

const routes = [
    {
        path: '/',
        name: 'admin',
        component: Admin.AdminLayout,
        children: [
            {path: '', name: 'dashboard', component: Admin.Dashboard},
            {path: 'users', name: 'users', component: Admin.UserIndex},
            {path: 'users/add', name: 'addUsers', component: Admin.AddUser},
            {path: 'users/edit/:id', name: 'editUsers', component: Admin.EditUser, props: true},
            {path: 'orders', name: 'orders', component: Admin.OrderIndex},
            {path: 'orders/show/:id', name: 'orderShow', component: Admin.OrderShow, props: true},
            {path: 'providers', name: 'providers', component: Admin.ProviderIndex},
            {path: 'products', name: 'products', component: Admin.ProductIndex},
            {path: 'customers', name: 'customers', component: Admin.Customers},
            {path: 'sales', name: 'sales', component: Admin.SaleIndex},
        ]

    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        // beforeEnter: authGuard
    },
    {
        path: '/:pathMatch(.*)*', redirect: '/'
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.matched[0].name === 'admin') {
        authGuard()
    }
    next()
})

export default router
