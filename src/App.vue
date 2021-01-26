
<template>
  <div id="app">
    <router-view></router-view>

    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from 'components/common/tabbar/Tabbar.vue'
// import Home from 'views/home/Home.vue';
export default {
  components:{
    Tabbar,
    // Home,
  }
}
</script>

<style>
@import "assets/css/base.css";

</style>