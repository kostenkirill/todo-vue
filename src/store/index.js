import Vue from "vue";
import Vuex from "vuex";
import {
	getItemFromLocalStorage,
	setItemToLocalStorage,
} from "../utils/functions";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: { todos: [], discardCache: {} },
	mutations: {
		saveTodo(state, payload) {
			const todos = getItemFromLocalStorage("tasks");
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
			setItemToLocalStorage("tasks", state.todos);
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
			setItemToLocalStorage("tasks", state.todos);
		},
		discardTask(state, payload) {
			state.discardCache = payload;
		},
	},
	actions: {
		SAVE_TODO(context, payload) {
			context.commit("saveTodo", payload);
		},
		REMOVE_TODO(context, payload) {
			context.commit("removeTodo", payload);
		},
		DISCARD_TASK(context, payload) {
			context.commit("discardTask", payload);
		},
	},
});
