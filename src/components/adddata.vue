<template>
    <div class="add">
        <h1>Enter your data</h1>

        <body>
            <input class="input" type="text" placeholder="id" v-model='id' />
            <input class="input" type="text" placeholder="name" v-model='name' />
            <input class="input" type="text" placeholder="gender" v-model='gender' />
            <input class="input" type="text" placeholder="city" v-model='city' />
        </body>

        <body>
            <button @click="add">add</button>
            <button @click="cancel">cancel</button>
        </body>
    </div>
</template>
<script>
import qs from "qs";
export default {
  name: "add",
  data() {
    return {
      id: "",
      name: "",
      gender: "",
      city: "",
      password: ""
    };
  },
  methods: {
    cancel: function() {
      this.$router.push("/page2");
    },
    add: function() {
      if (
        this.id == "" ||
        this.gender == "" ||
        this.city == "" ||
        this.name == ""
      ) {
        this.$notify.error({
          title: "Wrong",
          message: "请添加完整数据"
        });
        //alert('请添加完整数据');
      } else if (this.gender != "m" && this.gender != "f") {
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
              password: " ",
              id: this.id,
              gender: this.gender,
              city: this.city,
              name: this.name
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