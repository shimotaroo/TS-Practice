import Vue from "vue";
import Vuex from "vuex";

import { event } from "@/store/event.js";

Vue.use(Vuex);

export default new Vuex.Store({
  // modulesには他ファイルなどでstoreを定義した時に使用
  modules: {
    event
  },  // stateは参照専用、直接変更はNG
  // 変数を定義する場所
  state: {
    isOpenSideBar: true,
    createTaskDialog: false
  },
  // mutationsはstateを変更のみを行う
  // 動詞+stateの変数名の名前にするのが一般的
  mutations: {
    updateIsOpenSideBar(state, value) {
      state.isOpenSideBar = value;
    },
    updateCreateTaskDialog(state, value) {
      state.createTaskDialog = value;
    }
  },
  // 色々なコンポーネントが共通で使える関数
  // mutationsは必ずactionsの中で使う必要がある
  actions: {
    switchSideBar({ commit }, payload) {
      // commit("mutations名", 引数)でmutations名を実行できる
      // payloadはupdateIsOpenSideBarの引数valueと対応する
      commit("updateIsOpenSideBar", payload);
    },
    switchCreateTaskDialog({ commit }, payload) {
      commit("updateCreateTaskDialog", payload);
    }
  },
});
