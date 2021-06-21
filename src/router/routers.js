import Home from "../views/Home";
export default [
    {
        path:'/',
        redirect:'/login',
        meta: {
            hideInMenu: true
        }
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录',
            hideInMenu: true,
        },
        component:()=>import('../views/Login')
    },
    {
        path: '/home',
        name:'home',
        meta: {
            hideInMenu: true,
            notCache: false,
        },
        component:()=>import('../views/Home'),
        children: [
            {
              path: "/home",
              redirect:"/main"
            },
            {
                path:"/main",
                name:"main",
                meta: {
                    title: '首页',
                    icon: "md-home"
                },
                component:()=>import('../views/MainView')
            }
        ]
    },
    {
        path: 'sysMgr',
        name:'sysMgr',
        meta: {
            title: '系统管理',
            icon: 'md-cog',
            access:["ROLE_root"]
        },
        component:Home,
        children: [
            {
                path: '/roleMgr',
                name: '/roleMgr',
                meta: {
                    title: '角色管理',
                    icon: '',
                },
                component:()=>import("../views/sysMgr/roleMgr")
            },
            {
                path: '/authMgr',
                name: 'authMgr',
                meta: {
                    title: '权限管理',
                    icon: ''
                }
            }
        ]
    },
    {
      path: 'staffInfoMgr',
      name: 'staffInfoMgr',
      meta: {
          title:'员工管理',
          icon: 'md-person'
      },
        component:Home,
        children: [
            {
                path: '/queryStaffInfo',
                name: 'queryStaffInfo',
                meta: {
                    title: '员工管理',
                    notCache:false,
                    icon: 'md-person'
                },
                component:()=>import('../views/staffmgr/StaffInfo')
            },
        ]

    },
    {
        path: 'DepartMgr',
        name: 'DepartMgr',
        meta: {
            title:'部门管理',
            icon: 'md-person',
            access:["ROLE_admin","ROLE_root"]
        },
        component:Home,
        children: [
            {
                path: '/departMgr',
                name: 'departMgr',
                meta: {
                    title: '部门管理',
                    icon: 'md-person',

                },
                component:()=>import('../views/depart/DepartMgr')
            },

        ]

    },
    {
        path: '/personMgr',
        name:'personMgr',
        meta:{
            title:'人事管理',
            icon:'md-person',
        },
        component:Home,
        children:[

            {
                path: '/InterRmd',
                name:'InterRmd',
                meta:{
                    title: '内部推荐',
                    icon:'md-person-add'
                },
                component:()=>import('../views/ParentsView'),
                children: [
                    {
                        path: '/InterPush',
                        name:'InterPush',
                        meta: {
                            title: '内推职位',
                            notCache:false,
                            icon: ''
                        },
                        beforeEnter: (to,from,next)=>{
                            //独享路由守卫
                            next()
                        },

                        component:()=>import('../views/personmgr/InterPush')
                    },
                ]
            },

            {
                path: '/LaborRel',
                name: 'LaborRel',
                meta: {
                    title: '劳动关系',
                    icon: 'md-contacts'
                },
                component:()=>import('../views/ParentsView'),
                children:[
                    {
                        path:'/InterMob',
                        name:'InterMob',
                        meta:{
                            title:'内部调动',
                            icon:'md-walk'
                        },
                        component:()=>import('../views/personmgr/InterMob')
                    },

                   /* {
                        path: '/ContractRen',
                        name:'ContractRen',
                        meta:{
                            title: '合同续签',
                            icon: 'md-clipboard'
                        },
                    },*/
                    {
                        path: '/LeaveDeal',
                        name: 'LeaveDeal',
                        meta: {
                            title: '离职办理',
                            icon: 'ios-walk'
                        },
                        component:()=>import('../views/personmgr/LeaveDeal')
                    },
                ]
            },
           /* {
                path:'/StaffWelfare',
                name:'StaffWelfare',
                meta:{
                    title:'员工福利',
                    icon:'ios-heart'
                }
            },
            {
                path:'/PoliciesSys',
                name:'PoliciesSys',
                meta:{
                    title:'政策制度',
                    icon:'ios-square'
                }
            }*/
        ]
    },
    {
        path: '/ExpenseRbm',
        name: 'ExpenseRbm',
        meta: {
            title: '账务管理',
            icon: 'logo-usd'
        },
        component: Home,
        children: [
            {
                path: '/QuerySalary',
                name: 'QuerySalary',
                meta: {
                    title: '工资查询',
                    icon: ''
                },
                component:()=>import('../views/financemgr/QuerySalary')
            },
            {
                path: '/MealRbm',
                name: 'MealRbm',
                meta: {
                    title: '餐费报销',
                    icon: 'logo-yen'
                },
                component: () => import('../views/financemgr/MealExpenses')
            }
        ]
    },

   /* {
        path: '/AssistantMgr',
        name: 'AssistantMgr',
        meta: {
            title: '辅助管理',
            icon: 'logo-yahoo'
        },
        component:Home,
        children: [
            {
                path: '/ContractMgr',
                name: 'ContractMgr',
                meta: {
                    title: '合同管理',
                    icon: 'md-infinite'
                },
            },
        ]
    },*/
    {
        path: '/ProjectMgr',
        name: 'ProjectMgr',
        meta: {
            title: '项目管理',
            icon: 'md-infinite',
        },
        component:Home,
        children: [
            {
                path: '/ProjectInfo',
                name: 'ProjectInfo',
                meta: {
                    title: '项目查询',
                    icon: 'md-infinite',
                    notCache: true
                },
                component:()=>import('../views/projectmgr/ProjectInfo')
            },
            {
                path: '/ProjectApp',
                name: 'ProjectApp',
                meta: {
                    title: '立项申请',
                    icon: 'md-infinite',
                    access: ["ROLE_admin","ROLE_th","ROLE_root"]
                },
                component:()=>import('../views/projectmgr/ProjectApp')
            },

            {
                path: '/TaskAllocation',
                name: 'TaskAllocation',
                meta: {
                    title: '项目任务',
                    icon: 'md-infinite'
                },
                /*component:()=>import('../views/projectmgr/ProjectTask')*/
                component:()=>import('../views/ParentsView'),
                children: [
                    {
                        path: '/productDemand',
                        name: 'productDemand',
                        meta: {
                            title: '产品需求',
                            icon: '',
                            access:["ROLE_th","ROLE_root"]
                        },
                        component: () => import('../views/projectmgr/ProductDemand')
                    },
                   /* {
                        path: '/UIDesign',
                        name: 'UIDesign',
                        meta: {
                            title: 'UI设计',
                            icon: '',
                            access:["ROLE_th","ROLE_root"]
                        },
                        component: () => import('../views/projectmgr/UI2')
                    },*/
                ]
            },
        ]
    },
    {
        path: '/500',
        name: 'error_500',
        meta: {
            hideInMenu: true
        },
    },
    {
        path: '*',
        name: 'error_404',
        meta: {
            hideInMenu: true
        },

    },
    {
        path: '/Submit',
        name: 'Submit',
        meta: {
            hideInMenu: true,
        },
        component:Home,
        children: [
            {
                path: '/Success',
                name: 'Success',
                meta: {
                    notTagShow: true,
                    hideInMenu: true,
                },
                component:()=>import('../components/page/SubmitSuccess')
            },
            {
                path: '/updateUserInfo',
                name: 'updateUserInfo',
                meta: {
                    notTagShow: true,
                    hideInMenu: true,
                },
                component:()=>import('../components/page/updateUserInfo')
            },
        ]
    },
]







