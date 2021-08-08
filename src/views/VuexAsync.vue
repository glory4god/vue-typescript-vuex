<template>
  <div>
    <h2>{{ getData }}</h2>
    <div>data : {{ randomList }}</div>
    <div>vuex : {{ getVuexRandom }}</div>
    <button @click="interval">random</button>
    <button @click="vuexInterval">vuexRandom</button>
  </div>
  <div>
    <h2>array.sort practice</h2>
    <div>{{ sortListUp() }}</div>
    <div>{{ sortListDown() }}</div>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VuexAsync',
  data() {
    return {
      randomList: [] as number[],
      list: [1, 6, 2, 3, 5, 7, 1, 30],
    };
  },
  methods: {
    // data interval
    interval() {
      const time = setInterval(() => {
        this.randomList.push(Math.floor(Math.random() * 9 + 1));
        console.log(this.randomList);
        if (this.randomList.length >= 10) {
          clearInterval(time);
        }
      }, 1000);
    },

    // vuex interval
    vuexInterval() {
      store.dispatch('interval');
    },

    sortListUp() {
      return this.list.sort((prev, curr) => {
        return prev - curr;
      });
    },
    sortListDown() {
      return this.list.sort((prev, curr) => {
        return curr - prev;
      });
    },
  },
  computed: {
    getData() {
      store.dispatch('gotData');
      return store.state.numberList;
    },
    getVuexRandom() {
      return store.state.randomList;
    },
  },
});
</script>
