import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('retriewToken') || null //храню токен локально
    },
    mutations: {
        retriewToken(state, token) { // мутация токена
            state.token = token
            console.log(token);
        }
    },
    actions: {
        retriewToken(context, credentials) {
            return new Promise((resolve, reject) => { //получаем токен по email/pass
                axios.post('https://taxiadmin.ddns.mksat.net/taxi/api/v2/disp/login', {
                    email: credentials.email, //поля емайл
                    password: credentials.password //поля пароля
                })
                    .then(response => {
                        const token = response.data.response[0].key //беру токен - ключ
                        localStorage.setItem('key', token)
                        context.commit('retriewToken', token)
                        resolve(response)
                        console.log('Data ', response)
                    })
                    .catch(e => { //для ошыбок
                        console.log('Пам-Пам ', e)
                        reject(error)
                    })
            })
        }
    },
    getters: {

    }
})
