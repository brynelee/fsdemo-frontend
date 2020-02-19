<template>
  <div>
    <h1>Welcome to User Home, {{ username }}</h1>
    <h3>state.status {{ authStatus }}</h3>
    <h4>state.token {{ token }}</h4>

      <div>
          <p>产品清单</p>
          <div class="filter-container">
              <el-button type="primary" size="small" @click="getProductlist">获取产品列表</el-button>
          </div>
          <el-table :data="productData" border style="width: 100%" size="small" align="center">
              <el-table-column align="center" prop="product_id" label="产品ID" width="100">
              </el-table-column>
              <el-table-column align="center" prop="product_name" label="产品名称" width="100">
              </el-table-column>
              <el-table-column align="center" prop="total_amount" label="产品总份额" width="100">
              </el-table-column>
              <el-table-column align="center" prop="amount_sold" label="产品已售份额" width="100">
              </el-table-column>
              <el-table-column align="center" prop="institution_code" label="机构编码" width="100">
              </el-table-column>
              <el-table-column align="center" prop="category" label="产品一级分类" width="100">
              </el-table-column>
              <el-table-column align="center" prop="unit_price" label="产品份额单价" width="100">
              </el-table-column>
              <el-table-column align="center" prop="dynamicPrice" :formatter="formatBoolean" label="是否动态价格" width="100">
              </el-table-column>
              <el-table-column align="center" prop="description" label="产品说明" width="100">
              </el-table-column>
          </el-table>
      </div>

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

    data() {
        return {
            productData: []
        }
    },

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

      getProductlist() {
          console.log("userhome: getProductList called ...");
          this.axios({
              method: 'get',
              url: '/tas/products'
          }).then(resp => {
              console.log(resp.data);
              this.productData = resp.data;
          }).catch(error => {
              alert('获取产品列表失败');
              console.log(error);
          });
      },

    logout() {
          console.log("userhome: logout called...");
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
    },

      /*布尔值格式化：cellValue为后台返回的值*/
      formatBoolean: function (row, column, cellValue) {
          var ret = ''  //你想在页面展示的值
          if (cellValue) {
              ret = "是"  //根据自己的需求设定
          } else {
              ret = "否"
          }
          return ret;
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