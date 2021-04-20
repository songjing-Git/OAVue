<template>
    <div>
        <Card>
            <Steps :current="steps" status="process">
                <Step title="职位调动申请" content="请填写申请信息"></Step>
                <Step title="待审批" content="等待上级审批"></Step>
                <Step title="审批中" content="正在审批中，预计3-5个工作日"></Step>
                <Step title="审批完成" content="恭喜您，审批完成，请尽快交接"></Step>
            </Steps>
        </Card>
        <Row >
            <Col>
                <Divider>
                    <p>信息填写</p>
                </Divider>
                    <Form ref="formDate" :model="formDate"  :label-width="100"><!--:rules="ruleValidate"-->
                        <Row>
                            <Col :xl="{offset:9,span:5}">
                                <FormItem label="变更类型:" prop="ChangeType">
                                    <RadioGroup v-model="formDate.changeType">
                                        <Col>
                                            <Radio label="Dept"  checked>部门变更</Radio>
                                        </Col>
                                        <Col>
                                            <Radio label="Post">岗位变更</Radio>
                                        </Col>
                                        <Col>
                                            <Radio label="DeptAndPost">部门及岗位变更</Radio>
                                        </Col>
                                    </RadioGroup>
                                </FormItem>
                                <FormItem label="员工编号" prop="staffId">
                                    <Input v-model="formDate.staffId" placeholder="请输入员工编号"></Input>
                                </FormItem>
                                <FormItem label="员工姓名" prop="StaffName">
                                    <Input v-model="formDate.staffName" placeholder="请输入姓名"></Input>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col :xl="{offset:4,span:5}">
                                <FormItem label="转出部门:" prop="OutDept" v-if="formDate.changeType!=='Post'">
                                    <Input   :value="this.$store.state.departName"  disabled></Input>
                                </FormItem>
                                <FormItem label="转出岗位:" prop="OutJob" v-if="formDate.changeType!=='Dept'">
                                    <Input   value="转出岗位"  disabled></Input>
                                </FormItem>
                                <FormItem label="部门负责人:" prop="OutDeptMgr">
                                    <Input   value="部门负责人"  disabled></Input>
                                </FormItem>
<!--                                <FormItem label="Date">-->
<!--                                    <Row>-->
<!--                                        <Col span="11">-->
<!--                                            <FormItem prop="date">-->
<!--                                                <DatePicker type="date" placeholder="Select date" v-model="formDate.date"></DatePicker>-->
<!--                                            </FormItem>-->
<!--                                        </Col>-->
<!--                                        <Col span="2" style="text-align: center">-</Col>-->
<!--                                        <Col span="11">-->
<!--                                            <FormItem prop="time">-->
<!--                                                <TimePicker type="time" placeholder="Select time" v-model="formDate.time"></TimePicker>-->
<!--                                            </FormItem>-->
<!--                                        </Col>-->
<!--                                    </Row>-->
<!--                                </FormItem>-->

<!--                                <FormItem label="Hobby" prop="interest">-->
<!--                                    <CheckboxGroup v-model="formDate.interest">-->
<!--                                        <Checkbox label="Eat"></Checkbox>-->
<!--                                        <Checkbox label="Sleep"></Checkbox>-->
<!--                                        <Checkbox label="Run"></Checkbox>-->
<!--                                        <Checkbox label="Movie"></Checkbox>-->
<!--                                    </CheckboxGroup>-->
<!--                                </FormItem>-->
                                <FormItem label="Desc" prop="desc">
                                    <Input v-model="formDate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                                </FormItem>
                            </Col>
                            <Col :xl="{offset:4,span:5}">
                                <FormItem label="转入部门" prop="ToDept" v-if="formDate.changeType!=='Post'">
                                    <Select v-model="formDate.departName" placeholder="请输入您申请转入的部门">
                                        <Option value="技术部">技术部</Option>
                                        <Option value="财务部">财务部</Option>
                                        <Option value="人事部">人事部</Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="转入岗位" prop="ToJob" v-if="formDate.changeType!=='Dept'">
                                    <Select v-model="formDate.post" placeholder="请输入您申请转入的岗位">
                                        <Option value="beijing">New York</Option>
                                        <Option value="shanghai">London</Option>
                                        <Option value="shenzhen">Sydney</Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="部门负责人:" prop="ToDeptMgr">
                                    <Input v-model="formDate.departMgr" placeholder="Enter your DeptMgr"></Input>
                                </FormItem>
                                <FormItem label="薪水:" prop="salary">
                                    <Input v-model="formDate.salary" placeholder="Enter your salary"></Input>
                                </FormItem>
                                <FormItem label="职级:" prop="jobLevelName">
                                    <Input v-model="formDate.jobLevelName" placeholder="Enter your salary"></Input>
                                </FormItem>
<!--                                <FormItem label="Date">-->
<!--                                    <Row>-->
<!--                                        <Col span="11">-->
<!--                                            <FormItem prop="date">-->
<!--                                                <DatePicker type="date" placeholder="Select date" v-model="formDate.date"></DatePicker>-->
<!--                                            </FormItem>-->
<!--                                        </Col>-->
<!--                                        <Col span="2" style="text-align: center">-</Col>-->
<!--                                        <Col span="11">-->
<!--                                            <FormItem prop="time">-->
<!--                                                <TimePicker type="time" placeholder="Select time" v-model="formDate.time"></TimePicker>-->
<!--                                            </FormItem>-->
<!--                                        </Col>-->
<!--                                    </Row>-->
<!--                                </FormItem>-->

<!--                                <FormItem label="Hobby" prop="interest">-->
<!--                                    <CheckboxGroup v-model="formDate.interest">-->
<!--                                        <Checkbox label="Eat"></Checkbox>-->
<!--                                        <Checkbox label="Sleep"></Checkbox>-->
<!--                                        <Checkbox label="Run"></Checkbox>-->
<!--                                        <Checkbox label="Movie"></Checkbox>-->
<!--                                    </CheckboxGroup>-->
<!--                                </FormItem>-->
                                <FormItem label="Desc" prop="desc">
                                    <Input v-model="formDate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                                </FormItem>
                            </Col>
                        </Row>

                        <Row>
                            <Col :xl="{span:6,offset:8}">
                                <FormItem>
                                    <Button type="primary" @click="handleSubmit('formDate')">Submit</Button>
                                    <Button @click="handleReset('formDate')" style="margin-left: 18px">Reset</Button>
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>

            </Col>
        </Row>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import api from "../../api/api";

    export default {
        name: "InterMob",
        props: {},
        data () {
            return {
                formDate: {
                    staffName: '',
                    staffId: '',
                    city: '',
                    changeType: 'Dept',
                    departName:'',
                    post:'',
                    salary:'',
                    jobLevelName:'',
                },
                steps:0,
                // ruleValidate: {
                //     StaffName: [
                //         { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                //     ],
                //     StaffCode: [
                //         { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                //         { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                //     ],
                //     city: [
                //         { required: true, message: 'Please select the city', trigger: 'change' }
                //     ],
                //     ChangeType: [
                //         { required: true, message: 'Please select gender', trigger: 'change' }
                //     ],
                //     interest: [
                //         { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                //         { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                //     ],
                //     date: [
                //         { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                //     ],
                //     time: [
                //         { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                //     ],
                //     desc: [
                //         { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                //         { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                //     ]
                // }
            }
        },
        computed:{
            getUserDepartName(){
                return this.$store.departName
            }


        },
        methods: {
            handleSubmit () {
                console.log(this.formDate.ChangeType)
                api.updateStaffInfo(this.formDate).then(
                    resolve=>{
                        console.log("resolve")
                    },
                    rej=>{
                        console.log("rej")
                    }
                )
                this.$router.push('Success')
                this.$Message.success('提交成功!');

            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
        },
        watch: {}
    }
</script>

<style scoped>

</style>
