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
								 <h5>完善个人资料</h5>
								 <p>+50</p>
								 <div>
									 <span>去设置</span>
									 <img src="@/assets/Me_JT2.png" alt="">
									 <img src="@/assets/Me_JFW.png" alt="">
								 </div>
							</div>
							<div class="box">
								 <h5>收藏5张图片</h5>
								 <p>+500</p>
								 <div>
									 <span>去收藏</span>
									 <img src="@/assets/Me_JT2.png" alt="">
									 <img src="@/assets/Me_JFS.png" alt="">
								 </div>
							</div>
							<div class="box">
								  <h5>完善个人资料</h5>
								 <p>+50</p>
								 <div>
									 <span>去设置</span>
									 <img src="@/assets/Me_JT2.png" alt="">
									 <img src="@/assets/Me_JFW.png" alt="">
								 </div>
							</div>
							<div class="box">
								  <h5>完善个人资料</h5>
								 <p>+50</p>
								 <div>
									 <span>去设置</span>
									 <img src="@/assets/Me_JT2.png" alt="">
									 <img src="@/assets/Me_JFW.png" alt="">
								 </div>
							</div>
							<div class="box">
								  <h5>完善个人资料</h5>
								 <p>+50</p>
								 <div>
									 <span>去设置</span>
									 <img src="@/assets/Me_JT2.png" alt="">
									 <img src="@/assets/Me_JFW.png" alt="">
								 </div>
							</div>
							<div class="box">
								  <h5>完善个人资料</h5>
								 <p>+50</p>
								 <div>
									 <span>去设置</span>
									 <img src="@/assets/Me_JT2.png" alt="">
									 <img src="@/assets/Me_JFW.png" alt="">
								 </div>
							</div>
					</div>
			</div>
			<!-- 积分明细 -->
			<div>
				<h3>积分明细</h3>
				<div class="ME_flex">
					 <div>
						 <img src="../../assets/Me_DDD.png" alt="">
					 </div>
					 <div>
						 <p>afjhhbjguygyguyguyguys</p>
						 <p>sajhgfbgfhbiuhhiuhiuhuh</p>
					 </div>
					 <div>
						 <h5>+5</h5>
					 </div>
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
h3{
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
.scrollbar > .boxs > .box>div>img{
	width:25px;
}
  /*第二个img*/
.scrollbar img:nth-child(2){
    margin-right: 2.5rem;
		
}
.scrollbar h5,p{
	margin-right: 3.5rem;
}
.scrollbar span{
	font-weight: lighter;
	font-size: 0.9rem;
}
.ME_flex{
   display: flex;
	 align-items:center;
	 justify-content: space-between;
	 width: 100%;
	 border-bottom:1px solid #ddd;
	 padding: 0.5rem 0;
	 border-top:1px solid #ddd;
}
.ME_flex>div>img{
   width:35px;
	 	margin-left:1rem; 
}
.ME_flex>div>p{
	margin-bottom:0rem; 
	margin-right:8rem; 
}
.ME_flex>div>h5{
	padding-right: 1rem;
}
</style>