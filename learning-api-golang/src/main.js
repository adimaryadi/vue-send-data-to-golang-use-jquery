import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueResource from 'vue-resource'
import store from './store/login-store'
import vue_jquery from 'vue-jquery'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(vue_jquery)
// global configuration Vue Http
Vue.http.options.root                      =   '/root'
Vue.http.headers.common['Content-Type']    =   'application/json'
Vue.http.post

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
