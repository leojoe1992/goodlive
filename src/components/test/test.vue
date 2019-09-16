<template>
  <div>
    <van-tabs v-model="active" swipeable>
      <van-tab title="关注">
        <div style="width:100%;height:300px;">12315</div>
      </van-tab>
      <van-tab title="推荐">
        <div style="width:100%;height:300px;">456</div>
      </van-tab>
      <van-tab title="收藏夹">
        <div style="width:100%;height:300px;">78975</div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
<style scoped>
  .van-tabs__line{
    background-color:#000 !important;
  }
</style>