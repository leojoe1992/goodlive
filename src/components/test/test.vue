<template>
  <div>
    <button v-for="i of 5" :key="i" @click="say(i)">我是{{i}}</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
     
    };
  },
  methods:{
    say(i){
      alert("我是"+i+"号")
    }
  }
};
</script>
<style scoped>
  
</style>