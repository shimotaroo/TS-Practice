export const event = {
  // namespaceじゃないから注意やで
  namespaced: true,
  state: {
    events: [
      {
        eventNo: 1,
        name: "Vue&TS勉強会",
        start: "2021-03-21",
        end: "2021-03-21",
        color: "blue",
        detail: "詳細です詳細です",
        timed: false
      },
      {
        eventNo: 2,
        name: "Vue.js応用勉強会",
        start: "2021-03-07",
        end: "2021-03-07",
        color: "green",
        detail: "詳細です詳細です",
        timed: false
      }
    ]
  },
  getters: {
    event: state => eventNo => {
      return state.events.find(value => value.eventNo == eventNo);
    }
  },
  mutations: {
    updateEvents(state, value) {
      // eventsの配列の末尾にイベントを追加
      state.events.push(value);
    }
  },
  actions: {
    createEvent({ commit }, payload) {
      commit("updateEvents", payload);
    }
  }
};  