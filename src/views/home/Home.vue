<template>
  <div>
    <!-- 头部 -->
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>

    <!-- 轮播图 -->
    <home-swiper :banners='banners'></home-swiper>

    <!-- 推荐信息 -->
    <recommend-view :recommend='recommends'></recommend-view>

  </div>
</template>

<script>
// 组件相关
import NavBar from 'components/common/navbar/NavBar.vue';
// 导入轮播图组件
import HomeSwiper from 'views/home/childComps/HomeSwiper.vue'
// 推荐信息组件
import RecommendView from 'views/home/childComps/RecommendView.vue'

// 网络请求相关
import {getHomeData} from 'network/home';

export default {
  name: 'Home',

  data(){
    return {
      banners: [], // 轮播图图片数据
      recommends: []  //
    }
  },

  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
  },

  // 生命周期函数——组件创建
  created(){
    return getHomeData().then(res => {
      // console.log(res)
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    })
  },


}
</script>

<style>
.home-nav{
  color: #FFF;
  background-color: #777;
}
</style>