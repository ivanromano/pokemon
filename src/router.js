import { createRouter, createWebHistory } from 'vue-router'
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import SuperiorHome from './views/SuperiorHome.vue'
import Detalles from './views/Detalles.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/superiorhome', component: SuperiorHome, children: [{
        path: '/detalles/:id', component: Detalles
    }]},
    {path: '/detalles', component: Detalles},
]

const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router
// vue 3 snippet, una pija
