<template>
    <div>
        <Row>
            <Form inline :label-width="80">

                    <FormItem label="员工编号:" >

                        <Input placeholder="请输入员工id" v-model="staffId" label="员工编号:">
                        </Input>
                    </FormItem>

                    <Button type="primary" @click="Search()">搜索</Button>
                <Button type="success"  @click="updateRole">提交</Button>
            </Form>

        </Row>
        <Row>
            <Col :xl="{ offset:2,span:20}">
                <Transfer
                :data="data"
                :list-style="listStyle"
                :target-keys="targetKeys"
                @on-change="onChange">

                </Transfer>
            </Col>
        </Row>
        <Row>
            <Col :xl="{ offset:3,span:4}">
                <div>源列表为员工没有的身份信息</div>
                <div>目标列表为员工已有的身份信息</div>
                <div>点击提交按钮可修改身份信息</div>
            </Col>
        </Row>
    </div>
</template>

<script>
    import api from "../../api/api";

    export default {
        name: "roleMgr",
        props: {},
        data() {
            return {
                listStyle: {
                    width: '450px',
                    height: '300px'
                },
                data:[],
                targetKeys:[],
                staffId:"",

            }
        },
        computed: {

        },
        methods: {

            render(data){
                return data.label
            },
            handleChange (newTargetKeys, direction, moveKeys) {
                console.log(newTargetKeys);
                console.log(direction);
                console.log(moveKeys);
                this.targetKeys = newTargetKeys;
            },
            Search(){
                let AllRole=[]
                let HasRole=[]
                let NoRole=[]
                api.selectAllRole().then(
                    res=>{
                        console.log(res)
                        for (let i=0;i<res.length;i++){
                            AllRole.push(
                                {
                                    key:res[i].roleId,
                                    label:res[i].roleName
                                }
                            )
                        }
                        if (AllRole){
                            api.selectStaffRole(this.staffId).then(
                                res=>{
                                    for (let i=0;i<res.length;i++){
                                        HasRole.push(
                                                res[i].roleId,
                                        )
                                    }
                                    api.selectStaffNoRole(this.staffId).then(
                                        res=>{
                                            for (let i=0;i<res.length;i++){
                                                NoRole.push(
                                                    {
                                                        key:res[i].roleId,
                                                    }
                                                )
                                            }
                                        }
                                    )
                                }
                            )
                        }
                        this.data=AllRole
                        this.targetKeys=HasRole
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
            },
            onChange (newTargetKeys) {
                this.targetKeys = newTargetKeys;
            },

            updateRole(){
                let param={
                    targetKeys:this.targetKeys,
                    staffId: this.staffId
                }
                console.log(param)
                api.updateRole(param).then(
                    res=>{

                        this.$Message.success("提交成功")
                    },
                    rej=>{
                        this.$Message.error("提交失败")
                }
                )
            }
        }

    }
</script>

<style scoped>

</style>
