import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // obiekt przechowujacy informacje o zalogowanym uzytkowniku
        user: {
            loggedIn: false, //default value = false
            data: null // informacje o uzytkowniku
        }
    },
    getters: {
        // getter pozwalajacy na dostanie danych ze state
        user(state) {
            return state.user
        }
    },
    mutations: {
        // pozwala na zmiane stanu, zdefiniowane dwie "mutacje"
        SET_LOGGED_IN(state, value) {
            // ustawia state.user z przekazaną wartoscia value
            state.user.loggedIn = value
        },
        SET_USER(state, data) {
            // ustawia state.user z przekazana wartoscia data
            state.user.data = data
        }
    },
    actions: {
        fetchUser({commit}, user) {
            commit("SET_LOGGED_IN", user !== null)
            if (user) {
                commit("SET_USER", {
                    displayName: user.displayName,
                    email: user.email
                })
            } else {
                commit("SET_USER", null)
            }
        }
    }
})
