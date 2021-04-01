import {Get, Post, Put} from "../api/index"
export default {
    /**
     * 登录接口
     * @param username
     * @param password
     * @returns {Promise<unknown>}
     */
     login (username,password) {
        return  Post(
             "user/login",
         {username,password}
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
        return Get(
            'staff/selectStaffInfoByName/'+`${username}`,
            username,
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


}


