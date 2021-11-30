<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <button @click="handleOther">vue3 点击跳转</button>
  <router-view></router-view>
</template>
<script>
import {defineComponent} from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'App',
  setup() {
    const router = useRouter()
    const handleOther = () => {
      router.push({
        path: '/vue-other'
      })
    }
    return{
      handleOther
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
