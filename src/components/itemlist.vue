
<template>
<div class="wb">
    <div class="title">
    <h1>{{ msg }}</h1>
    <h2>wb</h2>
    </div>
    <div class="search">
    <input  class="input" type="search" placeholder="搜索" v-model='values'/>
    <button @click="search">go</button>
    <!--<input type="search" placeholder="搜索" v-model='search' />-->
<body>
    <div class="main">
        
            <table border="1px" width="500px" align="center">           
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>price</td>
                        <td>category</td>
                        <!--<td>info</td>-->
                    </tr>
                    <tr v-for="item in showp" v-bind:key="item.id">
                        <td>{{ item.id  }}</td>
                        <td><router-link :to="'/item/'+item.id">{{item.name}}</router-link></td>
                        <td>{{ item.price  }}</td>
                        <td>{{ item.category  }}</td>
                        <!--<td><button @click="switchchoose(item.id)">信息</button></td>-->
                        <router-view></router-view>
                    </tr>             
            </table>
                

       </div>

</body>
    <input  class="input" type="text" placeholder="enter name" v-model='product.name'/>
    <input  class="input" type="text" placeholder="enter price" v-model='product.price'/>
    <input  class="input" type="text" placeholder="enter category" v-model='product.category'/>
    <button @click="add">add item</button>
    </div>

    <h3>
    <router-link to="/HelloWorld">Go back</router-link>
    <router-link to="/page2">Forword</router-link></h3>
    </div>
</template>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script src="vue.js"></script>


<script>
export default {
  name: 'itemlist',
  data () {
      var products= [{
                id:1,
                name: '苹果',
                price: '25',
                category: "水果",
                choose:false,
                info:""
            }, {
                id:2,
                name: '香蕉',
                price: '15',
                category: "水果",
                choose:false,
                info:""
                //path:"shuiguo2"
            }, {
                id:3,
                name: '雪梨',
                price: '65',
                category: "水果",
                choose:false,
                info:""
                //path:"shuiguo3"
            }, {
                id:4,
                name: '宝马',
                price: '2500',
                category: "汽车",
                choose:false,
                info:""
                //path:"qiche1"
            }, {
                id:5,
                name: '奔驰',
                price: '10025',
                category: "汽车",
                choose:false,
                info:""
                //path:"qiche2"
            }, {
                id:6,
                name: '柑橘',
                price: '15',
                category: "水果",
                choose:false,
                info:""
                //path:"shuiguo4"
            }, {
                id:7,
                name: '奥迪',
                price: '25',
                category: "汽车",
                choose:false,
                info:""
                //path:"qiche3"
            }, {
                id:8,
                name: '火龙果',
                price: '25',
                category: "工具",
                choose:false,
                info:""
                //path:"shuiguo5"
            }]
    return {
      product:{
          id:0,
          name:'',
          price:'',
          category:''
      },
      msg: 'Welcome pageone',
      values:'',
      valuename:'',
      valueprice:'',
      valuecategory:'',
      showp:products,
      products:products,
      //ids:''
        //search:''
    }
  },
  mounted(){
  let routerName = this.$route.name;
  console.log(routerName);

},
  
  /*computed: {
            searchdata: function() {
                var search = this.search;
                if (search) {
                    return this.products.filter(function(product) {
                        return Object.keys(product).some(function(key) {
                            return String(product[key]).toLowerCase().indexOf(search) > -1
                        })
                    })
                }
                //return this.products.choose = true;
                return this.products;
            }
  },*/

  methods:{
      search:function(){
          this.showp = []
          for(var i=0;i<this.products.length;i++){
              
              if(this.products[i].name.indexOf(this.values)!= -1||this.products[i].price.indexOf(this.values)!= -1||this.products[i].category.indexOf(this.values)!= -1)
              this.showp.push(this.products[i])
              //this.products[i].choose = true
              //else
              //this.products[i].choose = false
              
          }
      },
      add:function(){
      this.product.id = this.products.length + 1; 
      this.products.push(this.product); 
      this.product = {
          id:0,
          name:'',
          price:'',
          category:''
      }; 
    }

      
  }
  
}

</script>