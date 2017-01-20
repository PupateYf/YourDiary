<style lang="stylus" scoped>
$radius = 5px
.tips-holder
    background: white
    border-radius: $radius
    height: 5vh
.tips-holder span
    line-height: 5vh
</style>

<template>
    <div class="tips-holder">
        <span>{{tips}}</span>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: 'childTwo',
        computed: {
            ...mapGetters({
                'tips': 'getTipStatus'
            })

        }
    }
</script>