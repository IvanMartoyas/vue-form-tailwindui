export default {
    state: {
        status: "none",
        text: ""
    },
    getters: {
        message: (s) => { return {status: s.status, text: s.text} }
    },
    mutations: {
        set_message(state,{status, text} ) {
            state.status = status;
            state.text = text;
        },
        message_reset(state) {
            state.status = "none"
            state.text = ""
        }
    },
    actions: {
        Message({commit}, {status, text}) {
            commit("set_message",{status, text});

            setTimeout(()=>{
                commit("message_reset")
            },3000) // сбрасываю окно
            
        }
    },

}