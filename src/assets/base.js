import { createStore } from "vuex";
import global from "./Global";
function storeLocal(state) {
    window.localStorage.setItem("localData", JSON.stringify(state))
}
const store = createStore({
    state() {
        return {
            signinResult: {},
            isLogin: false,
            userData: {}
        }
    },
    mutations: {
        getResult(state, result) {
            
            state.signinResult = result
            storeLocal(state)
        },
        userStage(state, flag) {
            global.isLogIn = flag
            state.isLogin = flag
            storeLocal(state)
        },
        signUserData(stage, data) {
            stage.userData = data
            storeLocal(stage)
        },
        clearAll(state) {
            state.signinResult = {}
            state.isLogin = false
            state.userData = {}
        }
    }
})

export default store