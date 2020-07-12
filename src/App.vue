<template>
	<div id="app">
		<div class="wrapper">
			<router-view> </router-view>
		</div>
	</div>
</template>

<script>
export default {
	name: "App",
	mounted() {
		this.manageLocalStorage();
	},
	methods: {
		manageLocalStorage() {
			const todos = JSON.parse(localStorage.getItem("tasks"));
			if (todos === null) {
				localStorage.setItem("tasks", JSON.stringify([]));
			}
		},
	},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

$dark-text: #263238;

body {
	background-color: #bbbbbb;
	font-family: "Roboto", sans-serif;
	font-size: 20px;
}
.wrapper {
	color: $dark-text;
	padding: 0 10% 2% 10%;
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
