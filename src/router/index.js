import Vue from 'vue'
import Router from 'vue-router'
import startRouter from "./routers";
import Home from "../views/Home";
import ParentsView from "../views/ParentsView";


Vue.use(Router)

export const router = new Router({
    mode:'history',
    routes:startRouter
})
export function buildMenuTree(menuList,pid) {
    let treeList=[]
    menuList = Array.from(menuList);
    menuList.forEach(menu=>{
        if (pid==menu.parentMenuId){
            let meta={
                title:menu.title,
                icon:menu.icon
            }
            if (menu.file==="Home"){
                menu.component=Home
            }else if (menu.file==="ParentsView"){
                menu.component=ParentsView
            }else {
                menu.component=ParentsView
                /*menu.component=()=>import('../views/'+`${menu.file}`)*/
                console.log(menu.component)
            }
            menu["meta"]=meta
            menu.children=buildMenuTree(menuList,menu.menuId)
            treeList.push(menu)
        }
    })
    return treeList
}


