<template>
    <div id="app">
        <div class="demo">
            <span class="demo_title">YourDiary</span>
            <p class="demo_description">This template fork from webpack-simple which belong to vue-cli</p>
            <list-comp :list="defaultList"></list-comp>
            <tips-comp></list-comp>
        </div>
    </div>
</template>

<script>
import listComp from './components/demoCompOne.vue';
import tipsComp from './components/demoCompTwo.vue';
export default {
    name: 'app',
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
background = 'assets/bg.jpg'
title_size = 8vh
body
    margin: 0 auto

#app
    background-image: url(background)
    background-repeat: no-repeat
    background-size: cover
    background-position: contain
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    position: absolute
    height: 100%
    width: 100%
    display: flex
    justify-content: center
    align-items: center
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