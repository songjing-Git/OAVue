<template>
    <div>
        <div class="search-con search-con-top">
            <Form inline :label-width="100">
                <FormItem  label="部门编号:">
                    <Input v-model="search.departId"></Input>
                </FormItem>
                <FormItem  label="部门名称:">
                    <Input v-model="search.departName"></Input>
                </FormItem>
                <FormItem  label="部门经理:">
                    <Input v-model="search.departMgr"></Input>
                </FormItem>
                <Button class="search-btn" type="primary" icon="md-search" @click="DepartInfoSearch"></Button>
            </Form>
        </div>
        <Table
            border="true"
            ref="tablesMain"
            :data="tableDate.records"
            :columns="columns"
            :stripe="true"
            :border="false"
            :show-header="true"
            :disabled-hover="false"
            :highlight-row="true"
            no-data-text="数据为空时显示的提示内容"
            no-filtered-data-text="筛选数据为空时显示的提示内容"
        >

            <template slot-scope="{ row, index }" slot="action">
                <Button type="primary" size="small"  @click="departAdd()">添加部门员工</Button>

                <Button type="error" size="small" @click="getDepartId(row)">删除</Button>

                <Button type="error" size="small" @click="getUpdateDepartId(row)">修改</Button>
            </template>


            <slot name="header" slot="header">
                <Col :xl="{offset:22}">
                    <Button  type="success"  @click="isAddDepart = true" >新增部门</Button>
                </Col>
                <Modal
                    :width="520"
                    v-model="isAddDepart"
                    title="新增部门"
                    ok-text="提交"
                    @on-ok="isAddDepartOK"
                    @on-cancel="cancel">
                    <Form :label-width="100" label-position="left" show-message v-model="isAddDepart">
                        <Row>
                            <Col>
                                <FormItem label="部门编号:" >
                                    <Input v-model="addDepart.departId"> </Input>
                                </FormItem>
                                <FormItem label="部门名称:" >
                                    <Input v-model="addDepart.departName"> </Input>
                                </FormItem>
                                <FormItem label="部门人数:" >
                                    <Input v-model="addDepart.departStaffCount"> </Input>
                                </FormItem>
                                <FormItem label="部门最大人数:" >
                                    <Input v-model="addDepart.departStaffMax"> </Input>
                                </FormItem>
                                <FormItem label="部门经理:" >
                                    <Input v-model="addDepart.departMgr"> </Input>
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                </Modal>
                <Modal
                    v-model="departAddStaff"
                    title="加入员工"
                    :width="890"
                    @on-cancel="cancel">
                    <!--添加部门员工-->
                    <!--<depart-add-staff :table-date="staffInfo" />-->
                    <Table
                        border="true"
                        ref="tablesMain"
                        :data="staffInfo.records"
                        :columns="propColumns"
                        :stripe="true"
                        :border="false"
                        :show-header="true"
                        :disabled-hover="false"
                        :highlight-row="true"
                        no-data-text="数据为空时显示的提示内容"
                        no-filtered-data-text="筛选数据为空时显示的提示内容"
                    >
                        <slot name="footer" slot="footer">
                            <Page :total="staffInfo.total"
                                  show-total
                                  show-elevator
                                  show-sizer
                                  :placement="'top'"
                                  :current="param.propCurrent"
                                  :page-size-opts="[10,20,50,100]"
                                  @on-change="updatePropCurrentPage"
                                  @on-page-size-change="updatePropPageSize"
                            />
                        </slot>
                        <slot name="loading" slot="loading"></slot>
                    </Table>
                </Modal>
                <Modal
                    v-model="removeDepart"
                    title="删除部门"
                    @on-ok="deleteDepart()"
                    @on-cancel="cancel">
                    <span>是否删除该部门</span>
                </Modal>
                <Modal
                    v-model="isUpdateDepart"
                    title="修改部门"
                    @on-ok="isUpdateDepartOK"
                    @on-cancel="cancel">
                    <Form :label-width="100" label-position="left" show-message v-model="isAddDepart">
                        <Row>
                            <Col>
                                <FormItem label="部门编号:" >
                                    <Input v-model="updateDepart.departId" disabled> </Input>
                                </FormItem>
                                <FormItem label="部门名称:" >
                                    <Input v-model="updateDepart.departName"> </Input>
                                </FormItem>
                                <FormItem label="部门人数:" >
                                    <Input v-model="updateDepart.departStaffCount"> </Input>
                                </FormItem>
                                <FormItem label="部门最大人数:" >
                                    <Input v-model="updateDepart.departStaffMax"> </Input>
                                </FormItem>
                                <FormItem label="部门经理:" >
                                    <Input v-model="updateDepart.departMgr"> </Input>
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
    import AddDepart from "../../components/menu/AddDepart";
    import DepartAddStaff from "../../components/menu/DepartAddStaff";

    export default {
        name: "DepartMgr",
        components: {DepartAddStaff, AddDepart},
        props: {},
        data() {
            return {
                tableDate: {
                    total:0,
                    records:[],
                },
                param:{
                    propCurrent:1,
                    propPageSize:10,
                },

                staffInfo:{
                    total:0,
                    records:[],
                },
                propColumns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    { title: '员工编号' ,key:'staff_id', align: 'center'},
                    { title: '员工姓名', key: 'staff_name' ,sortable: true,align: 'center' },
                    { title: '性别',  key: 'gender' ,align: 'center'},
                    { title: '在职状态',key: 'work_state',align: 'center'},
                    { title: '联系方式' , key: 'phone',align: 'center'},
                    { title: '职位等级' , key: 'jobLevelName',align: 'center'},

                ],
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    { title: '部门编号' ,key:'departId', align: 'center'},
                    { title: '部门名称', key: 'departName' ,sortable: true,align: 'center' },
                    { title: '部门经理',  key: 'departMgr' ,align: 'center'},
                    { title: '部门人数',key: 'departStaffCount', sortable: true,align: 'center' },
                    { title: '最大人数',key: 'departStaffMax',align: 'center'},
                    { title: '操作' ,key: 'addStaff', slot: 'action',align: 'center'}
                ],
                search:{
                    departId:'',
                    departName:'',
                    departMgr:'',
                    pageSize:10,
                    current:1,
                },
                viewInfo:false,
                depart:[],
                isAddDepart:false,
                isUpdateDepart:false,
                removeDepart:false,
                departAddStaff:false,
                addDepart:{
                    departId:'',
                    departName:'',
                    departStaffCount:'',
                    departStaffMax:'',
                    departMgr:'',
                },
                updateDepart:{
                    departId:'',
                    departName:'',
                    departStaffCount:'',
                    departStaffMax:'',
                    departMgr:'',
                },
                departId:null,
            }
        },
        beforeRouteEnter(to,from,next){
            next(vm => {
                // 通过 `vm` 访问组件实例
                api.getDepartInfo().then(
                    res=>{
                        vm.tableDate=res
                        console.log(res)
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
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
            isUpdateDepartOK () {
                api.updateDepart(this.updateDepart).then(
                    res=>{
                        console.log(res)
                        this.$Message.success('提交成功');
                    },
                    rej=>{
                        console.log(rej)
                        this.$Message.error('提交失败')
                    }
                )

            },
            isAddDepartOK(){
                api.insertDepart(this.addDepart).then(
                    res=>{
                        console.log(res)
                        this.$Message.success('提交成功')
                    },
                    rej=>{
                        this.$Message.error("提交失败")
                        console.log(rej)
                    }
                )
            },
            /**
             * 点击添加员工按钮触发的方法
             */
            departAdd(){
                this.departAddStaff=true
                api.getNoDeptStaff(this.param).then(
                    res=>{
                        console.log(res)
                        this.staffInfo=res
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
            },
            updatePropCurrentPage(propCurrent){
                console.log(propCurrent)
                this.param.propCurrent=propCurrent
                api.getNoDeptStaff(this.param).then(
                    res=>{
                        console.log(res)
                        this.staffInfo=res
                    },
                    rej=>{
                        console.log(rej)
                        alert(rej)
                    }
                )
            },
            updatePropPageSize(propPageSize){
                console.log(propPageSize)
                this.param.propPageSize=propPageSize
                api.getNoDeptStaff(this.param).then(
                    res=>{
                        console.log(res)
                        this.staffInfo=res
                    },
                    rej=>{
                        console.log(rej)
                        alert(rej)
                    }
                )
            },
            getDepartId(row){
                this.removeDepart=true
                this.departId=row.departId
            },
            getUpdateDepartId(row){
                this.isUpdateDepart=true
                this.updateDepart.departId=row.departId
                this.updateDepart.departName=row.departName
                this.updateDepart.departMgr=row.departMgr
                this.updateDepart.departStaffCount=row.departStaffCount
                this.updateDepart.departStaffMax=row.departStaffMax
            },
            /**
             * 删除部门按钮
             */
            deleteDepart(){
                api.removeDepart(this.departId).then(
                    res=>{
                        alert("删除成功")
                    },
                    rej=>{
                        alert("删除失败"+rej)
                    }
                )
            },
            cancel () {
                this.$Message.info('取消成功');
            },

            updateCurrentPage(currentPage){
                this.search.current=currentPage
                api.getDepartInfo(this.search).then(
                    res=>{
                        this.tableDate=res
                    },
                    rej=>{
                        console.log(rej)
                    }
                )

            },
            updatePageSize(pageSize){
                this.search.pageSize=pageSize
                console.log(this.search)
                api.getDepartInfo(this.search).then(
                    res=>{
                        this.tableDate=res
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
            },

            DepartInfoSearch(){
                api.getDepartInfo(this.search).then(
                    res=>{
                        this.tableDate=res
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
            },
        },
        computed: {
        },
        watch: {}
    }
</script>

<style scoped>
    .demo-drawer-profile{
        font-size: 14px;
    }
    .demo-drawer-profile .ivu-col{
        margin-bottom: 12px;
    }
</style>
