<template>
    <Form ref="updateStaff" :label-width="100" label-position="left" show-message :model="updateStaff" :rules="ValidateStaffInfo">
        <Row>
            <Col :xl="{span:12}">
                <FormItem label="员工编号:" prop="staffId">
                    <Input v-model="updateStaff.staffId" disabled> </Input>
                </FormItem>
                <FormItem label="用户名:" prop="userName">
                    <Input v-model="updateStaff.userName" placeholder="更新员工OA系统登录用户名"></Input>
                </FormItem>
                <FormItem label="性别:" >
                    <Input v-model="updateStaff.gender" placeholder="更新员工性别"></Input>
                </FormItem>
                <FormItem label="年龄:" >
                    <Input  v-model="updateStaff.age" placeholder="设置OA系统登录密码"></Input>
                </FormItem>
                <FormItem label="联系电话:" >
                    <Input v-model="updateStaff.phone" placeholder="更新员工联系电话"></Input>
                </FormItem>
                <FormItem label="籍贯:" >
                    <Input v-model="updateStaff.nativePlace" placeholder="更新员工联系电话"></Input>
                </FormItem>
            </Col>
            <Col :xl="{span:11,offset:1}">
                <FormItem label="员工姓名:"  prop="staffName">
                    <Input v-model="updateStaff.staffName" placeholder="更新员工姓名"></Input>
                </FormItem>
                <FormItem label="登录密码:" prop="password">
                    <Input type="password" v-model="updateStaff.password" placeholder="设置OA系统登录密码"></Input>
                </FormItem>
                <FormItem label="民族:" >
                    <Input v-model="updateStaff.nation"></Input>
                </FormItem>
                <FormItem label="政治面貌:" >
                    <Input v-model="updateStaff.politic"></Input>
                </FormItem>
                <FormItem label="邮箱:" >
                    <Input  v-model="updateStaff.email" placeholder="请输入公司分配邮箱"></Input>
                </FormItem>
                <FormItem label="入职日期:" >
                    <DatePicker type="date" v-model="updateStaff.beginDate" placeholder="请选择入职日期"></DatePicker>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col :xl="{span:12}">

                <FormItem label="高等教育:" >
                    <Select v-model="updateStaff.tipTop" >
                        <Option  :value="-1" :key="`tipTop--1`">专科</Option>
                        <Option  :value="0" :key="`tipTop-0`">本科</Option>
                        <Option  :value="1" :key="`tipTop-1`">硕士</Option>
                        <Option  :value="2" :key="`tipTop-2`">博士</Option>
                    </Select>
                </FormItem>
                <FormItem label="毕业院校:" >
                    <Input v-model="updateStaff.school" placeholder="更新员工毕业院校"></Input>
                </FormItem>
            </Col>
            <Col :xl="{span:11,offset:1}">
                <FormItem label="合同起始日期:" >
                    <DatePicker type="date" v-model="updateStaff.beginContract" placeholder="请选择合同起始日期"></DatePicker>
                </FormItem>
                <FormItem label="合同终止日期:" >
                    <DatePicker type="date" v-model="updateStaff.endContract" placeholder="请选择合同终止日期"></DatePicker>
                </FormItem>
            </Col>
            <Col :xl="{span:8,offset:8}">
                <Button size="large" type="success" @click="updateStaffInfo()">提交</Button>
            </Col>
        </Row>

    </Form>
</template>

<script>
    import api from "../../api/api";

    export default {
        name: "updateUserInfo",
        props: {},
        data() {
            return {
                depart:[],
                updateStaff:{
                    staffId:this.$store.state.user.user.staffId,
                    userName:sessionStorage.getItem("username"),
                    password:sessionStorage.getItem("password"),
                    staffName:this.$store.state.user.user.staffName,
                    gender:this.$store.state.user.user.gender,
                    age:this.$store.state.user.user.age,
                    email:this.$store.state.user.user.email,
                    departName: this.$store.state.user.user.departName,
                    phone:this.$store.state.user.user.phone,
                    beginDate:this.$store.state.user.user.beginDate,
                    tipTop:this.$store.state.user.user.tipTop,
                    beginContract:this.$store.state.user.user.beginContract,
                    endContract:this.$store.state.user.user.endContract,
                    school:this.$store.state.user.user.school,
                    nation:this.$store.state.user.user.nation,
                    nativePlace:this.$store.state.user.user.nativePlace,
                    politic:this.$store.state.user.user.politic,
                },
                ValidateStaffInfo:{
                    staffId:[
                        {required:true,message:"员工编号未填",trigger: 'blur'}
                    ],
                    staffName:[
                        {required:true,message:"员工姓名未填",trigger: 'blur'}
                    ],
                    userName: [
                        {required:true,message:"用户名不能为空",trigger: 'blur'}
                    ],
                    password:[
                        {required:true,message:"密码不能为空",trigger:'blur'}
                    ]

                }
            }
        },
        computed: {},
        beforeRouteEnter(to,from,next){
            next(vm => {
                api.getDepartName().then(
                    res=>{
                        vm.depart=res
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
            })
        },
        methods: {
            updateStaffInfo(){
                api.updateStaffInfos(this.updateStaff).then(
                    res=>{
                        console.log(res)
                        this.$Message.success("修改成功")
                    },
                    rej=>{
                        console.log(rej)
                        this.$Message.error("修改失败")
                    }
                )
            }
        },
        watch: {}
    }
</script>

<style scoped>

</style>
