import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import itemlist from '@/components/itemlist'
import apple from '@/components/shuiguo1'
import banana from '@/components/page2'
import pear from '@/components/adddata'
import Axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'


Vue.use(Router)
Vue.prototype.$ajax=Axios
Vue.use(qs)
Vue.use(ElementUI);
Vue.use(ElementUI, { locale })

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/itemlist',
      name: 'itemlist',
      component: itemlist
    },
    {
      path: '/page2',
      name: 'page',
      component: banana
    },
    {
      path: '/item/:id',
      name: 'item',
      component: apple
    }
    ,
    {
      path: '/adddata',
      name: 'data',
      component: pear
    }
  ],
  
  mode: 'history'
})
