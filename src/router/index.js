import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'url';
// import HelloWorld from '@/components/HelloWorld'

let HelloWorld = resolve=> require(['@/components/HelloWorld'],resolve);
let MyBlog = resolve=> require(['@/components/MyBlog'],resolve);
let SlowClimb = resolve=> require(['@/components/SlowClimb'],resolve);
let MyLabel = resolve=> require(['@/components/MyLabel'],resolve);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/blog'
    },
    {
      path: '/blog',
      name: 'MyBlog',
      component: MyBlog
    },
    {
      path: '/climb',
      name: 'MyBlog',
      component: SlowClimb
    },
    {
      path: '/label',
      name: 'MyLabel',
      component: MyLabel
    }
  ]
})
