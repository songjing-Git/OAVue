// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import store from './store/index.js'
import axios from 'axios'
import Vuex from 'vuex'
import elementUI from 'element-ui'
import * as echarts from 'echarts'
import iView from "view-design"
import 'view-design/dist/styles/iview.css'


Vue.use(iView)
Vue.use(Vuex)
Vue.use(elementUI)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
/* eslint-disable no-new */
new Vue({
    el:"#app",
    Vuex,
    router, store,
    axios,
    components:{App},
    template:'<App></App>',

})
