<template>
    <Card style="width: 100%;height: 100%">
        <Form v-model="projectApp"
          label-position="left"
          :label-width="120"
          show-message
          :label-colon="true"
    >
        <Row>
            <Col :xl="{offset:10}">
                <h1 class="project_app_title">项目申请书</h1>
            </Col>
        </Row>
        <Row>
            <Col :xl="{offset:2,span:8}">
                <FormItem label="项目编号">
                    <Input placeholder="请输入项目编号" v-model="projectApp.projectId"></Input>
                </FormItem>
                <FormItem label="项目名称">
                    <Input placeholder="请输入项目名称" v-model="projectApp.projectName"></Input>
                </FormItem>
                <FormItem label="项目类型">
                    <Input placeholder="请输入项目类型" v-model="projectApp.projectType"></Input>
                </FormItem>

                <FormItem label="甲方联系人电话">
                    <Input placeholder="请输入甲方公司甲方联系人电话" v-model="projectApp.contactPhone"></Input>
                </FormItem>
                <FormItem label="项目开始时间">
                    <DatePicker  placeholder="请选择项目开始时间" v-model="projectApp.projectStartDate"></DatePicker>
                </FormItem>
                <FormItem label="预计交付时间">
                    <DatePicker  placeholder="请选择项目交付时间" v-model="projectApp.payDate"></DatePicker>
                </FormItem>
                <FormItem label="预付定金">
                    <Input type="number" placeholder="请输入甲方公司定金" v-model="projectApp.advanceMoney"></Input>
                </FormItem>
                <FormItem label="交易金额">
                    <Input type="number" placeholder="请输入甲方公司应付全款" v-model="projectApp.amount"></Input>
                </FormItem>
            </Col>
            <Col :xl="{offset:2,span:8}">
                <FormItem label="甲方">
                    <Input placeholder="请输入甲方公司名称" v-model="projectApp.firstParty"></Input>
                </FormItem>
                <FormItem label="甲方联系人">
                    <Input placeholder="请输入甲方公司联系人" v-model="projectApp.contactPerson"></Input>
                </FormItem>
                <FormItem label="项目负责人编号">
                    <Input placeholder="项目负责人编号" v-model="projectApp.projectAppPersonCode"></Input>
                </FormItem>
                <FormItem label="项目负责人名称">
                    <Input placeholder="项目负责人名称" v-model="projectApp.leadingPerson"></Input>
                </FormItem>
                <FormItem label="项目申请人编号">
                    <Input placeholder="项目申请人编号" v-model="projectApp.projectAppPersonCode"></Input>
                </FormItem>
                <FormItem label="项目申请人名称">
                    <Input placeholder="项目申请人名称" v-model="projectApp.projectAppPerson"></Input>
                </FormItem>
                <FormItem label="项目申请日期">
                    <DatePicker :show-week-numbers="true" placeholder="项目申请日期" v-model="projectApp.applyDate"></DatePicker>
                </FormItem>
                <FormItem label="审核人一编号">
                    <Input placeholder="项目审核人一编号" v-model="projectApp.assessor1"></Input>
                </FormItem>
                <FormItem label="审核人二编号">
                    <Input placeholder="审核人二编号"></Input>
                </FormItem>
                <FormItem label="审核人三编号">
                    <Input placeholder="审核人三编号"></Input>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col :xl="{offset:6,span:8}">
                <Button  type="success" @click="projectSubmit">提交</Button>
            </Col>
            <Col :xl="{offset:2,span:8}">
                <Button  type="info" >重置</Button>
            </Col>
        </Row>
    </Form>
    </Card>
</template>

<script>
    import api from "../../api/api";

    export default {
        name: "ProjectApp",
        props: {},
        data() {
            return {
                projectApp:{
                    projectId:"37",
                    projectName:"亚信",
                    projectType:"电信",
                    contactPhone:"",
                    projectStartDate:new Date(),
                    payDate:new Date()+1,
                    advanceMoney:5000,
                    amount:"20000",
                    firstParty:"亚信",
                    contactPerson:"宋京",
                    projectAppPersonCode:"1",
                    projectAppPerson:"宋京",
                    leadingPerson:"宋京",
                    applyDate:new Date(),
                    assessor1:"1",
                    assessor2:"",
                    assessor3:""
                }
            }
        },
        computed: {},
        methods: {
            projectSubmit(){
                api.insertProject(this.projectApp).then(
                    res=>{
                        this.$Message.success("提交成功")
                        console.log(res)
                    },
                    rej=>{
                        this.$Message.error("提交失败")
                        console.log(rej)
                    }
                )
            }
        },
        watch: {}
    }
</script>

<style scoped>
    .project_app_title{
        margin-bottom: 50px;
    }
</style>
