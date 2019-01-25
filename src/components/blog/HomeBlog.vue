<template>
  <div class="hello">
    <div>
        <img :src="background" alt="">
        <div>jin test</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBlog',
  props:{
    message: String
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    background(){
      console.log(this.message)
      return require(`${this.message}`)
      // return require('../../assets/blog1.png')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
