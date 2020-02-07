<template>
  <div class="login">

    <h1>{{ msg }}</h1>

    <p>
      请输入用户名和密码登陆
    </p>

    <el-form ref="loginForm" :model="loginForm" label-width="70px">
      <el-form-item label="用户名" prop="un">
        <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pw">
        <el-input type="password" v-model="loginForm.password" @keyup.enter.native="login" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="button" @click="login">登录</el-button>
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
      loginForm: {
        username: String,
        password: String
      }
    }
  },

  computed: {

  },

  methods: {
    login() {
      let params = {
        'username': this.loginForm.username,
        'password': this.loginForm.password
      };
      this.$store.dispatch('Login', params)
        .then(() => {
          this.$router.push({ path: '/userhome' });
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
