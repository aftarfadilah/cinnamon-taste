import Vue from 'vue';
import VueMq from 'vue-mq';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VueMq, {
  breakpoints: {
    phone: 425,
    tablet: 768,
    laptop: 1440,
    whatever: Infinity,
  },
  defaultBreakpoint: 'laptop',
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
