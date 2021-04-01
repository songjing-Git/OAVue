<template>
    <div>
        <Button @click="value4 = true" size="small" type="primary">更多信息</Button>
        <Drawer :closable="false" width="640" v-model="value4">
            <p :style="pStyle">员工信息</p>
            <p :style="pStyle">基本信息</p>
            <div class="demo-drawer-profile">
                <Row>
                    <Col span="12">
                        工号: {{rowData.staff_id}}
                    </Col>
                    <Col span="12">
                        姓名: {{rowData.staff_name}}
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        性别: {{rowData.gender}}
                    </Col>
                    <Col span="12">
                        生日: {{rowData.birthday}}
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        邮箱: {{rowData.email}}
                    </Col>
                    <Col span="12">
                        电话: {{rowData.phone}}
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        工作城市: {{rowData.native_place}}
                    </Col>
                    <Col span="12">
                        家乡所在省份: {{rowData.address}}
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        工龄: {{rowData.work_age}}
                    </Col>
                </Row>
            </div>
            <Divider />
            <p :style="pStyle">部门</p>
            <div class="demo-drawer-profile">
                <Row>
                    <Col span="12">
                        所属部门: {{rowData.departName}}
                    </Col>
                    <Col span="12">
                        部门上级: {{rowData.departMgr}}
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        职位: {{rowData.jobLevelName}}
                    </Col>
                </Row>
                个人技能:C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc.
            </div>
            <Divider />
            <p :style="pStyle">其他信息</p>
            <div class="demo-drawer-profile">
                <Row>
                    <Col span="12">
                        婚姻状况: {{rowData.wedlock}}
                    </Col>
                    <Col span="12">
                        毕业院校: {{rowData.school}}
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        政治面貌: {{rowData.politic}}
                    </Col>
                    <Col span="12">
                        入职日期: {{rowData.begin_date}}
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        在职状态: {{rowData.work_state}}
                    </Col>
                    <Col span="12">
                        合同起始日期: {{rowData.begin_contract}}
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        合同结束日期: {{rowData.end_contract}}
                    </Col>
                    <Col span="12">
                        合同起始日期: {{rowData.begin_contract}}
                    </Col>
                </Row>
                <Divider />
                <p :style="pStyle">薪资状况</p>
                <Row>
                    <Col span="12">
                        基础薪资: {{rowData.baseSalary}}
                    </Col>
                    <Col span="12">
                        生育保险: {{rowData.birthIns}}
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        养老保险: {{rowData.endowmentIns}}
                    </Col>
                    <Col span="12">
                        住房公积金: {{rowData.housingProvidentFund}}
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        医疗保险: {{rowData.medicalIns}}
                    </Col>
                    <Col span="12">
                        失业保险: {{rowData.unempIns}}
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        工伤保险: {{rowData.workInjuryIns}}
                    </Col>
                    <Col span="12">
                        个人所得税: {{rowData.overtimeMoney}}
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        备注: {{rowData.remark}}
                    </Col>
                </Row>
            </div>
        </Drawer>
    </div>
</template>
<script>
    export default {
        name:'InfoDrawer',
        props: {
                rowData:{},
         }
        ,
        data () {
            return {
                value4: false,
                pStyle: {
                    fontSize: '16px',
                    color: 'rgba(25,20,10,0.1)',
                    lineHeight: '24px',
                    display: 'block',
                    marginBottom: '16px'
                }
            }
        }
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

