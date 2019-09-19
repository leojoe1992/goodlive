<template>
  <div class="container">
    <van-swipe @change="onChange" indicator-color="red">
      <van-swipe-item v-for="i of 5" :key="i">
        <div class="swiper">{{i}}</div>
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">{{ current + 1 }}/5</div>
    </van-swipe>
		<div class="explain">
			<p>品牌</p>
			<p>代理费卡加斯代理费看见爱上代理费卡萨丁的发送到发送到发大师从大V阿斯分公司的分公司的分公司</p>
			<p><span >￥</span>1188-4567</p>
		</div>
		<div>
			shaitu
		</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      list:[],
      id:"",
      detail:""
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    // 获取商品详情数据
    getDetail(e){
      // 路径url
      var url="detail";
      //商品id
      var id=this.id;
      this.axios.get(url,{pramas:{id}})
      .then(res=>{
        console.log(res);
        this.detail=res.data.data;
      })
    }
  }
};
</script>
<style scope>
.swiper {
  height: 200px;
  border: 1px solid red;
}
.custom-indicator {
  position: absolute;
  right: 15px;
  bottom: 15px;
  padding: 0 10px;
  color: #fff;
  font-size: 10px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
}
.explain{
	padding: 0.5rem;
}
.explain p:first-child{
	font-size: 10px;
	margin: 0;
}
.explain p+p{
	color: #000;
	margin: 0 0 2px;
}
.explain p:last-child{
	color: rgb(206, 39, 9);
	font-size: 16px;
}
.explain span{
	font-size: 6px;
}

</style>