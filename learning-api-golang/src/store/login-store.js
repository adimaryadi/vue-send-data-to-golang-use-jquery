import Vue from 'vue'
import Vuex from 'vuex'
import { ServerUrl } from './../service/server-url'
import $ from 'jquery'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    mutations: {
    },
    actions: {
        LoginStore({commit}, {user , password}) {
            return new Promise((resolve) => {
                // window.console.log(user+ password + 'url: '+ ServerUrl);
                $.post(ServerUrl+"/authenticate",
                {
                    "username": user,
                    "password": password
                },
                ).done(function(data) {
                  // this.$store.dispatch("LoginStore", { data: data });
                   return resolve(data);
                  //   window.console.log(data);
                    // return data;
                });
                // resolve()
                return commit;
            });
        }
    }
});