<template>
	<div id="app">
		<router-link to="/">
			<button class="home-btn" @click="chooseTable(false, false)">
				Home
			</button>
		</router-link>
		<router-link to="/school">
			<button class="form-btn" @click="chooseTable(true, false)">
				School Form
			</button>
		</router-link>
		<router-link to="/student">
			<button class="form-btn" @click="chooseTable(false, true)">
				Student Form
			</button>
		</router-link>
		<router-link to="/cardData">
			<button class="form-btn" @click="chooseTable(false, false)">
				Credit Card
			</button>
		</router-link>
		<router-view></router-view>
		<Table />
	</div>
</template>

<script>
import Table from "./components/table";

export default {
	name: "Home",
	data() {
		return {};
	},
	methods: {
		chooseTable(school, student) {
			console.log("in chooseTable ", school, student);

			this.$store.commit("showTable", [school, student]);
		},
	},
	components: {
		// Form,
		Table,
		// School,
	},
	computed: {
		studentData() {
			return this.$store.getters.getStudentData;
		},
		selectedIndex() {
			return this.$store.getters.getSelectedIndex;
		},
		showSchoolForm() {
			return this.$store.getters.getFormStatus[0];
		},
		showStudentForm() {
			return this.$store.getters.getFormStatus[1];
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
.form-btn {
	background-color: SlateBlue; /* Green */
	border: none;
	color: white;
	padding: 4px 10px;
	margin-top: 10px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	border-radius: 5px;
	margin-left: 30px;
}
.home-btn {
	background-color: gray; /* Green */
	border: none;
	color: white;
	padding: 4px 10px;
	margin-top: 10px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	border-radius: 5px;
	position: relative;
	right: 400px;
}
</style>
