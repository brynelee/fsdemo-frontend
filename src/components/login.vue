<template>
    <div class="login">

        <h1>{{ messageTip }}</h1>

        <el-form ref="loginForm" :model="loginFormData" label-width="70px">
            <div>
            <el-form-item class="userinfo_input" label="用户名">
                <el-input v-model="loginFormData.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item class="userinfo_input" label="密码">
                <el-input type="password" v-model="loginFormData.password" @keyup.enter.native="login"
                          placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <router-link to="/registration">
                    <el-button type="primary" class="button" style="width: 120px; margin-right: 50px">注册</el-button>
                </router-link>
                <el-button type="primary" class="button" @click="login" style="width: 120px">登录</el-button>
                <router-link to="/articlesManagement">
                  <el-button type="primary" class="button" style="width: 120px; margin-right: 50px">到Articles页面</el-button>
                </router-link>
            </el-form-item>
            </div>
            <div>
                <button class="button" @click="loginAuthsrv" style="width: 120px">三方登录</button>
            </div>
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
                username: '',
                password: ''
            },
            messageTip: '请输入用户名和密码登陆',
            authURL: "/oauth/authorize?client_id=fsdemo-frontend&redirect_uri=http://fsdemo-usercenter:8081/usercenter/auth&response_type=code&scope=all&state=fsdemo-frontend",
            authURL1: "http://localhost:8084/oauth/authorize?client_id=fsdemo-frontend&redirect_uri=http://fsdemo-usercenter:8081/usercenter/auth&response_type=code&scope=all&state=fsdemo-frontend",
            thirdurl: "http://www.baidu.com"
        }
    },

    methods: {
        login() {
            if(this.loginFormData.username == '' || this.loginFormData.password == ''){
                alert("请输入用户名和密码.");
            }else{
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
        },

        loginAuthsrv(){
            //window.location.href="http://fsdemo-authsrv:8084/oauth/authorize?client_id=fsdemo-frontend&redirect_uri=http://fsdemo-usercenter:8081/usercenter/auth&response_type=code&scope=all&state=fsdemo-frontend";
            //window.open("http://fsdemo-authsrv:8084/oauth/authorize?client_id=fsdemo-frontend&redirect_uri=http://fsdemo-usercenter:8081/usercenter/auth&response_type=code&scope=all&state=fsdemo-frontend");
            window.location.href = this.authURL;
            //this.$router.push('/oauth');
            //window.location.href = this.thirdurl;
        },

    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    .login {
        alignment: center;
        width: 500px;
        margin-left: auto;
        margin-right: auto;

    }
    /*
    .userinfo_input {

        width: 500px;
        alignment: center;

    }*/

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
