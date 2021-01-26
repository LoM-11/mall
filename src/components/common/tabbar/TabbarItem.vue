<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div v-if="!isActive"> <slot name="tabbar-icon"></slot> </div>
    <div v-else> <slot name="tabbar-icon-active"></slot> </div>
    <div :class="{textActive:isActive}"> <slot name="tabbar-text"></slot> </div>
  </div>
</template>

<script>
export default {
    name: 'TabbarItem',
    props:{
        path: String,
    },
    data(){
        return{
            // isActive: false,
        }
    },
    computed: {
        // 判断当前路由是否处于活跃
        isActive(){
            return this.$route.path.indexOf(this.path) != -1
        }
    },
    methods:{
        itemClick(){
            // console.log('123')
            this.$router.replace(this.path)
        }
    }
}
</script>

<style>
    .tab-bar-item{
        flex: 1;
    }
    .tab-bar-item{
        font-size: 14px;
        color: #000;
        /* text-decoration: none; */
    }
    .tab-bar-item img{
        width: 24px;
        height: 24px;
    }
    .textActive{
        color: #FA554A
    }
</style>