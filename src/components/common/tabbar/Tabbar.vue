<template>
  <div id="tab-bar">
      <!-- <tabbar-item v-for="(item,index) in tabbarList" 
                :key="index" 
                :itemLink="item"
      ></tabbar-item> -->
      <!-- 首页按钮 -->
      <tabbar-item path="/home">
        <template v-slot:tabbar-icon>
            <img src="~assets/img/tabbar/icon01.png">
        </template>
        <template v-slot:tabbar-icon-active>
            <img src="~assets/img/tabbar/icon01_active.png">
        </template>
        <template v-slot:tabbar-text>
            <div>首页</div>
        </template>
      </tabbar-item>
      <!-- 分类按钮 -->
      <tabbar-item path="/category">
        <template v-slot:tabbar-icon>
            <img src="~assets/img/tabbar/icon02.png">
        </template>
        <template v-slot:tabbar-icon-active>
            <img src="~assets/img/tabbar/icon02_active.png">
        </template>
        <template v-slot:tabbar-text>
            <div>分类</div>
        </template>
      </tabbar-item>
      <!-- 购物车按钮 -->
      <tabbar-item path="/cart">
        <template v-slot:tabbar-icon>
            <img src="~assets/img/tabbar/icon03.png">
        </template>
        <template v-slot:tabbar-icon-active>
            <img src="~assets/img/tabbar/icon03_active.png">
        </template>
        <template v-slot:tabbar-text>
            <div>购物车</div>
        </template>
      </tabbar-item>
      <!-- 我的 按钮 -->
      <tabbar-item path="/profile">
        <template v-slot:tabbar-icon>
            <img src="~assets/img/tabbar/icon04.png">
        </template>
        <template v-slot:tabbar-icon-active>
            <img src="~assets/img/tabbar/icon04_active.png">
        </template>
        <template v-slot:tabbar-text>
            <div>我的</div>
        </template>
      </tabbar-item>
      
  </div>
</template>

<script>
import TabbarItem from './TabbarItem.vue'

export default {
    name: 'Tabbar',
    data(){
        return {

        }
    },
    components:{
        TabbarItem
    }
}
</script>

<style>
    #tab-bar{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        height: 49px;
        text-align: center;
        background-color: #f6f6f6;
        box-shadow: 0px -1px 2px rgba(0,0,0,.3)
    }
    
    
</style>