import Vue from 'vue'
import Router from 'vue-router'
import defaultRouter from "./routers";
import Home from "../views/Home";
import ParentsView from "../views/ParentsView";


Vue.use(Router)

export const router = new Router({
    mode:'history',
    routes:defaultRouter
})

router.beforeEach((to,from,next)=>{



    next();
})


