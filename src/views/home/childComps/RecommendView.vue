<template>
  <div class="recommend">
    <div v-for="(item, index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  },

}
</script>

<style>
.recommend{
  display: flex;
  padding: 10px 0 15px 0;
  /* height: 120px; */
  border-bottom: 8px solid #EEE;
}
.recommend div{
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.recommend div img{
  width: 85%;
  /* height: 60px; */
}
</style>