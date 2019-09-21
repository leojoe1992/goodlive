<template>
	  <div>
			<div class="main_title">
				<img @click="jump" src="@/assets/Me_Ding.png" alt="">
				<h3>我的积分</h3>
			</div>
			<div style="height:100px;"></div>
			<!-- 积分规则 -->
			<div class="Me-jiFen">
				<div><h1>50</h1></div>
				<div>
					积分规则
					<img src="@/assets/Me_i.png" alt="">
				</div>
			</div>
			<!-- 新手任务 -->
      <div class="scrollbar">
          <h3>新手任务</h3>
					<div class="boxs">
              <div class="box">
                  
							</div>
							<div class="box"></div>
							<div class="box"></div>
							<div class="box"></div>
							<div class="box"></div>
							<div class="box"></div>
					</div>
			</div>
		</div>
</template>
<script>
export default {
	data() {
		return{
     
		}
	},
	methods:{
		jump() {
      this.$router.push('/Me');
		}
	}
}
</script>
<style scoped>
  /*左箭头大小*/
.main_title>img{
   width: 30px;
}
/*我的订单*/
.main_title{
  display: flex;
	height: 60px;
	align-items: center;
	padding-left: 1rem;
	border-bottom: 2px solid #ddd;
	position: fixed;
	z-index: 999;
	width: 100%;
}
/*我的积分样式*/
.main_title>h3{
	padding-left:1.3rem; 
  font-weight:lighter; 
}
.Me-jiFen{
	display: flex;
	justify-content: space-around;
	align-items:center;
	margin-bottom:2rem; 
}/*i的图片*/
.Me-jiFen>div>img{
	width:30px;
	padding-left:0.5rem;
}
.scrollbar>h3{
	padding-left:1rem;
	font-weight: lighter; 
}
/*overflow-x的最外层函数*/
.scrollbar{
	width:100%;
	white-space: nowrap;
	max-width: 1200px;
	min-width:375;
}
/*box的父元素 overflow-x:auto;控制左右滑动*/
.boxs{
	white-space: nowrap;
	overflow-x:auto;
	padding: 0.5rem 1rem;

}
/*盒子*/
.box {
  display: inline-block;
  text-align: center;
  height: 100px;
  width: 200px;
  border:1px solid #ddd;
  margin-top: 0.5rem;
}
/*除了第一个box 其余的都作用*/
.boxs > .box:not(:first-child) {
	margin-left:1rem;
}
</style>