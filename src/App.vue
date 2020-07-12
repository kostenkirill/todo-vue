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
</style>
