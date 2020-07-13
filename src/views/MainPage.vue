<template>
	<div>
		<router-link to="/taskeditor/newtask">
			<app-button class="add-task" text="Add a new task"></app-button>
		</router-link>
		<div v-if="taskList" class="tasks-list">
			<div v-for="task in taskList" :key="task.id">
				<task-card :task="task" @todoRemoved="() => getTasks()"></task-card>
			</div>
		</div>
	</div>
</template>

<script>
import TaskCard from "../components/TaskCard";
import AppButton from "../components/AppButton";
import { getItemFromLocalStorage } from "../utils/functions";

export default {
	data() {
		return {
			taskList: null,
		};
	},
	components: { TaskCard, AppButton },
	methods: {
		getTasks() {
			this.taskList = getItemFromLocalStorage("tasks");
		},
	},
	mounted() {
		this.getTasks();
	},
};
</script>

<style lang="scss" scoped>
.tasks-list {
	width: 90%;
	flex-wrap: wrap;
	margin: 15% auto;
	display: flex;
	justify-content: space-between;
}

.add-task {
	width: 70%;
	height: 100px;
	background: #29b6f6;
	color: #263238;
	font-size: 30px;
	&:hover {
		background: darken($color: #29b6f6, $amount: 7);
	}
}
</style>
