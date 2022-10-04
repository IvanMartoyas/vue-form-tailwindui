import axios from "axios";

export default {
    state: {
        form_open: false,
        form_data: {
            citys: [
                {
                    id: 1,
                    name: "Москва"
                },
                {
                    id: 2,
                    name: "Санкт-Петербург"
                },
                {
                    id: 3,
                    name: "Казань"
                }
            ],
            city_id: 1,
            selected: "",
            name: "",
            phone: "",
            mail: "",
        }
    },
    getters: {
        get_form_data: (s)=>s.form_data,
        get_form_open: (s)=>s.form_open,
    },
    mutations: {
        reset_form_data(state) {
            state.form_data.name        = "";
            state.form_data.phone       = "";
            state.form_data.mail        = "";
            state.form_data.citys_id    = "";
        },
        set_form_data(state, data) {

            try {
                
                state.form_data.name        = data.name;
                state.form_data.phone       = data.phone;
                state.form_data.mail        = data.mail;
                state.form_data.citys_id    = data.citys_id;

            }
            catch(e) {
                
            }
        },
        set_form_open(state, data) {

            state.form_open = data.open
            
            if(data.sity != '') {
                state.form_data.selected = data.sity;
            }
        },
    },
    actions: {
        set_form_data({commit}, data) {
            try {
                commit('set_form_data', data);
            } catch (e) {
                console.log(e)
            }
        },
        set_form_open({commit}, data) {
            commit('set_form_open', data);
        },
        send__form({state, commit, dispatch}) {

            let data = {
                name: state.form_data.name,
                phone: state.form_data.phone,
                mail: state.form_data.mail,
                city_id: state.form_data.city_id,
            }

            
            commit("reset_form_data");

            
            

            axios({
                method: 'get',
                url: 'http://hh.autodrive-agency.ru/test-tasks/front/task-7/',
                data: data
              })
            .then(function (response) {
                
                dispatch('Message', {status: "sucsess", text: "Успешно отправленно"}, { root: true });
               
                console.log("response ",response)
                
            }).catch(err => { 
               
                dispatch('Message', {status: "error", text: "Ошибка: "+ err }, { root: true });
            })
        }

    }
}


  