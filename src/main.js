import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import VueHotKey from 'v-hotkey';
import BootstrapVue from 'bootstrap-vue'
import '@/assets/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/devilfish.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery'

Vue.config.productionTip = false;

Vue.use(VueHotKey, BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
