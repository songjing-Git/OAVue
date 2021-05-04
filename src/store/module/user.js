export default {
    state: {
        user:{
            staffId:0,//编号
            staffName:'',//姓名
            age:0,
            gender:'',
            userName:'',//用户名
            departId:0,
            departName:'',
            departMgr:"",
            departStaffMax:0,
            departStaffCount:0,
            phone:'',
            email:'',
            jobLevelId:"",
            jobLevelName:'',
            jobLevel:'',
            jobLevelType:'',
            nation:'',
            nativePlace:0,
            address:'',
            workAge:'',
            birthday:0,
            BASE_SALARY:'',
            access: '',//权限等级
            HEAD_PHOTO:'',//头像
            salaryId:0,
        },
    },

    getters:{
    },
    mutations:{
        setUserInfo (state,userInfo) {
            state.user ={...userInfo}
        }
    },
    actions:{
        // 登录
        handleLogin ({ commit }, {userName, password}) {
            userName = userName.trim()
            return new Promise((resolve, reject) => {
                login({
                    userName,
                    password
                }).then(res => {
                    const data = res.data
                    commit('setToken', data.token)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        // 退出登录
        handleLogOut ({ state, commit }) {
           /* return new Promise((resolve, reject) => {
                logout(state.token).then(() => {
                    commit('setToken', '')
                    commit('setAccess', [])
                    resolve()
                }).catch(err => {
                    reject(err)
                })
                // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
                // commit('setToken', '')
                // commit('setAccess', [])
                // resolve()
            })*/
        },
        setUserInfo({commit},userInfo) {
            commit('setUserInfo',userInfo)
        }
    },

}
