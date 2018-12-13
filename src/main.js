// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import 'babel-polyfill';
import router from './router';

import MetaInfo from 'vue-meta-info';
import axios from '@/http/http';
import { store } from '@/stores';
// 引入echarts
import echarts from 'echarts';
import 'echarts-gl';
import '@/lib/directive';
import './assets/sass/global.scss';

Vue.config.productionTip = false;
Vue.use(MetaInfo);
// 将案axios挂载vue上，直接用this.axios访问
Vue.prototype.axios = axios;
Vue.prototype.$echarts = echarts;
/* eslint-disable no-new */
window.Vue = new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
