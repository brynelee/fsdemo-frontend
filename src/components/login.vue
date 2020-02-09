<template>
    <div class="login">

        <h1>{{ messageTip }}</h1>

        <el-form ref="loginForm" :model="loginFormData" label-width="70px" alignment="center">
            <el-form-item label="用户名">
                <el-input v-model="loginFormData.username" placeholder='请输入用户名'></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="loginFormData.password" @keyup.enter.native="login"
                          placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <router-link to="/registration">
                    <button>注册</button>
                </router-link>
                <el-button type="primary" class="button" @click="login" autofocus>登录</el-button>
            </el-form-item>

        </el-form>

    </div>
</template>


<script>

export default {
    name: "Login",

    props: {
        msg: String
    },

    data() {
        return {
            loginFormData: {
                username: String,
                password: String
            },
            messageTip: '请输入用户名和密码登陆'
        }
    },

    methods: {
        login() {
            let params = {
                'username': this.loginFormData.username,
                'password': this.loginFormData.password
            };
            this.$store.dispatch('Login', params)
                .then(() => {
                    console.log('Login: login page dispatch returned.');
                    //if (this.$store.getters.authStatus == 'success') {
                        console.log('Login: login success, go to user home page.')
                        this.$router.push({path: '/userhome'});
                    //} else {
                    //    this.messageTip = this.$store.getters.authStatus;
                    //}

                })
                .catch((error) => {
                    console.log(error.response);
                });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    el-form {
        vertical-align: middle;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
