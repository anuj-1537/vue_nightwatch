<template>
	<div id="app">
		<h2>Student Details</h2>

		<Form />
		<hr />
		<Table />
	</div>
</template>

<script>
import Form from "./components/Form";
import Table from "./components/table";
export default {
	name: "App",
	data() {
		return {};
	},
	methods: {},
	components: {
		Form,
		Table,
	},
	computed: {
		studentData() {
			return this.$store.getters.getStudentData;
		},
		selectedIndex() {
			return this.$store.getters.getSelectedIndex;
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	text-align: center;
	color: #2c3e50;
	margin-top: 30px;
}
</style>
