<template>
    <div class="demo">
        <span class="demo_title">YourDiary</span>
        <p class="demo_description">This template fork from webpack-simple which belong to vue-cli</p>
        <list-comp :list="defaultList"></list-comp>
        <tips-comp>
            </list-comp>
    </div>
</template>

<script>
import listComp from './demoCompOne.vue';
import tipsComp from './demoCompTwo.vue';
export default {
    name: 'index',
    data() {
        return {
            defaultList: ['ESLint', 'vuex', 'vue-router', 'stylus']
        }
    },
    components:{
        listComp,
        tipsComp
    }
}
</script>

<style lang="stylus">

title_size = 8vh

.demo
    position: relative
    text-align: center
    bottom: 10vh
.demo_title
    color: white
    font-size: title_size
.demo_description
    color: white
</style>