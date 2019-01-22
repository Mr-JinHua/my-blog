<template>
  <div id="app">
  	<div :class="{'unexpanded-left-bar': !this.isleftexpanded,'expanded-left-bar': true}" ref="leftBar">
  		<div class="left-bar-icon"/>
  	</div>
  	<div 
  		:class="{'unexpanded-bar-btn': !this.isleftexpanded,'expanded-bar-btn': true}" 
  		@click="useExpanded"
  	>
			<i :class="{'el-icon-menu-turn': this.isleftexpanded,'el-icon-menu':true}" :style="{color:'white',fontSize:'25px'}"></i>
		</div>
  	<div :class="{'unexpanded-right-container': !this.isleftexpanded,'expanded-right-container': true}" ref="rightContainer">
			<header class="rig-container"/>
  		<router-view/>
  	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isleftexpanded: true
    }
  },
  methods: {
  	useExpanded() {
  		this.isleftexpanded = !this.isleftexpanded;
  	}
  },
  mounted() {
  }
}
</script>

<style scoped>
	@import "./index.less"
</style>
