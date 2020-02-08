<template>
    <div>
        <h1>Registration Page</h1>

        <p>
            请输入用户名和密码注册
        </p>

        <el-form ref="loginForm" :model="registerFormData" label-width="70px" alignment="center">
            <el-form-item label="用户名">
                <el-input v-model="registerFormData.username" placeholder='请输入用户名'></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="registerFormData.password" @keyup.enter.native="register" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="button" @click="register">注册</el-button>
                <router-link to="/">
                    <button>回到登陆界面</button>
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
                  username: String,
                  password: String
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

</style>