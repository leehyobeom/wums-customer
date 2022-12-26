<template >
  <v-container class="container">
    <v-col class="justify-center">
      <v-img
          :style="background"
          :src="require(`@/assets/naver.png`)">
          <v-img :src="require(`@/assets/cursor.png`)" width="30px" :style="pointor"/>
        </v-img>
    </v-col>
  <v-bottom-navigation>
    <v-btn value="stop" @click="stop()">
      <v-icon color="red darken-2">mdi-stop</v-icon>
    </v-btn>
    <v-btn value="run" @click="run()">
      <v-icon color="red darken-2">mdi-play</v-icon>
    </v-btn>
    <v-btn value="pause" @click="pause()">
      <v-icon color="red darken-2">mdi-pause</v-icon>
    </v-btn>
  </v-bottom-navigation>
  </v-container>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import gql from 'graphql-tag'

export default defineComponent({
  name: 'UserMonitor',
  apollo: {
    item: {
      query: gql`query getOne($_id: String!) {
        item: getOne(_id: $_id) {
          brand
          coordinate{
            x
            y
          }
        }
      }`,
      variables(): any{
        return {
          _id: this.$route.params.id
        }
      }
    },
  },
  data () {
    return {
      item: {
        _id:'',
        ip:'',
        date:'',
        coordinate:[{
          x:0,
          y:0
        }],
        brand: ''
      },
      background: { 
        position: "fixed",
        width:  window.innerWidth * 0.8  + 'px',
        height:  window.innerHeight * 0.8 + 'px', 
        "object-fit": "contain"
      },
      pointor: {
        position: "absolute",
        top:  window.innerHeight * 0.8 * 0.5 + "px",
        left:  window.innerWidth * 0.8 * 0.5 + "px",
        "z-index": "15",
      },
      intervalId: 0,
      top: 50,
      left: 50,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      timeIdx:0
    }
  },
  methods: {
    run(){
      if(this.intervalId){
        return
      }
      this.intervalId = setInterval(()=>{
        if(this.item.coordinate.length <= this.timeIdx){
          this.stop();
          return
        }
        this.top = this.item.coordinate[this.timeIdx].y;
        this.left = this.item.coordinate[this.timeIdx].x;
        this.timeIdx += 1;
        this.setPosition();
      }, 10);
    },
    stop(){
      this.pause();
      this.top = 50;
      this.left = 50;
      this.timeIdx = 0;
      this.setPosition();
    },
    pause(){
      clearInterval(this.intervalId);
      this.intervalId =0;
    },
    setPosition(){
      this.pointor.top = this.windowHeight * 0.8 * (this.top/100) + "px";
      this.pointor.left = this.windowWidth * 0.8 * (this.left/100) + "px";
    }
  },
})
</script>
<style>
</style>