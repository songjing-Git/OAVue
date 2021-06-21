<template>
    <div>
        <Row :gutter="20">
            <Col :xl="{span:18}">
                <Row :gutter="20">

                    <Col :xl="{span:10}">
                        <Card>
                            <p slot="title">个人信息</p>
                            <div class="main_break_img">
                                <Avatar class="main_img" size="100">{{getUserInfo.staffName.substr(0,1)}}</Avatar>
                            </div>
                            <div>
                                姓名:{{getUserInfo.staffName}}
                            </div>
                            <div>
                                所属部门:{{getUserInfo.departName}}
                            </div>
                            <div>
                                本月工作时长:30小时
                            </div>
                            <div>
                                岗位:{{getUserInfo.jobLevelName}}
                            </div>
                        </Card>
                    </Col>
                    <Col :xl="{span:14}">
                        <Card>
                            <p slot="title">公告</p>
                            <Collapse  accordion simple>
                                <Panel name="1">
                                    史蒂夫·乔布斯
                                    <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
                                </Panel>
                                <Panel name="2">
                                    斯蒂夫·盖瑞·沃兹尼亚克
                                    <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                                </Panel>
                                <Panel name="3">
                                    乔纳森·伊夫
                                    <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                                </Panel>
                                <Panel name="4">
                                    史蒂夫·乔布斯
                                    <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
                                </Panel>
                                <Panel name="5">
                                    斯蒂夫·盖瑞·沃兹尼亚克
                                    <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                                </Panel>
                                <Panel name="6">
                                    乔纳森·伊夫
                                    <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                                </Panel>
                            </Collapse>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <div class="main_gutter">
                            <Card>
                                <p slot="title">公司盈亏图</p>
                                <div id="myChart" :style="{width:'900px', height:'500px'}"></div>
                                <div id="chart2" :style="{width:'900px', height:'500px'}"></div>
                            </Card>
                        </div>

                    </Col>
                </Row>
            </Col>

            <Col :xl="{span:6}">
                <Card>
                    <p slot="title">绩效排行榜top10</p>
                    <List item-layout="vertical">
                        <ListItem v-for="item in performanceList" :key="item.staff_id">
                            <ListItemMeta :avatar="item.avatar" :title="item.staffName" :description="item.description" />
                            绩效考核分:{{item.Performance_score}}
                        </ListItem>
                        <template slot="extra">

                        </template>
                    </List>
                </Card>
            </Col>
        </Row>
         <Divider orientation="center" :dashed="true">
            <br>
            <p>songjing@湖南城市学院-信息与计算科学</p>
            <a href="http://beian.miit.gov.cn">湘ICP备2021000328号</a>
        </Divider>
    </div>

</template>

<script>
    import api from "../api/api";

    export default {
        name: "MainView",
        components: {},
        props: {},
        data() {
            return {
                performanceList:[],

            }
        },

        beforeRouteEnter(to,from,next){
            next(vm => {
                api.performanceList().then(
                    resolve=>{
                        vm.performanceList=resolve
                    },
                    rej=>{
                        alert(rej)
                    }
                )
            })
        },
        computed: {
            getUserInfo () {
                return this.$store.state.user.user
            },
        },
        methods: {

            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    title: { text: '季度盈利图' },
                    tooltip: {},
                    xAxis: {
                        data: ["第一季度","第二季度","第三季度","第四季度"]
                    },
                    yAxis: {},
                    series: [{
                        name: '盈利',
                        type: 'bar',
                        data: [5, 20, 36, 15]
                    }]
                });
            },
            drawLine2(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('chart2'))
                // 绘制图表
                myChart.setOption({
                    title: { text: '季度支出图' },
                    tooltip: {},
                    xAxis: {
                        data: ["第一季度","第二季度","第三季度","第四季度"]
                    },
                    yAxis: {},
                    series: [{
                        name: '支出',
                        type: 'bar',
                        data: [5, 20, 36, 15]
                    }]
                });
            }
        },
        watch: {},
        mounted() {
            this.drawLine();
            this.drawLine2()
        }
    }
</script>

<style scoped>
    .main_break_img{

        margin-left: 150px;
        width: 200px;
        height: 200px;
        background-image: url("../assets/logo.png");
    }
    .main_img{
        margin-top: 100px;
        margin-left: 50px;
        color: #f56a00;
        background-color: #fde3cf;
    }
    .main_gutter{
        margin-top: 20px;
    }
</style>
