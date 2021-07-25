<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>ㅎㅇㅎㅇ</h2>
    <Test></Test>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Test from '@/components/Test.vue';

export default defineComponent({
  name: 'About',
  components: {
    Test,
  },
});
</script>
