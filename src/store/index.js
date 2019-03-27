import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: 'jin hua',
		todos: [
      { id: 1, text: 'list 1', done: true },
      { id: 2, text: 'list 2', done: false }
    ]
	},
	getters: {
		doneToDo(state) {
			return state.todos.filter((item)=> item.done)
		}
	},
	mutations: {
		login(state, user) {
			state.user = user
		}
	}
})
