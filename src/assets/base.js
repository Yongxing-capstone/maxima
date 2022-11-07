import { createStore } from "vuex";
function storeLocal(state) {
    window.localStorage.setItem("localData", JSON.stringify(state))
}
const store = createStore({
    state() {
        return {
            signinResult: {},
            isLogin: false,
            userData:{}
        }
    },
    mutations: {
        getResult(state, result) {
            state.signinResult = result
            storeLocal(state)
        },
        userStage(state, flag) {
            state.isLogin = flag
            storeLocal(state)
        },
        signUserData(stage,data){
            stage.userData=data
            storeLocal(stage)
        }
    }
})

export default store