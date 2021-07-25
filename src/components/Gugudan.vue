<template>
  <div>
    {{ state.first }} X {{ state.second }} =
    {{ state.temp }}
  </div>
  <form v-on:submit.prevent="submit">
    <input v-model="state.temp" @keydown.enter.prevent="submit" />
    <button>입력</button>
  </form>
  <div>{{ state.score }}</div>
  <div v-if="records.length !== 0">
    <ol v-if="records.length !== 0">
      <li v-for="(record, idx) in records" v-bind:key="idx">
        <Content v-on:recordRemove="recordRemove" :record="record" :idx="idx" />
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Content from '../components/Content.vue';

export type Record = {
  first: number;
  second: number;
  temp: string;
  result: string;
};
interface Gugudan {
  first: number;
  second: number;
  temp: string;
  score: number;
}

export default defineComponent({
  name: 'Gugudan',
  components: { Content },
  data() {
    return {
      state: {
        first: 0,
        second: 0,
        temp: '',
        score: 0,
      } as Gugudan,
      records: [] as Record[],
    };
  },
  methods: {
    reset(): void {
      this.state.first = Math.floor(Math.random() * 9) + 1;
      this.state.second = Math.floor(Math.random() * 9) + 1;
      this.state.temp = '';
    },
    submit(): void {
      if (this.state.temp !== '') {
        if (this.state.first * this.state.second === +this.state.temp) {
          this.state.score += 1;
          this.records.push({
            first: this.state.first,
            second: this.state.second,
            temp: this.state.temp,
            result: '정답',
          });
          this.reset();
        } else {
          this.records.push({
            first: this.state.first,
            second: this.state.second,
            temp: this.state.temp,
            result: '땡',
          });
          this.reset();
        }
      }
      console.log(this.records);
    },
    recordRemove(idx: number): void {
      this.records.splice(idx, 1);
    },
  },
  created(): void {
    this.reset();
  },
});
</script>
