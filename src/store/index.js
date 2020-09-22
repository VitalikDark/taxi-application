import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('retriewToken') || null
    },
    mutations: {
        retriewToken(state, token) {
            state.token = token
            console.log(token);
        }
    },
    actions: {
        retriewToken(context, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('https://taxiadmin.ddns.mksat.net/taxi/api/v2/disp/login', {
                    email: credentials.email,
                    password: credentials.password
                })
                    .then(response => {
                        const token = response.data.response[0].key
                        localStorage.setItem('key', token)
                        context.commit('retriewToken', token)
                        resolve(response)
                        console.log('Data ', response)
                    })
                    .catch(e => {
                        console.log('Пам-Пам ', e)
                        reject(error)
                    })
            })
        }
    },
    getters: {

    }
})
