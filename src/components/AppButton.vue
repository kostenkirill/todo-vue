<template>
	<button class="btn" type="button">{{ text }}</button>
</template>

<script>
export default {
	name: "AppButton",
	props: {
		text: {
			default: "",
		},
	},
};
</script>

<style scoped>
.btn {
	font-family: "Roboto", sans-serif;
	font-size: 20px;
	position: relative;
	width: 70px;
	display: block;
	margin: 30px auto;
	padding: 5px;
	overflow: hidden;
	border-width: 0;
	outline: none;
	border-radius: 24px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
	background-color: rgb(18, 133, 47);
	color: #ecf0f1;
	transition: background-color 0.3s;
	cursor: pointer;
}
</style>
