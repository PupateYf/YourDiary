import * as types from '../mutation-types'

// state
const state = {
    msg: 'nothing'
}

// getters
const getters = {
    getTipStatus: state => 'you click ' + state.msg
}

// actions
const actions = {
    setTipStatus({commit}, msg) {
        commit(types.SET_TIPS_STATUS, msg)
    }
}

// mutations
const mutations = {
    [types.SET_TIPS_STATUS](state, msg){
        state.msg = msg;
    } 
}

export default {
    state,
    getters,
    actions,
    mutations
}