<template>
    <div>
        <Form inline :width-label="80">
            <FormItem label="您的查询月份:">
                <DatePicker v-model="param.salaryDate" type="month" @on-change="onChange"></DatePicker>
            </FormItem>
        </Form>
        <Table
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
            <slot name="footer" slot="footer">
                <Page :total="tableDate.total"
                      show-total
                      show-elevator
                      show-sizer
                      :placement="'top'"
                      :current="tableDate.current"
                      @on-change="updateCurrent"
                />
            </slot>
        </Table>
    </div>

</template>

<script>
    import api from "../../api/api";

    export default {
        name: "QuerySalary",
        props: {},
        data() {
            return {
                tableDate:{
                    records:[],
                    total:0,
                },
                param:{
                    username:sessionStorage.getItem("username"),
                    salaryDate: new Date(),
                    current:1,
                },
                columns:[
                    {title:'基础薪资' ,key:'base_salary',align:"center"},
                    {title:'时间' ,   key:'salary_date',align:"center"},
                    {title:'岗位工资' ,key:'post_wage',align:"center"},
                    {title:'绩效工资' ,key:'merit_money',align:"center"},
                    {title:'应发薪资' ,key:'pay_salary',align:"center"},
                    {title:'全勤奖' ,  key:'full_prize',align:"center"},
                    {title:'加班费' ,  key:'overtime_money',align:"center"},
                    {title:'养老保险' ,key:'endowment_ins',align:"center"},
                    {title:'医疗保险' ,key:'medical_ins',align:"center"},
                    {title:'失业保险' ,key:'unemp_ins',align:"center"},
                    {title:'工伤保险' ,key:'work_injury_ins',align:"center"},
                    {title:'生育保险' ,key:'birth_ins',align:"center"},
                    {title:'住房公积金' ,key:'housing_provident_fund',align:"center"},
                    {title:'个人所得税' ,key:'personal_income_tax',align:"center"},
                    {title:'扣发工资' ,key:'deduct_wages',align:"center"},
                    {title:'实发工资' ,key:'real_wages',align:"center"},
                    {title:'备注' ,key:'remark',align:"center"},
                ]
            }
        },
        computed: {},
        beforeRouteEnter(to,from,next){
            next(vm => {
                api.querySalary(vm.param).then(
                    res=>{
                        console.log(res)
                        vm.tableDate=res
                        console.log(vm.tableDate)
                        console.log(vm.tableDate.records)
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
            })
        },
        methods: {
            updateCurrent(current){
                this.param.current=current
                api.querySalary(this.param).then(
                    res=>{
                        console.log(res)
                        this.tableDate=res
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
            },
            onChange(){
                api.querySalary(this.param).then(
                    res=>{
                        console.log(res)
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
