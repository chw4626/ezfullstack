<template>
    <div class="wb" :style="{backgroundImage: 'url(' + coverImgUrl + ')', backgroundSize:'contain'}">
        <div class="title">
            <h1>{{ msg }}</h1>
            <h2>wb</h2>
        </div>
        <!--<input type="search" placeholder="搜索" v-model='search' />-->

        <!--<body>
            <input class="input" type="text" placeholder="enter category" v-model='cate' />
            <input class="input" type="text" placeholder="enter information" v-model='info' />
            <el-button type="primary" icon="el-icon-search" size="mini" @click="search(cate,info)">search</el-button>
            <el-button type="primary" size="mini" icon="el-icon-edit" @click="add">add</el-button>
        </body>-->

        <body>

            <el-row :gutter="20">
                <el-col :span="10" :offset="7">
                    <el-input size="mini" clearable placeholder="请输入内容" v-model="info" class="input-with-select">

                        <el-select v-model="select" slot="prepend" clearable placeholder="请选择">
                            <el-option label="编号" value="id"></el-option>
                            <el-option label="姓名" value="name"></el-option>
                            <el-option label="性别" value="gender"></el-option>
                            <el-option label="城市" value="city"></el-option>
                        </el-select>

                        <el-button slot="append" icon="el-icon-search" @click="search(select,info)"></el-button>
                        <el-button slot="append" size="mini" icon="el-icon-edit" @click="add">add</el-button>
                    </el-input>
                </el-col>
            </el-row>
        </body>

        <body>
            <el-row :gutter="50">
                <el-col :span="15" :offset="5">
                    <el-table :data="userlist" border height="350" style="width: 100%" size='mini' align="center">
                        <el-table-column fixed prop="id" label="编号">
                        </el-table-column>
                        <el-table-column prop="name" label="姓名">
                        </el-table-column>
                        <el-table-column prop="gender" label="性别">
                        </el-table-column>
                        <el-table-column prop="city" label="城市">
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">

                                <el-button @click="deleteRow(scope.row)" type="text" size="small">
                                    delete
                                </el-button>

                                <el-popover placement="top" width="160" v-model="visible2">
                                    <p>这是一段内容这是一段内容确定删除吗？</p>
                                    <div style="text-align: right; margin: 0">
                                        <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
                                        <el-button type="primary" size="mini" @click="visible2 = false,deleteRow(scope.row)">确定</el-button>
                                    </div>
                                    <el-button slot="reference" @click="visible2 = true">删除</el-button>
                                </el-popover>

                            </template>
                        </el-table-column>

                    </el-table>
                </el-col>
            </el-row>

        </body>

        <!--<div class="block">
            <span class="demonstration"></span>
            <el-pagination layout="prev, pager, next" :total="50">
            </el-pagination>
        </div>-->

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
import qs from "qs";
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
      select: "",
      visible2: false
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

    deleteRow(index) {
      console.log(index);
      this.$ajax
        .post(
          "http://localhost:8090/tests/testservlet",
          qs.stringify({
            password: " ",
            id: index.id,
            gender: index.gender,
            city: index.city,
            name: index.name,
            edit: "delete"
          })
        )
        .then(response => {
          this.$router.go(0);
          this.$notify({
            title: "Success",
            message: "删除成功",
            type: "success"
          });

          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
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
<style>
.el-col {
  border-radius: 4px;
}
.el-select__tags-text {
  display: inline-block;
  width: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>