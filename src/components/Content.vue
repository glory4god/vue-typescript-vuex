<template>
  {{ record.first }} X {{ record.second }} = {{ record.temp }} (
  {{ record.result }} )
  <button @click="$emit('recordRemove', idx)">삭제</button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Record } from './Gugudan.vue';
export default defineComponent({
  name: 'Content',
  props: {
    record: Object as PropType<Record>,
    idx: Number,
  },
});
</script>
