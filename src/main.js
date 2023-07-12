import Vue from 'vue';
import App from './App.vue';
import './plugins/element.js';
import router from './router';
// 是否打开开发者模式
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
