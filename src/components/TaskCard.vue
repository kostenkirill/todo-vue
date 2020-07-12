<template>
	<div class="task-view" :style="{ backgroundColor: bgColor }">
		<div class="task-content">
			<h3>{{ listName }}</h3>
			<ol>
				<li v-for="item in list" :key="item.id">{{ item.name }}</li>
			</ol>
			<div class="task-buttons">
				<app-button text="Edit" @click.native="editTask"></app-button>
				<!-- <app-button text="Remove" @click="deleteTask"></app-button> -->
			</div>
		</div>
	</div>
</template>

<script>
import AppButton from "./AppButton";
import { router } from "../router";
export default {
	name: "TaskCard",
	props: { task: { default: [] } },
	data() {
		return {
			id: this.task.id,
			listName: this.task.listName,
			list: this.task.list,
			bgColor: this.task.bgColor,
		};
	},
	components: { AppButton },
	methods: {
		editTask() {
			router.push({ path: `/taskeditor/${this.id}` });
		},
		// deleteTask(){
			
		// }
	},
	mounted() {
		if (this.list.length > 3) {
			this.list.length = 3;
		}
	},
};
</script>

<style lang="scss" scoped>
li {
	line-height: 25px;
}
.task-view {
	width: 265px;
	height: 250px;
	border-radius: 24px;
	box-shadow: 4px -3px 5px rgba(0, 0, 0, 0.137);
	margin: 25px 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.task-content {
	padding: 20px;
}
.task-buttons {
	display: flex;
	flex-direction: row;
	& :first-child {
		background-color: #ffd54f;
		font-size: 15px;
		color: #263238;
		&:hover {
			background-color: darken($color: #ffd54f, $amount: 8);
		}
	}
}
</style>
