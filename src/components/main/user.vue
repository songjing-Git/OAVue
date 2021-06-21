<template>
    <div class="user-avator-dropdown">
        <Dropdown @on-click="handleClick">
            <Avatar class="avater" >{{getStaffName}}</Avatar>
            <Icon :size="18" type="md-arrow-dropdown"></Icon>
            <DropdownMenu slot="list">
                <DropdownItem name="updateUserInfo">修改个人信息</DropdownItem>
                <DropdownItem name="logout">退出登录</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>

<script>
    export default {
        name: "user",
        props: {
            userAvator: {
                type: String,
                default: ''
            }
        },
        data() {
            return {}
        },
        computed: {
            getStaffName () {
                return this.$store.state.user.user.staffName
            },
        },
        methods: {
            handleClick (name) {
                switch (name) {
                    case 'logout':
                        /*this.handleLogOut().then(() => {
                            this.$router.push({
                                name: 'login'
                            })
                        })*/
                        sessionStorage.clear()
                        this.$router.push("/login")
                        break
                    case 'updateUserInfo':
                        this.$router.push("/updateUserInfo")
                        break
                }
            }
        },
        watch: {}
    }
</script>

<style scoped>
    .user-avator-dropdown {
        cursor: pointer;
        display: inline-block;
        vertical-align: middle;
    }
    .avater{
        color: #f56a00;
        background-color: #fde3cf;
    }
</style>
