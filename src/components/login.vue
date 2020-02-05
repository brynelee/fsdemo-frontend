<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <p>
      请输入用户名和密码登陆
    </p>
    <form action="http://ubuntu:8080/getuserlist" method="get"></form>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String
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
