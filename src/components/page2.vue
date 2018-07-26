<template>
    <div class="wb">
        <div class="title">
            <h1>{{ msg }}</h1>
            <h2>wb</h2>
        </div>
        <!--<input type="search" placeholder="搜索" v-model='search' />-->

        <body>
            <input class="input" type="text" placeholder="enter category" v-model='cate' />
            <input class="input" type="text" placeholder="enter information" v-model='info' />
            <el-button type="primary" icon="el-icon-search" size="mini" @click="search(cate,info)">search</el-button>
            <el-button type="primary" size="mini" icon="el-icon-edit" @click="add">add</el-button>
        </body>

        <body>
            <el-table :data="userlist" style="width: 100%" size='mini' min-width="300px" align="center">
                <el-table-column fixed prop="id" label="id" width="180">
                </el-table-column>
                <el-table-column prop="name" label="name" width="180">
                </el-table-column>
                <el-table-column prop="gender" label="gender">
                </el-table-column>
                <el-table-column prop="city" label="city">

                </el-table-column>

            </el-table>
        </body>

        <div class="block">
            <span class="demonstration"></span>
            <el-pagination layout="prev, pager, next" :total="50">
            </el-pagination>
        </div>

        <!--<mo-paging 
            :page-index="currentPage" 
            :totla="count" 
            :page-size="pageSize" 
            @change="pageChange">
            </mo-paging>-->

        <h3>
            <router-link to="/itemlist">Go back</router-link>
        </h3>
    </div>
</template>

<script src="https://unpkg.com/vue"></script>
<script src="app.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>
//import MoPaging from './fenye'
export default {
  name: "page2",
  components: {
    //MoPaging
  },
  data() {
    return {
      msg: "Welcome pagetwo",
      cate: "",
      info: "",
      userlist: [],
      pageSize: 5, //每页显示20条数据
      currentPage: 1, //当前页码
      count: 0, //总记录数
      items: []
    };
  },
  methods: {
    getList() {
      //模拟
      let url = `/api/list/?pageSize=${this.pageSize}&currentPage=${
        this.currentPage
      }`;
      this.$http.get(url).then(({ body }) => {
        //子组件监听到count变化会自动更新DOM
        this.count = body.count;
        this.items = body.list;
      });
    },

    //从page组件传递过来的当前page
    pageChange(page) {
      this.currentPage = page;
      this.getList();
    },

    search: function(category, information) {
      if (category == "" || information == "") {
        this.$ajax({
          method: "get",
          dataType: "json",
          url: "http://localhost:8090/tests/testservlet"
        })
          .then(response => {
            this.userlist = response.data;
            //debugger;
            //alert('hello'+this.userlist);
            //console.log(response.data)
            //alert('已获取数据')
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$ajax({
          method: "get",
          dataType: "json",
          url:
            "http://localhost:8090/tests/testservlet?" +
            category +
            "='" +
            information +
            "'"
        })
          .then(response => {
            this.userlist = response.data;
            //debugger;
            //alert('hello'+this.userlist);
            //console.log(response.data)
            //alert('已获取数据')
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    add: function() {
      this.$router.push("/adddata");
    }
  },
  mounted() {
    this.search("", "");
  }
};
</script>
