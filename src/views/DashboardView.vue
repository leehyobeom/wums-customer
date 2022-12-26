<template>
  <hello-world />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/Dashboard.vue';

export default defineComponent({
  name: 'DashboardView',
  components: {
    HelloWorld,
  },
});
</script>
