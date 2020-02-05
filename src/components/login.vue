<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <p>
      请输入用户名和密码登陆
    </p>
    <input type="text" placeholder="用户名"/>
    <input type="text" placeholder="密码"/>
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String
  },
  methods: {
    
    login () {
      this.axios({
        method: 'get',
        url: '/apigetuserlist'
      }).then(resp => {
        console.log(resp.data);
      }).catch(error => {
        alert('获取用户列表失败');
        console.log(error);
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
