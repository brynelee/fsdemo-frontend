<template>
  <div>
    <h1>Welcome to User Home, {{ username }}</h1>
    <h3>state.status {{ authStatus }}</h3>
    <h4>state.token {{ token }}</h4>
    <button @click="logout">退出登录</button>
    <router-link to="/usermanagement">
      <el-button type="primary" class="button" style="width: 120px">管理用户界面</el-button>
    </router-link>
  </div>
</template>

<script>

  //todo: add product list
  //todo: add product order function
  //todo: add asset list
  //todo: add asset sell function

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

    logout() {
        let logoutInfo = {
            username: this.username,
            token: this.token
        };
      this.$store.dispatch('Logout',logoutInfo)
          .then(() => {
              console.log('UserHome: logout dispatch and will back to the default page.');
              this.$router.push({path: '/'});
          })
          .catch((error) => {
              console.log("UserHome: logout dispatch got error: ", error.response);
          });
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