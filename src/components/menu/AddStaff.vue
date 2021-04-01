<template>
    <Form :label-width="100" label-position="left" show-message v-model="addStaff">
        <Row>
            <Col :xl="{span:12}">
                <FormItem label="员工编号:" >
                    <Input v-model="addStaff.staffId"> </Input>
                </FormItem>
                <FormItem label="所属部门:" prop="StaffCode">
                    <Select v-model="addStaff.departName" >
                        <Option v-for="item in depart" :value="item.departName" :key="`departId-${item.departId}`">{{ item.departName }}</Option>
                    </Select>
                </FormItem>
                <FormItem label="员工职级:" prop="StaffCode">
                    <Input v-model="addStaff.jobLevelId"></Input>
                </FormItem>
                <FormItem label="联系电话:" prop="StaffCode">
                    <Input v-model="addStaff.phone"></Input>
                </FormItem>
            </Col>
            <Col :xl="{span:11,offset:1}">
                <FormItem label="员工姓名:" prop="StaffCode" required>
                    <Input v-model="addStaff.staffName"></Input>
                </FormItem>
                <FormItem label="邮箱:" prop="StaffCode" required>
                    <Input  v-model="addStaff.email"></Input>
                </FormItem>
                <FormItem label="担任职位:" prop="StaffCode">
                    <Input v-model="addStaff.jobLevelName"></Input>
                </FormItem>
                <FormItem label="入职日期:" prop="StaffCode">
                    <DatePicker type="date" v-model="addStaff.beginDate" ></DatePicker>
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
                    <Input v-model="addStaff.school"></Input>
                </FormItem>
            </Col>
            <Col :xl="{span:11,offset:1}">
                <FormItem label="合同起始日期:" >
                    <DatePicker type="date" v-model="addStaff.beginContract" ></DatePicker>
                </FormItem>
                <FormItem label="合同终止日期:" >
                    <DatePicker type="date" v-model="addStaff.endContract" ></DatePicker>
                </FormItem>
            </Col>
            <Col>
                <Button type="success" @click="StaffInfoSubmit">提交</Button>
            </Col>
        </Row>

    </Form>
</template>

<script>
    export default {
        name: "AddStaff",
        props: {
            depart:Array
        },
        data() {
            return {
                addStaff:{
                    staffId:'',
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
            }
        },
        computed: {},
        methods: {
            

        },
        watch: {}
    }
</script>

<style scoped>

</style>
