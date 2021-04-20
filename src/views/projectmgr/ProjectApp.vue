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
                    <Input placeholder="请输入项目编号"></Input>
                </FormItem>
                <FormItem label="项目名称">
                    <Input placeholder="请输入项目名称"></Input>
                </FormItem>
                <FormItem label="项目类型">
                    <Input placeholder="请输入项目类型"></Input>
                </FormItem>

                <FormItem label="甲方联系人电话">
                    <Input placeholder="请输入甲方公司甲方联系人电话"></Input>
                </FormItem>
                <FormItem label="项目开始时间">
                    <DatePicker  placeholder="请选择项目开始时间"></DatePicker>
                </FormItem>
                <FormItem label="预计交付时间">
                    <DatePicker  placeholder="请选择项目交付时间"></DatePicker>
                </FormItem>
                <FormItem label="预付定金">
                    <Input type="number" placeholder="请输入甲方公司定金"></Input>
                </FormItem>
                <FormItem label="交易金额">
                    <Input type="number" placeholder="请输入甲方公司应付全款"></Input>
                </FormItem>
            </Col>
            <Col :xl="{offset:2,span:8}">
                <FormItem label="甲方">
                    <Input placeholder="请输入甲方公司名称"></Input>
                </FormItem>
                <FormItem label="甲方联系人">
                    <Input placeholder="请输入甲方公司联系人"></Input>
                </FormItem>
                <FormItem label="项目负责人编号">
                    <Input placeholder="项目负责人编号"></Input>
                </FormItem>
                <FormItem label="项目负责人名称">
                    <Input placeholder="项目负责人名称"></Input>
                </FormItem>
                <FormItem label="项目申请人编号">
                    <Input placeholder="项目申请人编号"></Input>
                </FormItem>
                <FormItem label="项目申请人名称">
                    <Input placeholder="项目申请人名称"></Input>
                </FormItem>
                <FormItem label="项目申请日期">
                    <DatePicker :show-week-numbers="true" placeholder="项目申请日期"></DatePicker>
                </FormItem>
                <FormItem label="审核人一编号">
                    <Input placeholder="项目审核人一编号"></Input>
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
            <Col :xl="{offset:2,span:8}">
                <Button size="long" type="success">提交</Button>
            </Col>
            <Col :xl="{offset:2,span:8}">
                <Button size="long" type="info">重置</Button>
            </Col>
        </Row>
    </Form>
    </Card>
</template>

<script>
    export default {
        name: "ProjectApp",
        props: {},
        data() {
            return {
                projectApp:{

                }
            }
        },
        computed: {},
        methods: {},
        watch: {}
    }
</script>

<style scoped>
    .project_app_title{
        margin-bottom: 50px;
    }
</style>
