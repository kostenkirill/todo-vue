<template>
	<div>
		<router-link to="/taskeditor/newtask">
			<app-button class="add-task" text="Add a new task"></app-button>
		</router-link>
		<div v-if="taskList" class="tasks-list">
			<div v-for="(task, i) in taskList" :key="i">
				<task-card :task="task"></task-card>
			</div>
		</div>
	</div>
</template>

<script>
import TaskCard from "../components/TaskCard";
import AppButton from "../components/AppButton";
export default {
	data() {
		return {
			taskList: null,
		};
	},
	components: { TaskCard, AppButton },
	methods: {
		getTasks() {
			this.taskList = JSON.parse(localStorage.getItem("tasks"));
		},
		logD(data) {
			console.log(data);
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
a {
	text-decoration: none;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 40px;
	&:visited {
		color: #263238;
	}
}
</style>
