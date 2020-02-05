<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <login msg="欢迎来到 fsdemo" />
  </div>
</template>

<script>
import Login from './components/login.vue'

export default {
  name: 'app',
  components: {
    Login
  }
}
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
