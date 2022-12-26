<template>
  <UserMonitor/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserMonitor from '../components/UserMonitor.vue';


export default defineComponent({
  name: 'UserMonitorView',
  components: {
    UserMonitor,
  },
  data () {
    return {
    }
  },
});
</script>