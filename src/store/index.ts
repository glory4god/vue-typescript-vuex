import { createStore } from 'vuex';
import { Record } from '@/views/Test.vue';
import { getData } from '@/lib/testSheet';

export default createStore({
  state: {
    currentWord: '시작' as string,
    recordList: [] as Record[],
    numberList: [] as number[],
    randomList: [] as number[],
  },
  mutations: {
    setWord(state, word: string) {
      state.currentWord = word;
    },
    addRecordList(state, record: Record) {
      state.recordList.push(record);
    },
    reset(state) {
      state.currentWord = '시작';
      state.recordList = [];
    },
    getData(state, data: number[]) {
      state.numberList = data;
    },
    addRandomList(state, number: number) {
      state.randomList.push(number);
    },
  },
  getters: {
    lengthToWord(state): number {
      return state.currentWord.length;
    },
  },
  actions: {
    addRecordListAsync(context, record: Record) {
      setTimeout(() => {
        context.commit('addRecordList', record);
      }, 500);
    },
    async gotData(context) {
      context.commit('getData', await getData());
    },

    interval(context) {
      const time = setInterval(() => {
        context.commit('addRandomList', Math.floor(Math.random() * 9 + 1));
        console.log(context.state.randomList);
        if (context.state.randomList.length >= 10) {
          clearInterval(time);
        }
      }, 1000);
    },
  },
  modules: {},
});
