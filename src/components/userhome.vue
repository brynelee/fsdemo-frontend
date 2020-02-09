<template>
  <div>
    <h1>Welcome to User Home, {{ username }}</h1>
    <h1>state.status {{ authStatus }}</h1>
    <h1>state.token {{ token }}</h1>
    <button @click="showInfo(user)">show user</button>
    <router-link to="/login">
      <button>Back to login</button>
    </router-link>
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

export default {

  name: "UserHome",

  computed: {
    ...mapState([
      'token'
    ]),
    ...mapGetters([
      'authStatus',
      'username'
    ])
  },

  methods: {

    showInfo: function(message){
      alert(message);
    }

  }

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