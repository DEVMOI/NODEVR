import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import aframe from "aframe";

Vue.config.productionTip = false;

Vue.use(aframe);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
