import { createStore } from 'vuex';

import cartModule from './modules/cart.js';
import productsModule from './modules/products.js';

const store = createStore({
    modules: {
        cart: cartModule,
        prods: productsModule
    },
    state() {
        return {
            isLoggedIn: false,
        }
    },
    mutations: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        }
    },
    actions: {
        login(context) {
            context.commit('login')
        },
        logout(context) {
            context.commit('logout')
        }
    },
    getters: {
        userIsAuthenticated(state) {
            return state.isLoggedIn;
        }
    }
})

export default store;