import startRouter from "../../router/routers"

import {getMenuByRouter,getTagNavListFromLocalstorage,
    setTagNavListInLocalstorage,getRouteTitleHandled,
    routeHasExist,getHomeRoute,getBreadCrumbList,arrayMarge} from "../../utils/util";

export default {
    state: {
        rightList:[],
        breadCrumbList: [],
        tagNavList: [],
        homeRoute: getHomeRoute(startRouter, "main"),
    },
    getters: {
        menuList: (state, getters) => getMenuByRouter(startRouter, getters.getAccess),
    },
    mutations:{
        setTagNavList (state, list) {
            let tagList = []
            if (list) {
                tagList = [...list]
            } else tagList = getTagNavListFromLocalstorage() || []
            if (tagList[0] && tagList[0].name !== "main") tagList.shift()
            let homeTagIndex = tagList.findIndex(item => item.name === "main")
            if (homeTagIndex > 0) {
                let homeTag = tagList.splice(homeTagIndex, 1)[0]
                tagList.unshift(homeTag)
            }
            for (let i=0;i<tagList.length;i++) {
                if (tagList[i].meta.notTagShow==true) {
                    tagList.splice(i,1)
                }
            }
            state.tagNavList = tagList
            setTagNavListInLocalstorage([...tagList])
        },
        addTag (state, { route, type = 'unshift' }) {
            let router = getRouteTitleHandled(route)
            if (!routeHasExist(state.tagNavList, router)) {
                if (type === 'push') state.tagNavList.push(router)
                else {
                    if (router.name === "main") state.tagNavList.unshift(router)
                    else state.tagNavList.splice(1, 0, router)
                }
                setTagNavListInLocalstorage([...state.tagNavList])
            }
        },
        setBreadCrumb (state, route) {
            state.breadCrumbList = getBreadCrumbList(route, state.homeRoute)
        },
        setRightList(state,data) {
            state.rightList=data
        }
    },
    action:{
    },

}
