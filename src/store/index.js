import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: { todos: [], discardCache: {} },
	mutations: {
		saveTodo(state, payload) {
			const todos = JSON.parse(localStorage.getItem("tasks"));
			const { todo } = payload;
			if (todo.id === "") {
				todo.id = `${todo.listName.replace(" ", "_")}-${todos.length}`;
				todos.push(todo);
			} else {
				const todoIndex = todos.findIndex(
					(todoTask) => todoTask.id === todo.id
				);
				todos.splice(todoIndex, 1, todo);
			}
			state.todos = todos;
			localStorage.setItem("tasks", JSON.stringify(state.todos));
		},
		removeTodo(state, todoId) {
			const todos = state.todos;
			todos.map((todo) => {
				if (todo.id === todoId) {
					const todoIndex = todos.indexOf(todo);
					todos.splice(todoIndex, 1);
				}
			});
			state.todos = todos;
			localStorage.setItem("tasks", JSON.stringify(state.todos));
		},
		setTodos(state, todos) {
			state.todos = todos;
			localStorage.setItem("tasks", JSON.stringify(state.todos));
		},
		discardTask(state, payload) {
			state.discardCache = payload;
		},
	},
	actions: {
		saveTodo(context, payload) {
			context.commit("saveTodo", payload);
		},
		removeTodo(context, payload) {
			context.commit("removeTodo", payload);
		},
		discardTask(context, payload) {
			context.commit("discardTask", payload);
		},
		setTodos(context, payload) {
			context.commit("setTodos", payload);
		},
	},
	getters: {},
});
