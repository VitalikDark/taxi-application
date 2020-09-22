import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null

  },
  mutations: {
    // LOGIN_SUCCESS(state, response) {
    //   state.token = response.token
    // }
    retriewToken(state, token) {
      state.token = token
    }
  },
  actions: {
    retriewToken(context, credentials) {
      axios.post('https://taxiadmin.ddns.mksat.net/taxi/api/v2/disp/login', {
        email: credentials.email,
        password: credentials.password
      })
          .then(response => {
            const token=response.data.response[0].key
            localStorage.setItem('key', token)
            context.commit('retriewToken', token)
            console.log('Data ', response)
          })
          .catch(e => console.log('Пам-Пам ', e))
    }
  },
  getters: {
    // activeToken: (state, getters) => {
    //   return this.$store.state.token
    // }
  }
})
