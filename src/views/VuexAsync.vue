<template>
  <div>{{ getData }}</div>
  <div>data : {{ randomList }}</div>
  <div>vuex : {{ getVuexRandom }}</div>
  <button @click="interval">random</button>
  <button @click="vuexInterval">vuexRandom</button>
</template>

<script lang="ts">
import store from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VuexAsync',
  data() {
    return {
      randomList: [] as number[],
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
