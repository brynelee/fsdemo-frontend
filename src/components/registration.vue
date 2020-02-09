<template>
    <div class="registration">
        <h1>Registration Page</h1>

        <p>
            请输入用户名和密码注册
        </p>

        <el-form ref="loginForm" :model="registerFormData" label-width="70px" alignment="center">
            <el-form-item label="用户名">
                <el-input v-model="registerFormData.username" placeholder='请输入用户名'></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="registerFormData.password1" @keyup.enter.native="register" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="输入密码">
                <el-input type="password" v-model="registerFormData.password2" @keyup.enter.native="register" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="button" @click="register" style="width: 120px; margin-right: 50px">注册</el-button>
                <router-link to="/">
                    <el-button type="primary" class="button" style="width: 120px; margin-right: auto">回到登录界面</el-button>
                </router-link>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
    export default {
        name: "Registration",
        data() {
          return {
              registerFormData: {
                  username: '',
                  password1: '',
                  password2: ''
              }
          }
        },
        methods: {
            register(){
                //todo: complete the register procedures

            }
        }
    }
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    .registration {
        alignment: center;
        width: 500px;
        margin-left: auto;
        margin-right: auto;

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