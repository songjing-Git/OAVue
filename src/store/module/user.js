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
            birthday:'',
            BASE_SALARY:'',
            roles:[
                {
                    roleId:"",
                    roleType:"",
                    roleName:""
                }
            ],
            HEAD_PHOTO:'',//头像
            salaryId:0,
        },
    },

    getters:{
        getRoles(state) {
            let role=[]
            state.user.roles.forEach(item=>{
                role.push(item.roleType)
            })
          return  role
        }

    },
    mutations:{
        setUserInfo (state,userInfo) {
            state.user ={...userInfo}
        },
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
        /*// 退出登录
        handleLogOut () {
                sessionStorage.clear();
                resolve()
            },*/
        setUserInfo({commit},userInfo) {
            commit('setUserInfo',userInfo)
        }
    }

}
