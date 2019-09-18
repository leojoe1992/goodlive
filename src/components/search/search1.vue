<template>
<div>
	<div class="tabbar">	
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">option A</mt-tab-item>
			<mt-tab-item id="2">option B</mt-tab-item>
			<mt-tab-item id="3">option C</mt-tab-item>
			<mt-tab-item id="3">option y</mt-tab-item>
			<mt-tab-item id="4">option t</mt-tab-item>
			<mt-tab-item id="6">option e</mt-tab-item>
			<mt-tab-item id="3">option d</mt-tab-item>
			<mt-tab-item id="3">option f</mt-tab-item>
			<mt-tab-item id="3">option g</mt-tab-item>
			<mt-tab-item id="3">option h</mt-tab-item>
		</mt-navbar>
	</div>
<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <mt-cell v-for="n in 10" :title="'content ' + n" :key="n"/>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
  <mt-cell v-for="n in 4" :title="'content ' + n" :key="n"/>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <mt-cell v-for="n in 6" :title="'content ' + n" :key="n"/>
  </mt-tab-container-item>
  <mt-tab-container-item id="4">
    <mt-cell v-for="n in 6" :title="'content ' + n" :key="n"/>
  </mt-tab-container-item>
  <mt-tab-container-item id="5">
    <mt-cell v-for="n in 6" :title="'content ' + n" :key="n"/>
  </mt-tab-container-item>
	<mt-tab-container-item id="6">
  <mt-cell v-for="n in 6" :title="'content ' + n" :key="n"/>
  </mt-tab-container-item>
</mt-tab-container>
	</div>
</template>
<script>
import { Tab, Tabs } from 'vant';
	export default{
		data(){
			return{
				selected:"1"
			}
		},
		comments:{
			Tab,
			Tabs
		}

	}


</script>
<style>
import
	.tabbar{
		width: 100%;white-space: nowrap;
	}
	.mint-navbar{
		max-width: 1000px;
		white-space: nowrap;
    overflow-x: auto;
	}
	.mint-navbar::-webkit-scrollbar {
      width: 0;
      height: 0;
      display: none;
  }
	.mint-navbar>a>div{
		width: 70px !important;
	}

</style>