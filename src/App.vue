<template>
  <div id="app">
  	<div :class="{'unexpanded-left-bar': !this.isleftexpanded,'expanded-left-bar': true}" ref="leftBar">
  		<div class="left-bar-icon"/>
			<router-link to="/blog">
				<div class="expanded-left-bar-btn">
					<i class="el-icon-document el-icon-use" />
					<span style="fontSize:20px">{{user}}博客</span>
				</div>
			</router-link>
			<router-link to="/label">
				<div class="expanded-left-bar-btn" @click="loginUser">
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
			<i class="el-icon-menu" :class="{'el-icon-menu-turn': this.isleftexpanded}" :style="{color:'white',fontSize:'25px'}"></i>
		</div>
  	<div :class="{'unexpanded-right-container': !this.isleftexpanded,'expanded-right-container': true}" ref="rightContainer">
			<header class="rig-container"/>
			<transition name="el-zoom-in-top">
				<section v-show="headerShow" class="show-header" :class="{'unexpand-show-header': !this.isleftexpanded}">
						<span>{{headeName}}</span>
				</section>
			</transition>
			<transition :name="routetran">
				<router-view/>
			</transition>
  	</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
			isleftexpanded: true,
			headerShow: false,
			routetran: "slide-right",
			headeName: 'my blog'
    }
	},
	computed: {
		...mapState([
			'user'
		])
	},
  methods: {
  	useExpanded() {
  		this.isleftexpanded = !this.isleftexpanded
		},
		loginUser(){
			// this.$store.state.todos.forEach(item=> item.done = true)
			// console.log('loginUser', this.$store.getters.doneToDo)
			this.$store.commit('login','chagne user')
		}
	},
	mounted() {
		let appDoc = document.getElementById('app')
		window.addEventListener('scroll',()=>{
			(-appDoc.getBoundingClientRect().top > 200) ? this.headerShow = true : this.headerShow = false;
		})
  },
	watch: {
    $route(to, from) {
			this.headeName = 'My ' + to.path.replace(/\//,'');
			console.log(this.headeName, to.path)
    }
  }
}
</script>

<style lang="less">
@import "./index.less";
</style>
