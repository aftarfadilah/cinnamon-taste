import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueScrollTo from 'vue-scrollto'
import Icon from 'vue-awesome/components/Icon.vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vue-awesome/icons'
import './registerServiceWorker'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css/animate.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueScrollTo)
Vue.component('v-icon', Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
