<template>
    <Row>
        <Col>
            <Table
                :border="true"
                :show-header="false"
                :columns="columns"
                :data="mealDate"
            >
                <template slot-scope="{row,index}"  slot="project_code">
                    <Input placeholder="请输入项目编号"></Input>
                </template>
                <template slot-scope="{row,index}" slot="project_name">
                    <Input placeholder="请输入项目名称"></Input>
                </template>
                <template slot="project_type">
                    <Input></Input>
                </template>
                <template slot="first_party">
                    <Input></Input>
                </template>
                <template slot="project_start_date">
                    <Input></Input>
                </template>
                <template slot="project_end_date">
                    <Input></Input>
                </template>
                <template slot="pay_date">
                    <Input></Input>
                </template>
                <template slot="advance_money">
                    <Input></Input>
                </template>
                <template slot="amount">
                    <Input></Input>
                </template>
                <template slot="project_mgr">
                    <Input></Input>
                </template>
                <template slot="apply_date">
                    <Input></Input>
                </template>
            </Table>
        </Col>

    </Row>
</template>

<script>
    export default {
        name: "ProjectApp2",
        props: {},
        data () {
            return {
                columns: [
                    /*{
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },*/
                    { title: '项目编号',key: 'project_code', slot: 'project_code',align: 'center'},
                    { title: '项目名称', key: 'project_name',slot: 'project_name',align: 'center'},
                    { title: '项目类型', key: 'project_type',slot: 'project_type',align: 'center'},
                    { title: '甲方', key: 'first_party',slot: 'first_party',align: 'center'},
                    { title:'项目开始时间' ,key:'project_start_date', slot:'project_start_date'},
                    {title:'项目结束时间' ,key:'project_end_date', slot:'project_end_date'},
                    { title:'预计交付时间',key:'pay_date',slot:'pay_date'},
                    { title:'甲方预付定金' ,key:'advance_money',slot:'advance_money'},
                    { title:'交易金额',key:'amount',slot:'amount'},
                    {title:'项目负责人',key:'project_mgr',slot:'project_mgr'},
                    {title:'项目申请日期',key:'apply_date',slot: 'apply_date'},

                ],
                mealDate:[
                    {
                        type:'',
                        money:'',

                    }
                ],
            }
        },
        computed:{

        },
        methods: {

        },
        watch: {}
    }
</script>

<style scoped>

</style>
