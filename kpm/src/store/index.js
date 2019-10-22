import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        message : {
            name : null,
            email : null,
            phone : null,
            company : null,
            message : null
        }
  },
    mutations: {
        changeMessage(state,value) {
            state.message = value;
        },
  },
    actions: {
        checkMessage(context) {
            context.commit('checkMessage')
        }
  },
    modules: {}
})
