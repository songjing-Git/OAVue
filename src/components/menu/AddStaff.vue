<template>
    <Form ref="addStaff" :label-width="100" label-position="left" show-message :model="addStaff" :rules="ValidateStaffInfo">
        <Row>
            <Col :xl="{span:12}">
                <FormItem label="员工编号:" prop="staffId">
                    <Input v-model="addStaff.staffId" placeholder="请输入新员工编号"> </Input>
                </FormItem>
                <FormItem label="用户名:" prop="userName">
                    <Input v-model="addStaff.userName" placeholder="请设置新员工OA系统登录用户名"></Input>
                </FormItem>
                <FormItem label="所属部门:" >
                    <Select v-model="addStaff.departName" >
                        <Option v-for="item in depart" :value="item.departName" :key="`departId-${item.departId}`" >{{ item.departName }}</Option>
                    </Select>
                </FormItem>
                <FormItem label="员工职级:" >
                    <Input v-model="addStaff.jobLevelId" placeholder="请输入新员工职级"></Input>
                </FormItem>
                <FormItem label="联系电话:" >
                    <Input v-model="addStaff.phone" placeholder="请输入新员工联系电话"></Input>
                </FormItem>
            </Col>
            <Col :xl="{span:11,offset:1}">
                <FormItem label="员工姓名:"  prop="staffName">
                    <Input v-model="addStaff.staffName" placeholder="请输入新员工姓名"></Input>
                </FormItem>
                <FormItem label="登录密码:" prop="password">
                    <Input type="password" v-model="addStaff.password" placeholder="设置OA系统登录密码"></Input>
                </FormItem>
                <FormItem label="邮箱:" >
                    <Input  v-model="addStaff.email" placeholder="请输入公司分配邮箱"></Input>
                </FormItem>
                <FormItem label="担任职位:" >
                    <Input v-model="addStaff.jobLevelName" placeholder="请输入新员工职位"></Input>
                </FormItem>
                <FormItem label="入职日期:" >
                    <DatePicker type="date" v-model="addStaff.beginDate" placeholder="请选择入职日期"></DatePicker>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col :xl="{span:12}">
                <!--<FormItem label="薪资:" >
                    <Input v-model="addStaff.salary"></Input>
                </FormItem>-->
                <FormItem label="高等教育:" >
                    <Select v-model="addStaff.tipTop" >
                        <Option  :value="-1" :key="`tipTop--1`">专科</Option>
                        <Option  :value="0" :key="`tipTop-0`">本科</Option>
                        <Option  :value="1" :key="`tipTop-1`">硕士</Option>
                        <Option  :value="2" :key="`tipTop-2`">博士</Option>
                    </Select>
                </FormItem>
                <FormItem label="毕业院校:" >
                    <Input v-model="addStaff.school" placeholder="请输入新员工毕业院校"></Input>
                </FormItem>
            </Col>
            <Col :xl="{span:11,offset:1}">
                <FormItem label="合同起始日期:" >
                    <DatePicker type="date" v-model="addStaff.beginContract" placeholder="请选择合同起始日期"></DatePicker>
                </FormItem>
                <FormItem label="合同终止日期:" >
                    <DatePicker type="date" v-model="addStaff.endContract" placeholder="请选择合同终止日期"></DatePicker>
                </FormItem>
            </Col>
            <Col :xl="{span:8,offset:8}">
                <Button size="large" type="success" @click="StaffInfoSubmit()">提交</Button>
            </Col>
        </Row>

    </Form>
</template>

<script>
    import api from "../../api/api";

    export default {
        name: "AddStaff",
        props: {
            depart:Array
        },
        data() {
            return {
                addStaff:{
                    staffId:'',
                    userName:"",
                    password:"",
                    staffName:'',
                    addEmail:'',
                    departName: '',
                    phone:'',
                    jobLevelId:'',
                    jobLevelName:'',
                    beginDate:"",
                    tipTop:'',
                    beginContract:'',
                    endContract:'',
                    school:'',
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
        computed: {

        },
        methods: {
            StaffInfoSubmit(){
                console.log(this.addStaff)
                this.$refs.addStaff.validate((valid) => {
                    if (valid) {
                        api.insertStaffInfo(this.addStaff).then(
                            res => {
                                this.$Message.success("提交成功")
                            },
                            rej => {
                                this.$Modal.success("提交失败" + rej.data)
                            }
                        )
                    }
                })
            }

        },
        watch: {}
    }
</script>

<style scoped>

</style>
