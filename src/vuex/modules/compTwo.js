import * as types from '../mutation-types'

// state
const state = {
    isShow: false
}

// getters
const getters = {
    getTipStatus: state => state.isShow
}

// actions
const actions = {
    setTipStatus({commit, state}, status) {
        commit(types.SET_TIPS_STATUS, )
    }
}

// mutations
const mutations = {
    [types.SET_TIPS_STATUS](state, status){
        state.isShow = status;
    } 
}