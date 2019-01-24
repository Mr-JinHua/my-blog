<template>
  <div class="hello">
    <div>
        <img src="../../assets/blog1.png" alt="">
        <div>jin test</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBlog',
  props:['message'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
