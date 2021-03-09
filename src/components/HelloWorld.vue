<template>
  <div>

  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const params = reactive({
      count: 0,
    })
    return { params }
  }
})
</script>

<style scoped>
</style>
