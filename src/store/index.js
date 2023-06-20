import {createStore} from "vuex";


const store = createStore({
    state() {
        return {
            isAuth: false,
            messages: [
                {
                    id: 1,
                    date: "28.5.2023",
                }
            ]
        }
    },
    getters: {
        getIsAuth(state) {
            return state.isAuth;
        },
    },
    mutations: {
        setAuth(state, payload) {
            state.isAuth = payload;
        },
        addMessage(state, payload) {
            state.messages.push(payload);
        }
    },
    actions: {
        setAuth(context, payload) {
            context.commit("setAuth", payload);
        },
        addMessage(context, payload) {
            context.commit("addMessage", payload);
        }
    }
})

export default store;