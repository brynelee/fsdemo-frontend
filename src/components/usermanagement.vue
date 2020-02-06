<template>
  <div class="fromlist">
    <p>用户信息列表</p>
    <div class="filter-container">
      <el-button type="primary" size="small" @click="getuserlist">获取用户列表</el-button>
    </div>
    <div>
      <el-table :data="tableData" border style="width: 100%" size="small" align="center">
        <el-table-column align="center" prop="user_id" label="用户ID" width="100">
        </el-table-column>
        <el-table-column align="center" prop="username" label="用户名" width="100">
        </el-table-column>
        <el-table-column align="center" prop="userpassword" label="用户密码" width="100">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Usermanagement",
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    getuserlist() {
      this.axios({
        method: 'get',
        url: '/apigetuserlist'
      }).then(resp => {
        console.log(resp.data);
        this.tableData = resp.data;
      }).catch(error => {
        alert('获取用户列表失败');
        console.log(error);
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