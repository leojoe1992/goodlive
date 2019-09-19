import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from "mint-ui"
import'mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.use(VueMaterial)
Vue.use(MintUI)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

//配置axios
import axios from "axios"
// 配置请求时保存session信息
axios.defaults.withCredentials==true;
// 基础路径
axios.defaults.baseURL="http://127.0.0.1:8080/"
// 注册
Vue.prototype.axios=axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
