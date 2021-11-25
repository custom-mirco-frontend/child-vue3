<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const msg = '你们'
    return{
      msg
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
