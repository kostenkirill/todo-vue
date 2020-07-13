<template>
	<div class="task-view" :style="{ backgroundColor: bgColor }">
		<modal-window
			text="Do you want to remove this task?"
			v-model="modalOpen"
			@confirm="removeTodo(id)"
		></modal-window>
		<div class="task-content">
			<h3>{{ listName }}</h3>
			<ol>
				<li v-for="item in list.slice(0, 3)" :key="item.id">{{ item.name }}</li>
			</ol>
			<div class="task-buttons">
				<app-button
					class="btn-edit"
					text="Edit"
					@click.native="editTask"
				></app-button>
				<app-button
					class="btn-remove"
					text="Remove"
					@click.native="openModal"
				></app-button>
			</div>
		</div>
	</div>
</template>

<script>
import AppButton from "./AppButton";
import ModalWindow from "./ModalWindow";
import { router } from "../router";
export default {
	name: "TaskCard",
	props: { task: { default: [] } },
	data() {
		return {
			id: `${this.task.id}`,
			listName: this.task.listName,
			list: this.task.list,
			bgColor: this.task.bgColor,
			modalOpen: false,
		};
	},
	components: { AppButton, ModalWindow },
	methods: {
		openModal() {
			this.modalOpen = !this.modalOpen;
		},
		editTask() {
			router.push({
				path: `/taskeditor/${this.id}`,
			});
		},
		removeTodo(todoId) {
			this.$store.dispatch("REMOVE_TODO", todoId);
			this.$emit("todoRemoved");
		},
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
}
.btn {
	font-size: 15px;
	color: #263238;
	&-edit {
		background-color: #ffd54f;
		&:hover {
			background-color: darken($color: #ffd54f, $amount: 8);
		}
	}
	&-remove {
		background-color: #ff9e4f;
		color: #263238;
		&:hover {
			background-color: darken($color: #ff9e4f, $amount: 8);
		}
	}
}
</style>
