import Vue from 'vue'
import Router from 'vue-router'
import test from "./components/test/test.vue"
import Productsclass from "./components/products/Productsclass.vue"
import Productdetails from "./components/products/Productdetails.vue"
import Productslist from "./components/products/Productslist.vue"
import Home from "./components/Home.vue"
import Decoration from "./components/Decoration.vue"
import Mine from "./components/Mine.vue"


//Me部分订单
import Me from "./components/Me/Me"
import MeDing from "./components/Me/MeDing"
import MeJF from "./components/Me/Me_Jf"
import MeGZ from "./components/Me/Me_Gz"
Vue.use(Router)
export default new Router({
  routes: [
    {path:'/MeG',component:MeGZ},
    {path:'/MeJF',component:MeJF},
    /*Me主组件*/
    {path:'/Me',component:Me},
    {path:'/MeD',component:MeDing},
    {path:'/test',component:test},
    {path:'/',component:Home},
    {path:'/mine',component:Mine},
    {path:'/decoration',component:Decoration},
    {path:'/class',component:Productsclass},
    {path:'/list',component:Productslist},
    {path:'/details',component:Productdetails},
  ]
})
