<template>
  <div>
    <mt-tab-container class="page-container" v-model="active">
      <mt-tab-container-item id="home">
        <ft></ft>
      </mt-tab-container-item>

      <mt-tab-container-item id="brush"></mt-tab-container-item>
      <mt-tab-container-item id="add">第三页</mt-tab-container-item>
      <mt-tab-container-item id="shopping">
        <product></product>
      </mt-tab-container-item>
      <mt-tab-container-item id="me">
        <transition mode="out-in">
          <me></me>
        </transition>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="active" fixed>
      <mt-tab-item id="home" @click.native="changeState(0)">
        <tabbaricon
          :selectedImage="require('../assets/homeg.png')"
          :normalImage="require('../assets/home.png')"
          :focused="currentIndex[0].isSelect"
        ></tabbaricon>
        <span class="bartxt">首页</span>
      </mt-tab-item>
      <mt-tab-item id="brush" @click.native="changeState(1)">
        <tabbaricon
          :normalImage="require('../assets/brush.png')"
          :selectedImage="require('../assets/brushg.png')"
          :focused="currentIndex[1].isSelect"
        ></tabbaricon>
        <span class="bartxt">装修</span>
      </mt-tab-item>
      <mt-tab-item id="add" @click.native="changeState(2)">
        <img id="addicon" src="../assets/add.png" alt />
      </mt-tab-item>
      <mt-tab-item id="shopping" @click.native="changeState(3)">
        <tabbaricon
          :normalImage="require('../assets/shopping.png')"
          :selectedImage="require('../assets/shoppingg.png')"
          :focused="currentIndex[3].isSelect"
        ></tabbaricon>
        <span class="bartxt">购物</span>
      </mt-tab-item>
      <mt-tab-item id="me" @click.native="changeState(4)">
        <tabbaricon
          :normalImage="require('../assets/me.png')"
          :selectedImage="require('../assets/meg.png')"
          :focused="currentIndex[4].isSelect"
        ></tabbaricon>
        <span class="bartxt">我</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import Tablebaricon from "./Tablebaricon";
import Firsttab from "./Firsttab";
//Me部分
import Me from "./Me/Me";
import shopping from "./products/Productsclass"
export default {
  data() {
    return {
      //面板中显示子组件id
      active: "home",
      //创建数组保存图片焦点状态
      currentIndex: [
        { isSelect: true },
        { isSelect: false },
        { isSelect: false },
        { isSelect: false },
        { isSelect: false }
      ]
    };
  },
  methods: {
    changeState(n) {
      //函数功能:将当前参数下标
      //对应数组值修改true其它修改false
      //1:创建循环,循环数组中内容
      for (var i = 0; i < this.currentIndex.length; i++) {
        //2:判断如果循环下标与n相等 20
        if (n == i) {
          //3:当前下标元素true 10:22
          this.currentIndex[i].isSelect = true;
        } else {
          //4:其它元素修改false
          this.currentIndex[i].isSelect = false;
        }
      }
    }
  },
  components: {
    tabbaricon: Tablebaricon,
    ft: Firsttab,
    //Me部分
    me: Me,
    product:shopping
  }
};
</script>
<style scoped>
.mint-tabbar.is-fixed {
  height: 70px;
}
#addicon {
  margin-top: 3px;
  width: 45%;
}
.mint-tabbar > .mint-tab-item {
  color: #999999;
  padding-top: 12px;
}

/*修改默认tab选中文字样式*/
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: transparent;
  color: #57b4b4;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(150px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>