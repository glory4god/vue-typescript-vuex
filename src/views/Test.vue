<template>
  <div>TEST PAGE</div>
  <Gugudan />
  <div class="title">
    <h3>
      {{ msg }}
    </h3>
    <div>current - {{ currentWord }}</div>
    <div>length - {{ currentWordLength }}</div>
    <div>
      <input type="text" v-model="temp" @keydown.enter.prevent="submit(temp)" />
      <button @click="submit(temp)">입력</button>
    </div>
    <ol>
      <li v-for="(record, idx) in recordList" v-bind:key="idx">
        {{ record.prev }} -> {{ record.current }}
      </li>
    </ol>
    <button @click="reset">다시 시작</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Gugudan from '@/components/Gugudan.vue';
import store from '@/store';

export interface Record {
  prev: string;
  current: string;
}

export default defineComponent({
  name: 'Test',
  components: {
    Gugudan,
  },
  data() {
    return {
      msg: '끝말잇기 by Vuex',
      temp: '',
    };
  },
  methods: {
    submit(word: string): void {
      if (this.currentWord[this.currentWord.length - 1] === this.temp[0]) {
        // mutations => commit
        // store.commit('addRecordList', {
        //   prev: this.currentWord,
        //   current: this.temp,
        // });
        // 비동기 방법 action => dispatch
        store.dispatch('addRecordListAsync', {
          prev: this.currentWord,
          current: this.temp,
        });
        store.commit('setWord', word);
      }
      this.temp = '';
    },
    reset(): void {
      store.commit('reset');
    },
  },
  computed: {
    currentWord(): string {
      return store.state.currentWord;
    },
    currentWordLength(): number {
      return store.getters.lengthToWord;
    },
    recordList(): Record[] {
      return store.state.recordList;
    },
  },
});
</script>

<style>
.title {
  margin-top: 2rem;
}
</style>
