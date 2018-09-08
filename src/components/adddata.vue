<template>
    <div class="add">
        <h1>Enter your data</h1>

        <!--<body>
            <input class="input" type="text" placeholder="id" v-model='id' />
            <input class="input" type="text" placeholder="name" v-model='name' />
            <input class="input" type="text" placeholder="gender" v-model='gender' />
            <input class="input" type="text" placeholder="city" v-model='city' />
        </body>

        <body>
            <button @click="add">add</button>
            <button @click="cancel">cancel</button>
        </body>-->

        <el-form ref="form" :model="form" label-width="500px" label-position="center">
            <el-form-item label="编号">
                <el-col :span="10">
                    <el-input v-model="form.id" size="small"></el-input>
                </el-col>
            </el-form-item>

            <el-form-item label="姓名">
                <el-col :span="10">
                    <el-input v-model="form.name" size="small"></el-input>
                </el-col>
            </el-form-item>

            <el-form-item label="城市">
                <el-col :span="10">
                    <el-input v-model="form.city" size="small"></el-input>
                </el-col>
            </el-form-item>

            <el-form-item label="性别">
                <el-col :span="10">
                    <el-radio-group v-model="form.gender">
                        <el-radio label="Male"></el-radio>
                        <el-radio label="Female"></el-radio>
                    </el-radio-group>
                </el-col>
            </el-form-item>

            <el-form-item>
                <el-tooltip content="Add new data" placement="top">
                <el-button type="primary" @click="dialogFormVisible = true">立即创建</el-button>
                </el-tooltip>
                <el-tooltip content="Cancel" placement="top">
                <el-button @click="cancel">取消</el-button>
                </el-tooltip>
            </el-form-item>
        </el-form>

        <el-dialog title="填写密码" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="密码" :label-width="formLabelWidth">
                    <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="add">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>
<script>
import qs from "qs";
export default {
  name: "add",
  data() {
    return {
      
      form: {
        id: "",
        name: "",
        city: "",
        gender: "",
        password: ""
      },
      dialogFormVisible: false
    };
  },
  methods: {
    cancel: function() {
      this.$router.push("/page2");
    },
    add: function() {
      if (
        this.form.id == "" ||
        this.form.gender == "" ||
        this.form.city == "" ||
        this.form.name == ""
      ) {
        this.$notify.error({
          title: "Wrong",
          message: "请添加完整数据"
        });
        //alert('请添加完整数据');
      } else if (this.form.gender != "Male" && this.form.gender != "Female") {
        this.$notify.error({
          title: "Wrong",
          message: "请添加正确数据"
        });
        //alert('请添加正确数据');
      } else {
        //alert(event.target.innerText)
        this.$ajax
          .post(
            "http://localhost:8090/tests/testservlet",
            qs.stringify({
              password: this.form.password,
              id: this.form.id,
              gender: this.form.gender,
              city: this.form.city,
              name: this.form.name,
              edit: "add"
            })
          )
          .then(response => {
            open();
            this.$notify({
              title: "Success",
              message: "添加成功",
              type: "success"
            });
            //alert('添加成功');
            this.$router.push("/page2");
            console.log(response);
          })
          .catch(error => {
            this.$notify.error({
              title: "Wrong",
              message: "请添加正确数据"
            });
            //alert('请添加正确数据')
            console.log(error);
          });
      }
      /*this.$ajax({
                method:'post',
                url:'http://localhost:8090/tests/testservlet',
                data:{
                    

                },
                dataType:'json',
                
            }).then(response=>{
                alert('添加成功！');
            this.$router.push('/page2')
            }).catch(err=>{
                alert('请添加正确数据')
            })*/
    }
  }
};
</script>
<style>
.el-select__tags-text {
  display: inline-block;
  width: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
