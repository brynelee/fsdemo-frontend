<template>
  <div class="fromlist">
    <p>用户信息列表(by fsdemo-usercenter in Java)</p>
    <div class="filter-container">
      <el-button type="primary" size="small" @click="getuserlist">获取用户列表</el-button>
    </div>
    <div>
      <el-table :data="tableData" border style="width: 100%" size="small" align="center">
        <el-table-column align="center" prop="userId" label="用户ID" width="100">
        </el-table-column>
        <el-table-column align="center" prop="username" label="用户名" width="100">
        </el-table-column>
        <el-table-column align="center" prop="userpassword" label="用户密码" width="100">
        </el-table-column>
        <el-table-column align="center" prop="userToken" label="token" width="500">
        </el-table-column>
      </el-table>
    </div>
    <hr/>
    <p>员工信息列表(by emplyservice in Rust</p>
    <div class="filter-container">
      <el-button type="primary" size="small" @click="getEmployeeList">获取员工列表</el-button>
    </div>
    <div>
      <el-table :data="employeeTableData" border style="width: 100%" size="small" align="center">
        <el-table-column align="center" prop="id" label="用户ID" width="100">
        </el-table-column>
        <el-table-column align="center" prop="first_name" label="名" width="100">
        </el-table-column>
        <el-table-column align="center" prop="last_name" label="姓" width="100">
        </el-table-column>
        <el-table-column align="center" prop="department" label="部门" width="200">
        </el-table-column>
        <el-table-column align="center" prop="salary" label="月薪" width="150">
        </el-table-column>
        <el-table-column align="center" prop="age" label="年龄" width="100">
        </el-table-column>
      </el-table>
    </div>
    <hr/>
<!--    <router-link to="/login">
      <button>Back to login</button>
    </router-link>
-->
    <router-link to="/userhome">
      <el-button type="primary" class="button" style="width: 120px">回到用户主界面</el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Usermanagement",
  data() {
    return {
      tableData: [],
      employeeTableData: [],
    }
  },
  methods: {
    getuserlist() {
      this.axios({
        method: 'get',
        //url: `${this.baseURL}/getuserlist`
        url: '/usercenter/getuserlist'
      }).then(resp => {
        console.log(resp.data);
        this.tableData = resp.data;
      }).catch(error => {
        alert('获取用户列表失败');
        console.log(error);
      });
    },
    getEmployeeList(){
      this.axios({
        method: 'get',
        //url: `${this.baseURL}/getuserlist`
        url: '/emplyservice/employees'
      }).then(resp => {
        console.log(resp.data);
        this.employeeTableData = resp.data;
      }).catch(error => {
        alert('获取员工列表失败');
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