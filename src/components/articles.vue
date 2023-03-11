<template>
  <div class="fromlist">
    <h2>Article列表(by fsdemo-articlenodejs in Nest.JS and Prisma in Node.JS)</h2>
    <div class="filter-container">
      <el-button type="primary" size="small" @click="getArticleList">获取Article列表</el-button>
      <el-button type="primary" size="small" @click="getArticleDraftList">获取Article draft列表</el-button>
    </div>
    <div>
      <el-table :data="articlesData" border style="width: 100%" size="small" align="center">
        <el-table-column align="center" prop="id" label="Article ID" width="50">
        </el-table-column>
        <el-table-column align="center" prop="title" label="Title" width="100">
        </el-table-column>
        <el-table-column align="center" prop="description" label="描述" width="200">
        </el-table-column>
        <el-table-column align="center" prop="body" label="Body" width="500">
        </el-table-column>
        <el-table-column align="center" prop="published" label="published" width="50">
        </el-table-column>
        <el-table-column align="center" prop="createdAt" label="创建于" width="100">
        </el-table-column>
        <el-table-column align="center" prop="updatedAt" label="修改于" width="100">
        </el-table-column>
      </el-table>
    </div>

    <hr/>

    <h2>添加Article</h2>
    <el-form ref="loginForm" :model="articlesNewData" label-width="70px">
      <div>
        <el-form-item class="userinfo_input" label="标题">
          <el-input v-model="articlesNewData.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item class="userinfo_input" label="描述">
          <el-input v-model="articlesNewData.description"  placeholder="请输入描述"></el-input>
        </el-form-item>
        <el-form-item class="userinfo_input" label="内容">
          <el-input v-model="articlesNewData.body"  placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="是否发布" prop="boolean">
          <el-select v-model="articlesNewData.published" placeholder="请选择">
            <el-option label="true" :value="true"></el-option>
            <el-option label="false" :value="false"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="button" @click="addArticle" style="width: 120px">添加Article</el-button>
        </el-form-item>
      </div>
    </el-form>

    <hr/>

    <!--    <router-link to="/login">
          <button>Back to login</button>
        </router-link>
    -->
    <hr/>
    <router-link to="/login">
      <el-button type="primary" class="button" style="width: 120px">回到登录界面</el-button>
    </router-link>
  </div>

</template>

<script>
export default {
  name: "Articles",

  data() {
    return {
      articlesData: [],
      articlesNewData: {
        title: '',
        description: '',
        body: '',
        published: true
      }
    }
  },

  methods: {
    getArticleList() {
      this.axios({
        method: 'get',
        //url: `${this.baseURL}/getuserlist`
        url: '/articles/'
      }).then(resp => {
        console.log(resp.data);
        this.articlesData = resp.data;
      }).catch(error => {
        alert('获取Article列表失败');
        console.log(error);
      });
    },
    getArticleDraftList() {
      this.axios({
        method: 'get',
        //url: `${this.baseURL}/getuserlist`
        url: '/articles/drafts'
      }).then(resp => {
        console.log(resp.data);
        this.articlesData = resp.data;
      }).catch(error => {
        alert('获取Article Draft列表失败');
        console.log(error);
      });
    },
    addArticle() {
      this.axios({
        method: 'post',
        //url: `${this.baseURL}/getuserlist`
        url: '/articles/',
        data: this.articlesNewData
      }).then(resp => {
        console.log(resp.data);
        //this.articlesData = resp.data;
      }).catch(error => {
        alert('添加Article失败');
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