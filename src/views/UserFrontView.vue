<template>
      <v-card>
        <v-img :src= "require(`@/assets/${$route.params.brand}.png`)" width="100%"/>
      </v-card>
    <wums :brand = "`${$route.params.brand}`"/>
</template>
  <script lang="ts">
  import { defineComponent } from 'vue';
  import wums from '@leehyobeom/wums';
  export default defineComponent({
    name: 'UserFrontView',
    components: {
      wums,
    },
  });
  </script>