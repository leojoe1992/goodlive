<template>
  <div>
    <div class="container">
      <div class="item" v-for="i of 15" :key="i"></div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .container{
    background:#eee;
    padding:1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .item{
    height:100px;
    width:48%;
    background:black;
  }
</style>