import Vue from 'vue'
import Router from 'vue-router'
import test from "./components/test/test.vue"
import Productsclass from "./components/products/Productsclass.vue"
import Productdetails from "./components/products/Productdetails.vue"
import Productslist from "./components/products/Productslist.vue"
import Home from "./components/Home.vue"
import Decoration from "./components/Decoration.vue"
import Mine from "./components/Mine.vue"
Vue.use(Router)
export default new Router({
  routes: [
    {path:'/test',component:test},
    {path:'/',component:Home},
    {path:'/mine',component:Mine},
    {path:'/decoration',component:Decoration},
    {path:'/class',component:Productsclass},
    {path:'/list',component:Productslist},
    {path:'/details',component:Productdetails},
  ]
})
