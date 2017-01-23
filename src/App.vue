<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>


<script>
    export default {
        name : 'app'
    }
</script>

<style lang="stylus">
background = 'assets/bg.jpg'
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

</style>