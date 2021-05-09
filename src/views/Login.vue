<template>
    <div class="contra">
    <Col class="login" :xl="{offset:9,span:6}">
        <Card >
            <Form  label-position="left" :label-width="60">
            <Row>
                <Col :xl="{offset:3,span:20}">
                    <FormItem>
                        <h1>OA管理系统</h1>
                    </FormItem>

                </Col>
            </Row>
            <Row >
                <Col :xl="{offset:2,span:20}">
                    <FormItem label="用户名:">
                        <Input v-model="username" clearable></Input>
                    </FormItem>
                    <FormItem label="密码:">
                        <Input type="password" v-model="password" password></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col :xl="16">
                    <FormItem>
                        <Col :xl="22">
                            <Input type="text" placeholder="请输入验证码"  >
                                <span slot="prepend">验证码:</span>
                            </Input>
                        </Col>
                    </FormItem>
                </Col>
                <Col :xl="8">
                    <img :src="imgCode"/>
                </Col>
                </Row>
            <Row>
                <Col>
                    <FormItem>
                        <Button size="small" type="info">忘记密码?</Button>
                        <Checkbox v-model="single" style="margin-left: 30%">记住密码</Checkbox>
                    </FormItem>
                </Col>
            </Row>

            <Row>
                <Col :xl="20">
                    <FormItem>
                        <Button type="success" long @click="onSubmit">
                            <div>登录</div>
                        </Button>
                    </FormItem>

                </Col>
            </Row>
            </Form>
        </Card>
    </Col>
    </div>
</template>

<script>
    import api from "../api/api";
    import store from "../store";
    import routers from "../router/routers";
    import {menuRouterHandle} from "../utils/util";
    import {router} from "../router";

    export default {
        name: "Login",
        props: {},
        data() {
            return {
                username:'songjing3',
                password:'songjing3!',
                single:false,
                result:"",
                imgCode:"",

            }
        },
        computed: {
            /*getMenu(){
                return this.$store.state.routersVuex.routers
            },*/
        },
        beforeRouteEnter(to,from,next){
            next(vm => {
                // 通过 `vm` 访问组件实例
                api.getImgCode().then(
                    res=>{
                        /*vm.imgCode=res*/
                        const img = btoa(
                            new Uint8Array(res).reduce(
                                (data, byte) => data + String.fromCharCode(byte), "")
                        );
                        vm.imgCode = "data:image/png;base64," + img;
                    },
                    rej=>{
                        console.log(rej)
                    }
                )
            })
        },
        methods: {
            onSubmit(){

                // //查询登录账户密码
                // console.log(api.login(this.username, this.password));
                // api.login(this.username,this.password).then(res=>{
                //     if (res){
                //         this.$router.push("/home")
                //     }
                // })
                //查询登录员工的信息

                sessionStorage.setItem("username",this.username)
                this.$router.push("/home")

            }
        },
        watch: {},
        actions:{

        },

    }
</script>

<style scoped>
    .contra{
        background-color: #adc6ff;
    }
    .login{
        padding-top: 10%;

    }
</style>
