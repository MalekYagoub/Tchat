import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    messages: [],
    socket: null
  },

  actions: {
    emitMessage: ({state, commit}, message) => {
      state.socket.emit('clientMessage', message)
    },
    addMessage: ({state, commit}) => {

    }
  },

  mutations: {
    user: (state, user) => {
      state.socket.emit('login', user)
      state.user = user
    },
    messages: (state, message) =>  {
      state.messages.push(message)
    },
    socket: (state, socket) => {
      state.socket = socket
    }
  },

  getters: {
    user: state => state.user,
    messages: state => state.messages,
    socket: state => state.socket
  }
})
