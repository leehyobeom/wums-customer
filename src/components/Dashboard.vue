<template>
  <v-container>
        <v-card
          v-for="item in lists"
          :key = item._id
          justify="center" 
          class="d-flex mb-6"
          tyle="max-width: 100%;"
          :href="`monitor/${item._id}`"
          >
          <v-col
            class="flex-grow-0 flex-shrink-0"
            tyle="min-width: 100px; max-width: 100%;"
            target="_blank"
            cols="4"
          >
          {{item.brand}}
          </v-col>
          <v-col
            class="flex-grow-0 flex-shrink-0"
            tyle="min-width: 100px; max-width: 100%;"
            target="_blank"
            cols="4"
          >
          {{item.date}}
          </v-col>
          <v-col
            class="flex-grow-0 flex-shrink-0"
            tyle="min-width: 100px; max-width: 100%;"
            target="_blank"
            cols="4"
          >
          {{item.ip}}
          </v-col>
        </v-card>
  </v-container>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import gql from 'graphql-tag'

export default defineComponent({
  
  name: 'HelloWorld',
  apollo: {
    lists: gql`query gets{
      lists: gets {
        _id:_id,
        ip:ip,
        date:date,
        brand: brand
        coordinate:coordinate {
          x: x
          y: y
        }
      }
    }`,
  },
  data () {
    return {
      lists: [{
        _id:'',
        ip:'',
        date:'',
        coordinate:[{
          x:'',
          y:''
        }],
        brand: ''
      }],
    }
  },
})
</script>
