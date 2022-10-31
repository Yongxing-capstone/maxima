import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            signinResult: {}
        }
    },
    mutations: {
        getResult(state, result) {
            state.signinResult = result
            console.log(result);
        }
    }
})

export default store