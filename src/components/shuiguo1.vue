<template>
<div class="hello">
<img src="../assets/logo.png">
<h1>{{product.name}}</h1>
<h1>{{product.info}}</h1>
<h1>词条：{{id}}</h1>
<h3><router-link to="/itemlist">Go back</router-link></h3>
</div>
</template>


<script>
export default {
  name: 'itemlist',
  data () {
	  var p = this.$route.params.id;
      var products= [{
                id:1,
                name: '苹果',
                price: '25',
                category: "水果",
                choose:false,
                info:"苹果（学名：Malus pumila）是水果的一种，是蔷薇科苹果亚科苹果属植物，其树为落叶乔木。苹果的果实富含矿物质和维生素，是人们经常食用的水果之一。"
            }, {
                id:2,
                name: '香蕉',
                price: '15',
                category: "水果",
                choose:false,
                info:"香蕉（学名：Musa nana Lour.）芭蕉科芭蕉属植物，又指其果实，热带地区广泛种植。香蕉味香、富含营养，植株为大型草本，从根状茎发出，由叶鞘下部形成高3～6公尺(10～20尺)的假杆；叶长圆形至椭圆形，有的长达3～3.5公尺(10～11.5尺)，宽65公分(26寸)，10～20枚簇生茎顶。穗状花序下垂 [1]  ，由假杆顶端抽出，花多数，淡黄色；果序弯垂，结果10～20串，约50～150个。植株结果后枯死，由根状茎长出的吸根继续繁殖，每一根株可活多年。原产亚洲东南部，台湾、海南、广东、广西等均有栽培。"
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
      msg: 'Welcome pageone',
      id:p,
	  product :{},
	  products:products,
      //ids:''
        //search:''
    }
  },
   watch: {
  'id': function (id) {
	// 监听路由变化
	console.log("id="+id);
	this.product = {};
	for(var i = 0; i< this.products.length;i++){
		if(this.products[i].id == id){
			this.product = this.products[i]
			break;
		}
		

	}
    //console.log("router changed");
    //let routerName = this.$route.name;
    //console.log(routerName);
  }
},
mounted(){
  let routerName = this.$route.name;
  console.log(routerName);
  console.log("id="+this.id);
	this.product = {};
	for(var i = 0; i< this.products.length;i++){
		if(this.products[i].id == this.id){
			this.product = this.products[i]
			break;
		}
	}
}

}

</script>



    <style type="text/css">
        .Content-Main{
            max-width: 500px;
            margin: auto;
            margin-top: 50px;
            padding: 20px 30px 20px 30px;
            font: 12px "Helvetica Neue", Helvetica, Arial, sans-serif;
            text-shadow: 1px 1px 1px #FFF;
            border: 1px solid #DDD;
            border-radius: 5px;
            color: #888;
            background: #FFF;
        }
        .Content-Main h1{
            display: block;
            padding: 0px 0px 10px 40px;
            margin: -10px -30px 30px -30px;
            font: 25px "Helvetica Neue", Helvetica, Arial, sans-serif;
            border-bottom: 1px solid #DADADA;
            color: #888;
        }
        .Content-Main h1>span{
            display: block;
            font-size: 11px;
        }
        .Content-Main label{
            display: block;
            margin: 0px 0px 5px;
        }
        .Content-Main label>span{
            float: left;
            width: 20%;
            padding-right: 10px;
            margin-top: 10px;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: bold;
            text-align: right;
            color: #333;
        }
        .Content-Main input[type="text"],.Content-Main textarea{
            width: 70%;
            height: 20px;
            padding: 5px 0px 5px 5px;
            margin-bottom: 16px;
            margin-right: 6px;
            margin-top: 2px;
            line-height: 15px;
            border-radius: 4px;
            border: 1px solid #CCC;
            color: #888;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        }
        .select1{
            width: 71%;
            height: 35px;
            margin-bottom: 16px;
            margin-right: 6px;
            margin-top: 2px;
            line-height: 15px;
            padding: 5px 0px 5px 5px;
            border-radius: 4px;
            border: 1px solid #CCC;
            color: #888;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        }
        .select2{
            width: 13%;
            border-radius: 4px;
            border: 1px solid #CCC;
            color: #888;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        }
        .Content-Main textarea{
            width: 70%;
            height: 100px;
            padding: 5px 0px 0px 5px;
        }
        .button{
            padding: 10px 25px 10px 25px;
            margin-left: 111px;
            border-radius: 4px;
            border:1px solid #CCC;
            background: #FFF;
            color: #333;
        }
        .button:hover{
            color: #333;
            background-color: #EBEBEB;
            border-color: #ADADAD;
        }
    </style>