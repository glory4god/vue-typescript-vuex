import { createStore } from 'vuex';
import { Record } from '@/views/Test.vue';
export default createStore({
  state: {
    currentWord: '시작',
    recordList: [] as Record[],
  },
  mutations: {
    setWord(state, word) {
      state.currentWord = word;
    },
    addRecordList(state, record) {
      state.recordList.push(record);
    },
    reset(state) {
      state.currentWord = '시작';
      state.recordList = [];
    },
  },
  getters: {
    lengthToWord: (state) => {
      return state.currentWord.length;
    },
  },
  actions: {},
  modules: {},
});
