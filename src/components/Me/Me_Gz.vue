<template>
	<div>
			
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
				
				<div class="Me_gFlex">
					<div class="Me_gFlex2">
						<img src="@/assets/Me_GZ.png" alt="">
						<div><h5>推荐关注eytrhththytshy</h5></div>
					</div>
					<div>
						 <img src="@/assets/Me_JT2.png" alt="">
					</div>
				</div>
				
			</div>
			<div class="Me_gFlex">
					<div class="Me_gFlex2">
						<img src="@/assets/Me_GZ.png" alt="">
						<div><h5>推荐关注eytrhththytshy</h5></div>
					</div>
					<div>
						 <img src="@/assets/Me_JT2.png" alt="">
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
</style>