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
  <div class="transition_test"><h2>transition test</h2></div>

  <button @click.prevent="showHandler">{{ button }}</button>
  <transition name="modal">
    <p v-if="show" style="background-color: red; width: 300px; height: 300px">
      트랜지션!!!!!!
    </p>
  </transition>
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
      button: 'on',
      show: false,
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
    showHandler(): void {
      this.show = !this.show;
      if (this.button === 'on') {
        this.button = 'off';
      } else {
        this.button = 'on';
      }
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
.transition_test {
  margin-top: 3rem;
}
</style>
