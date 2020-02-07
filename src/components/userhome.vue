<template>
  <div>
    <h1>Hello {{this.$store.state.user}}</h1>
    <router-link to="/login">
      <button>Back to login</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "UserHome"

}
</script>

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