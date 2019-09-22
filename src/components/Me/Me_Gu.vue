<template>
	<div>
	  <!-- nav部分 -->
     <div class="MeGu_flex1">
			  <div class="MeGu_flex2">
					<router-link :to="'/'">
					<img src="@/assets/Me_Ding.png" alt="">
					</router-link>
					<h3>推荐住友</h3>
				</div>
	      <div><h3>换一换</h3></div>
		 </div>
		 <div style="height:70px;"></div>
		 <!-- 推荐关注的内容 -->
		 <div class="Me_main1">

					<div class="Me_main2">
							<div><h5>已有888人关注</h5></div>
							<mt-button type="primary">关注</mt-button>
					</div>
				
					<div class="Me_main3"> 
						<img src="@/assets/Me_LuFei.png" alt="">
						<h4>JunnyZhang</h4>
					</div>
          <div class="Me_PIC">
						<div><img src="@/assets/Me_gu1.png" alt=""></div>
						<div><img src="@/assets/Me_gu2.png" alt=""></div>
						<div><img src="@/assets/Me_gu2.png" alt=""></div>
					</div>
     </div>
	</div>
</template>
<script>
export default {
	
}
</script>
<style scoped>
/*最外层的父元素*/
  .MeGu_flex1{
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		width: 100%;
		height:60px;
		border-bottom:1px solid #ddd;
	}
	/*二次弹性*/
	.MeGu_flex2{
		display: flex;
		align-items: center;
		justify-content: space-around;
		width:10rem;
	
	}
	
 .MeGu_flex1>.MeGu_flex2 img{
	 width:35px;
 }
 .MeGu_flex1 h3{
    font-weight: lighter;
 }
 /*换一换的文字*/
 .MeGu_flex1>div:nth-child(2)>h3{
	 padding-right: 5rem;
 }
 .Me_main1{
	 width:350px;
	 height:200px;
	 margin: auto;
	 border:1px solid #ddd;
 }
 .Me_main2{
	 display: flex;
	 align-items:center;
	 justify-content: space-around;
	 margin-top:0.5rem;
	 margin-right: 4rem; 
 }
 .Me_main3{
	 display: flex;
	 align-items:center;
	 justify-content:space-around;
	 width:13rem;
 }
 .Me_main3>img{
	 width:50px;
 }
 /*3张图片*/
 .Me_PIC{
	 display: flex;
	 justify-content: space-around;
	 align-items: center;
	 margin-top: 1rem;
 }
 .Me_PIC>div>img{
	 width:110px;
 }
 /*3张图片*/
 .Me_PIC>div>img:not(:first-child){
	 margin-left: 0.5rem;
 }
</style>