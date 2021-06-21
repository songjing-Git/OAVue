import {Get, Post, Put, Delete, GetBlob,awaitRequest} from "../api/index"
export default {


    /**
     * 更新员工信息
     * @param param
     * @returns {Promise | Promise<unknown>}
     */
    updateStaffInfos(param){
        return Put(
            "staff/updateStaffInfos",
            param
        )
    },

    /**
     * 查询薪资接口
     * @param param
     * @returns {Promise | Promise<unknown>}
     */
    querySalary(param){
        return Get(
            "/salary/querySalaryInfo",
            param
        )
    },

    /**
     * 离职办理
     * @param param
     * @returns {Promise | Promise<unknown>}
     */
    leaveDeal(param){
        return Post(
            "/leaveDeal/leaveDeal",
            param
        )
    },

    /**
     * 更新权限
     * @param targetKeys
     * @returns {Promise | Promise<unknown>}
     */
    updateRole(targetKeys){
        return Put(
            "/userRole/updateRole",
        targetKeys
        )
    },

    /**
     * 获取所有角色
     * @returns {Promise<*>}
     */
    selectAllRole(){
        return awaitRequest(
            "userRole/selectAllRole"
        )
    },

    /**
     * 获取员工没有的身份
     * @param staffId
     * @returns {Promise | Promise<unknown>}
     */
    selectStaffNoRole(staffId){
        return Get(
            "userRole/selectStaffNoRole/"+`${staffId}`,
        )
    },


    /**
     * 获取员工角色信息
     * @param staffId
     * @returns {Promise | Promise<unknown>}
     */
    selectStaffRole(staffId){
        return Get(
            "userRole/selectStaffRole/"+`${staffId}`,
        )
    },

    /**
     * 更新项目
     * @param param
     * @returns {Promise | Promise<unknown>}
     */
    updateProject(param){
        return Put(
            "project/updateProject",
            param
        )
    },

    /**
     * 新增项目
     * @param param
     * @returns {Promise | Promise<unknown>}
     */
    insertProject(param){
        return Post(
            "project/insertProject",
            param
        )
    },

    /**
     * 更新部门接口
     * @param param
     * @returns {Promise<unknown>}
     */
    updateDepart(param){
        return Put(
            "depart/updateDepart",
            param
        )
    },

    /**
     * 获取验证码
     * @returns {Promise<unknown>}
     */
    getImgCode(){
        return GetBlob(
            "getCodeImg",

        )
    },


    /**
     * 发送报销审核邮件
     * @param param
     * @returns {Promise | Promise<unknown>}
     */
    sendRmbApprove(param){
      return Post(
          "send/reimbursement",
          param
      )
    },

    /**
     * 内推政策
     * @returns {Promise | Promise<unknown>}
     */
    policyPush(){
        return Post(
            "text/policyPush"
        )
    },


    /**
     * 获取绩效排行榜
     * @returns {Promise | Promise<unknown>}
     */
    performanceList(){
        return Get(
            "performance/performanceList",
        )
    },


    /**
     * 内部调动接口
     * @param param
     * @returns {Promise<unknown>}
     */
    updateStaffInfo(param) {
        return Put(
            "staff/updateStaff",
            param
        )
    },

    /**
     * 内推职位邮件
     * @param File
     * @returns {Promise<unknown>}
     */
    pushSend(File){
        return Post(
            "/pushSend",
            File
        )
    },

    /**
     *
     */
    removeDepart(id){
        return Delete(
            "depart/removeDepart/"+`${id}`
        )
    },
    /**
     * 登录接口
     * @param username
     * @param password
     * @returns {Promise<unknown>}
     */
     login (username,password) {
        return  Post(
             "/login",
            {username,password},
         )
    },

    /**
     * 根据条件查询员工信息
     * @param param
     * @returns {Promise<unknown>}
     */
    getStaffInfoList(param){
         return Get(
             'staff/queryStaffInfo',
             param
         )
    },

    /**
     * 根据名称查询登录员工信息
     * @param username
     * @returns {Promise<unknown>}
     */
    getStaffInfoByName(username){
        return awaitRequest(
            'staff/selectStaffInfoByName/'+`${username}`,
            username,
        )
    },

    /**
     * 查询没有部门信息的用户
     * @param param
     * @returns {Promise<unknown>}
     */
    getNoDeptStaff(param){
        return Get(
            'staff/selectNoDeptStaff',
            param
        )
    },

    /**
     * 查询职位信息
     * @param param
     * @returns {Promise<unknown>}
     */
    getWorkInfo(param){
        return Get(
            'work/selectWorkInfo',
            param
        )
    },

    /**
     * 查询所有部门名称
     * @returns {Promise<unknown>}
     */
    getDepartName(){
         return Get(
             "depart/selectDepartName"
         )
    },


    /**
     * 根据条件查询部门信息
     * @param param
     * @returns {Promise<unknown>}
     */
    getDepartInfo(param){
         return Get(
             "depart/selectDepartInfo",
             param
         )
    },

    /**
     * 新增部门
     * @param param
     * @returns {Promise<unknown>}
     */
    insertDepart(param){
         return Post(
            "depart/insertDepart",
                param
         )
    },

    /**
     * 查询项目信息
     * @param param
     * @returns {Promise<unknown>}
     */
    selectProInfo(param){
         return Get(
             "project/queryProjectInfo",
             param
         )
    },

    /**
     * 新增员工信息
     */
    insertStaffInfo(staffInfo){
        return Post(
            "staff/insertStaff",
            staffInfo
        )
    },


    /**
     * 发送UI图
     * @param param
     * @returns {Promise | Promise<unknown>}
     */
    sendUI(param){
        return Post(
            "send/UI",
            param,
            {headers:{'Content-Type':'multipart/form-data'}}
        )
    },

    /**
     * 发送需求信息
     * @param param
     * @returns {Promise | Promise<unknown>}
     */
    sendPd(param){
        return Post(
            "send/Pd",
            param,

        )
    }

}


