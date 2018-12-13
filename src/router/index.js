import Vue from 'vue';
import Router from 'vue-router';
import * as views from '@/views';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'layout',
    component: views.Layout,
    children: [
      {
        path: '/',
        name: 'index',
        component: views.Index
      }
    ]
  }
];

const router = new Router({
  routes,
  mode: 'history'
});

export default router;
