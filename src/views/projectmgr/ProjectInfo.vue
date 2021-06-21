<template>
    <div>
        <div class="search-con search-con-top">
            <Form inline :label-width="100">
                <FormItem  label="项目名称:">
                    <Input v-model="search.projectName"></Input>
                </FormItem>
                <FormItem  label="项目编号:">
                    <Input v-model="search.projectId"></Input>
                </FormItem>
                <FormItem  label="项目负责人:">
                    <Input v-model="search.projectBoss"></Input>
                </FormItem>
                <Button class="search-btn" type="primary" @click="projectInfo"><Icon type="ios-search"/></Button>
            </Form>
        </div>
        <Table
            ref="tablesMain"
            :data="tableDate.records"
            :columns="columns"
            :stripe="true"
            :border="true"
            :show-header="true"
            :disabled-hover="false"
            :highlight-row="true"
            no-data-text="数据为空时显示的提示内容"
            no-filtered-data-text="筛选数据为空时显示的提示内容"
        >

            <template slot-scope="{row ,index}" slot="projectState">
                <div v-if="row.projectstate==='1'">
                    <Tag color="success">审核中</Tag>
                </div>
                <div v-else-if="row.projectstate==='2'">
                    <Tag color="primary">执行中</Tag>
                </div>
                <div v-else-if="row.projectstate==='3'">
                    <Tag color="success">已交付</Tag>
                </div>
                <div v-else-if="row.projectstate==='4'">
                    <Tag color="success">撤销</Tag>
                </div>
                <div v-else-if="row.projectstate==='5'">
                    <Tag color="warning">紧急</Tag>
                </div>
                <div v-else>
                    <Tag color="error">延期</Tag>
                </div>
            </template>
            <template slot-scope="{row,index}" slot="action">
                <Button type="warning" @click="updateProjectInfo(row)">修改</Button>
            </template>



            <slot name="header" slot="header">
                <Modal
                    v-model="updateProject"
                    :width="900"
                    title="项目信息修改"
                ok-text="提交"
                @on-ok="updateProjectSubmit()">
                    <Form v-model="projectApp"
                          label-position="left"
                          :label-width="120"
                          show-message
                          :label-colon="true"
                    >
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
                            <FormItem label="项目状态">
                                <Select v-model="projectApp.projectstate" >
                                    <Option :key="1" :value="1">审核中</Option>
                                    <Option :key="2" :value="2">执行中</Option>
                                    <Option :key="3" :value="3">已交付</Option>
                                    <Option :key="4" :value="4">撤销</Option>
                                    <Option :key="5" :value="5">紧急</Option>
                                    <Option :key="0" :value="0">延期</Option>
                                </Select>
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
                    </Form>
                </Modal>
            </slot>
            <slot name="footer" slot="footer">
                <Page :total="tableDate.total"
                      show-total
                      show-elevator
                      show-sizer
                      :placement="'top'"
                      :current="search.current"
                      :page-size-opts="[10,20,50,100]"
                      @on-change="updateCurrentPage"
                      @on-page-size-change="updatePageSize"
                />
            </slot>
            <slot name="loading" slot="loading"></slot>
        </Table>
    </div>
</template>

<script>
    import api from "../../api/api";
    export default {
        name: "ProjectInfo",
        components: {},
        props: {},
        data() {
            return {
                projectApp:{
                    projectId:"37",
                    projectName:"亚信",
                    projectType:"电信",
                    contactPhone:"",
                    projectstate:"0",
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
                },
                updateProject:false,
                search:{
                    projectName:'',
                    projectId:'',
                    projectBoss:'',
                    pageSize:10,
                    current:1,
                },
                pageTitle:40,
                tableDate: {
                    total:0,
                    records:[],
                },
                columns:[
                    {title:'项目编号',key:'projectId',align:'center'},
                    {title:'项目名称',key:'projectName',align:'center'},
                    {title:'项目类型',key:'projectType',align:'center'},
                    {title:'甲方',key:"firstParty",align: 'center'},
                    {title:'项目状态',key:'projectState',slot:'projectState',align:'center'},
                    {title:'立项时间',key:'projectStartDate',align:'center'},
                    {title:'项目工期',key:'projectTime',align:'center'},
                    {title:'预计完工时间',key:'projectEndDate',align:'center'},
                    /*{title:'UI',key:'joinDepart',align:'center'},*/
                    {title:'项目负责人',key:'leadingPerson',align:'center'},
                    {title:'联系电话',key:'phone',align:'center'},
                    {title:'第一审核人',key:'assessor1',align:'center'},
                    {title:'操作',slot:'action',align: 'center' ,key:'action'}
                ]

            }
        },
        beforeRouteEnter(to,from,next){
            next(vm => {
                // 通过 `vm` 访问组件实例
                api.selectProInfo().then(
                    res=>{
                        vm.tableDate=res
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
            })
            next()
        },
        computed: {

        },
        methods: {
            projectInfo(){
                api.selectProInfo(this.search).then(
                    res=>{
                        this.tableDate=res
                    },
                    rej=>{
                        this.$Message.error("查询项目信息失败")
                        console.log(rej)
                    }
                )
            },
            updateProjectSubmit(){
              api.updateProject(this.projectApp).then(
                  res=>{
                      this.$Message.success("提交成功")
                      console.log(res)
                  },
                  rej=>{
                      this.$Message.success("提交失败")
                      console.log(rej)
                  }
              )
            },
            updateProjectInfo(row){
                console.log(row)
                this.updateProject=true,
                    this.projectApp=row
            },
            onIsSearch(){
                this.isShow=!this.isShow
            },
            updateCurrentPage (current) {
                this.search.current=current
                api.selectProInfo(this.search).then(
                    res=>{
                        this.tableDate=res
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
            },
            updatePageSize (pageSize) {
                this.search.pageSize=pageSize
                api.selectProInfo(this.search).then(
                    res=>{
                        this.tableDate=res
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
            }
        },
        watch: {}
    }
</script>

<style scoped>

</style>
