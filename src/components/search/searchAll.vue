<template>
	<div>
		<van-sidebar v-model="activeKey">
			<van-sidebar-item title="标签名称" />
			<van-sidebar-item title="标签名称" />
			<van-sidebar-item title="标签名称" />
		</van-sidebar>
    <div key="1">111</div>
    <div key="2">222</div>
    <div key="0">00</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 1
    };
  }
};

</script>