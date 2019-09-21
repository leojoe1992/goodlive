<template>
		<div class="shop_list">
			<div class="list_item" v-for="(item,i) of products" :key=i>
				<div class="item_img"><img :src="require('../../img/furniture/'+item.img+'.jpg')" alt="">{{item.img}}</div>
				<p class="detail">{{item.detail}}</p>
				<div class="price">
					<p>参考价￥{{item.price}}起</p>
					i
				</div>
			</div>
			
		</div>
		
</template>
<script>
	export default{
		data(){
			return {
				products:[]
			}
		},
		props:["p"],
		methods: {
			// 获取商品列表
			search(e){
				console.log(e);
				var url="search";
				var data={data:e}
				// 发送ajax请求
				this.axios.get(url,{params:data})
				.then(res=>{
					console.log(res.data.data);
					this.products=res.data.data;
				})
			}
		},
		created() {
			this.search(this.p);
		},
	}

</script>
<style>
	.shop_list{
		width: 100%;
		display: flex;
		padding: 0 0.5rem;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.list_item{
		height: 200px;
		width: 48%;
		margin: 5px 0;

		background: #ff0;	
	}
	.item_img{
		height: 70%;
		border-radius: 50px;
		border-radius: 10px;
		overflow: hidden;

	}
	.item_img img{
		width: 100%;
		height: auto;
		object-fit: contain;
	}
	.list_item .detail{
		color: black;
		margin: 0;
		padding: 0 1px;
		/* 两行显示不完，省略号 */
		display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;
	}
	.list_item .price{
		display: flex;
		justify-content: space-around;
	}
	.list_item .price p{
		 font-size: 12px;
		 /* padding: 0 1px; */
	}


</style>