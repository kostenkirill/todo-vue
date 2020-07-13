<template>
	<div class="task-details">
		<modal-window
			text="Do you want to discard changes and exit?"
			v-model="modalOpen"
			@confirm="exit"
		></modal-window>
		<div>
			<h1>Editor</h1>
			<h3>{{ taskListName }}</h3>
			<div class="todo-list">
				<div class="tasks-list" v-for="task in taskList" :key="task.id">
					<div class="task-item">
						<div @click="checkTask(task.id)">
							<input type="checkbox" :name="task.name" v-model="task.checked" />
							<label :for="task.name">{{ task.name }}</label>
						</div>
						<input
							type="text"
							v-if="showInputField === task.id"
							@blur="showInputField = null"
							v-model="task.name"
							placeholder="Edit"
						/>
						<div>
							<app-button
								text="Edit"
								@click.native="showInputField = task.id"
							></app-button>
							<app-button
								:data-task-id="task.id"
								text="Remove"
								@click.native="removeTask"
							></app-button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="task-editor">
			<input type="text" v-model="taskListName" placeholder="List name" />
			<div class="add-task">
				<input type="text" v-model="taskName" placeholder="Task name" />
				<app-button
					class="btn-add"
					@click.native="addTask"
					text="Add"
				></app-button>
			</div>
			<div class="tasks-buttons">
				<app-button
					class="btn-save"
					@click.native="save"
					text="Save"
				></app-button>
				<app-button
					class="btn-discard"
					@click.native="discard"
					text="Discard"
				></app-button>
				<app-button
					class="btn-revert"
					@click.native="revert"
					text="Revert changes"
				></app-button>
				<app-button
					class="btn-exit"
					@click.native="openModal"
					text="Exit without saving"
				></app-button>
			</div>
		</div>
	</div>
</template>

<script>
import { router } from "../router";
import AppButton from "../components/AppButton";
import ModalWindow from "../components/ModalWindow";
import {
	generateRandomColor,
	getItemFromLocalStorage,
} from "../utils/functions";

export default {
	name: "TaskEditor",
	data() {
		return {
			taskListName: "List name",
			taskName: "",
			taskList: [],
			checked: false,
			showInputField: null,
			discardCache: {},
			todoId: "",
			modalOpen: false,
		};
	},
	components: {
		AppButton,
		ModalWindow,
	},
	mounted() {
		this.getTask();
	},
	methods: {
		openModal() {
			this.modalOpen = !this.modalOpen;
		},
		getTask() {
			const taskList = getItemFromLocalStorage("tasks");
			const currentPath = window.location.pathname;
			const todoId = currentPath.replace("/taskeditor/", "");
			taskList.map((task) => {
				if (task.id === todoId) {
					this.taskListName = task.listName;
					this.taskList = task.list;
					this.todoId = todoId;
				}
			});
		},
		save() {
			if (!this.taskListName.match(/^$|\s+/)) {
				const todo = {
					id: this.todoId,
					listName: this.taskListName,
					list: this.taskList,
					bgColor: generateRandomColor(),
				};
				this.$store.dispatch("SAVE_TODO", { todo });
				router.push({ path: "/" });
			}
		},
		discard() {
			const { taskListName, taskList } = this;
			this.$store.dispatch("DISCARD_TASK", { taskListName, taskList });
			this.getTask();
		},
		revert() {
			const { taskListName, taskList } = this.$store.state.discardCache;
			this.taskListName = taskListName;
			this.taskList = taskList;
		},
		exit() {
			router.push("/");
		},
		addTask() {
			if (!this.taskName.match(/^$|\s+/)) {
				this.taskList.push({
					id: `task-${this.taskName}-${this.taskList.length}`,
					name: this.taskName,
					checked: false,
				});
			}
		},
		removeTask() {
			const taskId = event.target.getAttribute("data-task-id");
			this.taskList.map((task) => {
				if (task.id === taskId) {
					const taskIndex = this.taskList.indexOf(task);
					this.taskList.splice(taskIndex, 1);
				}
			});
		},
		checkTask(checkedTaskId) {
			this.taskList.map((task) => {
				if (task.id === checkedTaskId) {
					task.checked = !task.checked;
				}
			});
		},
	},
};
</script>

<style lang="scss" scoped>
input {
	&[type="text"] {
		border: none;
		border-bottom: 2px solid #263238;
		background-color: rgba(0, 0, 0, 0);
		margin: 14px 0 30px 50px;
		width: 200px;
		font-size: 20px;
	}
	&[type="checkbox"] {
		margin-right: 30px;
	}
}
.add-task {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	& :first-child {
		margin-right: 20px;
	}
}
.task-details {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}
.task-editor {
	margin: 100px 0 0 0;
}
.tasks-buttons {
	width: 300px;
	margin-top: 10%;
	& * {
		width: 200px;
		height: 50px;
	}
}
.task-item {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 500px;
	& div {
		display: flex;
		width: 300px;
		& button {
			color: #263238;
			&:first-child {
				background: #ffd54f;
				&:hover {
					background: darken($color: #ffd54f, $amount: 8);
				}
			}
			&:last-child {
				background: #ff9e4f;
				&:hover {
					background: darken($color: #ff9e4f, $amount: 8);
				}
			}
		}
	}
}
.btn {
	font-size: 15px;
	&-save,
	&-add,
	&-discard,
	&-revert {
		background: #0277bd;
		&:hover {
			background: darken($color: #0277bd, $amount: 7);
		}
	}
	&-exit {
		background: #b71c1c;
		&:hover {
			background: darken($color: #b71c1c, $amount: 7);
		}
	}
}
</style>
