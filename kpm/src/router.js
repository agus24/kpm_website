import Vue from "vue"
import VueRouter from 'vue-router'

import Home from "./components/Home/HomeComponent"

Vue.use(VueRouter)

let routes = [
    { path: '/', component: Home },
    { path: '', component: Home }
]

export default new VueRouter({
    routes
})