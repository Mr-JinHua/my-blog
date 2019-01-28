<template>
  <div class="hello">
    <div>Slow Climb</div>
    <div id="mdshow"></div>
  </div>
</template>

<script>
import newmd from '../../README.md'
export default {
  name: 'SlowClimb',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      md: newmd
    }
  },
  mounted() {
    document.getElementById('mdshow').innerHTML = this.md;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
