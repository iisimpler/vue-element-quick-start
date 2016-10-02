import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
// import store from './store/store';
import routes from './routes';
import VueRouter from 'vue-router';
import Element from 'element-ui';
import 'normalize.css';
import 'element-ui/lib/theme-default/index.css';

Vue.use(Element);
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  routes,
  hashbang: true,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
});