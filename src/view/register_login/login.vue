<template>
  <div class="login_bg">
    <h1>登录</h1>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
import request from "../../request";
export default defineComponent({
  name: "Login",
  async mounted() {
    const res = await request.post("/login/pwd", {
      area: "+86",
      mobile: "15873272638",
      password: "123456"
    })
    console.log("===3=====>", res)
  }
})
</script>

<style scoped>
.login_bg{

}
</style>
