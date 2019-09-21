<template>
	<div>
    <div class="my_fixed">
			<div class="main_title">
				<img @click="jump" src="@/assets/Me_Ding.png" alt="">
				<h3>我的订单</h3>
			</div>

			<div class="title_text">
				<ul>
					<li :class="{Yollow:show1}" @click="change(0)">全部</li>
					<li :class="{Yollow:show2}" @click="change(1)">代付款</li>
					<li :class="{Yollow:show3}" @click="change(2)">待发货</li>
					<li :class="{Yollow:show4}" @click="change(3)">待收货</li>
					<li :class="{Yollow:show5}" @click="change(4)">待评分</li>
				</ul>
			</div>
    </div>
    <div style="height:110px;"></div>
				<div v-if="show1" class="show1">
				 51515445645
					<div class="main_Dear">
              <img src="@/assets/Me_WB.png" alt="">
						  <p>没有相关的订单</p>
					</div>
				</div>
				<div v-if="show2" class="show2">
					56156154
					<div class="main_Dear">
              <img src="@/assets/Me_WB.png" alt="">
						  <p>没有相关的订单</p>
					</div>
				</div>
				<div v-if="show3" class="show3">
					15145656
					<div class="main_Dear">
              <img src="@/assets/Me_WB.png" alt="">
						  <p>没有相关的订单</p>
					</div>
				</div>
				<div v-if="show4" class="show4">
					56516515
					<div class="main_Dear">
              <img src="@/assets/Me_WB.png" alt="">
						  <p>没有相关的订单</p>
					</div>
				</div>
				<div v-if="show5" class="show5">
					263565515
					<div class="main_Dear">
              <img src="@/assets/Me_WB.png" alt="">
						  <p>没有相关的订单</p>
					</div>
				</div>

	</div>
</template>
<script>
export default {
	 data(){
		 return{
      show1:true,
      show2:false,
			show3:false,
			show4:false,
			show5:false
		 }
	 },
	 methods:{
		 jump() {
		 console.log(123);
		 this.$router.push("/Me");
	 },
		 change(i) {
			 if(i==0){
				 this.show1=true;
				 this.show2=false;
				 this.show3=false;
				 this.show4=false;
				 this.show5=false;
			 }else if(i==1) {
				  this.show1=false;
				 this.show2=true;
				 this.show3=false;
				 this.show4=false;
				 this.show5=false;
			 }else if(i==2) {
          this.show1=false;
				 this.show2=false;
				 this.show3=true;
				 this.show4=false;
				 this.show5=false;
			 }else if(i==3) {
        this.show1=false;
				 this.show2=false;
				 this.show3=false;
				 this.show4=true;
				 this.show5=false;
			 }else{
				  this.show1=false;
				 this.show2=false;
				 this.show3=false;
				 this.show4=false;
				  this.show5=true;
			 }
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
}
/*最外层父元素固定*/
.my_fixed{
	position: fixed;
	z-index: 999;
	width: 100%;
	
}
.main_title>h3{
	padding-left:1.3rem; 
  font-weight:lighter; 
}
.title_text>ul>li{
	margin-left:1.5rem; 
}
/*小标题*/
.title_text>ul{
  list-style: none;
	display: flex;
	margin-top: 1rem;
	width: 100%;
	height:35px; 
}
/*文字颜色*/
.Yollow{
	color:#d0ac7a;
	border-bottom: 1px solid #d0ac7a;
	padding-bottom:1rem; 
}
.show1,.show2,.show3,.show4,.show5{
	margin-top:1.8rem;
}
  /*没有相关的订单*/
.main_Dear{
	text-align: center;
 line-height: 6rem;
  margin-top:12rem;
}
.main_Dear>img{
	box-shadow:-1.3rem 1rem 3rem #000 ;
}
</style>