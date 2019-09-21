<template>
		<div class="shop_list">
			<div class="list_item" v-for="i in products" :key=i>{{i}}</div>

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
					console.log(res);
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
		height: 150px;
		width: 48%;
		margin: 5px 0;
		background: #ff0;	
	}

</style>