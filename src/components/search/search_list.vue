<template>
		<div class="shop_list">
			<div class="list_item" v-for="i of 10" :key=i>{{i}}</div>

		</div>
</template>
<script>
	export default{
		data(){
			return {

			}
		},
		props:[]
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