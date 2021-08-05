<template>
  <div style="padding-left: 2rem">
    <h2 style="">vuex - mixins test page</h2>
    <div>
      {{ getMixinsMsg() }}
    </div>
    <div></div>
    <button @click.prevent="change()">변경</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import _Mixins from '@/mixins';

export default defineComponent({
  data: () => {
    return {};
  },
  methods: {},
  computed: {},
  mixins: [_Mixins],
});
</script>
