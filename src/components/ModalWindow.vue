<template>
	<div class="modal" v-show="value">
		<div class="container">
			<div class="modal-title">Are you sure?</div>
			<p>{{ this.text }}</p>
			<div class="modal-buttons">
				<app-button
					class="btn-confirm"
					text="Confirm"
					@click.native="confirm"
				></app-button>
				<app-button
					class="btn-cancel"
					text="Cancel"
					@click.native="close"
				></app-button>
			</div>
		</div>
	</div>
</template>

<script>
import AppButton from "../components/AppButton";
export default {
	name: "Modal",
	props: {
		value: {
			required: true,
		},
		text: {
			default: "Please confirm your action...",
		},
	},
	components: {
		AppButton,
	},
	methods: {
		close() {
			this.$emit("input", !this.value);
		},
		confirm() {
			this.close();
			this.$emit("confirm");
		},
	},
};
</script>

<style lang="scss" scoped>
.modal {
	position: fixed;
	top: 30%;
	left: 40%;
	z-index: 4;
	border-radius: 24px;
	box-shadow: 40px 200px 200px 2000px rgba(0, 0, 0, 0.493);
	background-color: rgb(235, 227, 227);
	padding: 25px 35px 17px 35px;
}
.modal-buttons {
	display: flex;

	& .btn {
		font-size: 17px;
		color: #dbe3e7;
		width:100px;
		&-confirm {
			background-color: #0277bd;
			&:hover {
				background-color: darken($color: #0277bd, $amount: 8);
			}
		}
		&-cancel {
			background-color: #ff9e4f;
			color: #263238;
			&:hover {
				background-color: darken($color: #ff9e4f, $amount: 8);
			}
		}
	}
}
</style>
