<template>
	<div>
			<!-- ME-NAV -->
     <div class="Me_nav"> 
       <div>
			  <img @click="jump" src="@/assets/Me_Ding.png" alt="">
			</div>

			<div>
				<ul class="Me_nav_item">
					<li @click="change(0)">关注
            <ul><li :class="{black:show1}">2</li></ul>
					</li>
						<li @click="change(1)">被关注
            <ul><li :class="{black:show2}">0</li></ul>
					</li>
				</ul>
			</div>

		</div>
		<div style="height:70px;"></div>
    <!-- 关注的内容 -->
		  <div v-if="show1">
				<!-- 推荐关注 -->
			
				<router-link :to="'/MeGu'" class="Me_gFlex">
					<div class="Me_gFlex2">
						<img src="@/assets/Me_GZ.png" alt="">

						<div class="GZ_text"><h5>推荐关注</h5></div>
					</div>
					<div>
						 <img src="@/assets/Me_JT2.png" alt="">
					</div>
				</router-link>
					
       <!-- 官方 -->
				<div class="Me_gFlex">
					<div class="Me_gFlex2">
						<img class="Me_Tx" src="@/assets/Me_02.png" alt="">

						<div class="GZ_text">
							 
							<h5>好好住
								<img class="Me_v" src="@/assets/Me_V.png" alt="">
							</h5>
							<h5>北京&nbsp;&nbsp;朝阳</h5>
						</div>
					</div>
					<div>
						 <img src="@/assets/Me_JT2.png" alt="">
					</div>
				</div>
      <!-- 星探 -->
         <div class="Me_gFlex">
					<div class="Me_gFlex2">
						<img class="Me_Tx" src="@/assets/Me_LuFei.jpg" alt="">

						<div class="GZ_text">
							 
							<h5>好好住星探
								<img class="Me_v" src="@/assets/Me_V.png" alt="">
							</h5>
							<h5>北京&nbsp;&nbsp;朝阳</h5>
						</div>
					</div>
					<div>
						 <img src="@/assets/Me_JT2.png" alt="">
					</div>
				</div>

			</div>
		
			
			 <div v-if="show2">
			  4545645656
			</div>
	</div>
</template>
<script>
export default {
	data() {
		return{
			show1:true,
			show2:false 
		}
	},
	methods:{
		jump() {
			this.$router.push('/Me');
		},
	  change(i) {
       if(i==0) {
				 this.show1=true;
				 this.show2=false;
			 }else{
				 this.show1=false;
				 this.show2=true;
			 }
		},
	}
}
</script>
<style scoped>
.GZ_text>h5>.Me_v{
	width: 1.3rem;
	margin-left:0rem; 
}
/*图片大小*/
 .Me_nav img{
	 width: 30px;
	 margin-left:1rem;
 }
 /*nav的外层父元素*/
 .Me_nav{
	 display: flex;
	 align-items: center;
	 width: 100%;
	 height: 70px;
	 border-top:1px solid #ddd;
	 border-bottom:1px solid #ddd;
	 position: fixed;  /*固定定位*/
	 z-index: 999;
 }
 /*二次弹性[关注]*/
 .Me_nav_item{
	 display: flex;
	 justify-content: space-around;
	 width: 280px;
	 text-align:center;
 }
 ul>li{
	 font-size: 1.3rem;
	 margin-top:0.5rem;
 }
 .Me_nav_item >li>ul>li.black{
	 border-bottom: 1px solid #414141;
	 padding-bottom:0.5rem;
	 color: gray;
 }
 /*关注的内容*/
 .Me_gFlex>div>img{
	 width: 35px;
	 border-radius: 0.3rem;
 }
 /*头像圆型*/
 .Me_gFlex>div>img.Me_Tx{
  border-radius: 1rem;
 }
 
 .Me_gFlex{
	 display:flex;
   justify-content: space-around;
	 align-items: center;
	 width: 100%;
	 height: 60px;
	 border:1px solid #ddd;
 }
 .Me_gFlex2{
	 display: flex;
	 align-items: center;
	 justify-content: space-around;
	 width: 200px;
 }
 .GZ_text{
	 width:8rem;
 }
 
</style>