import Vue from 'vue'
import Router from 'vue-router'
import HomeScreen from '../components/HomeScreen'
import Dashboard from '../components/Dashboard'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '',
            name: 'home',
            component: HomeScreen
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                requiresAuth: true
            }
        }
    ]
})

export default router