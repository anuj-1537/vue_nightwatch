<template>
	<div>
		<div v-if="showStudentTable">
			<table>
				<tr>
					<th>SI No.</th>
					<th>Name</th>
					<th>Age</th>
					<th>Gender</th>
					<th>Qualification</th>
					<th>Contact No.</th>
					<th>School</th>
					<th>Operation</th>
				</tr>
				<tr v-for="(student, index) in studentInfo" :key="index">
					<td>{{ index + 1 }}</td>
					<td>{{ student.name }}</td>
					<td>{{ student.age }}</td>
					<td>{{ student.gender }}</td>
					<td>{{ student.qualification }}</td>
					<td>{{ student.contact }}</td>
					<td>{{ student.school }}</td>
					<td>
						<button @click="changeStudentData(index)">Edit</button>
					</td>
				</tr>
			</table>
		</div>
		<div v-if="showSchoolTable">
			<table>
				<tr>
					<th>SI No.</th>
					<th>School Name</th>
					<th>School Id</th>
					<th>Address</th>
					<th>Operation</th>
					<th>Info</th>
				</tr>
				<tr v-for="(school, index) in schoolList" :key="index">
					<td>{{ index + 1 }}</td>
					<td>{{ school.schoolName }}</td>
					<td>{{ school.schoolId }}</td>
					<td>{{ school.Addr }}</td>
					<td>
						<button @click="changeSchoolData(index)">Edit</button>
					</td>
					<td>
						<button @click="showSchoolInfo(school.schoolName)">
							Show Info
						</button>
					</td>
				</tr>
			</table>

			<div v-if="studentsEnrolled.length != 0">
				<hr />
				<h3>Students enrolled in {{ studentsEnrolled[0].school }}</h3>
				<table v-if="showSchoolTable">
					<tr>
						<th>SI No.</th>
						<th>Name</th>
						<th>Age</th>
						<th>Gender</th>
						<th>Qualification</th>
						<th>Contact No.</th>
						<th>School</th>
					</tr>
					<tr
						v-for="(student, index) in studentsEnrolled"
						:key="index"
					>
						<td>{{ index + 1 }}</td>
						<td>{{ student.name }}</td>
						<td>{{ student.age }}</td>
						<td>{{ student.gender }}</td>
						<td>{{ student.qualification }}</td>
						<td>{{ student.contact }}</td>
						<td>{{ student.school }}</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			studentsEnrolled: [],
		};
	},
	computed: {
		studentInfo() {
			console.log("in computed properties");
			return this.studentList;
		},
		studentList() {
			console.log(this.$store.getters.getStudentData);

			return this.$store.getters.getStudentData;
		},
		showSchoolTable() {
			console.log("in table.vue show school table");

			return this.$store.getters.getTableStatus[0];
		},
		showStudentTable() {
			console.log("in table.vue show student table");
			return this.$store.getters.getTableStatus[1];
		},
		schoolList() {
			return this.$store.getters.getSchoolData;
		},
	},
	methods: {
		changeStudentData(index) {
			console.log("edit button is clicked ", index);

			this.$store.commit("changeSelectedIndex", index);
		},
		showSchoolInfo(schoolName) {
			this.studentsEnrolled = this.$store.getters.showEnrolledStudent(
				schoolName,
			);
			// console.log(this.$store.getters.showEnrolledStudent(schoolName));
		},
		changeSchoolData(index) {
			console.log("in changeSchoolData ", index);
			this.$store.commit("changeSelectedSchoolIndex", index);
		},
	},
};
</script>

<style scoped>
table,
td,
th {
	border: 1px solid black;
}

table {
	width: 100%;
	margin-top: 30px;
	border-collapse: collapse;
}
</style>
