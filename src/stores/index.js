import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
// 引入单独模块
// import * as types from './mutation-types';

Vue.use(Vuex);

// 开放环境:打印store
const debug = process.env.NODE_ENV !== 'production';

export const store = new Vuex.Store({
  state: {
  },
  getters: {
  },
  actions: {
    // 只用于异步/请求
    // async initCurrentUser ({commit, state}) {
    //   let user = await profileService.getCurrentUser();
    //   if (user.name) {
    //     commit(STORE_MUTATION_MAP.UPDATE_CURRENT_USER, user);
    //   }
    // }
  },
  mutations: {
    // [STORE_MUTATION_MAP.UPDATE_CURRENT_USER] (state, user) {
    //   state.currentUser = { ...state.currentUser, ...user };
    // },
  },
  modules: {
  },
  strict: debug, // 开发环境下使用严格模式
  plugins: debug ? [createLogger()] : [] // 开发环境输出log
});
