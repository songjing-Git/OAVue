<template>
    <Row>
        <Col>
            <Form ref="formDate"  :label-width="100" inline>
                <Row>
                    <Divider orientation="left">
                        <p >员工信息</p>
                    </Divider>
                    <Col >
                        <FormItem label="员工编号:" prop="StaffCode" >
                            <Input> </Input>
                        </FormItem>
                        <FormItem label="所在部门:" prop="StaffCode">
                            <Input ></Input>
                        </FormItem>
                        <FormItem label="报销中心:" prop="StaffCode">
                            <Input ></Input>
                        </FormItem>
                    </Col>
                    <Col >
                        <Col >
                            <FormItem label="员工姓名:" prop="StaffCode">
                                <Input ></Input>
                            </FormItem>
                            <FormItem label="部门经理:" prop="StaffCode">
                                <Input ></Input>
                            </FormItem>
                        </Col>
                    </Col>
                </Row>
                <Divider orientation="left">
                    <p>填报申请</p>
                </Divider>
                <Row>
                    <Col>
                        <Table
                            :border="true"
                            :columns="columns"
                            :data="mealDate"
                        >
                            <slot name="header" slot="header" >
                                <Col :xl="{offset:20}">
                                    <Button type="success"  @click="remove(index)">导入excel</Button>
                                    <Button type="error"  @click="remove(index)">删除</Button>
                                    <Button type="error"  @click="addLine(index)">添加</Button>
                                </Col>
                            </slot>
                            <template slot-scope="{row,index}"  slot="type">
                                <Select v-model="mealDate[index].type">
                                    <Option value="公费报销">公费报销
                                    </Option>
                                    <Option value="私费报销">私费报销
                                    </Option>
                                </Select>
                            </template>
                            <template slot-scope="{row,index}" slot="money">
                                <Input type="number" v-model="mealDate[index].money">
                                </Input>
                            </template>
                            <template slot-scope="{row,index}" slot="date">
                                <DatePicker type="month" format="yyyy-MM" v-model="mealDate[index].date" />
                            </template>
                            <template slot-scope="{row,index}" slot="code">
                                <Input v-model="mealDate[index].code"></Input>
                            </template>
                            <template slot-scope="{row,index}" slot="remark">
                                <Input v-model="mealDate[index].remark"></Input>
                            </template>
                            <template slot-scope="{ row, index }" slot="action">
                                <Button>费用明细</Button>
                            </template>
                            <slot name="footer" slot="footer">
                                <Col :xl="{span:7,offset:9}" class="submit">
                                    <FormItem >
                                        <Button type="primary"  @click="rmbSubmit()">提交审批</Button>
                                        <Button style="margin-left: 8px">返回</Button>
                                    </FormItem>
                                </Col>
                            </slot>
                        </Table>
                    </Col>

                </Row>

            </Form>
        </Col>
    </Row>
</template>

<script>
    import api from "../../api/api";

    export default {
        name: "MealExpenses",
        props: {},
        data() {
            return {
                columns: [
                    /*{
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },*/
                    { title: '费用报销类型',key: 'type', slot: 'type',align: 'center'},
                    { title: '报销金额', key: 'money',slot: 'money',align: 'center'},
                    { title: '报销月份', key: 'month',slot: 'date' ,align: 'center'},
                    { title: '发票编码' ,key:'code' , slot: 'code',align: 'center'},
                    { title: '备注' ,key: 'remark', slot: 'remark' ,align: 'center'},
                    { title: '操作',  slot: 'action',  align: 'center'}
                ],
                mealDate:[
                    {
                        type:'',
                        money:'',
                        date:'',
                        code:'',
                        remark:'',
                    }
                ],
                index:0
            }
        },
        computed: {},
        methods: {
            addLine (index) {
                this.mealDate.push({
                    type:'',
                    money:'',
                    date:'',
                    code:'',
                })
                this.index++
                console.log(typeof index)
                console.log(index)
            },
            remove (index) {
                if (this.index>0){
                    this.mealDate.splice(index ,1)
                    this.index--
                    console.log("index:"+index)
                }
            },
            rmbSubmit(){
                console.log(this.mealDate)
                api.sendRmbApprove(this.mealDate).then(
                    resolve=>{
                        this.$Message.message("提交成功")
                        this.$router.push("/SubmitSuccess")
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
    .submit{
        margin-top: 100px;
        margin-bottom: 100px;
    }
</style>
