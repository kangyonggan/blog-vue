// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './components/toast/toast.css';
import './common'
import Toast from './components/toast/toast';
import List from './components/List.vue'
import Pay from './components/Pay.vue'

Vue.component('List', List)
Vue.component('Pay', Pay)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

Vue.use(Toast);
