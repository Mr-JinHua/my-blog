<template>
  <div id="app">
  	<div :class="{'unexpanded-left-bar': !this.isleftexpanded,'expanded-left-bar': true}" ref="leftBar">
  		<div class="left-bar-icon"/>

			<router-link to="/blog">
				<div class="expanded-left-bar-btn">
					<i class="el-icon-document el-icon-use" />
					<span style="fontSize:20px">博客</span>
				</div>
			</router-link>
			<router-link to="/label">
				<div class="expanded-left-bar-btn">
					<i class="el-icon-location el-icon-use" />
					<span style="fontSize:20px">标签</span>
				</div>
			</router-link>
			<router-link to="/climb">
				<div class="expanded-left-bar-btn">
					<i class="el-icon-loading el-icon-use" />
					<span style="fontSize:20px">慢爬</span>
				</div>
			</router-link>
  	</div>
  	<div
  		:class="{'unexpanded-bar-btn': !this.isleftexpanded,'expanded-bar-btn': true}" 
  		@click="useExpanded"
  	>
			<i :class="{'el-icon-menu-turn': this.isleftexpanded,'el-icon-menu':true}" :style="{color:'white',fontSize:'25px'}"></i>
		</div>
  	<div :class="{'unexpanded-right-container': !this.isleftexpanded,'expanded-right-container': true}" ref="rightContainer">
			<header class="rig-container"/>
			<transition :name="routetran">
				<router-view/>
			</transition>
  	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
			isleftexpanded: true,
			routetran: "slide-right"
    }
  },
  methods: {
  	useExpanded() {
  		this.isleftexpanded = !this.isleftexpanded;
		}
	},
	mounted() {
  },
	watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      if (to.path == "/") {
        this.routetran = "slide-right";
      } else if (from.path == "/") {
        this.routetran = "slide-left";
      }else{
        this.routetran = toDepth < fromDepth ? "slide-right" : "slide-left";
      }
    }
  }
}
</script>

<style scoped>
@import "./index.less"
</style>
