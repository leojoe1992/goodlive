<template>
	<div>
		<van-tabs v-model="active" swipeable animated>
  <van-tab v-for="index in list" :title=" index" :key="index">
		<!-- 显示数据 -->
		<div class="nav" @click="select">
			<div class="nav_left">
				<div  :class="show=='default'?'sel':''" data-show="default">默认</div>
				<div  :class="show=='lat'?'sel':''" data-show="lat">最新</div>
			</div>
			<div class="nav_right" :class="show=='screen'?'sel':''" data-show="screen"  >
				筛选
			</div>
		</div>
		<!-- 商品列表 -->
		<list :p="index"></list>
		
  </van-tab>
</van-tabs>
	</div>
</template>
<script>
import list from "./search_list.vue"
	export default{
		components:{
			list
		},
		data(){
			return{
				active:3,
				list:["全部","沙发","床","桌子","柜子","茶几","架子","椅子","凳子","屏风"],
				show:"default",
				p:[]
			}
		},
		methods: {
			//点击确定显示是默认还是最新内容
			select(e){
				var act=e.target.dataset.show;
				//默认
				if(act=="default"){
					this.show="default";
					//最新
				}else if(act=="lat"){
						this.show="lat";
						//筛选
				}else if(act=="screen"){
					this.show="screen";
					console.log(1)
				}
				console.log(e.target.dataset)
			},

		},
		
	}

</script>
<style>
	.nav {
		display: flex;
		justify-content: space-between;
		padding:1rem;
		color: #7d7e80;
	}
	.nav_left{
		width: 50%;
		display: flex;
		justify-content: space-around;
	}
	.nav .sel{
		color: #000;
	}
	.nav_right {
		text-align:right;
	}
	.nav_right::after{
		content: "";
		width:18px;height:18px;
		margin-bottom:-3px;
		display: inline-block;
		background-image: url("../../assets/screen.png");
		background-size:contain;
	}
	.nav_right.sel::after{
		background-image: url("../../assets/screen_sel.png");
	}


</style>