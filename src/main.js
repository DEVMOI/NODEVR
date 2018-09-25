import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import BS4 from 'bootstrap/dist/css/bootstrap.min.css';
import VueHotkey from 'v-hotkey';

Vue.config.productionTip = false;

Vue.use(BS4, VueHotkey);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
