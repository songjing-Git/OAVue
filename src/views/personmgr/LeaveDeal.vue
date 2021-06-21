<template>
    <div>
        <Row>
            <Col>
                <Form ref="formDate"  :label-width="100">
                        <Row>
                            <Col>
                                <FormItem label="填报类型:" prop="fillType">
                                    <RadioGroup v-model="formData.leaveFillType">
                                        <Radio label="0">本人填报</Radio>
                                        <Radio label="1">代理填报</Radio>
                                    </RadioGroup>
                                </FormItem>
                            </Col>
                            <Divider orientation="left">
                                <p >员工信息</p>
                            </Divider>
                            <Col :xl="{offset:4,span:5}">
                                <FormItem label="员工编号:"  >
                                    <Input v-model="formData.leaveStaffId" placeholder="请输入编号"> </Input>
                                </FormItem>
                                <FormItem label="联系电话:" >
                                    <Input v-model="formData.leaveStaffPhone" placeholder="请输入联系电话"></Input>
                                </FormItem>
                            </Col>
                            <Col :xl="{offset:4,span:5}">
                                <Col >
                                    <FormItem label="员工姓名:" >
                                        <Input v-model="formData.leaveStaffName" placeholder="请输入姓名"></Input>
                                    </FormItem>

                                    <FormItem label="预计离职日期:" >
                                        <DatePicker v-model="formData.leaveDate" placeholder="预计离职日期"></DatePicker>
                                    </FormItem>
                                </Col>
                            </Col>
                        </Row>
                        <Divider orientation="left">
                            <p>离职原因及对公司的评价</p>
                        </Divider>
                        <Row>
                            <Col>
                                <FormItem label="离职原因:" >
                                    <CheckboxGroup v-model="formData.leaveReason">
                                        <Checkbox label="环境不佳"></Checkbox>
                                        <Checkbox label="同事不太友好"></Checkbox>
                                        <Checkbox label="薪资不理想"></Checkbox>
                                        <Checkbox label="加班严重"></Checkbox>
                                        <Checkbox label="自身原因"></Checkbox>
                                    </CheckboxGroup>
                                </FormItem>


                                <FormItem label="建议" >
                                    <Input  type="textarea" v-model="formData.proposal" :autosize="{minRows: 4,maxRows: 10}" placeholder="Enter something..."></Input>
                                </FormItem>
                            </Col>
                            <Col>
                                <Divider orientation="left">
                                    <p>评分表</p>
                                </Divider>
                                <FormItem label="给公司评分:">
                                    <Rate v-model="formData.score" />
                                </FormItem>
                            </Col>
                            <Col>
                                <Divider orientation="left">
                                    <p>离职信</p>
                                </Divider>
                                <Upload
                                    multiple
                                    type="drag"
                                    action="//jsonplaceholder.typicode.com/posts/">
                                    <div style="padding: 20px 0">
                                        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                        <p>Click or drag files here to upload</p>
                                    </div>
                                </Upload>
                            </Col>
                        </Row>
                        <Row>
                            <Col :xl="{span:8,offset:10}">
                                <FormItem>
                                    <Button type="primary" @click="leaveDeal">Submit</Button>
                                    <Button style="margin-left: 8px">Reset</Button>
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
            </Col>
        </Row>
    </div>

</template>

<script>
    import api from "../../api/api";

    export default {
        name: "LeaveDeal",
        props: {},
        data() {
            return {

                formData:{
                    leaveStaffId:"",
                    leaveStaffName:"",
                    leaveStaffPhone:"",
                    leaveDate:new Date(),
                    leaveFillType:"0",
                    leaveReason:["自身原因"],
                    score:3.5,
                    proposal:""
                },

            }
        },
        computed: {},
        methods: {
            leaveDeal(){
                api.leaveDeal(this.formData).then(
                    res=>{
                        this.$router.push("/Success")
                    },
                    rej=>{
                        this.$Message.error(rej)
                    }
                )
            }
        },
        watch: {}
    }
</script>

<style scoped>

</style>
