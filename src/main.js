import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import VueHotKey from 'v-hotkey';
import'@/assets/bootstrap.min.css';

Vue.config.productionTip = false;

Vue.use(VueHotKey);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
