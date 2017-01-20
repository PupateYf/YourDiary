import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import compTwo from './modules/compTwo.js'

Vue.use(Vuex)


const store = new Vuex.Store({
    getters,
    actions,
    modules: {
        compTwo
    }
})

export default store
