<template>
  <div class="login">

    <h1>{{ msg }}</h1>

    <p>
      请输入用户名和密码登陆
    </p>

    <div><input type="text" placeholder="用户名" /></div>
    <div><input type="password" placeholder="密码" /></div>
    <button @click="login">登录</button>
    <router-link to="/usermanagement">
      <button>用户管理</button>
    </router-link>
    <router-link to="/usermanagement">
      Go to User Management
    </router-link>

  </div>
</template>


<script>
export default {
  name: "Login",
  props: {
    msg: String,
  },

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
