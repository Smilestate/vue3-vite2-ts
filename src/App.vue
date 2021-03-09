<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import request from "./request";
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
  },
})
</script>


<style>
#app{

}
</style>
