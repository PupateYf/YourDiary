
<style lang="stylus">

$radius = 5px
$liAnimation = .3s 

.list-holder
    background: white
    border-radius: $radius

.ul-holder
    color: black
    padding: 1vh 2vw
    list-style: none
    text-align: left

.ul-holder li
    height: 2vh
    line-height: 2vh
    cursor: pointer

.ul-holder li:hover
    -webkit-transition: $liAnimation
    transition: $liAnimation
    color: #42b983
    

</style>

<template>
    <div class="list-holder">
        <ul class="ul-holder">
            <li v-for = "item in list" @click="setTipStatus(item)">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'childOne',
    props: {
        list: Array
    },
    methods: {
        ...mapActions([
            'setTipStatus'
        ])
    }
}

</script>
