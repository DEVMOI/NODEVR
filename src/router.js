import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HomeBase',
            component: Home
        },
        {
            path: "/settings",
            name: "Settings",
            component: () => import('./views/Settings.vue')
        },
        {
            path: '/vr',
            name: 'vr',
            component: () => import('./views/Vr.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue')
        },
        {
            path: '/doc',
            name: 'Documentation',
            component: () => import('./views/Documentation.vue')
        }
    ]
})
