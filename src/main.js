import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import BS4 from 'bootstrap';


Vue.config.productionTip = false;

Vue.use(BS4);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
