<template>

  <div class="hello">
    <div class="login">
      <img src="../assets/logo.png">
      <h1>{{msg}}</h1>

      <div class="input-wrapper">

        <p><input class="input" type="text" placeholder="手机号" v-model='valuea' /></p>
      </div>
      <div class="input-wrapper">
        <input class="input" type="password" placeholder="密码" v-model='valuep' />
      </div>
      <button @click="login">logggin</button>
      <!--  <div class="button" @click="login">
          <text>登陆</text>          
        </div> -->

      <!-- <p><router-link to="/test2">log in</router-link></p>-->

    </div>
    <!-- <toast id="toast"></toast>-->
  </div>
</template>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Enter your account and password",
      valuea: "",
      valuep: "",
      zh: [{ ac: 123, ps: 123 }, { ac: 345, ps: 345 }, { ac: 456, ps: 456 }]
    };
  },
  methods: {
    login: function() {
      if (this.checklogin(this.valuea, this.valuep)) {
        alert("登陆成功");
        this.$router.push("/itemlist");
      } else {
        alert("登录失败");
      }
      //this.valuea = this.valuea.split('').reverse().join('')
    },
    checklogin: function(account, password) {
      for (var i = 0; i < this.zh.length; i++) {
        var user = this.zh[i];
        if (user.ac == account && user.ps == password) return true;
      }
      return false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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

button {
  width: 80px;
  height: 30px;
  text-align: center;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(180, 176, 180);
  background-color: rgba(184, 138, 202, 0.2);
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}
</style>
