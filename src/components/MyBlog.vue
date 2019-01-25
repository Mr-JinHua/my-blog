<template>
  <div class="hello">
    <home-blog :message="'../../assets/blog1.png'" />
  </div>
</template>

<script>
import HomeBlog from './blog/HomeBlog.vue'

export default {
  name: 'MyBlog',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    'home-blog': HomeBlog
  }
}
</script>

<style scoped>
</style>
