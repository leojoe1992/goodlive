<template>
	<div>
      <metitle :fristImg="require('@/assets/me_title1.png')" :middleImg="require('@/assets/me_title2.png')" 	:endImg="require('@/assets/me_title3.png')"
		 :hongDian="require('@/assets/Me_tishi.png')"  >
		 </metitle>
		 <!--空div 48px-->
			<div style="margin-top:0px;height:0px;"></div>
			<meitem></meitem>
      <metext></metext>
	</div>
</template>
<script>
import MeTitle from "./MeTitle"
import Me_item from "./Me_item"
import Me_text from './Me_text'
export default {
	components:{
    //Me部分
    "metitle": MeTitle,
		"meitem":Me_item,
    "metext":Me_text
  },
	props:{
		
	}
}
</script>
<style scoped>

</style>