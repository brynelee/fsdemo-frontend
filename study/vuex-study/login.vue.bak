<template>
  <div class="login">

    <h1>{{ msg }}</h1>

    <p>
      请输入用户名和密码登陆
    </p>

    <h2>state: the number is {{this.$store.state.changableNum }}</h2>
    <h2>getters: the number is {{$store.getters.getChangedNum }}</h2>
    <h2>mapGetters: the number is {{getChangedNum }}</h2>
    <h2>mapState: the number is {{changableNum }}</h2>
    <h2>getters: the isShow is {{$store.getters.isShow}}</h2>
    <h2>state: messageTo is {{$store.state.messageTo }}</h2>
    <h2>getters: messageTo is {{$store.getters.getMessageTo }}</h2>

    <div><input type="text" placeholder="用户名" /></div>
    <div><input type="password" placeholder="密码" /></div>
    <button @click="addnum">计算</button>
    <button @click="tofalse">hide</button>
    <button @click="changeMessage">换消息</button>
    <router-link to="/usermanagement">
      <button>用户管理</button>
    </router-link>
    <router-link to="/usermanagement">
      Go to User Management
    </router-link>

    <!--     <el-form ref="loginForm" :model="loginForm" label-width="70px" >
    <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password"  @keyup.enter.native="login" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" class="button" @click="login">登录</el-button>
    </el-form-item>
</el-form> -->

  </div>
</template>


<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: "Login",
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters(['getChangedNum']),
    ...mapState({
      changableNum: state => state.changableNum
    }

    )
  },
  methods: {
    addnum() {
      this.$store.dispatch('setNewNum', 10)
    },
    tofalse() {
      this.$store.dispatch('hideFooter')
    },
    changeMessage() {
      this.$store.dispatch('setNewMessage')
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
