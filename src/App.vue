<template>
	<div id="app">
		<button class="form-btn" @click="chooseForm(true, false)">
			School Form
		</button>
		<button class="form-btn" @click="chooseForm(false, true)">
			Student Form
		</button>
		<template v-if="showSchoolForm">
			<School />
			<hr />
			<Table />
		</template>
		<template v-if="showStudentForm">
			<Form />
			<hr />
			<Table />
		</template>
	</div>
</template>

<script>
import Form from "./components/Form";
import Table from "./components/table";
import School from "./components/school";
export default {
	name: "App",
	data() {
		return {
			// showSchoolForm: false,
			// showStudentForm: false,
		};
	},
	methods: {
		// chooseForm(school, student) {
		// 	if (school) {
		// 		this.showSchoolForm = true;
		// 		this.showStudentForm = false;
		// 	} else if (student) {
		// 		this.showStudentForm = true;
		// 		this.showSchoolForm = false;
		// 	} else {
		// 		this.showStudentForm = false;
		// 		this.showSchoolForm = false;
		// 	}
		// },
		chooseForm(school, student) {
			this.$store.commit("showForm", [school, student]);
		},
	},
	components: {
		Form,
		Table,
		School,
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
</style>
